<template><div><p>::: tip</p>
<p>:::</p>
<h1 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h1>
<p><code v-pre>if - else</code>语句，与其他语言相似，需要注意的是，go编译器需要<code v-pre>else if</code>、<code v-pre>else</code>两侧的<code v-pre>}``{</code>需要保持在同一行</p>
<p>if 后面跟的条件表达式，需要返回布尔类型，也是<code v-pre>true</code>或<code v-pre>false</code>，不能是0、1或者nil，同样支持 <code v-pre>&amp;&amp;</code>，<code v-pre>||</code></p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>import &quot;fmt&quot;

func main() {
    age := 20
    gender := &quot;male&quot;
    if age &gt; 18 {
        fmt.Println(&quot;已经成年了&quot;)
    } else if age &gt;12 {
        fmt.Println(&quot;已经是青少年了&quot;)
    } else {
        fmt.Println(&quot;还不是青少年&quot;)
    }

    // 多条件
	if age &gt; 18 &amp;&amp; gender == &quot;male&quot; {
		fmt.Println(&quot;是成年男性&quot;)
	}
    
    // 组合使用
    if age := 20; age &gt; 18 {
        fmt.Println(&quot;已经成年了&quot;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="选择语句" tabindex="-1"><a class="header-anchor" href="#选择语句" aria-hidden="true">#</a> 选择语句</h1>
<p>格式如下，注意 case 表达式后的冒号</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>switch 表达式 {
    case 表达式1:
        代码块
    case 表达式2:
    default:
        代码块
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ul>
<li>switch 后面可以不接表达式，直接判定里面的case，此时逻辑类似于<code v-pre>else if</code></li>
<li>switch 后面可以接函数表达式，只要函数表达式返回值于case后面的值类型保持一致</li>
<li>case 后边的表达式可以的简单表达式，多条件表达式（<code v-pre>或</code>用<code v-pre>，</code>隔开）</li>
<li>fallthrough 穿透能力，可以返回判定下一个表达式的结果，但只能一层</li>
</ul>
<p>常规单、多条件，fallthrough实例</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func switchNoCondition() {
	score := 30
	switch {
	case score &gt;= 95 &amp;&amp; score &lt;= 100:
		fmt.Println(&quot;优秀&quot;)
	case score &gt;= 80:
		fmt.Println(&quot;良好&quot;)
	case score &gt;= 60:
		fmt.Println(&quot;合格&quot;)
	case score &gt;= 0:
		fmt.Println(&quot;不合格&quot;)
		fallthrough
	case score &lt;= 30, score &gt;= 0:
		fmt.Println(&quot;差,fallthrough 穿透了第一层&quot;)
	case score &gt; 100:
		fmt.Println(&quot;fallthrough 穿透不了第二层&quot;)
	default:
		fmt.Println(&quot;输入有误...&quot;)
	}
}

// 不合格
// 差,fallthrough 穿透了第一层
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>switch 后面接函数表达式</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func switchConditionFunc() {
	chinese := 80
	english := 50
	math := 100

	switch getResult(chinese, english, math) {
	// case 后也必须 是布尔类型
	case true:
		fmt.Println(&quot;该同学所有成绩都合格&quot;)
	case false:
		fmt.Println(&quot;该同学有挂科记录&quot;)
	}
}

func getResult(args ...int) bool {
	for _, i := range args {
		if i &lt; 60 {
			return false
		}
	}
	return true
}

// 该同学有挂科记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h1>
<p>for 循环语句后面可以跟三种表达形式，单表达式、多表达式（类似java fori循环），range表达式（遍历可迭代的对象），还有一种没有条件的，类似于死循环</p>
<p>格式：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>for [condition |  ( init; condition; increment ) | Range]
{
   statement(s);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>单条件</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func forSingleFunc() {
	i := 0
	for i &lt; 3 {
		fmt.Println(i)
		i++
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>多条件</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func forMoreFunc() {
	for i := 0; i &lt; 3; i++ {
		fmt.Println(i)
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>for-range</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func forRangeFunc() {
	myArr := [...]string{&quot;arr1&quot;, &quot;arr2&quot;, &quot;arr3&quot;}
	for _, item := range myArr {
		fmt.Printf(&quot;item is %s\n&quot;, item)
	}
}

// item is arr1
// item is arr2
// item is arr3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>无条件</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func forNoFunc() {
	for {
    // 等价于 for ;;{
		fmt.Println(&quot;无限打印&quot;)
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="无条件跳转语句" tabindex="-1"><a class="header-anchor" href="#无条件跳转语句" aria-hidden="true">#</a> 无条件跳转语句</h1>
<p>格式如下，goto打破原有的代码执行顺序，通常与条件语句使用实现条件转移，构成循环，跳出循环等功能，</p>
<p>注意：goto 标签 和 标签：表达式之前不能变量声明，否则会报语法错误</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>goto 标签;
...
...
标签: 表达式;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印1-10之间的偶数</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func getEvenNumberFunc() {
	i := 1
flag:
	for i &lt;= 10 {
		if i%2 == 1 {
			i++
			goto flag
		}
		fmt.Println(i)
		i++
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="延迟语句" tabindex="-1"><a class="header-anchor" href="#延迟语句" aria-hidden="true">#</a> 延迟语句</h1>
<p>格式如下：<code v-pre>defer</code>后面跟函数的调用即可，</p>
<p><code v-pre>defer</code>的使用场景，对于多次资源调用的方法，最后需要关闭资源的场景，在return后会自动执行defer，避免多次手动关闭资源</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>defer xxxfunc()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>defer</code>只是延时函数的调用，不受后面的逻辑影响，多个<code v-pre>defer</code>逆序输出</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func deferOrderOneFunc() {
	name := &quot;go&quot;
	age := 18
	defer fmt.Println(name) // 输出: go
	defer fmt.Println(age)  // 输出: 18

	name = &quot;python&quot;
	fmt.Println(name) // 输出: python
}

// python
// 18
// go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>defer</code>在return之后</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>var name = &quot;go&quot;

func main() {
	// defer 顺序在 return之后
	myName := deferOrderTwoFunc() 
	fmt.Printf(&quot;main 函数里的name: %s\n&quot;, name)   // 先return name被defer修改了全局变量，name是go
	fmt.Println(&quot;main 函数里的myName: &quot;, myName)  // return 后，name被defer修改了全局变量，此时赋值给myName的是python
}

func deferOrderTwoFunc() string {
	defer func() {
		name = &quot;python&quot;
	}()

	fmt.Printf(&quot;deferOrderTwoFunc 函数里的name：%s\n&quot;, name) // 此时，name全局变量为go
	return name	
}

// deferOrderTwoFunc 函数里的name：go
// main 函数里的name: python
// main 函数里的myName:  go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>defer</code>与匿名函数</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func anonymousFunc() {
	name := &quot;go&quot;
	defer func() {
		fmt.Println(name) // 输出: python
	}()
	defer func(name string) {
		fmt.Println(name) // 输出: go
	}(name)
	name = &quot;python&quot;
	fmt.Println(name) // 输出: python
}

// python
// go
// python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>defer</code>还可以修改返回值</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func triple(x int) (result int) {   // x传值4
	defer func() {
		result += x    // defer 修改返回值 8+4
	}()
	return double(x)   // 8
}

func double(x int) int {
	return x + x      // 4 + 4 
}

// 12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="练习源码" tabindex="-1"><a class="header-anchor" href="#练习源码" aria-hidden="true">#</a> 练习源码</h1>
<p><a href="https://gitee.com/myMagicRain/go-study/tree/master/src/ProcessControl" target="_blank" rel="noopener noreferrer">ProcessControl</a></p>
</div></template>


