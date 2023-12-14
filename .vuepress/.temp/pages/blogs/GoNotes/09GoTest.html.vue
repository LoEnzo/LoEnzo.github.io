<template><div><p>::: tip
:::</p>
<h1 id="go-test工具" tabindex="-1"><a class="header-anchor" href="#go-test工具" aria-hidden="true">#</a> go test工具</h1>
<p>go test用于编译单元测试，检测方法函数是否有问题，熟悉下相关参数，可以让测试过程更新快捷</p>
<ul>
<li>直接运行编译整个项目的测试文件</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>go test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>测试单个测试文件，被测文件和对应单元测试成对出现，顺序可调换</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>go test math.go math_test.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查看详细结果</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>go test -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>只测试某个函数，或者某几个函数，-run支持正则，如只测试 TestAddMore，TestAddMoreAndMore</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>go test -v -run=&quot;TestAddMore&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>生成test的二进制文件，加 -c 参数</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>go test -c 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>执行这个text测试文件，加 -o 参数</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>go test -v -o math.test.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查看覆盖率，加 -cover 参数</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>go test -v -cover math.go math_test.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h1 id="go单元测试" tabindex="-1"><a class="header-anchor" href="#go单元测试" aria-hidden="true">#</a> go单元测试</h1>
<p>创建一个<code v-pre>math.go</code>，写一个add的Func函数，如下</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>package main

func Add(x, y int) int {
	return x + y
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同级建立一个<code v-pre>math_test.go</code>的测试文件</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>package Test

import &quot;testing&quot;

type TestTable struct {
	xArg int
	yArg int
}

// 简单测试，单元测试
func TestAdd(t *testing.T) {
	t.Log(Add(1, 2))
}

// 少量样例测试，表组测试
func TestAddMore(t *testing.T) {
	sum := Add(1, 2)
	if sum == 3 {
		t.Log(&quot;the result is ok&quot;)
	} else {
		t.Fatal(&quot;the result is wrong&quot;)
	}

	sum = Add(2, 4)
	if sum == 6 {
		t.Log(&quot;the result is ok&quot;)
	} else {
		t.Fatal(&quot;the result is wrong&quot;)
	}
}

// 大量测试样例，表格测试法
func TestAddMoreAndMore(t *testing.T) {
	tables := []TestTable{
		{1, 2},
		{2, 4},
		{4, 8},
		{5, 10},
		{6, 12},
	}

	for _, table := range tables {
		result := Add(table.xArg, table.yArg)
		if result == (table.xArg + table.yArg) {
			t.Log(&quot;the result is ok&quot;)
		} else {
			t.Fatal(&quot;the result is wrong&quot;)
		}
	}
}
// === RUN   TestAdd
// math_test.go:12: 3
// --- PASS: TestAdd (0.00s)
// === RUN   TestAddMore
// math_test.go:19: the result is ok
// math_test.go:26: the result is ok
// --- PASS: TestAddMore (0.00s)
// === RUN   TestAddMoreAndMore
// math_test.go:45: the result is ok
// math_test.go:45: the result is ok
// math_test.go:45: the result is ok
// math_test.go:45: the result is ok
// math_test.go:45: the result is ok
// --- PASS: TestAddMoreAndMore (0.00s)
// PASS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go单元测试编写原则" tabindex="-1"><a class="header-anchor" href="#go单元测试编写原则" aria-hidden="true">#</a> go单元测试编写原则</h2>
<ul>
<li>单元测试以<code v-pre>_test.go</code>结尾，最好就是 <code v-pre>被测试文件_test.go</code>，</li>
<li>单元测试函数名必须以 <code v-pre>Test</code>开口，如<code v-pre>TestAdd</code></li>
<li>单元测试函数接口一个指向 <code v-pre>testing.T</code> 类型的指针，而且不返回任何值</li>
</ul>
<h1 id="go-mock工具" tabindex="-1"><a class="header-anchor" href="#go-mock工具" aria-hidden="true">#</a> go mock工具</h1>
<p><a href="https://geektutu.com/post/quick-gomock.html" target="_blank" rel="noopener noreferrer">参考</a>，未尝试</p>
<h1 id="练习源码" tabindex="-1"><a class="header-anchor" href="#练习源码" aria-hidden="true">#</a> 练习源码</h1>
<p><a href="https://gitee.com/myMagicRain/go-study/tree/master/src/Test" target="_blank" rel="noopener noreferrer">Test</a></p>
</div></template>


