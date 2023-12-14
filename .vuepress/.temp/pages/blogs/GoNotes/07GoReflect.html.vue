<template><div><p>::: tip</p>
<p>:::</p>
<h1 id="反射的基本概念" tabindex="-1"><a class="header-anchor" href="#反射的基本概念" aria-hidden="true">#</a> 反射的基本概念</h1>
<p>Go语言提供了一种机制在运行时更新和检查变量的值、调用变量的方法和变量支持的内在操作，但是在编译时并不知道这些变量的具体类型，这种机制被称为反射。反射也可以让我们将类型本身作为第一类的值类型处理。</p>
<p>反射是指在程序运行期对程序本身进行访问和修改的能力，程序在编译时变量被转换为内存地址，变量名不会被编译器写入到可执行部分，在运行程序时程序无法获取自身的信息。</p>
<p>支持反射的语言可以在程序编译期将变量的反射信息，如字段名称、类型信息、结构体信息等整合到可执行文件中，并给程序提供接口访问反射信息，这样就可以在程序运行期获取类型的反射信息，并且有能力修改它们。</p>
<h2 id="反射两种类型-type-和-value" tabindex="-1"><a class="header-anchor" href="#反射两种类型-type-和-value" aria-hidden="true">#</a> 反射两种类型：Type 和 Value</h2>
<p><strong>真实世界，反射世界</strong></p>
<p>这里学习原作者的理解，将反射前环境称为 <strong>真实世界</strong>，而将反射后的环境称为 <strong>反射世界</strong>，比喻不严谨，但是便于理解，所以我这里也跟着这么学的</p>
<p><strong>反射类型</strong></p>
<p>go反射中有两种类型是反射的核心，学习<code v-pre>reflect</code>包，需要先学习，<code v-pre>reflect.Type</code>、<code v-pre>reflect.Value</code></p>
<p>他们分别对应真实世界里的<code v-pre>type</code>和<code v-pre>value</code></p>
<p>一个接口变量，分别由<code v-pre>type</code>和<code v-pre>data</code>一起组成的，在反射世界里，两者是分开存在，分别由<code v-pre>reflect.Type</code>、<code v-pre>reflect.Value</code>表现</p>
<p>::: details eflect.Type`是以接口的形式存在的，部分代码</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>type Type interface {
    Align() int
    FieldAlign() int
    Method(int) Method
    MethodByName(string) (Method, bool)
    NumMethod() int
    Name() string
    PkgPath() string
    Size() uintptr
    String() string
    Kind() Kind
    Implements(u Type) bool
    AssignableTo(u Type) bool
    ConvertibleTo(u Type) bool
    Comparable() bool
    Bits() int
    ChanDir() ChanDir
    IsVariadic() bool
    Elem() Type
    Field(i int) StructField
    FieldByIndex(index []int) StructField
    FieldByName(name string) (StructField, bool)
    FieldByNameFunc(match func(string) bool) (StructField, bool)
    In(i int) Type
    Key() Type
    Len() int
    NumField() int
    NumIn() int
    NumOut() int
    Out(i int) Type
    common() *rtype
    uncommon() *uncommonType
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details  reflect.Value 是以一个结构体的形式存在</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>type Value struct {
    typ *rtype
    ptr unsafe.Pointer
    flag
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details reflect.Value 接收的方法</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>Addr
Bool
Bytes
runes
CanAddr
CanSet
Call
CallSlice
call
Cap
Close
Complex
Elem
Field
FieldByIndex
FieldByName
FieldByNameFunc
Float
Index
Int
CanInterface
Interface
InterfaceData
IsNil
IsValid
IsZero
Kind
Len
MapIndex
MapKeys
MapRange
Method
NumMethod
MethodByName
NumField
OverflowComplex
OverflowFloat
OverflowInt
OverflowUint
Pointer
Recv
recv
Send
send
Set
SetBool
SetBytes
setRunes
SetComplex
SetFloat
SetInt
SetLen
SetCap
SetMapIndex
SetUint
SetPointer
SetString
Slice
Slice3
String
TryRecv
TrySend
Type
Uint
UnsafeAddr
assignTo
Convert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="反射的三大定律" tabindex="-1"><a class="header-anchor" href="#反射的三大定律" aria-hidden="true">#</a> 反射的三大定律</h2>
<p>Go 语言里有个反射三定律，是你在学习反射时，很重要的参考：</p>
<ul>
<li>Reflection goes from interface value to reflection object；反射可以将接口类型变量 转换为“反射类型对象”；</li>
<li>Reflection goes from reflection object to interface value；反射可以将 “反射类型对象”转换为 接口类型变量；</li>
<li>To modify a reflection object, the value must be settable；如果要修改 “反射类型对象” 其类型必须是 可写的；</li>
</ul>
<p>第一定律、第二定律图片详解，<a href="http://golang.iswbm.com/en/latest/c02/c02_07.html" target="_blank" rel="noopener noreferrer">来源</a></p>
<p><img src="@source/blogs/GoNotes/images/goReflect01.png" alt=""></p>
<h3 id="第一定律" tabindex="-1"><a class="header-anchor" href="#第一定律" aria-hidden="true">#</a> 第一定律</h3>
<p>反射可以将接口类型变量 转换为“反射类型对象”</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func reflectOne(age interface{}) {

	t := reflect.TypeOf(age)
	v := reflect.ValueOf(age)

	// 从接口变量到反射对象
	fmt.Printf(&quot;从接口变量到反射对象：Type对象的类型为 %T, value对象类型为 %T \n&quot;, t, v)

	// 从反射对象到接口变量
	i := v.Interface().(int)
	fmt.Printf(&quot;从反射对象到接口变量：新对象的类型为 %T 值为 %v \n&quot;, i, i)
}
// 原始接口变量的类型为 int，值为 25 
// 从接口变量到反射对象：Type对象的类型为 *reflect.rtype, value对象类型为 reflect.Value 
// 从接口变量到反射对象：Type对象的类型为 *reflect.rtype, value对象类型为 reflect.Value 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二定律" tabindex="-1"><a class="header-anchor" href="#第二定律" aria-hidden="true">#</a> 第二定律</h3>
<p>反射可以将 “反射类型对象”转换为 接口类型变量</p>
<p>当然了，最后转换后的对象，静态类型为 <code v-pre>interface{}</code> ，如果要转成最初的原始类型，需要再类型断言转换一下，也就是<code v-pre>interface().(int)</code>里面传对应的类型，</p>
<p>这点没有看到，，我是否加<code v-pre>.(Cat)</code>返回结果一致</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func reflectTwo(cat Cat) {

	reflectTypeCat := reflect.TypeOf(cat)
	reflectValueCat := reflect.ValueOf(cat)
	fmt.Printf(&quot;从接口变量到反射对象：Type对象的类型为 %T, value对象类型为 %T \n&quot;, reflectTypeCat, reflectValueCat)

	originCat := reflectValueCat.Interface().(Cat)
	fmt.Printf(&quot;从反射对象到接口变量：新对象的类型为 %T 值为 %v \n&quot;, originCat, originCat)
}
// 从接口变量到反射对象：Type对象的类型为 *reflect.rtype, value对象类型为 reflect.Value 
// 从反射对象到接口变量：新对象的类型为 main.Cat 值为 {miao} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三定律" tabindex="-1"><a class="header-anchor" href="#第三定律" aria-hidden="true">#</a> 第三定律</h3>
<p>如果要修改 “反射类型对象” 其类型必须是 可写的</p>
<ul>
<li>不是接收变量指针创建的反射对象，是不具备『<strong>可写性</strong>』的</li>
<li>是否具备『<strong>可写性</strong>』，可使用 <code v-pre>CanSet()</code> 来获取得知</li>
<li>对不具备『<strong>可写性</strong>』的对象进行修改，是没有意义的，也认为是不合法的，因此会报错</li>
</ul>
<p>要让反射对象具备可写性，需要注意两点</p>
<ol>
<li>创建反射对象时传入变量的指针</li>
<li>使用 <code v-pre>Elem()</code>函数返回指针指向的数据</li>
</ol>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func reflectCanWriteFour(cat Cat) {
	v := reflect.ValueOf(cat)
	fmt.Println(&quot;cat 可写性：&quot;, v.CanSet())
	v1 := reflect.ValueOf(&amp;cat.name)
	v2 := v1.Elem()
	fmt.Println(&quot;cat 可写性：&quot;, v2.CanSet())
	v2.SetString(&quot;dog&quot;)
	fmt.Println(&quot;通过反射对象进行更新后，真实世界里 name 变为：&quot;, v2)
}

// age 可写性为: false
// age 可写性为: true
// cat 可写性： false
// cat 可写性： true
// 通过反射对象进行更新后，真实世界里 name 变为： dog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反射的函数" tabindex="-1"><a class="header-anchor" href="#反射的函数" aria-hidden="true">#</a> 反射的函数</h2>
<h3 id="获取类型" tabindex="-1"><a class="header-anchor" href="#获取类型" aria-hidden="true">#</a> 获取类型</h3>
<p>Type 对象 和 Value 对象都可以通过 Kind() 方法返回对应的接口变量的基础类型</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>reflect.TypeOf(m).Kind()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结构体</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>type Profile struct {
	name   string
	age    int
	gender string
}

type Picture struct {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h3>
<p>Int() 转int，Float()转float，String()转string，Bool()转boolean，Pointer()转指针，Interface()转接口类型</p>
<p>::: details 类型转换</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func main() {
	var age int = 25
	// Int() 转 int
	transferType(25)
	// Float() 转 float
	//transferType(9.99)
	// String() 转 string
	//transferType(&quot;hello&quot;)
	// Bool() 转 boolean
	//transferType(true)
	// Pointer 转 指针
	//transferType(&amp;age)
}

func transferType(age interface{}) {
	v1 := reflect.ValueOf(age)
	fmt.Printf(&quot;转换前， type: %T, value: %v \n&quot;, v1, v1)
	//v2 := v1.Int()
	//v2 := v1.Float()
	//v2 := v1.String()
	//v2 := v1.Bool()
	//v2 := v1.Pointer()
	v2 := v1.Interface() // Interface() 转 接口类型
	fmt.Printf(&quot;转换后， type: %T, value: %v \n&quot;, v2, v2)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="切片操作" tabindex="-1"><a class="header-anchor" href="#切片操作" aria-hidden="true">#</a> 切片操作</h3>
<p>Slice() 函数与上面所有类型转换的函数都不一样，它返回还是 reflect.Value 反射对象，而不再是我们所想的真实世界里的切片对象</p>
<p>Slice3()这个三个参数暂时没看懂</p>
<p>::: details 切片操作</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func main() {
    reflectSlice()
	// 更新切片
	arr := []int{1, 2}
	reflectUpdateSlice(&amp;arr)
}

func reflectUpdateSlice(arrPtr interface{}) {
	valuePtr := reflect.ValueOf(arrPtr)
	value := valuePtr.Elem()
	fmt.Printf(&quot;更新前value：%d, 容量 %d\n&quot;, value, value.Len())

	value.Set(reflect.Append(value, reflect.ValueOf(3)))
	fmt.Printf(&quot;更新后value：%d, 容量 %d\n&quot;, value, value.Len())
}

func reflectSlice() {
	var numList []int = []int{1, 2, 4, 5, 2, 5}

	v1 := reflect.ValueOf(numList)
	fmt.Printf(&quot;转换前， type: %T, value: %v \n&quot;, v1, v1)
	// Slice 函数接收两个参数
	v2 := v1.Slice(0, 4)
	fmt.Printf(&quot;转换后， type: %T, value: %v \n&quot;, v2, v2)
	// Slice3 对切片再切片,暂时没有看第三个参数的含义
	//v3 := v2.Slice3(1,3,3)
	v3 := v2.Slice(1, 3)
	fmt.Printf(&quot;转换后， type: %T, value: %v \n&quot;, v3, v3)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="属性操作" tabindex="-1"><a class="header-anchor" href="#属性操作" aria-hidden="true">#</a> 属性操作</h3>
<ul>
<li>属性操作<code v-pre>NumField() </code>和 <code v-pre>Field()</code></li>
</ul>
<p>::: details 属性操作</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func reflectStruct() {
	p := Profile{&quot;张三&quot;, 18, &quot;male&quot;}
	v := reflect.ValueOf(p)
	fmt.Printf(&quot;字段数为：%d\n&quot;, v.NumField())
	for i := 0; i &lt; v.NumField(); i++ {
		fmt.Printf(&quot;第 %d 个元素为 %v\n&quot;, i+1, v.Field(i))
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="方法操作" tabindex="-1"><a class="header-anchor" href="#方法操作" aria-hidden="true">#</a> 方法操作</h3>
<p>创建三个方法</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func (p Profile) SayBye() string {
	return &quot;Bye&quot;
}

func (p Profile) SayHello() string {
	return &quot;Hello&quot;
}

func (p Picture) SelfIntroduction(name string, age int) {
	fmt.Printf(&quot;Hello, my name is %s and i'm %d years old.&quot;, name, age)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details 动态调用函数</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func main() {	
    // 动态调用函数（使用索引且无参数）
	reflectDynamicFun()
	// 动态调用函数（使用函数名且无参数）
	reflectDynamicFun1()
	// 动态调用函数（使用函数且有参数）
	reflectDynamicFun2()
}

func reflectDynamicFun2() {
   p := Picture{}
   v := reflect.ValueOf(p)
   name := reflect.ValueOf(&quot;赵六&quot;)
   size := reflect.ValueOf(100)
   input := []reflect.Value{name, size}
   v.MethodByName(&quot;SelfIntroduction&quot;).Call(input)
}

func reflectDynamicFun1() {
   p := &amp;Profile{&quot;王五&quot;, 27, &quot;male&quot;}
   v := reflect.ValueOf(p)
   fmt.Print(v.MethodByName(&quot;SayHello&quot;).Call(nil), &quot;\n&quot;)
   fmt.Print(v.MethodByName(&quot;SayBye&quot;).Call(nil), &quot;\n&quot;)
}

func reflectDynamicFun() {
   p := &amp;Profile{&quot;王五&quot;, 27, &quot;male&quot;}

   t := reflect.TypeOf(p)
   v := reflect.ValueOf(p)

   fmt.Printf(&quot;调用第 %d 个方法：%v ，调用结果：%v\n&quot;, 1,
      t.Method(0).Name, v.Elem().Method(0).Call(nil))
   fmt.Printf(&quot;调用第 %d 个方法：%v ，调用结果：%v\n&quot;, 2,
      t.Method(1).Name, v.Elem().Method(1).Call(nil))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<p>go反射感觉比较难理解，我也是才入门，</p>
<p>根据原作者的叙述，我个人觉得能不用反射就不用反射，有这块的代码都感觉都比较难理解，概念比较抽象，哈哈。</p>
<h1 id="练习源码" tabindex="-1"><a class="header-anchor" href="#练习源码" aria-hidden="true">#</a> 练习源码</h1>
<p><a href="https://gitee.com/myMagicRain/go-study/tree/master/src/Reflect" target="_blank" rel="noopener noreferrer">Reflect</a></p>
</div></template>


