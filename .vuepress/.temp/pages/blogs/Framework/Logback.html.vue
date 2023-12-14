<template><div><p>::: tip</p>
<p>logback的常规使用和模板，<a href="http://www.logback.cn/01%E7%AC%AC%E4%B8%80%E7%AB%A0logback%E4%BB%8B%E7%BB%8D.html" target="_blank" rel="noopener noreferrer">学习地址</a>，主要了解并使用 <code v-pre>&lt;configuration&gt;</code> <code v-pre>&lt;property&gt;</code> <code v-pre>&lt;appender&gt;</code> <code v-pre>&lt;logger&gt;</code> <code v-pre>&lt;root&gt;</code>及其子节点的使用。</p>
<p>:::</p>
<!-- more -->
<h4 id="样例" tabindex="-1"><a class="header-anchor" href="#样例" aria-hidden="true">#</a> 样例</h4>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;configuration&gt;

    &lt;!-- 日志文件存放路径 --&gt;
    &lt;property name=&quot;log.path&quot; value=&quot;/home/chan/logs&quot;/&gt;
    &lt;!-- 日志文件输出格式 --&gt;
    &lt;property name=&quot;log.pattern&quot; value=&quot;%d{HH:mm:ss.SSS} [%thread] %-5level %logger{20} - [%method,%line] - %msg%n&quot;/&gt;

    &lt;!-- 控制台输出 --&gt;
    &lt;appender name=&quot;console&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;${log.pattern}&lt;/pattern&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;

    &lt;!-- 系统日志输出 --&gt;
    &lt;appender name=&quot;file_info&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;file&gt;${log.path}/sys-info.log&lt;/file&gt;
        &lt;!-- 循环政策：基于时间创建日志文件 --&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;!-- 日志文件名格式 --&gt;
            &lt;fileNamePattern&gt;${log.path}/sys-info.%d{yyyy-MM-dd}.log&lt;/fileNamePattern&gt;
            &lt;!-- 日志最大的历史 30天 --&gt;
            &lt;maxHistory&gt;30&lt;/maxHistory&gt;
        &lt;/rollingPolicy&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;${log.pattern}&lt;/pattern&gt;
        &lt;/encoder&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.LevelFilter&quot;&gt;
            &lt;!-- 过滤的级别 --&gt;
            &lt;level&gt;INFO&lt;/level&gt;
            &lt;!-- 匹配时的操作：接收（记录） --&gt;
            &lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;
            &lt;!-- 不匹配时的操作：拒绝（不记录） --&gt;
            &lt;onMismatch&gt;DENY&lt;/onMismatch&gt;
        &lt;/filter&gt;
    &lt;/appender&gt;

    &lt;appender name=&quot;file_error&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;file&gt;${log.path}/sys-error.log&lt;/file&gt;
        &lt;!-- 循环政策：基于时间创建日志文件 --&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;!-- 日志文件名格式 --&gt;
            &lt;fileNamePattern&gt;${log.path}/sys-error.%d{yyyy-MM-dd}.log&lt;/fileNamePattern&gt;
            &lt;!-- 日志最大的历史 30天 --&gt;
            &lt;maxHistory&gt;30&lt;/maxHistory&gt;
        &lt;/rollingPolicy&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;${log.pattern}&lt;/pattern&gt;
        &lt;/encoder&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.LevelFilter&quot;&gt;
            &lt;!-- 过滤的级别 --&gt;
            &lt;level&gt;ERROR&lt;/level&gt;
            &lt;!-- 匹配时的操作：接收（记录） --&gt;
            &lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;
            &lt;!-- 不匹配时的操作：拒绝（不记录） --&gt;
            &lt;onMismatch&gt;DENY&lt;/onMismatch&gt;
        &lt;/filter&gt;
    &lt;/appender&gt;

    &lt;!-- 用户访问日志输出  --&gt;
    &lt;appender name=&quot;sys-user&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;file&gt;${log.path}/sys-user.log&lt;/file&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;!-- 按天回滚 daily --&gt;
            &lt;fileNamePattern&gt;${log.path}/sys-user.%d{yyyy-MM-dd}.log&lt;/fileNamePattern&gt;
            &lt;!-- 日志最大的历史 30天 --&gt;
            &lt;maxHistory&gt;30&lt;/maxHistory&gt;
        &lt;/rollingPolicy&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;${log.pattern}&lt;/pattern&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;

    &lt;!-- 系统模块日志级别控制  --&gt;
    &lt;logger name=&quot;com.chan&quot; level=&quot;info&quot;/&gt;
    &lt;!-- Spring日志级别控制  --&gt;
    &lt;logger name=&quot;org.springframework&quot; level=&quot;warn&quot; /&gt;

    &lt;root level=&quot;info&quot;&gt;
        &lt;appender-ref ref=&quot;console&quot;/&gt;
    &lt;/root&gt;

    &lt;!--系统操作日志--&gt;
    &lt;root level=&quot;info&quot;&gt;
        &lt;appender-ref ref=&quot;file_info&quot;/&gt;
        &lt;appender-ref ref=&quot;file_error&quot;/&gt;
    &lt;/root&gt;

    &lt;!--系统用户操作日志--&gt;
    &lt;logger name=&quot;sys-user&quot; level=&quot;info&quot;&gt;
        &lt;appender-ref ref=&quot;sys-user&quot;/&gt;
    &lt;/logger&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="样例2" tabindex="-1"><a class="header-anchor" href="#样例2" aria-hidden="true">#</a> 样例2</h4>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;configuration  scan=&quot;true&quot; scanPeriod=&quot;10 seconds&quot;&gt;
    &lt;!-- 日志级别从低到高分为TRACE &lt; DEBUG &lt; INFO &lt; WARN &lt; ERROR &lt; FATAL，如果设置为WARN，则低于WARN的信息都不会输出 --&gt;
    &lt;!-- scan:当此属性设置为true时，配置文件如果发生改变，将会被重新加载，默认值为true --&gt;
    &lt;!-- scanPeriod:设置监测配置文件是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒。当scan为true时，此属性生效。默认的时间间隔为1分钟。 --&gt;
    &lt;!-- debug:当此属性设置为true时，将打印出logback内部日志信息，实时查看logback运行状态。默认值为false。 --&gt;

    &lt;contextName&gt;logback&lt;/contextName&gt;
    &lt;!-- name的值是变量的名称，value的值时变量定义的值。通过定义的值会被插入到logger上下文中。定义变量后，可以使“${}”来使用变量。 --&gt;
    &lt;property name=&quot;log.path&quot; value=&quot;D:/guli_log/edu&quot; /&gt;

    &lt;!-- 彩色日志 --&gt;
    &lt;!-- 配置格式变量：CONSOLE_LOG_PATTERN 彩色日志格式 --&gt;
    &lt;!-- magenta:洋红 --&gt;
    &lt;!-- boldMagenta:粗红--&gt;
    &lt;!-- cyan:青色 --&gt;
    &lt;!-- white:白色 --&gt;
    &lt;!-- magenta:洋红 --&gt;
    &lt;property name=&quot;CONSOLE_LOG_PATTERN&quot;
              value=&quot;%yellow(%date{yyyy-MM-dd HH:mm:ss}) |%highlight(%-5level) |%blue(%thread) |%blue(%file:%line) |%green(%logger) |%cyan(%msg%n)&quot;/&gt;


    &lt;!--输出到控制台--&gt;
    &lt;appender name=&quot;CONSOLE&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;
        &lt;!--此日志appender是为开发使用，只配置最底级别，控制台输出的日志级别是大于或等于此级别的日志信息--&gt;
        &lt;!-- 例如：如果此处配置了INFO级别，则后面其他位置即使配置了DEBUG级别的日志，也不会被输出 --&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.ThresholdFilter&quot;&gt;
            &lt;level&gt;INFO&lt;/level&gt;
        &lt;/filter&gt;
        &lt;encoder&gt;
            &lt;Pattern&gt;${CONSOLE_LOG_PATTERN}&lt;/Pattern&gt;
            &lt;!-- 设置字符集 --&gt;
            &lt;charset&gt;UTF-8&lt;/charset&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;


    &lt;!--输出到文件--&gt;

    &lt;!-- 时间滚动输出 level为 INFO 日志 --&gt;
    &lt;appender name=&quot;INFO_FILE&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;!-- 正在记录的日志文件的路径及文件名 --&gt;
        &lt;file&gt;${log.path}/log_info.log&lt;/file&gt;
        &lt;!--日志文件输出格式--&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n&lt;/pattern&gt;
            &lt;charset&gt;UTF-8&lt;/charset&gt;
        &lt;/encoder&gt;
        &lt;!-- 日志记录器的滚动策略，按日期，按大小记录 --&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;!-- 每天日志归档路径以及格式 --&gt;
            &lt;fileNamePattern&gt;${log.path}/info/log-info-%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;
            &lt;timeBasedFileNamingAndTriggeringPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP&quot;&gt;
                &lt;maxFileSize&gt;100MB&lt;/maxFileSize&gt;
            &lt;/timeBasedFileNamingAndTriggeringPolicy&gt;
            &lt;!--日志文件保留天数--&gt;
            &lt;maxHistory&gt;15&lt;/maxHistory&gt;
        &lt;/rollingPolicy&gt;
        &lt;!-- 此日志文件只记录info级别的 --&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.LevelFilter&quot;&gt;
            &lt;level&gt;INFO&lt;/level&gt;
            &lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;
            &lt;onMismatch&gt;DENY&lt;/onMismatch&gt;
        &lt;/filter&gt;
    &lt;/appender&gt;

    &lt;!-- 时间滚动输出 level为 WARN 日志 --&gt;
    &lt;appender name=&quot;WARN_FILE&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;!-- 正在记录的日志文件的路径及文件名 --&gt;
        &lt;file&gt;${log.path}/log_warn.log&lt;/file&gt;
        &lt;!--日志文件输出格式--&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n&lt;/pattern&gt;
            &lt;charset&gt;UTF-8&lt;/charset&gt; &lt;!-- 此处设置字符集 --&gt;
        &lt;/encoder&gt;
        &lt;!-- 日志记录器的滚动策略，按日期，按大小记录 --&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;fileNamePattern&gt;${log.path}/warn/log-warn-%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;
            &lt;timeBasedFileNamingAndTriggeringPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP&quot;&gt;
                &lt;maxFileSize&gt;100MB&lt;/maxFileSize&gt;
            &lt;/timeBasedFileNamingAndTriggeringPolicy&gt;
            &lt;!--日志文件保留天数--&gt;
            &lt;maxHistory&gt;15&lt;/maxHistory&gt;
        &lt;/rollingPolicy&gt;
        &lt;!-- 此日志文件只记录warn级别的 --&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.LevelFilter&quot;&gt;
            &lt;level&gt;warn&lt;/level&gt;
            &lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;
            &lt;onMismatch&gt;DENY&lt;/onMismatch&gt;
        &lt;/filter&gt;
    &lt;/appender&gt;


    &lt;!-- 时间滚动输出 level为 ERROR 日志 --&gt;
    &lt;appender name=&quot;ERROR_FILE&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;!-- 正在记录的日志文件的路径及文件名 --&gt;
        &lt;file&gt;${log.path}/log_error.log&lt;/file&gt;
        &lt;!--日志文件输出格式--&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n&lt;/pattern&gt;
            &lt;charset&gt;UTF-8&lt;/charset&gt; &lt;!-- 此处设置字符集 --&gt;
        &lt;/encoder&gt;
        &lt;!-- 日志记录器的滚动策略，按日期，按大小记录 --&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;fileNamePattern&gt;${log.path}/error/log-error-%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;
            &lt;timeBasedFileNamingAndTriggeringPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP&quot;&gt;
                &lt;maxFileSize&gt;100MB&lt;/maxFileSize&gt;
            &lt;/timeBasedFileNamingAndTriggeringPolicy&gt;
            &lt;!--日志文件保留天数--&gt;
            &lt;maxHistory&gt;15&lt;/maxHistory&gt;
        &lt;/rollingPolicy&gt;
        &lt;!-- 此日志文件只记录ERROR级别的 --&gt;
        &lt;filter class=&quot;ch.qos.logback.classic.filter.LevelFilter&quot;&gt;
            &lt;level&gt;ERROR&lt;/level&gt;
            &lt;onMatch&gt;ACCEPT&lt;/onMatch&gt;
            &lt;onMismatch&gt;DENY&lt;/onMismatch&gt;
        &lt;/filter&gt;
    &lt;/appender&gt;

    &lt;!--
        &lt;logger&gt;用来设置某一个包或者具体的某一个类的日志打印级别、以及指定&lt;appender&gt;。
        &lt;logger&gt;仅有一个name属性，
        一个可选的level和一个可选的addtivity属性。
        name:用来指定受此logger约束的某一个包或者具体的某一个类。
        level:用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF，
              如果未设置此属性，那么当前logger将会继承上级的级别。
    --&gt;
    &lt;!--
        使用mybatis的时候，sql语句是debug下才会打印，而这里我们只配置了info，所以想要查看sql语句的话，有以下两种操作：
        第一种把&lt;root level=&quot;INFO&quot;&gt;改成&lt;root level=&quot;DEBUG&quot;&gt;这样就会打印sql，不过这样日志那边会出现很多其他消息
        第二种就是单独给mapper下目录配置DEBUG模式，代码如下，这样配置sql语句会打印，其他还是正常DEBUG级别：
     --&gt;
    &lt;!--开发环境:打印控制台--&gt;
    &lt;springProfile name=&quot;dev&quot;&gt;
        &lt;!--可以输出项目中的debug日志，包括mybatis的sql日志--&gt;
        &lt;logger name=&quot;com.guli&quot; level=&quot;INFO&quot; /&gt;

        &lt;!--
            root节点是必选节点，用来指定最基础的日志输出级别，只有一个level属性
            level:用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF，默认是DEBUG
            可以包含零个或多个appender元素。
        --&gt;
        &lt;root level=&quot;INFO&quot;&gt;
            &lt;appender-ref ref=&quot;CONSOLE&quot; /&gt;
            &lt;appender-ref ref=&quot;INFO_FILE&quot; /&gt;
            &lt;appender-ref ref=&quot;WARN_FILE&quot; /&gt;
            &lt;appender-ref ref=&quot;ERROR_FILE&quot; /&gt;
        &lt;/root&gt;
    &lt;/springProfile&gt;


    &lt;!--生产环境:输出到文件--&gt;
    &lt;springProfile name=&quot;pro&quot;&gt;

        &lt;root level=&quot;INFO&quot;&gt;
            &lt;appender-ref ref=&quot;CONSOLE&quot; /&gt;
            &lt;appender-ref ref=&quot;DEBUG_FILE&quot; /&gt;
            &lt;appender-ref ref=&quot;INFO_FILE&quot; /&gt;
            &lt;appender-ref ref=&quot;ERROR_FILE&quot; /&gt;
            &lt;appender-ref ref=&quot;WARN_FILE&quot; /&gt;
        &lt;/root&gt;
    &lt;/springProfile&gt;

&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


