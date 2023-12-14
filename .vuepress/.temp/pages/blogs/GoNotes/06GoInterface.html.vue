<template><div><p>::: tip</p>
<p>:::</p>
<p>在 Go 语言中，接口就是方法签名（Method Signature）的集合，<strong>接口指定了一个类型应该具有的方法，并由该类型决定如何实现这些方法</strong>。</p>
<h1 id="接口定义" tabindex="-1"><a class="header-anchor" href="#接口定义" aria-hidden="true">#</a> 接口定义</h1>
<p>使用<code v-pre>type</code>关键字来定义接口，格式：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>type ObejctName interface {
    method()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义电话接口，里面包含<code v-pre>call()</code>方法</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>type phone interface {
    call()
    send(message string)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现接口" tabindex="-1"><a class="header-anchor" href="#实现接口" aria-hidden="true">#</a> 实现接口</h2>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>type XiaoMi struct {
	name string
}

// 函数
func Call(phone Phone) {
	phone.send(&quot;消息&quot;)
}

// XiaoMi 实现 Phone 的方法
func (phone XiaoMi) call() {
	fmt.Printf(&quot;我是一台 %s 手机，我能打电话 \n&quot;, phone.name)
}

func (phone XiaoMi) send(message string) {
	fmt.Printf(&quot;我能发送 %s\n&quot;, message)
}

func main() {
	xiaoMi := XiaoMi{name: &quot;小米&quot;}
	xiaoMi.call()
	xiaoMi.send(&quot;消息&quot;)
    
    // 调用函数，传xiaoMi,因为 XiaoMi实现了Phone的方法，所以XiaoMi也是一个电话
	Call(xiaoMi)
}

// 我是一台 小米 手机，我能打电话 
// 我能发送 消息
// 我能发送 消息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口实现多态" tabindex="-1"><a class="header-anchor" href="#接口实现多态" aria-hidden="true">#</a> 接口实现多态</h2>
<p>鸭子类型（Duck typing）的定义是，只要你长得像鸭子，叫起来也像鸭子，那我认为你就是一只鸭子</p>
<p>举个例子，我先定义商品（Goods）接口，意思是一个类型或者结构体，其中具有一些方法，<code v-pre>getPrice()</code> 和 <code v-pre>orderInfo()</code> 两个方法，那么我们可以理解为，只要实现了这两个方法的类型/结构体就可以称之为一个商品</p>
<ul>
<li>定义一个<code v-pre>Goods</code>接口，里面有<code v-pre>getPrice</code></li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>type Good interface {
    getPrice() int
    orderInfo() string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>定义两个结构体，分别是<code v-pre>Computer</code>和<code v-pre>FreeGift</code></li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>type Computer struct {
    name string
    quantity int
    price int
}

type FreeGift struct {
    name string
    quantity int
    price int
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>实现<code v-pre>Goods</code>的两个方法，<code v-pre>Computer</code>和<code v-pre>FreeGift</code>都算是商品<code v-pre>Goods</code>了</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>// Computer
func (computer Computer) getPrice() int {
	return computer.quantity * computer.price
}
func (computer Computer) orderInfo() string {
	return &quot;您要购买&quot; + strconv.Itoa(computer.quantity) + &quot;个&quot; +
		computer.name + &quot;计：&quot; + strconv.Itoa(computer.getPrice()) + &quot;元&quot;
}

// FreeGift
func (gift FreeGift) getPrice() int {
	return 0
}
func (gift FreeGift) orderInfo() string {
	return &quot;您要购买&quot; + strconv.Itoa(gift.quantity) + &quot;个&quot; +
		gift.name + &quot;计：&quot; + strconv.Itoa(gift.getPrice()) + &quot;元&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>对商品<code v-pre>Computer</code>和<code v-pre>FreeGift</code>进行实例化</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>computer := Computer{
	name:     &quot;computer&quot;,
	quantity: 1,
	price:    8000,
}
earphones := FreeGift{
	name:     &quot;耳机&quot;,
	quantity: 1,
	price:    200,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建一个购物车，（也就是类型为 Good的切片），来存放这些商品</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>goods := []Goods{computer, earphones}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>并调用方法计算最终的价格</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func calculateAllPrice(goods []Goods) int {
	var allPrice int
	for _, good := range goods {
		fmt.Println(good.orderInfo())
		allPrice += good.getPrice()
	}
	return allPrice
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details 完整代码如下：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>package main

import (
	&quot;fmt&quot;
	&quot;strconv&quot;
)

// 定义一个接口
type Goods interface {
	getPrice() int
	orderInfo() string
}

type Computer struct {
	name     string
	quantity int
	price    int
}

// 实现Goods接口
func (computer Computer) getPrice() int {
	return computer.quantity * computer.price
}
func (computer Computer) orderInfo() string {
	return &quot;您要购买&quot; + strconv.Itoa(computer.quantity) + &quot;个&quot; +
		computer.name + &quot;计：&quot; + strconv.Itoa(computer.getPrice()) + &quot;元&quot;
}

type FreeGift struct {
	name     string
	quantity int
	price    int
}

func (gift FreeGift) getPrice() int {
	return 0
}
func (gift FreeGift) orderInfo() string {
	return &quot;您要购买&quot; + strconv.Itoa(gift.quantity) + &quot;个&quot; +
		gift.name + &quot;计：&quot; + strconv.Itoa(gift.getPrice()) + &quot;元&quot;
}

// 计算价格方法
func calculateAllPrice(goods []Goods) int {
	var allPrice int
	for _, good := range goods {
		fmt.Println(good.orderInfo())
		allPrice += good.getPrice()
	}
	return allPrice
}

func main() {
	// 实例化
	computer := Computer{
		name:     &quot;computer&quot;,
		quantity: 1,
		price:    8000,
	}
	earphones := FreeGift{
		name:     &quot;耳机&quot;,
		quantity: 1,
		price:    200,
	}

	goods := []Goods{computer, earphones}
	allPrice := calculateAllPrice(goods)
	fmt.Printf(&quot;该订单总共需要支付 %d 元&quot;, allPrice)
}

// 您要购买1个computer计：8000元
// 您要购买1个耳机计：0元
// 该订单总共需要支付 8000 元
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h2>
<p>Type Assertion（中文名叫：类型断言），作用如下：</p>
<ul>
<li>判断类型是否为<code v-pre>nil</code></li>
<li>判断类型是否为某个具体类型</li>
</ul>
<p>使用方式有两种：</p>
<ul>
<li>
<p>第一种：<code v-pre>t := i.(T)</code></p>
<p>可以断言一个接口对象<code v-pre>i</code>里面是不是<code v-pre>nil</code>，<code v-pre>i</code>代表接口对象，<code v-pre>T</code>代表接口对象存储的值类型，如果断言成功，返回其类型<code v-pre>t</code>，断言失败，触发<code v-pre>panic</code></p>
</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func triggerPanicOne() {
	var i interface{} = 10
	t1 := i.(int)
	fmt.Println(t1)
	t2 := i.(string)
	fmt.Println(t2)
}

// 10
// panic: interface conversion: interface {} is int, not string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>第二种：<code v-pre>t, ok:= i.(T)</code>，断言成功，返回其类型<code v-pre>t</code>，<code v-pre>ok</code>值为<code v-pre>true</code>，断言失败，返回其类型的零值<code v-pre>t</code>，<code v-pre>ok</code>值为<code v-pre>false</code></li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func main() {
    var i interface{} = 10
    t1, ok := i.(int)
    fmt.Printf(&quot;%d-%t\n&quot;, t1, ok)
    t1, ok := i.(string)
    fmt.Printf(&quot;%d-%t\n&quot;, t1, ok) 
}

// int零值是0，string的零值是&quot;&quot;，interface{}的零值是&lt;nil&gt;
// 10-true
// -false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>结合<code v-pre>switch</code>来判断，<code v-pre>switch i.(type) </code>，注意，匹配到了是</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func useSwitchToTypeAssertion(i interface{}) {
	switch x := i.(type) {
	case int:
		fmt.Println(x, &quot;is int&quot;)
	case string:
		fmt.Println(x, &quot;is string&quot;)
	case nil:
		fmt.Println(x, &quot;is nil&quot;)
	default:
		fmt.Println(x, &quot;not type matched&quot;)
	}
}

func main() {
	useSwitchToTypeAssertion(&quot;10&quot;)
	useSwitchToTypeAssertion(&quot;abc&quot;)
	useSwitchToTypeAssertion(nil)
	useSwitchToTypeAssertion(10.01)
}

// 10 is string
// abc is string
// &lt;nil&gt; is nil
// 10.01 not type matched
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空接口" tabindex="-1"><a class="header-anchor" href="#空接口" aria-hidden="true">#</a> 空接口</h2>
<p>空接口，即定义的接口里面不包含任何方法，可以说所有的类型至少都实现了空接口</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>type emptyInterface interface {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>空接口的值和类型都是<code v-pre>&lt;nil&gt;</code></p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func main() {
    var i interface{}
    fmt.Printf(&quot;type: %T, value: %v&quot;, i, i)
}

// type: &lt;nil&gt;, value: &lt;nil&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>空接口的使用</strong></p>
<ul>
<li>用于作为实例承载任意类型的值</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func creatEmptyInterface() {
	var i interface{}
	i = 5
	fmt.Println(i)
	i = &quot;string&quot;
	fmt.Println(i)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>用于函数接收任意类型的值</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func main {
	a := 5
	b := &quot;string&quot;
	// 接收单个值
	receiveEmptyInterface(a)
	receiveEmptyInterface(b)

	// 接收多个值
	receiveMoreEmptyInterface(a, b)
}

func receiveEmptyInterface(emptyInterface interface{}) {
	fmt.Println(emptyInterface)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>可以用于定义接收任意类型的<code v-pre>array</code>、<code v-pre>slice</code>、<code v-pre>map</code>、<code v-pre>strcut</code></li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func receiveMoreTypeEmptyInterface() {
	any := make([]interface{}, 5)
	any[0] = 11
	any[1] = &quot;hello world&quot;
	any[2] = []int{11, 22, 33, 44}
	fmt.Println(&quot;创建一个切片，接收多种类型的值&quot;)
	for _, value := range any {
		fmt.Println(value)
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:</strong></p>
<ul>
<li>空接口可以承载任意值，但不代表任意类型就可以承接空接口类型的值</li>
<li>当空接口承载数组和切片后，该对象无法再进行切片</li>
<li>当你使用空接口来接收任意类型的参数时，它的静态类型是 interface{}，但动态类型（是 int，string 还是其他类型）我们并不知道，因此需要使用类型断言</li>
</ul>
<h2 id="接口的三个潜规则" tabindex="-1"><a class="header-anchor" href="#接口的三个潜规则" aria-hidden="true">#</a> 接口的三个潜规则</h2>
<h3 id="方法调用的限制" tabindex="-1"><a class="header-anchor" href="#方法调用的限制" aria-hidden="true">#</a> 方法调用的限制</h3>
<p>定义一个<code v-pre>Animal</code>接口，其中包含<code v-pre>eat()</code>方法，定义了<code v-pre>Cat</code>接口体，包含了的两个方法<code v-pre>eat()</code>、<code v-pre>run()</code></p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>type Animal interface {
	eat()
}

type Cat struct {
	name string
}

func (cat Cat) eat() {
	fmt.Printf(&quot;%s is animal, it cant eatting.\n&quot;, cat.name)
}

func (cat Cat) run() {
	fmt.Printf(&quot;%s is animal, it can running.\n&quot;, cat.name)
}

func printType(i interface{}) {

	switch i.(type) {
	case int:
		fmt.Println(&quot;参数的类型是 int&quot;)
	case string:
		fmt.Println(&quot;参数的类型是 string&quot;)
	}
}

func main() {
	// 显示申明了 animal对象为Animal接口，
	var animal Animal
	animal = Cat{name: &quot;cat&quot;}
	animal.eat()
	// 会报错，所调用方法受到接口的方法限制
	// animal.run()
    
    	// 更改
	animal1 := Cat{name: &quot;cat&quot;}
	animal1.eat()
	animal1.run()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用函数时的隐式转换" tabindex="-1"><a class="header-anchor" href="#调用函数时的隐式转换" aria-hidden="true">#</a> 调用函数时的隐式转换</h3>
<p>Go 语言中的函数调用都是值传递的，变量会在方法调用前进行类型转换</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func printType(i interface{})  {

    switch i.(type) {
    case int:
        fmt.Println(&quot;参数的类型是 int&quot;)
    case string:
        fmt.Println(&quot;参数的类型是 string&quot;)
    }
}

func main() {
    a := 10
    // 隐式转换了 a的值 为 空接口类型
    printType(a)
    // 直接判断就会报错
    // switch a.(type) {}
    // 调整为 显示转换
    switch interface{}(a).(type){}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型断言中的隐式转换" tabindex="-1"><a class="header-anchor" href="#类型断言中的隐式转换" aria-hidden="true">#</a> 类型断言中的隐式转换</h3>
<p>静态类型为<code v-pre>接口类型</code>的对象才可以进行类型断言</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func main(){
    var a interfaceP{} = 5
    // 对静态类型a断言完成后，go 隐式转换返回了一个静态类型
    swtich b := a.(type){
    case int:
        // 这里会报错，因为b此时是静态类型，不是接口类型了，不能再进行断言
        b.(int)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="练习源码" tabindex="-1"><a class="header-anchor" href="#练习源码" aria-hidden="true">#</a> 练习源码</h1>
<p><a href="https://gitee.com/myMagicRain/go-study/tree/master/src/Interface" target="_blank" rel="noopener noreferrer">Interface</a></p>
</div></template>


