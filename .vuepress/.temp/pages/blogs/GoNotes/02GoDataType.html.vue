<template><div><p>::: tip</p>
<p>:::</p>
<h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h1>
<p>go语言数据类型按语言类可分为<strong>布尔型</strong>、<strong>数字类型</strong>、<strong>字符串类型</strong>、<strong>派生类型</strong>；其中<strong>派生类型</strong>包含指针、数组、函数、map、接口、切片等；布尔型和字符串类型和常规的差不多，不做介绍</p>
<h2 id="数字类型" tabindex="-1"><a class="header-anchor" href="#数字类型" aria-hidden="true">#</a> 数字类型</h2>
<h3 id="整型" tabindex="-1"><a class="header-anchor" href="#整型" aria-hidden="true">#</a> 整型</h3>
<p>整形主要有int，uint，可以为int，int8，int16，int32，int64，uint一样</p>
<p>int和uint的区别主要是<code v-pre>u</code>，<code v-pre>u</code>代表无符号，</p>
<p>比如int8，能表示的数值个数有 2^8 = 256，范围-128~127；uint代表无符号，范围是0-256</p>
<h3 id="浮点型" tabindex="-1"><a class="header-anchor" href="#浮点型" aria-hidden="true">#</a> 浮点型</h3>
<p>Go语言中提供了两种精度的浮点数 float32（单精度） 和 float64（双精度）</p>
<ul>
<li>float32的精度只能提供大约6个十进制数（表示后科学计数法后，小数点后6位）的精度</li>
<li>float64的精度能提供大约15个十进制数（表示后科学计数法后，小数点后15位）的精度</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>var myfloat float32 = 100000018
var myfloat01 float32 = 100000182
var myfloat02 float32 = 100000187

