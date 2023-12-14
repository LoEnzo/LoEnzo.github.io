<template><div><p>::: tip
JDK8新特性，Optional，stream流的相关处理，Function等</p>
<p><a href="https://www.wmyskxz.com/2020/08/19/java8-ban-ben-te-xing-xiang-jie/" target="_blank" rel="noopener noreferrer">参考1</a>，<a href="https://www.jianshu.com/p/bc2dd34cc37c" target="_blank" rel="noopener noreferrer">参考2</a></p>
<p>:::</p>
<!-- more -->
<h2 id="一、stream" tabindex="-1"><a class="header-anchor" href="#一、stream" aria-hidden="true">#</a> 一、Stream</h2>
<p>Stream可以对多个元素进行一系列的操作，也可以支持对某些操作进行并发处理。</p>
<h3 id="_1-1-常用方法列表" tabindex="-1"><a class="header-anchor" href="#_1-1-常用方法列表" aria-hidden="true">#</a> 1.1 常用方法列表</h3>
<p>Stream对象提供多个非常有用的方法，这些方法可以分成两类：
中间操作：将原始的Stream转换成另外一个Stream；如filter返回的是过滤后的Stream。
终端操作：产生的是一个结果或者其它的复合操作；如count或者forEach操作。</p>
<ul>
<li>中间操作</li>
</ul>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>sequential</td>
<td>返回一个相等的串行的Stream对象，如果原Stream对象已经是串行就可能会返回原对象</td>
</tr>
<tr>
<td>parallel</td>
<td>返回一个相等的并行的Stream对象，如果原Stream对象已经是并行的就会返回原对象</td>
</tr>
<tr>
<td>unordered</td>
<td>返回一个不关心顺序的Stream对象，如果原对象已经是这类型的对象就会返回原对象</td>
</tr>
<tr>
<td>onClose</td>
<td>返回一个相等的Steam对象，同时新的Stream对象在执行Close方法时会调用传入的Runnable对象</td>
</tr>
<tr>
<td>close</td>
<td>关闭Stream对象</td>
</tr>
<tr>
<td><a href="#%E4%BA%8C%E3%80%81Stream%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%BD%BF%E7%94%A8">filter</a></td>
<td>元素过滤：对Stream对象按指定的Predicate进行过滤，返回的Stream对象中仅包含未被过滤的元素</td>
</tr>
<tr>
<td>map</td>
<td>元素一对一转换：使用传入的Function对象对Stream中的所有元素进行处理，返回的Stream对象中的元素为原元素处理后的结果</td>
</tr>
<tr>
<td>mapToInt</td>
<td>元素一对一转换：将原Stream中的使用传入的IntFunction加工后返回一个IntStream对象</td>
</tr>
<tr>
<td>flatMap</td>
<td>元素一对多转换：对原Stream中的所有元素进行操作，每个元素会有一个或者多个结果，然后将返回的所有元素组合成一个统一的Stream并返回；</td>
</tr>
<tr>
<td>sorted</td>
<td>排序：返回排序后的Stream对象</td>
</tr>
<tr>
<td>peek</td>
<td>使用传入的Consumer对象对所有元素进行消费后，返回一个新的包含所有原来元素的Stream对象</td>
</tr>
<tr>
<td>limit</td>
<td>获取有限个元素组成新的Stream对象返回</td>
</tr>
<tr>
<td>skip</td>
<td>抛弃前指定个元素后使用剩下的元素组成新的Stream返回</td>
</tr>
<tr>
<td>takeWhile</td>
<td>如果Stream是有序的（Ordered），那么返回最长命中序列（符合传入的Predicate的最长命中序列）组成的Stream；如果是无序的，那么返回的是所有符合传入的Predicate的元素序列组成的Stream。</td>
</tr>
<tr>
<td>dropWhile</td>
<td>与takeWhile相反，如果是有序的，返回除最长命中序列外的所有元素组成的Stream；如果是无序的，返回所有未命中的元素组成的Stream。</td>
</tr>
<tr>
<td>distinct</td>
<td>去重：返回一个去重后的Stream对象</td>
</tr>
</tbody>
</table>
<ul>
<li>终端操作</li>
</ul>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>iterator</td>
<td>返回Stream中所有对象的迭代器;</td>
</tr>
<tr>
<td>spliterator</td>
<td>返回对所有对象进行的spliterator对象</td>
</tr>
<tr>
<td>forEach</td>
<td>对所有元素进行迭代处理，无返回值</td>
</tr>
<tr>
<td>forEachOrdered</td>
<td>按Stream的Encounter所决定的序列进行迭代处理，无返回值</td>
</tr>
<tr>
<td>toArray</td>
<td>返回所有元素的数组</td>
</tr>
<tr>
<td>collect</td>
<td>根据传入参数做相关汇聚计算</td>
</tr>
<tr>
<td>anyMatch</td>
<td>只要其中有一个元素满足传入的Predicate时返回True，否则返回False</td>
</tr>
<tr>
<td>allMatch</td>
<td>所有元素均满足传入的Predicate时返回True，否则False</td>
</tr>
<tr>
<td>noneMatch</td>
<td>所有元素均不满足传入的Predicate时返回True，否则False</td>
</tr>
<tr>
<td>collect</td>
<td>根据传入参数做相关汇聚计算</td>
</tr>
<tr>
<td>min</td>
<td>返回所有元素中最小值的Optional对象；如果Stream中无任何元素，那么返回的Optional对象为Empty</td>
</tr>
<tr>
<td>max</td>
<td>与Min相反</td>
</tr>
<tr>
<td>count</td>
<td>所有元素个数</td>
</tr>
<tr>
<td>findFirst</td>
<td>返回第一个元素的Optioanl对象；如果无元素返回的是空的Optional； 如果Stream是无序的，那么任何元素都可能被返回。</td>
</tr>
<tr>
<td>findAny</td>
<td>返回任意一个元素的Optional对象，如果无元素返回的是空的Optioanl。</td>
</tr>
<tr>
<td>reduce</td>
<td>使用一个初始化的值，与Stream中的元素一一做传入的二合运算后返回最终的值。每一个元素做运算后的结果，再与下一个元素做运算。它不保证会按序列执行整个过程。</td>
</tr>
</tbody>
</table>
<h3 id="_1-2-创建steam对象" tabindex="-1"><a class="header-anchor" href="#_1-2-创建steam对象" aria-hidden="true">#</a> 1.2 创建Steam对象</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static void main(String[] args) {

    // 创建空的stream
    Stream stream = Stream.empty();

    // 通过集合类中的stream或者parallelStream方法创建
    List&lt;String&gt; list = Arrays.asList(&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;);
    // 获取串行的Stream对象
    Stream listStream = list.stream();
    // 获取并行的Stream对象
    Stream parallelListStream = list.parallelStream();
    parallelListStream.forEach(out::println);
    // 按顺序输出
    parallelListStream.forEachOrdered(out::println);

    // 通过Stream中的of方法创建
    Stream s = Stream.of(&quot;test&quot;);
    Stream s1 = Stream.of(&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;);

    // concat方法将两个Stream连接在一起，合成一个Stream。
    // 若两个输入的Stream都是串行的，则新Stream也是串行的；
    // 若输入的Stream中任何一个是并行的，则新的Stream也是并行的
    Stream.concat(Stream.of(1, 2, 3), Stream.of(4, 5))
        .forEach(integer -&gt; System.out.print(integer + &quot;  &quot;));// 1  2  3  4  5
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-filter" tabindex="-1"><a class="header-anchor" href="#_1-3-filter" aria-hidden="true">#</a> 1.3 filter</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static void main(String[] args) {
    List&lt;String&gt; list = Arrays.asList(&quot;abc&quot;, &quot;&quot;, &quot;bc&quot;, &quot;efg&quot;, &quot;abcd&quot;, &quot;&quot;, &quot;jkl&quot;);

    List&lt;String&gt; stringList = list.stream().filter(string -&gt; !string.isEmpty()).collect(Collectors.toList());
    System.out.println(&quot;去除空字符串的集合为：&quot; + Arrays.toString(stringList.toArray()));

    long count = list.stream().filter(String::isEmpty).count();
    System.out.println(&quot;集合种空字符串个数为：&quot; + count);
    System.out.println(&quot;并行处理流：&quot; + list.parallelStream().filter(String::isEmpty).count());
}
去除空字符串的集合为：[abc, bc, efg, abcd, jkl]
集合种空字符串个数为：2
并行处理流：2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-map" tabindex="-1"><a class="header-anchor" href="#_1-4-map" aria-hidden="true">#</a> 1.4 map</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static void main(String[] args) {
    Stream&lt;String&gt; stream = Stream.of(&quot;test&quot;, &quot;t1&quot;, &quot;t2&quot;, &quot;teeeee&quot;, &quot;aaaa&quot;);
    stream.map(n -&gt; n.concat(&quot;.txt&quot;)).forEach(System.out::println);

    List&lt;Integer&gt; numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
    // 获取对应的平方数
    List&lt;Integer&gt; list = numbers.stream().map(i -&gt; i * i).distinct().collect(Collectors.toList());
    System.out.println(&quot;map映射集合结果：&quot; + Arrays.toString(list.toArray()));
}
test.txt
t1.txt
t2.txt
teeeee.txt
aaaa.txt
map映射集合结果：[9, 4, 49, 25]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-flatmap" tabindex="-1"><a class="header-anchor" href="#_1-5-flatmap" aria-hidden="true">#</a> 1.5 flatMap</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static void main(String[] args) {
    Stream&lt;String&gt; s = Stream.of(&quot;test&quot;, &quot;t1&quot;, &quot;t2&quot;, &quot;teeeee&quot;, &quot;aaaa&quot;);
    s.flatMap(n -&gt; Stream.of(n.split(&quot;&quot;))).forEach(System.out::println);
}
t
e
s ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-reduce" tabindex="-1"><a class="header-anchor" href="#_1-6-reduce" aria-hidden="true">#</a> 1.6 reduce</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    public static void main(String[] args) {
        List&lt;Integer&gt; numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
        // 规约,第一个是初始值
        int sum = numbers.stream().reduce(0, Integer::sum);
        // 或者详细的逻辑操作，上面是 加法规约的简写
        int sum = numbers.stream().reduce(0, (x,y) -&gt; x+y);
        System.out.println(&quot;reduce结果：&quot; + sum);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7-intsummarystatistics" tabindex="-1"><a class="header-anchor" href="#_1-7-intsummarystatistics" aria-hidden="true">#</a> 1.7 IntSummaryStatistics</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
    // 获取Int类型 numbers集合的统计信息 （其他类型同理）
    IntSummaryStatistics stats = numbers.stream().mapToInt((x) -&gt; x).summaryStatistics();

    System.out.println(&quot;最大的数 : &quot; + stats.getMax());
    System.out.println(&quot;最小的数 : &quot; + stats.getMin());
    System.out.println(&quot;所有数之和 : &quot; + stats.getSum());
    System.out.println(&quot;平均数：&quot; + String.format(&quot;%.2f&quot;, stats.getAverage()));
}
最大的数 : 7
最小的数 : 2
所有数之和 : 25
平均数：3.57
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、optional" tabindex="-1"><a class="header-anchor" href="#二、optional" aria-hidden="true">#</a> 二、Optional</h2>
<p>用于简化Java中对空值的判断处理，以防止出现各种空指针异常。
Optional实际上是对一个变量进行封装，它包含有一个属性value，实际上就是这个变量的值。</p>
<h3 id="_2-1-常用方法列表" tabindex="-1"><a class="header-anchor" href="#_2-1-常用方法列表" aria-hidden="true">#</a> 2.1 常用方法列表</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>get</td>
<td>获取Value的值，如果Value值是空值，则会抛出<code v-pre>NoSuchElementException</code>异常；因此返回的Value值无需再做空值判断，只要没有抛出异常，都会是非空值。</td>
</tr>
<tr>
<td>isPresent</td>
<td>Value是否为空值的判断；</td>
</tr>
<tr>
<td>ifPresent</td>
<td>当Value不为空时，执行传入的Consumer；</td>
</tr>
<tr>
<td>ifPresentOrElse</td>
<td>Value不为空时，执行传入的Consumer；否则执行传入的Runnable对象；</td>
</tr>
<tr>
<td>filter</td>
<td>当Value为空或者传入的Predicate对象调用test(value)返回False时，返回Empty对象；否则返回当前的Optional对象</td>
</tr>
<tr>
<td>map</td>
<td>一对一转换：当Value为空时返回Empty对象，否则返回传入的Function执行apply(value)后的结果组装的Optional对象；</td>
</tr>
<tr>
<td>flatMap</td>
<td>一对多转换：当Value为空时返回Empty对象，否则传入的Function执行apply(value)后返回的结果（其返回结果直接是Optional对象）</td>
</tr>
<tr>
<td>or</td>
<td>如果Value不为空，则返回当前的Optional对象；否则，返回传入的Supplier生成的Optional对象；</td>
</tr>
<tr>
<td>stream</td>
<td>如果Value为空，返回Stream对象的Empty值；否则返回<code v-pre>Stream.of(value)</code>的Stream对象；</td>
</tr>
<tr>
<td>orElse</td>
<td>Value不为空则返回Value，否则返回传入的值；</td>
</tr>
<tr>
<td>orElseGet</td>
<td>Value不为空则返回Value，否则返回传入的Supplier生成的值；</td>
</tr>
<tr>
<td>orElseThrow</td>
<td>Value不为空则返回Value，否则抛出Supplier中生成的异常对象；</td>
</tr>
</tbody>
</table>
<h3 id="_2-2-创建optional对象" tabindex="-1"><a class="header-anchor" href="#_2-2-创建optional对象" aria-hidden="true">#</a> 2.2 创建Optional对象</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static void main(String[] args){
    // 创建空对象
    Optional o = Optional.empty();
    // 创建非空对象
    o = Optional.of(&quot;test&quot;); 
    // 创建对象，传入值可为空
    Optional&lt;String&gt; s = Optional.ofNullable(test());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-ofnullable" tabindex="-1"><a class="header-anchor" href="#_2-3-ofnullable" aria-hidden="true">#</a> 2.3 ofNullable</h3>
