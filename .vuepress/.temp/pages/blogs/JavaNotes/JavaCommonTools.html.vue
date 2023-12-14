<template><div><p>::: tip</p>
<p>:::</p>
<!-- more -->
<h2 id="正则匹配" tabindex="-1"><a class="header-anchor" href="#正则匹配" aria-hidden="true">#</a> 正则匹配</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>private final static Pattern NAME_PATTERN = Pattern.compile(&quot;[\\s\\S]*NAME[\\s|\\n]&quot;);

private static String matchFirst(String requestJson, Pattern pattern) {
	Matcher match = pattern.matcher(requestJson);
	if (match.find() &amp;&amp; match.groupCount() &gt; 0) {
		return match.group(1);
	}
	return &quot;&quot;;
}

// 匹配特殊字符
private static final String SPECIAL_CHAR = &quot;[\\x00-\\x08\\x0B-\\x0C\\x0E-\\x1F\\x7F]&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="替换" tabindex="-1"><a class="header-anchor" href="#替换" aria-hidden="true">#</a> 替换</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static void main(String[] args) {
    String str = &quot;&lt;Code&gt;%d&lt;/Code&gt;&lt;Text&gt;%s&lt;T/ext&gt;&quot;;
    System.out.println(String.format(str, 402, &quot;message&quot;));
}

// &lt;Code&gt;402&lt;/Code&gt;&lt;Text&gt;message&lt;T/ext&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details 转换符说明</p>
<table>
<thead>
<tr>
<th>转 换 符</th>
<th>说  明</th>
<th>示  例</th>
</tr>
</thead>
<tbody>
<tr>
<td>%s</td>
<td>字符串类型</td>
<td>&quot;mingrisoft&quot;</td>
</tr>
<tr>
<td>%c</td>
<td>字符类型</td>
<td>'m'</td>
</tr>
<tr>
<td>%b</td>
<td>布尔类型</td>
<td>true</td>
</tr>
<tr>
<td>%d</td>
<td>整数类型（十进制）</td>
<td>99</td>
</tr>
<tr>
<td>%x</td>
<td>整数类型（十六进制）</td>
<td>FF</td>
</tr>
<tr>
<td>%o</td>
<td>整数类型（八进制）</td>
<td>77</td>
</tr>
<tr>
<td>%f</td>
<td>浮点类型</td>
<td>99.99</td>
</tr>
<tr>
<td>%a</td>
<td>十六进制浮点类型</td>
<td>FF.35AE</td>
</tr>
<tr>
<td>%e</td>
<td>指数类型</td>
<td>9.38e+5</td>
</tr>
<tr>
<td>%g</td>
<td>通用浮点类型（f和e类型中较短的）</td>
<td></td>
</tr>
<tr>
<td>%h</td>
<td>散列码</td>
<td></td>
</tr>
<tr>
<td>%%</td>
<td>百分比类型</td>
<td>％</td>
</tr>
<tr>
<td>%n</td>
<td>换行符</td>
<td></td>
</tr>
<tr>
<td>%tx</td>
<td>日期与时间类型（x代表不同的日期与时间转换符</td>
<td></td>
</tr>
</tbody>
</table>
<p>:::</p>
<h3 id="base64" tabindex="-1"><a class="header-anchor" href="#base64" aria-hidden="true">#</a> Base64</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>import org.apache.commons.codec.binary.Base64;

private HttpEntity&lt;String&gt; fillHttpEntity() {
    HttpHeaders httpHeaders = new HttpHeaders();
    String userInfo = Base64.encodeBase64String((userName + &quot;:&quot; + Password).getBytes());
    httpHeaders.add(AUTHORIZATION_KEY, &quot;Basic &quot; + userInfo);
    httpHeaders.add(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
    return new HttpEntity&lt;&gt;(httpHeaders);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