func main() {
	fmt.Println(&quot;myfloat: &quot;, myfloat)
	fmt.Println(&quot;myfloat: &quot;, myfloat+1)
	fmt.Println(&quot;myfloat01: &quot;, myfloat01)
	fmt.Println(&quot;myfloat02: &quot;, myfloat01+5)
	fmt.Println(myfloat02 == myfloat01+5)
	fmt.Print(myfloat == myfloat+1)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="派生类型" tabindex="-1"><a class="header-anchor" href="#派生类型" aria-hidden="true">#</a> 派生类型</h2>
<h3 id="byte和rune" tabindex="-1"><a class="header-anchor" href="#byte和rune" aria-hidden="true">#</a> byte和rune</h3>
<p>可以用来表示字符，byte占用1个字节，rune占用4个字节；byte 和 uint8 没有区别，rune 和 uint32 没有区别，uint标识数字，所以单独弄了byte和rune来标识字符，作以区分</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>import (
    &quot;fmt&quot;
    &quot;unsafe&quot;
)

func main() {
    var a byte = 'A'
    var b rune = 'B'
    fmt.Printf(&quot;a 占用 %d 个字节数\nb 占用 %d 个字节数&quot;, unsafe.Sizeof(a), unsafe.Sizeof(b))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3>
<p>申明数组，%d，%T为占位符，生效要使用 <code v-pre>fmt.Printf</code></p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func arrayFunc() {
	// 第一种方法
	var arr [3]int = [3]int{1, 2, 3}
	// 第二种方法
	arr1 := [3]int{1, 2, 3}
	// 让go自己分配空间
	arr2 := [...]int{1, 2, 3, 4}
	// 给类型起别名
	type arr3 [3]int
	arr4 := arr3{1, 2, 3}
	// 指定部分数组元素
	arr5 := arr3{1: 2}
	fmt.Println(&quot;arr:&quot;, arr, arr, &quot;\narr2:&quot;, arr1, &quot;\narr2:&quot;, arr2)
	fmt.Printf(&quot;%d 的类型是: %T\n&quot;, arr2, arr2)
	fmt.Printf(&quot;type占位符的类型是: %T\n&quot;, arr4)
	fmt.Printf(&quot;偷懒定义的方法 %d&quot;, arr5)
}

// arr: [1 2 3] [1 2 3] 
// arr2: [1 2 3] 
// arr2: [1 2 3 4]
// [1 2 3 4] 的类型是: [4]int
// type占位符的类型是: main.arr3
// 偷懒定义的方法 [0 2 0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切片" tabindex="-1"><a class="header-anchor" href="#切片" aria-hidden="true">#</a> 切片</h3>
<p>切片（Slice）与数组一样，也是可以容纳若干类型相同的元素的容器,切片是对数组的一个连续片段的引用，所以切片是一个引用类型，这个片段可以是整个数组，也可以是由起始和终止索引标识的一些项的子集，需要注意的是，终止索引标识的项不包括在切片内（意思是这是个左闭右开的区间）</p>
<p>注意：</p>
<ul>
<li>容量（<code v-pre>cap</code>）表示底层数组的大小，长度（<code v-pre>len</code>）是你可以使用的大小</li>
</ul>
<p>容量的用处在哪？在与当你用append扩展长度时，如果新的长度小于容量，不会更换底层数组，否则，go会新申请一个底层数组，拷贝这边的值过去，把原来的数组丢掉。</p>
<p>也就是说，容量的用途是：在数据拷贝和内存申请的消耗与内存占用之间提供一个权衡。</p>
<p>而长度，则是为了帮助你限制切片可用成员的数量，提供边界查询的</p>
<ul>
<li>由于 切片是引用类型，所以你不对它进行赋值的话，它的零值（默认值）是 nil</li>
</ul>
<p><strong>切片构造</strong></p>
<ul>
<li>数组截取</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func sliceFunc() {
	myArr := [...]int{1, 2, 3}
	fmt.Printf(&quot;%d 的类型是: %T\n&quot;, myArr[0:2], myArr[0:2])
	myarr := [5]int{1, 2, 3, 4, 5}
	fmt.Printf(&quot;myarr 的长度为：%d，容量为：%d\n&quot;, len(myarr), cap(myarr))
	mysli1 := myarr[1:3]
	fmt.Printf(&quot;mysli1 的长度为：%d，容量为：%d\n&quot;, len(mysli1), cap(mysli1))
    // 索引
	mysli2 := myarr[1:3:3]
	fmt.Printf(&quot;mysli2 的长度为：%d，容量为：%d\n&quot;, len(mysli2), cap(mysli2))
	mysli2 = append(mysli2, 1)
	fmt.Printf(&quot;mysli2 扩容后的长度为：%d，容量为：%d\n&quot;, len(mysli2), cap(mysli2))
}

// [1 2] 的类型是: []int
// myarr 的长度为：5，容量为：5
// mysli1 的长度为：2，容量为：4
// mysli2 的长度为：2，容量为：2
// mysli2 扩容后的长度为：3，容量为：4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>从头声明赋值</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>// 声明字符串切片
var strSlice []String
// 声明整形切片
var intSlice []int
// 声明空切片
var intEmptySlice []int{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用<code v-pre>make函数</code>构造，make函数的格式：<code v-pre>make( []Type, size, cap )</code></li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func main() {
 a := make([]int, 2)
 b := make([]int, 2, 10)
 fmt.Println(a, b)
 fmt.Println(len(a), len(b))
 fmt.Println(cap(a), cap(b))
}

// [0 0] [0 0]
// 2 2
// 2 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>跟数组一样，偷懒的写法</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func main() {
    a := []int{4:2}
    fmt.Println(a)
    fmt.Println(len(a), cap(a))
}

// [0,0,0,0,2]
// 5 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字典" tabindex="-1"><a class="header-anchor" href="#字典" aria-hidden="true">#</a> 字典</h3>
<p>字典（Map 类型），是由若干个 <code v-pre>key:value</code> 这样的键值对映射组合在一起的数据结构</p>
<p>格式：<code v-pre>map[key_type]value_type</code></p>
<ul>
<li>声明初始化字典</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>// 第一种
var scores map[string]int = map[string]int{&quot;english&quot;: 80, &quot;chinese&quot;: 85}
// 第二种
scores := map[string]int{&quot;english&quot;: 80, &quot;chinese&quot;: 85}
// 第三种
var scores = make(map[string]int)
scores[&quot;english&quot;] = 80
scores[&quot;chinese&quot;] = 85
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>相关操作</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>// 添加元素，添加的元素key如果已存在，即更新value
scores[&quot;math&quot;] = 99
// 读取元素，读取一个不存在的key，不会报错，返回这个value的零值，int即是0
fmt.Printf(scores[&quot;math&quot;])
// 删除元素，如果key不存在，go静默处理，不会报错
delete.(scores,&quot;math&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>判断key是否存在</li>
</ul>
<p><code v-pre>key</code>不存在，值为0，但是key的value值可能就是0，所以不能根据是否为0来判断</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func judgeKeyFunc() {
	scores := map[string]int{&quot;english&quot;: 80, &quot;chinese&quot;: 85, &quot;math&quot;: 100}
	math, ok := scores[&quot;math1&quot;]
	if ok {
    // 可以省略为
    // if math, ok := scores[&quot;math1&quot;]; ok {
		fmt.Printf(&quot;math值为 %d\n&quot;, math)
	} else {
		fmt.Printf(&quot;math值不存在\n&quot;)
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>字典循环</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func circulateMapFunc() {
	scores := map[string]int{&quot;english&quot;: 80, &quot;chinese&quot;: 85}

	for subject, score := range scores {
		fmt.Printf(&quot;key: %s, value: %d\n&quot;, subject, score)
	}

	// 只获取key
	for key := range scores {
		fmt.Printf(key + &quot;\n&quot;)
		fmt.Printf(&quot;key值为 %v\n&quot;, key)
	}

	// 只获取value
	for _, value := range scores {
		fmt.Printf(&quot;value值为 %d\n&quot;, value)
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布尔" tabindex="-1"><a class="header-anchor" href="#布尔" aria-hidden="true">#</a> 布尔</h3>
<p>true，代表真值，不能与1做比较</p>
<p>false，代表假值，不能与0做比较，需要自己些方法实现</p>
<p>使用<code v-pre>==</code>和<code v-pre>!=</code>来判断是否相等</p>
<p>使用 <code v-pre>&amp;&amp;</code> 表示<code v-pre>且</code>，用 <code v-pre>||</code> 表示<code v-pre>或</code>，并且有短路行为（即左边表达式已经可以确认整个表达式的值，那么右边将不会再被求值</p>
<h3 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h3>
<ul>
<li>创建指针</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func createPointerFunc() {
	// 第一种
	aint := 1    // 定义普通变量
	ptr := &amp;aint // 定义指针变量

	// 第二种
	astr := new(string) // 创建指针
	*astr = &quot;Go指针创建&quot;    // 给指针赋值

	var bint *int // 声明一个指针
	bint = &amp;aint  // 初始化

	fmt.Println(ptr, astr, bint)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>&amp;</code> ：从一个普通变量中取得内存地址</li>
<li><code v-pre>*</code>：当<code v-pre>*</code>在赋值操作符（=）的右边，是从一个指针变量中取得变量值，当<code v-pre>*</code>在赋值操作符（=）的左边，是指该指针指向的变量</li>
</ul>
<ul>
<li>指针切片</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func sliceArrFunc() {
	a := [3]int{89, 90, 91}
	modify(a[:])
	fmt.Println(a)
}

func modify(sls []int) {
	sls[0] = 90
}	

// [90 90 91]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>指定的零值</li>
</ul>
<p>当指针声明后，没有进行初始化，其零值是 <code v-pre>nil</code></p>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<h3 id="占位符" tabindex="-1"><a class="header-anchor" href="#占位符" aria-hidden="true">#</a> 占位符</h3>
<p>::: details 通用占位符</p>
<table>
<thead>
<tr>
<th>占位符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>%v</td>
<td>值的默认格式表示</td>
</tr>
<tr>
<td>%+v</td>
<td>类似%v，但输出结构体时会添加字段名</td>
</tr>
<tr>
<td>%#v</td>
<td>值的Go语法表示</td>
</tr>
<tr>
<td>%T</td>
<td>打印值的类型</td>
</tr>
<tr>
<td>%%</td>
<td>百分号</td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details 布尔型</p>
<table>
<thead>
<tr>
<th>占位符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>%t</td>
<td>true或false</td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details 整型</p>
<table>
<thead>
<tr>
<th style="text-align:left">占位符</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">%b</td>
<td style="text-align:left">表示为二进制</td>
</tr>
<tr>
<td style="text-align:left">%c</td>
<td style="text-align:left">该值对应的unicode码值</td>
</tr>
<tr>
<td style="text-align:left">%d</td>
<td style="text-align:left">表示为十进制</td>
</tr>
<tr>
<td style="text-align:left">%o</td>
<td style="text-align:left">表示为八进制</td>
</tr>
<tr>
<td style="text-align:left">%x</td>
<td style="text-align:left">表示为十六进制，使用a-f</td>
</tr>
<tr>
<td style="text-align:left">%X</td>
<td style="text-align:left">表示为十六进制，使用A-F</td>
</tr>
<tr>
<td style="text-align:left">%U</td>
<td style="text-align:left">表示为Unicode格式：U+1234，等价于”U+%04X”</td>
</tr>
<tr>
<td style="text-align:left">%q</td>
<td style="text-align:left">该值对应的单引号括起来的go语法字符字面值，必要时会采用安全的转义表示</td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details 浮点数与复数</p>
<table>
<thead>
<tr>
<th style="text-align:left">占位符</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">%b</td>
<td style="text-align:left">无小数部分、二进制指数的科学计数法，如-123456p-78</td>
</tr>
<tr>
<td style="text-align:left">%e</td>
<td style="text-align:left">科学计数法，如-1234.456e+78</td>
</tr>
<tr>
<td style="text-align:left">%E</td>
<td style="text-align:left">科学计数法，如-1234.456E+78</td>
</tr>
<tr>
<td style="text-align:left">%f</td>
<td style="text-align:left">有小数部分但无指数部分，如123.456</td>
</tr>
<tr>
<td style="text-align:left">%F</td>
<td style="text-align:left">等价于%f</td>
</tr>
<tr>
<td style="text-align:left">%g</td>
<td style="text-align:left">根据实际情况采用%e或%f格式（以获得更简洁、准确的输出）</td>
</tr>
<tr>
<td style="text-align:left">%G</td>
<td style="text-align:left">根据实际情况采用%E或%F格式（以获得更简洁、准确的输出）</td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details 字符串和[]byte</p>
<table>
<thead>
<tr>
<th style="text-align:left">占位符</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">%s</td>
<td style="text-align:left">直接输出字符串或者[]byte</td>
</tr>
<tr>
<td style="text-align:left">%q</td>
<td style="text-align:left">该值对应的双引号括起来的go语法字符串字面值，必要时会采用安全的转义表示</td>
</tr>
<tr>
<td style="text-align:left">%x</td>
<td style="text-align:left">每个字节用两字符十六进制数表示（使用a-f</td>
</tr>
<tr>
<td style="text-align:left">%X</td>
<td style="text-align:left">每个字节用两字符十六进制数表示（使用A-F）</td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details 指针</p>
<table>
<thead>
<tr>
<th style="text-align:left">占位符</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">%p</td>
<td style="text-align:left">表示为十六进制，并加上前导的0x</td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details 宽度标识符</p>
<table>
<thead>
<tr>
<th style="text-align:left">占位符</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">%f</td>
<td style="text-align:left">默认宽度，默认精度</td>
</tr>
<tr>
<td style="text-align:left">%9f</td>
<td style="text-align:left">宽度9，默认精度</td>
</tr>
<tr>
<td style="text-align:left">%.2f</td>
<td style="text-align:left">默认宽度，精度2</td>
</tr>
<tr>
<td style="text-align:left">%9.2f</td>
<td style="text-align:left">宽度9，精度2</td>
</tr>
<tr>
<td style="text-align:left">%9.f</td>
<td style="text-align:left">宽度9，精度0</td>
</tr>
</tbody>
</table>
<p>:::</p>
<h1 id="练习源码" tabindex="-1"><a class="header-anchor" href="#练习源码" aria-hidden="true">#</a> 练习源码</h1>
<p><a href="https://gitee.com/myMagicRain/go-study/tree/master/src/DataType" target="_blank" rel="noopener noreferrer">DataType</a></p>
</div></template>