<p>判空</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>// 以前写法
String s = test();
if (null != s) {
    System.out.println(s);
}

// 现在
Optional&lt;String&gt; optional = Optional.ofNullable(test());
optionnal.ifPresent(System.out:println)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-orelse" tabindex="-1"><a class="header-anchor" href="#_2-4-orelse" aria-hidden="true">#</a> 2.4 orElse</h3>
<p>判空设默认值</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>// 以前写法
if (null == s) {
    s = &quot;test&quot;;
}
System.out.println(s);

// 现在
Optional&lt;String&gt; o = Optional.ofNullable(s);
System.out.println(o.orElse(&quot;test&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-orelsethrow" tabindex="-1"><a class="header-anchor" href="#_2-5-orelsethrow" aria-hidden="true">#</a> 2.5 orElseThrow</h3>
<p>变量为空时抛出异常</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>// 以前写法
if (null == s) {
    throw new Exception(&quot;test&quot;);
}
System.out.println(s);

// 现在
Optional&lt;String&gt; o = Optional.ofNullable(s);
System.out.println(o.orElseThrow(()-&gt;new Exception(&quot;test&quot;)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、时间格式化" tabindex="-1"><a class="header-anchor" href="#三、时间格式化" aria-hidden="true">#</a> 三、时间格式化</h2>
<h3 id="_3-1-常用方法列表" tabindex="-1"><a class="header-anchor" href="#_3-1-常用方法列表" aria-hidden="true">#</a> 3.1 常用方法列表</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>with</strong>（TemporalAdjusters ）</td>
<td>返回LocalDate | LocalDateTime 指定字段更改为新值后的拷贝</td>
</tr>
<tr>
<td>withDayOfYear( )</td>
<td>返回本年的具体某天 1-365</td>
</tr>
<tr>
<td>withDayOfMonth( )</td>
<td>返回本月的具体某天 1-31</td>
</tr>
<tr>
<td>withYear( )</td>
<td>返回指定年份的当前时间</td>
</tr>
<tr>
<td>withMoth( )</td>
<td>返回指定月份的当前时间</td>
</tr>
<tr>
<td><strong>TemporalAdjusters</strong></td>
<td>时间调节器</td>
</tr>
<tr>
<td>firstDayOfYear( )   firstDayOfMonth( )</td>
<td>返回本年 / 本月的第一天</td>
</tr>
<tr>
<td>lastDayOfYear( )    lastDayOfMonth( )</td>
<td>返回本年 / 本月的最后一天</td>
</tr>
<tr>
<td>firstDayOfNextYear( )   firstDayOfNextMonth( )</td>
<td>返回下一年 / 下月 的第一天</td>
</tr>
<tr>
<td><strong>firstInMonth</strong>（DayOfWeek）</td>
<td>返回本月的具体周几</td>
</tr>
<tr>
<td>firstInMonth( DayOfyWeek.MONDAY)</td>
<td>返回本月的第一个周几</td>
</tr>
<tr>
<td>toLocalDate ( )</td>
<td>返回LocalDateTime的 LocalDate 部分</td>
</tr>
<tr>
<td>toLocalTime ( )</td>
<td>返回LocalDateTime的 LocalTime 部分</td>
</tr>
<tr>
<td>toString  ( )</td>
<td>返回LocalDateTime的字符串表示</td>
</tr>
<tr>
<td>getDayOfYear( )</td>
<td>返回LocalDateTime是年的第几天</td>
</tr>
<tr>
<td><strong>get( )</strong></td>
<td>返回LocalDateTime的指定字段的值</td>
</tr>
<tr>
<td>getDayOfMonth( )</td>
<td>返回LocalDateTime是月的第几天</td>
</tr>
<tr>
<td>getDayOfWeek( )</td>
<td>返回LocalDateTime是周的第几天</td>
</tr>
<tr>
<td>getYear( )</td>
<td>返回LocalDateTime的年</td>
</tr>
<tr>
<td>getMonth( )</td>
<td>返回LocalDateTime的月，英文，JANARAY</td>
</tr>
<tr>
<td>getMonthValue( )</td>
<td>返回LocalDateTime的月</td>
</tr>
<tr>
<td>getHour( )</td>
<td>返回LocalDateTime的时</td>
</tr>
<tr>
<td>getMinute( )</td>
<td>返回LocalDateTime的分</td>
</tr>
<tr>
<td>getSecond( )</td>
<td>返回LocalDateTime的秒</td>
</tr>
<tr>
<td>isAfter( )</td>
<td>是否在指定时间之后</td>
</tr>
<tr>
<td>isBefore( )</td>
<td>是否在指定时间之前</td>
</tr>
<tr>
<td>isEqual ( )</td>
<td>判断两个时间是否相等</td>
</tr>
<tr>
<td>isLeepYear( )</td>
<td>判断是否是闰年</td>
</tr>
<tr>
<td>unit ( locatDateTime, ChronoUnit.Day)</td>
<td>返回两个时间差的年数、月数、周数、天数、小时数、分钟数、秒数</td>
</tr>
</tbody>
</table>
<h3 id="_3-2-自定义格式化时间" tabindex="-1"><a class="header-anchor" href="#_3-2-自定义格式化时间" aria-hidden="true">#</a> 3.2 自定义格式化时间</h3>
<h2 id="四、function" tabindex="-1"><a class="header-anchor" href="#四、function" aria-hidden="true">#</a> 四、Function</h2>
<h3 id="_4-1-常用方法" tabindex="-1"><a class="header-anchor" href="#_4-1-常用方法" aria-hidden="true">#</a> 4.1 常用方法</h3>
<table>
<thead>
<tr>
<th>函数接口</th>
<th>参数</th>
<th>返回类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>Predicate&lt; T&gt;</td>
<td>T</td>
<td>boolean</td>
<td>判断某一个对象是否满足条件</td>
</tr>
<tr>
<td>Consumer&lt; T&gt;</td>
<td>T</td>
<td>void</td>
<td>接收一个对象进行处理，不返回结果</td>
</tr>
<tr>
<td>Function&lt;T, R&gt;</td>
<td>T</td>
<td>R</td>
<td>将一个对象T转换为另一个对象R，对象类型可以相同，也可以不同</td>
</tr>
<tr>
<td>Supplier&lt; T&gt;</td>
<td>None</td>
<td>T</td>
<td>提供一个对象，无需传入参数</td>
</tr>
<tr>
<td>UnaryOperator&lt; T&gt;</td>
<td>T</td>
<td>T</td>
<td>一元运算符操作，接收对象并返回同类型的对象</td>
</tr>
<tr>
<td>BinaryOperator&lt; T&gt;</td>
<td>(T, T)</td>
<td>T</td>
<td>二元操作符，接收两个同类型的对象，并返回一个原类型对象</td>
</tr>
</tbody>
</table>
<h3 id="_4-2-predicate" tabindex="-1"><a class="header-anchor" href="#_4-2-predicate" aria-hidden="true">#</a> 4.2 Predicate</h3>
<h4 id="_4-2-1-方法" tabindex="-1"><a class="header-anchor" href="#_4-2-1-方法" aria-hidden="true">#</a> 4.2.1 方法</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>// 返回true 或 false
boolean test(T t);

// 与操作，既满足A操作又满足B操作
default Predicate&lt; T&gt; and(Predicate&lt;? super T&gt; other){
     return (t) -&gt; !test(t);
}

// 这个是取反操作
default Predicate&lt; T&gt; negate(){
    Objects.requireNonNull(other);
    return (t) -&gt; test(t) &amp;&amp; other.test(t);
}

// 或操作，满足A操作或满足B操作
default Predicate&lt; T&gt; or(Predicate&lt;? super T&gt; other){
    Objects.requireNonNull(other);
    return (t) -&gt; test(t) || other.test(t);
}

// 静态方法，判断是否相等
static &lt; T&gt; Predicate&lt; T&gt; isEqual(Object targetRef){
    return (null == targetRef) ? Objects::isNull : object -&gt; targetRef.equals(object);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-2-事例" tabindex="-1"><a class="header-anchor" href="#_4-2-2-事例" aria-hidden="true">#</a> 4.2.2 事例</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>Predicate&lt;Integer&gt; greaterThan = input -&gt; input &gt; 10;
Predicate&lt;Integer&gt; lessThan = input -&gt; input &lt; 20;

// 满足条件，返回true
boolean test = greaterThan.test(11);

// 与操作，返回true
test = greaterThan.and(lessThan).test(15);
// 取反操作，返回false
test = greaterThan.negate().test(15);
// 或操作，返回true
test = greaterThan.or(lessThan).test(15);
// 两个值不同，返回false
test = Predicate.isEqual(15).test(20);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-fuction" tabindex="-1"><a class="header-anchor" href="#_4-3-fuction" aria-hidden="true">#</a> 4.3 Fuction</h3>
<h4 id="_4-3-1-方法" tabindex="-1"><a class="header-anchor" href="#_4-3-1-方法" aria-hidden="true">#</a> 4.3.1 方法</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>// 将Function对象应用到输入的参数上，然后返回计算结果
R apply(T t);

// 整合两个Function对象，先执行当前的Function对象，再执行调用的Function对象
default &lt;V&gt; Function&lt;V, R&gt; compose(Function&lt;? super V, ? extends T&gt; before){
    Objects.requireNonNull(before);
    return (V v) -&gt; apply(before.apply(v));
}

// 整合两个Function对象，先执行调用的Function对象，再执行当前的Function对象
default &lt;V&gt; Function&lt;T, V&gt; andThen(Function&lt;? super R, ? extends V&gt; after){
    Objects.requireNonNull(after);
    return (T t) -&gt; after.apply(apply(t));
}

//返回执行了apply方法之后的 输入参数的函数对象
static &lt; T&gt; Function&lt;T, T&gt; identity(){
    return t -&gt; t;
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-2-事例" tabindex="-1"><a class="header-anchor" href="#_4-3-2-事例" aria-hidden="true">#</a> 4.3.2 事例</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>Function&lt;Integer, Long&gt; add =  input -&gt; input.longValue() * 2;
Function&lt;Long, Integer&gt; square = input -&gt; input.intValue() + 2;

// 将参数运用到add条件上  3*2
long output = add.apply(3);
// 先获取add条件结果，再作为参数进入square条件（3*2）+2
output = add.andThen(square).apply(3);
// 先进行compose条件，然后作为参数进行add条件 （3+2）*2
Long value2 = add.compose(square).apply(3L);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-consumer" tabindex="-1"><a class="header-anchor" href="#_4-4-consumer" aria-hidden="true">#</a> 4.4 Consumer</h3>
<h4 id="_4-4-1-方法" tabindex="-1"><a class="header-anchor" href="#_4-4-1-方法" aria-hidden="true">#</a> 4.4.1 方法</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>// 将Function对象应用到输入的参数上
void accept(T t);

// 整个两个Consumer，先执行调用的Consumer，再执行当前的Consumer
default Consumer&lt; T&gt; andThen(Consumer&lt;? super T&gt; after){
    Objects.requireNonNull(after);
    return (T t) -&gt; {
        accept(t);
        after.accept(t);
    };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-2-事例" tabindex="-1"><a class="header-anchor" href="#_4-4-2-事例" aria-hidden="true">#</a> 4.4.2 事例</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>/**
* Consumer对象表示接收单个输入参数进行处理，并且没有返回值的操作，
* Consumer接口期望执行带有副作用的操作，也就是Consumer的操作可能会更改输入参数的内部状态。
*/
Consumer f = System.out::println;
Consumer f2 = n -&gt; System.out.println(n + &quot;+test1&quot;);

//执行完F后再执行F2的Accept方法
f.accept(&quot;test&quot;);
f.andThen(f2).accept(&quot;test&quot;);

//连续执行F的Accept方法
f.andThen(f).andThen(f).andThen(f).accept(&quot;test&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-supplier" tabindex="-1"><a class="header-anchor" href="#_4-5-supplier" aria-hidden="true">#</a> 4.5 Supplier</h3>
<h4 id="_4-5-1-方法-事例" tabindex="-1"><a class="header-anchor" href="#_4-5-1-方法-事例" aria-hidden="true">#</a> 4.5.1 方法 事例</h4>
<div class="language-csharp line-numbers-mode" data-ext="cs"><pre v-pre class="language-csharp"><code>Supplier&lt;Person&gt; supplier = () -&gt; new Person(&quot;beijing&quot;, &quot;wang&quot;, 30);
Person person = supplier.get();
System.out.println(person);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-其他" tabindex="-1"><a class="header-anchor" href="#五-其他" aria-hidden="true">#</a> 五，其他</h2>
<h3 id="map循环" tabindex="-1"><a class="header-anchor" href="#map循环" aria-hidden="true">#</a> map循环</h3>
<ul>
<li>循环 key,value</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>map.forEach((k,v) -&gt; {
    doSomthing();
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>循环 key,value (entrySet)，适合大容量</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>may.entrySet().forEach( entry -&gt; {
    System.out.println( entry.getKey() );
    System.out.println( entry.getValue() )
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>循环  key,value ，使用 iterator</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>may.entrySet().iterator().forEachRemaining( iter -&gt; {
    System.out.println( iter.getKey() );
    System.out.println( iter.getValue() )
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>循环map中的value</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>map.values().forEach(System.out::println);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>循环map中的key</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>may.keySet().forEach( key -&gt; {
    System.out.println( key );
    System.out.println( map.getKey(key) )
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="int-integer-list互转" tabindex="-1"><a class="header-anchor" href="#int-integer-list互转" aria-hidden="true">#</a> int Integer List互转</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>int[] data = {4, 5, 3, 6, 2, 5, 1};
        
// int[] 转 List&lt;Integer&gt;
List&lt;Integer&gt; list1 = Arrays.stream(data).boxed().collect(Collectors.toList());
// Arrays.stream(arr) 可以替换成IntStream.of(arr)。
// 1.使用Arrays.stream将int[]转换成IntStream。
// 2.使用IntStream中的boxed()装箱。将IntStream转换成Stream&lt;Integer&gt;。
// 3.使用Stream的collect()，将Stream&lt;T&gt;转换成List&lt;T&gt;，因此正是List&lt;Integer&gt;。

// int[] 转 Integer[]
Integer[] integers1 = Arrays.stream(data).boxed().toArray(Integer[]::new);
// 前两步同上，此时是Stream&lt;Integer&gt;。
// 然后使用Stream的toArray，传入IntFunction&lt;A[]&gt; generator。
// 这样就可以返回Integer数组。
// 不然默认是Object[]。

// List&lt;Integer&gt; 转 Integer[]
Integer[] integers2 = list1.toArray(new Integer[0]);
//  调用toArray。传入参数T[] a。这种用法是目前推荐的。
// List&lt;String&gt;转String[]也同理。

// List&lt;Integer&gt; 转 int[]
int[] arr1 = list1.stream().mapToInt(Integer::valueOf).toArray();
// 想要转换成int[]类型，就得先转成IntStream。
// 这里就通过mapToInt()把Stream&lt;Integer&gt;调用Integer::valueOf来转成IntStream
// 而IntStream中默认toArray()转成int[]。

// Integer[] 转 int[]
int[] arr2 = Arrays.stream(integers1).mapToInt(Integer::valueOf).toArray();
// 思路同上。先将Integer[]转成Stream&lt;Integer&gt;，再转成IntStream。

// Integer[] 转 List&lt;Integer&gt;
List&lt;Integer&gt; list2 = Arrays.asList(integers1);        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


