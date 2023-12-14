<template><div><p>::: tip
java常用时间日志转换</p>
<p>:::</p>
<h1 id="常用时间转换" tabindex="-1"><a class="header-anchor" href="#常用时间转换" aria-hidden="true">#</a> 常用时间转换</h1>
<h3 id="date-localdate" tabindex="-1"><a class="header-anchor" href="#date-localdate" aria-hidden="true">#</a> Date -&gt; LocalDate</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static LocalDate DateToLocalDate(Date date) {
    Instant instant = date.toInstant();
    ZoneId zone = ZoneId.systemDefault();
    return LocalDateTime.ofInstant(instant, zone).toLocalDate();
}

public static LocalDate DateToLocalDate(Date date) {
    return date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="localdate-date" tabindex="-1"><a class="header-anchor" href="#localdate-date" aria-hidden="true">#</a> LocalDate -&gt; Date</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static Date LocalDateTodate(LocalDate) {
    ZoneId zone = ZoneId.systemDefault();
    Instant instant = localDate.atStartOfDay().atZone(zone).toInstant();
    return Date.from(instant);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="date-localtime" tabindex="-1"><a class="header-anchor" href="#date-localtime" aria-hidden="true">#</a> Date -&gt; LocalTime</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static LocalTime DateToLocalTime(Date date) {
    Instant instant = date.toInstant();
    ZoneId zone = ZoneId.systemDefault();
    return LocalDateTime.ofInstant(instant, zone).toLocalTime();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="localtime-date" tabindex="-1"><a class="header-anchor" href="#localtime-date" aria-hidden="true">#</a> LocalTime -&gt; Date</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static Date LocalDateTimeToUdate(LocalTime localTime) {
    ZoneId zone = ZoneId.systemDefault();
    return Date.from(localDateTime.atZone(zone).toInstant());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="date-localdatetime" tabindex="-1"><a class="header-anchor" href="#date-localdatetime" aria-hidden="true">#</a> Date -&gt; LocalDateTime</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static LocalDateTime DateToLocalDateTime(Date date) {
    Instant instant = date.toInstant();
    ZoneId zone = ZoneId.systemDefault();
    return LocalDateTime.ofInstant(instant, zone);
}

public static LocalDateTime dateToLocalDateTime(Date date) {
    return LocalDateTime.ofInstant(date.toInstant(), ZoneId.systemDefault());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="localdatetime-date" tabindex="-1"><a class="header-anchor" href="#localdatetime-date" aria-hidden="true">#</a> LocalDateTime -&gt; Date</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static Date LocalTimeToDate(LocalDateTime localDateTime) {
    ZoneId zone = ZoneId.systemDefault();
    Instant instant = localDateTime.atZone(zone).toInstant();
    return Date.from(instant);
}

public static Date localDateTimeToDate(LocalDateTime localDateTime) {
    return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用日期fomatter" tabindex="-1"><a class="header-anchor" href="#常用日期fomatter" aria-hidden="true">#</a> 常用日期Fomatter</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>/**
 * HHmm
 */
public static final DateTimeFormatter FORMATTER_HHmm = DateTimeFormatter.ofPattern(&quot;HHmm&quot;);
/**
 * yyyyMMdd
 */
public static final DateTimeFormatter FORMATTER_yyyyMMdd = DateTimeFormatter.ofPattern(&quot;yyyyMMdd&quot;);
/**
 * yyyy-MM-dd
 */
public static final DateTimeFormatter FORMATTER_yyyyMMdd2 = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd&quot;);
/**
 * yyyyMMddHHmm
 */
public static final DateTimeFormatter FORMATTER_yyyyMMddHHmm = DateTimeFormatter.ofPattern(&quot;yyyyMMddHHmm&quot;);
/**
 * yyyy-MM-dd HHmm
 */
public static final DateTimeFormatter FORMATTER_yyyyMMddHHmm2 = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HHmm&quot;);
/**
 * yyyy-MM-dd HH:mm
 */
public static final DateTimeFormatter FORMATTER_yyyyMMddHHmm3 = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm&quot;);
/**
 * yyyy-MM-dd HH:mm:ss
 */
public static final DateTimeFormatter FORMATTER_yyyyMMddHHmmss = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);
/**
 * yyMMdd
 */
public static final DateTimeFormatter FORMATTER_yyMMdd = DateTimeFormatter.ofPattern(&quot;yyMMdd&quot;);
/**
 * ddMMMyy 支持大写的月份
 */
public static final DateTimeFormatter FORMATTER_ddMMMyy = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern(&quot;ddMMMyy&quot;).toFormatter(Locale.ENGLISH);
/**
 * ddMMM 支持大写的月份
 */
public static final DateTimeFormatter FORMATTER_ddMMM = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern(&quot;ddMMM&quot;).toFormatter(Locale.ENGLISH);
/**
 * ddMMMyyHHmm
 */
public static final DateTimeFormatter FORMATTER_ddMMMyyHHmm = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern(&quot;ddMMMyyHHmm&quot;).toFormatter(Locale.ENGLISH);
/**
 * yyMMMddHHmmss
 */
public static final DateTimeFormatter FORMATTER_yyMMMddHHmmss = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern(&quot;yyMMMddHHmmss&quot;).toFormatter(Locale.ENGLISH);
/**
 * yyMMddHHmmss
 */
public static final DateTimeFormatter FORMATTER_yyMMddHHmmss = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern(&quot;yyMMddHHmmss&quot;).toFormatter(Locale.ENGLISH);
/**
 * yyMMMdd
 */
public static final DateTimeFormatter FORMATTER_yyMMMdd = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern(&quot;yyMMMdd&quot;).toFormatter(Locale.ENGLISH);
/**
 * ddMMMyyyyHHmm
 */
public static final DateTimeFormatter FORMATTER_ddMMMyyyyHHmm = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern(&quot;ddMMMyyyyHHmm&quot;).toFormatter(Locale.ENGLISH);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string-localdate" tabindex="-1"><a class="header-anchor" href="#string-localdate" aria-hidden="true">#</a> String -&gt; LocalDate</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static LocalDate stringToLocalDate(String date) {
    return LocalDateTime.parse(time, FORMATTER_yyyyMMdd);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string-localtime" tabindex="-1"><a class="header-anchor" href="#string-localtime" aria-hidden="true">#</a> String -&gt; LocalTime</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static LocalTime stringToLocalTime(String date) {
    return LocalDateTime.parse(time, FORMATTER_ddMMMyyHHmm);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string-localdatetime" tabindex="-1"><a class="header-anchor" href="#string-localdatetime" aria-hidden="true">#</a> String -&gt; LocalDateTime</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static LocalDateTime stringToLocalDateTime(String date) {
 	return LocalDateTime.parse(time, FORMATTER_ddMMMyyHHmm);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="localdate-string" tabindex="-1"><a class="header-anchor" href="#localdate-string" aria-hidden="true">#</a> LocalDate -&gt; String</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static String localDateToString(LocalDate localDate) {
    return FORMATTER_yyyyMMdd.format(localDate);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="localtime-string" tabindex="-1"><a class="header-anchor" href="#localtime-string" aria-hidden="true">#</a> LocalTime -&gt; String</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static String localTimeToString(LocalTime localTime) {
    return FORMATTER_yyyyMMdd.format(localTime);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="localdatetime-string" tabindex="-1"><a class="header-anchor" href="#localdatetime-string" aria-hidden="true">#</a> LocalDateTime -&gt; String</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static String LocalDateTimeToString(LocalDateTime localDateTime ) {
    return FORMATTER_ddMMMyyHHmm.format(localDateTime);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


