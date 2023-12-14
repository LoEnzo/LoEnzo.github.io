<template><div><h1 id="创建类、接口、枚举时自动注释模板" tabindex="-1"><a class="header-anchor" href="#创建类、接口、枚举时自动注释模板" aria-hidden="true">#</a> 创建类、接口、枚举时自动注释模板</h1>
<p>设置路径：Settings -&gt; Editor -&gt; File and Code Templates</p>
<ul>
<li>Class</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>#if (${PACKAGE_NAME} &amp;&amp; ${PACKAGE_NAME} != &quot;&quot;)package ${PACKAGE_NAME};#end
#parse(&quot;File Header.java&quot;)
/**
 * Class Name: ${NAME}
 * Class Description: ${NAME}
 *
 * @author: hjwu
 * @date: ${DATE} ${TIME}
 */
public class ${NAME} {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Interface</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>#if (${PACKAGE_NAME} &amp;&amp; ${PACKAGE_NAME} != &quot;&quot;)package ${PACKAGE_NAME};#end
#parse(&quot;File Header.java&quot;)
/**
 * Interface Name: ${NAME}
 * Interface Description: ${NAME}
 *
 * @author: hjwu
 * @date: ${DATE} ${TIME}
 */
public interface ${NAME} {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Enum</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>#if (${PACKAGE_NAME} &amp;&amp; ${PACKAGE_NAME} != &quot;&quot;)package ${PACKAGE_NAME};#end
#parse(&quot;File Header.java&quot;)
/**
 * Enum Name: ${NAME}
 * Enum Description: ${NAME}
 *
 * @author: hjwu
 * @date: ${DATE} ${TIME}
 */
public enum ${NAME} {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="手动添加类、方法注释" tabindex="-1"><a class="header-anchor" href="#手动添加类、方法注释" aria-hidden="true">#</a> 手动添加类、方法注释</h1>
<p>设置路径：Settings -&gt; Editor -&gt; Live Templates</p>
<p>可以手动为自己添加一个模板组，示例 AhjwuTemplate</p>
<p><img src="@source/blogs/DevTools/img/IDEA_Java_Template.png" alt="IDEA java开发注释模板"></p>
<ul>
<li>Class</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>**
 * Class Name: $description$
 * Class Description: $description$
 *
 * @author: hjwu
 * @date: $date$ $time$
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>description     className()
date            date()
time            time()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Method</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>**
 * Method Description: $description$
 *
 $params$
 * @return: $returns$
 * @author: hjwu
 * @date: $date$ $time$
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>description     methodName()
params          groovyScript(&quot;def result = '';def params = \&quot;${_1}\&quot;.replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList();for(i = 0; i &lt; params.size(); i++) {if(params[i] != '')result+='* @param: ' + params[i] + ((i &lt; params.size() - 1) ? '\\r\\n ' : ' ')}; return result == '' ? null : result&quot;, methodParameters())
return          methodReturnType()
author          根据自己名字来
date            date()
time            time()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>常规的属性类，可用可不用，用于添加一个默认的类型，减小重复率</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>**
 * Description: $description$
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>description     className()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


