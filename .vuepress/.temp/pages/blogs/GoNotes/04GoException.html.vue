<template><div><p>::: tip</p>
<p>:::</p>
<p>go语言中，常规的，在代码执行时发生数组访问越界，空指针引用等，都会触发异常<code v-pre>panic</code>，但是有时候也需要自己手动触发异常，比如端口号被占用等，手动触发异常，是程序停止运行</p>
<h1 id="触发panic" tabindex="-1"><a class="header-anchor" href="#触发panic" aria-hidden="true">#</a> 触发panic</h1>
<p>直接使用内置的<code v-pre>panic</code>函数即可</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func touchOffPanic() {
	panic(&quot;touch off panic&quot;)
}

//panic: touch off panic
//goroutine 1 [running]:
//main.touchOffPanic(...)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="捕获panic" tabindex="-1"><a class="header-anchor" href="#捕获panic" aria-hidden="true">#</a> 捕获panic</h1>
<p>这里需要另外一个函数<code v-pre>recover</code>，类似于java的<code v-pre>try-catch</code>，可以让程序跳过异常的地方继续执行</p>
<p>注意：<code v-pre>recover</code>只在<code v-pre>defer</code>下生效，在其他作用域不生效，如果没有异常<code v-pre>recover</code>的打印信息为<code v-pre>nil</code>，所以需要判空</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>func main() {
	// 捕获异常
	catchPanic(10)
	fmt.Println(&quot;catched Pnic, program is ok&quot;)
}

func catchPanic(x int) {
	defer func() {
		// recover() 可以将捕获到的panic信息打印
		if err := recover(); err != nil {
			fmt.Println(err)
		}
	}()
	var arr = [3]int{1, 2, 3}
	arr[x] = 10
}

// runtime error: index out of range [10] with length 3
// catched Pnic, program is ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="练习源码" tabindex="-1"><a class="header-anchor" href="#练习源码" aria-hidden="true">#</a> 练习源码</h1>
<p><a href="https://gitee.com/myMagicRain/go-study/tree/master/src/Exception" target="_blank" rel="noopener noreferrer">Exception</a></p>
</div></template>


