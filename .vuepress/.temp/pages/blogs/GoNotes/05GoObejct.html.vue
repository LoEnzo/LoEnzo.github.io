<template><div><p>::: tip</p>
<p>:::</p>
<h1 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h1>
<h2 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体" aria-hidden="true">#</a> 结构体</h2>
<p>声明结构体，格式：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>type 结构体名 struct {
    属性名   属性类型
    属性名   属性类型
    ...
}

// 示例 
type Person struct {
    name string
    age int
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<p>构建一个方法，格式：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func (实例名 结构体名) 方法名 {
}

// 示例 
func (person Person) FmtPerson {
    fmt.Printf(&quot;名字：%s\n&quot;, person.name)
    fmt.Printf(&quot;年龄：%d\n&quot;, person.age)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整示例</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>// 定义一个名为 Person 的结构体
type Person struct {
	name   string
	age    int
	gender string
}

// 定义一个与 Person 的绑定的方法
func (person Person) FmtPerson() {
	fmt.Printf(&quot;名字：%s\n&quot;, person.name)
	fmt.Printf(&quot;年龄：%d\n&quot;, person.age)
	fmt.Printf(&quot;性别：%s\n&quot;, person.gender)
}

func main() {
	// 实例化
	myself := Person{name: &quot;小明&quot;, age: 24, gender: &quot;male&quot;}
	// 调用函数
	myself.FmtPerson()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法参数类型" tabindex="-1"><a class="header-anchor" href="#方法参数类型" aria-hidden="true">#</a> 方法参数类型</h2>
<p>方法的参数类型可以是<code v-pre>实例</code>，也可以是<code v-pre>指针</code>，两者的区别在于参数为指针时，可以修改实例对象的属性值，</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>// 参数是指针，去除*，修改person的属性值，打印结果为24
func (person *Person) increaseAge() {
   person.age += 1
}

fmt.Printf(&quot;当前年龄：%d\n&quot;, myself.age)

// 当前年龄：25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>什么时候采用方法参数类型：</p>
<ul>
<li>需要在方法体内改变结构体内容</li>
<li>出于性能原因，当结构体过大的时候，（未验证，参考别人说的）</li>
<li>考虑代码一致性</li>
</ul>
<h2 id="结构体继承" tabindex="-1"><a class="header-anchor" href="#结构体继承" aria-hidden="true">#</a> 结构体继承</h2>
<p>go里面没有类的概念，有的叫组合，把一个结构体的内容嵌入到另外一个结构体中就叫做组合，那个结构体可以直接使用内部结构体的属性</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>type company struct {
    companyName string
    companyAddr string
}

type staff struct {
    name string
    age int
    gender string
    position string
    company		// 匿名字段 等同于把company的属性都加入进来了
}

func main() {
	myCompany := company{&quot;腾讯&quot;, &quot;深圳&quot;}
	myStaff := staff{&quot;张三&quot;, 18, &quot;男&quot;, &quot;重庆&quot;, myCompany}
	fmt.Printf(&quot;%s 在 %s 工作\n&quot;, myStaff.name, myCompany.companyName)
	fmt.Printf(&quot;%s 在 %s 工作\n&quot;, myStaff.name, myStaff.companyName)
	fmt.Printf(&quot;%s 在 %s 工作\n&quot;, myStaff.name, myStaff.company.companyName)
}

// 张三 在 腾讯 工作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终<code v-pre>myCompany.companyName</code>、<code v-pre>myStaff.companyName</code>、<code v-pre>myStaff.company.companyName</code>的结果都是一样的</p>
<h2 id="内部方法和外部方法" tabindex="-1"><a class="header-anchor" href="#内部方法和外部方法" aria-hidden="true">#</a> 内部方法和外部方法</h2>
<p>go语言中，要区分函数<code v-pre>首字母大小写</code>，它决定方法的访问权限</p>
<ul>
<li>首字母大写，这个方法对所有包都是<code v-pre>public</code>，都能调用</li>
<li>搜字母小写，这个方法是<code v-pre>private</code>，其他包无法访问</li>
</ul>
<h2 id="方法和函数的区别" tabindex="-1"><a class="header-anchor" href="#方法和函数的区别" aria-hidden="true">#</a> 方法和函数的区别</h2>
<p>方法可以理解为特殊的函数，当<code v-pre>函数和对象/结构体绑定</code>的时候，就可以称这个函数是个方法</p>
<ul>
<li>函数</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func 函数名(形式参数列表)(返回值列表){
    函数体
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>方法</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func 方法名(实例名 结构体名)(返回值列表)(){
    方法体
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="练习源码" tabindex="-1"><a class="header-anchor" href="#练习源码" aria-hidden="true">#</a> 练习源码</h1>
<p><a href="https://gitee.com/myMagicRain/go-study/tree/master/src/Object" target="_blank" rel="noopener noreferrer">Object</a></p>
</div></template>


