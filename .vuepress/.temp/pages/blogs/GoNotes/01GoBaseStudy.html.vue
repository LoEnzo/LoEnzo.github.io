<template><div><p>::: tip</p>
<p>:::</p>
<h1 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h1>
<p>变量分为<code v-pre>普通变量</code>和<code v-pre>指针变量</code></p>
<h2 id="变量创建" tabindex="-1"><a class="header-anchor" href="#变量创建" aria-hidden="true">#</a> 变量创建</h2>
<ul>
<li>一行声明一个变量</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>var &lt;name&gt; &lt;type&gt;

// eg:
var name string = &quot;张三&quot; 
var name = &quot;张三&quot;
var rate float32 = 0.89

// 注： 
// 单双引号区分，双引号说明为string，可以省略类型定义
// 值为小数点为指定详细类型的情况下，编译器会指定为 float64，占用内存更大，可以指自己手动指定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>多个变量一起声明</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>// eg:
var (
    name string
    age int
    gender string
)

// 注：可以分开定义，也可以批量定义
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>声明和初始化一个变量</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>&lt;name&gt; := &lt;value&gt;

// eg:
name := &quot;张三&quot;

// 注：
// 这种定义方式等同于第一种定于方式，但是有限制，只能用于 函数内部
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>new 函数声明一个指针变量</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>package main

import &quot;fmt&quot;

func main()  {
    var age int = 28
    var ptr = &amp;age  // &amp;后面接变量名，表示取出该变量的内存地址
    fmt.Println(&quot;age: &quot;, age)
    fmt.Println(&quot;ptr: &quot;, ptr)
}

// 输出结果
// age:  28
// ptr:  0xc000010098
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而这里要说的 new 函数，是 Go 里的一个内建函数。</p>
<p>使用表达式 <code v-pre>new(Type)</code> 将创建一个Type类型的<code v-pre>匿名变量</code>，初始化为Type类型的零值，然后<code v-pre>返回变量地址</code>，返回的<code v-pre>指针类型</code>为<code v-pre>*Type</code>。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>package main

import &quot;fmt&quot;

func main()  {
    ptr := new(int)
    fmt.Println(&quot;ptr address: &quot;, ptr)
    fmt.Println(&quot;ptr value: &quot;, *ptr)  // * 后面接指针变量，表示从内存地址中取出值
}

// 输出
// ptr address:  0xc000010098
// ptr value:  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用new创建变量和普通变量声明语句方式创建变量没有什么区别，除了不需要声明一个临时变量的名字外，我们还可以在表达式中使用new(Type)。换言之，new函数类似是一种语法糖，而不是一个新的基础概念。</p>
<p>如下两种写法，可以说是等价的</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>// 使用 new
func newInt() *int {
    return new(int)
}

// 使用传统的方式
func newInt() *int {
    var dummy int
    return &amp;dummy
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上不管哪种方法，变量/常量都只能声明一次，声明多次，编译就会报错。</p>
<p>但也有例外，这就要说到一个特殊变量：<strong>匿名变量</strong>，也称作占位符，或者空白标识符，用下划线表示。</p>
<p>匿名变量，优点有三：</p>
<ul>
<li>不分配内存，不占用内存空间</li>
<li>不需要你为命名无用的变量名而纠结</li>
<li>多次声明不会有任何问题</li>
</ul>
<p>通常我们用匿名接收必须接收值，但是又不会用到的值。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func GetData() (int, int) {
    return 100, 200
}
func main(){
    a, _ := GetData()
    _, b := GetData()
    fmt.Println(a, b)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


