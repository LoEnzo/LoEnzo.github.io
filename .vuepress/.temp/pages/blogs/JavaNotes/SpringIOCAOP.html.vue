<template><div><p>::: tip</p>
<p>Spring 的核心是<strong>控制反转</strong>（Ioc）和<strong>面向切面</strong>（AOP），<strong>依赖注入</strong>（DI）感觉是控制反转的另一个理解角度。Ioc主要目的是降低开发的复杂性，让对象的统一让Spring进行管理，不需要使用都自己new一个对象；AOP主要是把共用的代码封装起来，减少重复代码，比如连接数据库创建的Connection对象等，用户登陆校验这些，就不需要每次都做重复性的工作了。<a href="https://blog.csdn.net/justry_deng/article/details/85065656" target="_blank" rel="noopener noreferrer">参考</a></p>
<p>:::</p>
<!-- more -->
<h2 id="ioc" tabindex="-1"><a class="header-anchor" href="#ioc" aria-hidden="true">#</a> IoC</h2>
<p>Inversion of Control，控制反转，以前创建一个对象并使用：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static void main(String[] args) {
    User user = new User();
    System.out.println(user.getName());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>spring可以在配置文件里面创建对应的bean来指定</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;!-- 配置service &lt;bean&gt; 配置需要创建的对象   id ：用于之后从spring容器获得实例时使用的   class ：需要创建实例的全限定类名  --&gt;
&lt;bean id=&quot;user&quot; class=&quot;com.hjwu.ioc.User&quot;&gt;&lt;/bean&gt;    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>实际使用：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public void runUser() {
    // 1. 加载Spring配置文件，根据创建对象
    ApplicationContext context = new ClassPathXmlApplicationContext(&quot;applicationContext.xml&quot;);
    // 2. 得到配置创建的对象
    User user = (User) context.getBean(&quot;user&quot;);
    System.out.println(user.getName());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: tip</p>
<p>看起来更复杂，但是这是一种思想，我一般也没有用后面一种，Springmvc之后可以用注解就能更清晰的体现出来了</p>
<p>:::</p>
<h2 id="di" tabindex="-1"><a class="header-anchor" href="#di" aria-hidden="true">#</a> DI</h2>
<p>dependency injection，依赖注入，SpringMVC之后框架特点就能使用注解，配置更少，尤其是bean</p>
<p>实际使用：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>class Demo{
    
    @Resource()
    private User user;
    
    System.out.println(user.getName());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: tip</p>
<p>其他还有大量的注解，不一一解释，自己大概理解的意思就是，从最以前的每次调用的对象都需要new一个对象出来，后面可以在配置文件中配置bean来指定具体某个包下某个类的对象，再到后面可以使用注解，直接装配，</p>
<p>:::</p>
<h2 id="aop" tabindex="-1"><a class="header-anchor" href="#aop" aria-hidden="true">#</a> AOP</h2>
<p>spect-oriented programming，面向切面编程</p>
<p>Spring提供了4种类型的AOP支持：</p>
<ul>
<li>基于代理的经典Spring AOP；</li>
<li>纯POJO切面；</li>
<li>@AspectJ注解驱动的切面；</li>
<li>注入式AspectJ切面（适用于Spring各版本）；</li>
</ul>
<p>前面三种都是Spring AOP实现的变体，Spring AOP构建在动态代理基础之上，因此，Spring对AOP的支持局限于方法拦截；也正是因为Spring基于动态代理，所以Spring只支持方法连接点。</p>
<p>AOP主要的作用是：<strong>日志记录，性能统计，安全控制，事务处理，异常处理，权限登录</strong>等等。AOP代理由Spring的IoC容器负责生成、管理，其依赖关系也由IoC容器负责管理。</p>
<p>相关概念</p>
<table>
<thead>
<tr>
<th>注解</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>@Aspect（切面）</td>
<td>通知和切点共同定义了切面的全部内容；</td>
</tr>
<tr>
<td>@Joint Point（连接点）</td>
<td>程序执行过程中明确的点，是在应用执行过程中能够插入切面的一个点，切面代码利用这些点插入到应用的正常流程之中并添加新的行为；</td>
</tr>
<tr>
<td>Advice（通知）</td>
<td>AOP在特定的切入点上执行的增强处理，<strong>五个通知类型</strong></td>
</tr>
<tr>
<td>环绕通知（Around）</td>
<td>需要放行操作。通知包裹了被通知的方法，在被通知的方法<strong>调用之前</strong>和<strong>调用之后</strong>执行<strong>自定义的行为</strong>。环绕通知是最重要的通知类型，<strong>像事务、日志等都是环绕通知</strong>；</td>
</tr>
<tr>
<td>前置通知（Before）</td>
<td>在目标方法被调用之前调用通知功能，@Before只需要指定切入点表达式即可；</td>
</tr>
<tr>
<td>后置通知（After）</td>
<td>在目标方法完成之后调用通知，此时不关心方法的输出是什么。不论拦截的方法是否有异常。在目标方法完成之后做增强，无论目标方法什么时候成功完成。@After可以指定一个切入点表达式；</td>
</tr>
<tr>
<td>返回通知（After-returning）</td>
<td>在目标方法成功执行之后调用通知，@AfterReturning除了指定切入点表达式后，还可以指定一个返回值形参名returning，代表目标方法的返回值；</td>
</tr>
<tr>
<td>异常通知（After-throwing）</td>
<td>要用来处理程序中未处理的异常，在目标抛出异常后调用通知，@AfterThrowing除了指定切入点表达式后，还可以指定一个throwing的返回值形参名，可以通过该形参名来访问目标方法中所抛出的异常对象；</td>
</tr>
<tr>
<td>Pointcut（切入点）</td>
<td>带有通知的连接点，在程序中主要体现为书写切入点表达式。如果说通知定义了切面的“什么”和“何时”的话，那么切点就定义了“何处”；</td>
</tr>
<tr>
<td>AOP代理：</td>
<td>AOP框架创建的对象，代理就是目标对象的增强。Spring中的AOP代理可以使JDK动态代理，也可以是CGLIB代理，前者基于接口，后者基于子类；</td>
</tr>
<tr>
<td>织入（Weaving）</td>
<td>实现AOP代理所声明的功能，即把切面应用到目标对象并创建新的代理对象的过程。在目标对象的生命周期中，可以在编译期、类加载期、运行期进行织入；</td>
</tr>
<tr>
<td>关注点</td>
<td>切面的具体功能方法被称为关注点</td>
</tr>
</tbody>
</table>
<h3 id="aspectj" tabindex="-1"><a class="header-anchor" href="#aspectj" aria-hidden="true">#</a> AspectJ</h3>
<p>Spring借助AspectJ的切点表达式语言来定义Spring切面</p>
<p>Spring AOP所支持的AspectJ切点指示器</p>
<table>
<thead>
<tr>
<th style="text-align:left">AspectJ指示器</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">arg()</td>
<td style="text-align:left">限制连接点匹配参数为指定类型的执行方法</td>
</tr>
<tr>
<td style="text-align:left">@args()</td>
<td style="text-align:left">限制连接点匹配参数由指定注解标注的执行方法</td>
</tr>
<tr>
<td style="text-align:left">execution()</td>
<td style="text-align:left">用于匹配是连接点的执行方法</td>
</tr>
<tr>
<td style="text-align:left">this()</td>
<td style="text-align:left">限制连接点匹配AOP代理的bean引用为指定类型的类</td>
</tr>
<tr>
<td style="text-align:left">target</td>
<td style="text-align:left">限制连接点匹配目标对象为指定类型的类</td>
</tr>
<tr>
<td style="text-align:left">@target()</td>
<td style="text-align:left">限制连接点匹配特定的执行对象，这些对象对应的类要具有指定类型的注解</td>
</tr>
<tr>
<td style="text-align:left">within()</td>
<td style="text-align:left">限制连接点匹配指定的类型</td>
</tr>
<tr>
<td style="text-align:left">@within()</td>
<td style="text-align:left">限制连接点匹配指定注解所标注的类型（当使用Spring AOP时，方法定义在由指定的注解所标注的类里）</td>
</tr>
<tr>
<td style="text-align:left">@annotation</td>
<td style="text-align:left">限定匹配带有指定注解的连接点</td>
</tr>
</tbody>
</table>
<p>within()、@within()、@annotation、execution()，用于声明aop拦截点，具体细化到包，类，方法，注解等</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>/**
 *   第一个*, 匹配所有返回类型
 *   第二个..*，匹配包下面的所有类
 *   第三个.*，匹配所有的方法
 *   第四个(..), 匹配任意方法任意参数。
 */
@Pointcut(
        &quot;(&quot;+ &quot;@within(com.hjwu.demoAOP.annotation.RecordParameters)&quot;
         + &quot; || &quot;
         + &quot;@annotation(com.hjwu.demoAOP.annotation.RecordParameters)&quot;
         + &quot; || &quot;
         + &quot;execution(* com.hjwu.demoAOP.controller..*.*(..))&quot; + &quot;)&quot;
         + &quot; &amp;&amp; &quot;
         + &quot;!@annotation(com.hjwu.demoAOP.annotation.IgnoreRecordParameters)&quot;
)
public void executeAdvice() {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样例" tabindex="-1"><a class="header-anchor" href="#样例" aria-hidden="true">#</a> 样例</h3>
<p><strong>自定义注解</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface AdviceOne {
    
    // 可以添加一些校验方法，
    boolean validateUser() default true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>调用方式：</strong></p>
<p>在需要被增强的方法前使用改注解，主要在定义切点的地方指定改注解才能生效</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@AdviceOne
public void static getMethod(){
    // 业务逻辑；
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>AopConfig</strong></p>
<p>@Before 、@After、 @Around、 @AfterReturning、 @AfterThrowing</p>
<p>@Around里面都可以实现 @Before @After的功能，@Around 中执行 ProceedingJoinPoint.proceed() 语句前后的输出可以相当于@Before @After</p>
<p>总的顺序是： @Around -&gt; (伪Before) -&gt; @Before -&gt; (业务) -&gt; @After -&gt; (伪After) -&gt; @Around -&gt; @AfterReturning -&gt; @AfterThrowing</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Aspect
@Configuration
public class AopConfig {

    /**
     * 将表达式【* com.aspire.controller.AopController.*(..))】所匹配的所有方法标记为切点，
     * 切点名为 executeAdvice()
     *
     * 注:execution里的表达式所涉及到的类名(除了基本类以外)，其它的要用全类名;干脆不管是不是基础类，都推荐使用全类名
     * 注:如果有多个表达式进行交集或者并集的话，可以使用&amp;&amp;、||、or，示例:
     * @Pointcut(
     *  &quot;execution(* com.szlzcl.laodeduo.common.CommonResponse com.szlzcl.laodeduo.*.controller..*(..)) &quot;
     *      + &quot; || &quot;
     *      + &quot;execution(* com.szlzcl.laodeduo.common.CommonResponse com.szlzcl.laodeduo.config.common..*(..))&quot;
     *  )
     */
     
     // @Pointcut(&quot;execution(* com.hjwu.demoAOP.controller.AopController.*(..))&quot;)
     // 使用注解来定位AOP作为节点的方法
    @Pointcut(&quot;@annotation(com.hjwu.demoAOP.aspect.AdviceOne)&quot;)
    public void executeAdvice() {}

    /**
     * 切点executeAdvice()的前置增强方法
     */
    @Before(value = &quot;executeAdvice()&quot;)
    public void beforeAdvice(JoinPoint joinPoint) {
        LOGGER.info(&quot;@Before执行了&quot;)
    }

    /**
     * 切点executeAdvice()的后增强方法
     */
    @After(&quot;executeAdvice()&quot;)
    public void afterAdvice() {
        String threadName = Thread.currentThread().getName();
        System.out.println(threadName + &quot; -&gt; 后置增强afterAdvice执行了&quot;);
    }

    /**
     * 切点executeAdvice()的后增强方法
     *
     * 注:当被增强方法 或  afterAdvice正常执行时，才会走此方法
     * 注: returning指明获取到的(环绕增强返回的)返回值
     */
    @AfterReturning(value = &quot;executeAdvice()&quot;, returning = &quot;map&quot;)
    public void afterReturningAdvice(Map&lt;String, Object&gt; map) {
        LOGGER.info(&quot;@AfterReturning执行饿了，返回结果为&quot; + map);
    }


    /**
     *  当被增强方法 或 afterAdvice 或 afterReturningAdvice抛出异常时，会被afterThrowingAdvice
     *  捕获到异常，进而短路走 afterThrowingAdvice方法
     */
    @AfterThrowing(value = &quot;executeAdvice()&quot;, throwing =&quot;ex&quot;)
    public void afterThrowingAdvice(Exception ex) {
        LOGGER.info(&quot;AfterThrowing捕获到了异常：&quot; + ex);
    }


    /**
     *  环绕增强 会在 被增强方法执行完毕后  第一个执行，
     *  所以在绝大多数时候，我们都直接返回thisJoinPoint.proceed();的返回值；
     *  如果此方法返回null,那么@AfterReturning方法获取到的返回值 就会是null
     *
     * @throws Throwable 当目标方法抛出异常时
     */
    @Around(&quot;executeAdvice()&quot;)
    public Object aroundAdvice(ProceedingJoinPoint thisJoinPoint) throws Throwable {
        LOGGER.info(&quot;伪@Before, before proceed()执行了&quot;);
        // 执行被增强方法，并获取到返回值，类似于 过滤器的chain.doFilter(req,resp)方法
        Object obj = thisJoinPoint.proceed();
		LOGGER.info(&quot;伪@After, After proceed()执行了&quot;);
        return obj;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@RestController
public class AopController {

    private static final Logger LOG = LoggerFactory.getLogger(AopController.class);

    @AdviceOne
    @RequestMapping(value = &quot;/test&quot;, method = {RequestMethod.POST})
    public Map&lt;String, Object&gt; test(@RequestBody User user) {
        LOG.info(&quot;具体业务逻辑&quot;);
        String threadName = Thread.currentThread().getName();
        System.out.println(threadName + &quot; -&gt; &quot; + JSON.toJSONString(user));
        Map&lt;String, Object&gt; map = new HashMap&lt;&gt;(8);
        map.put(&quot;params&quot;, JSON.toJSONString(user));
        map.put(&quot;code&quot;, &quot;0000&quot;);
        map.put(&quot;message&quot;, &quot;成功&quot;);
        return map;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>2020-07-27 18:24:20:499[INFO][http-nio-8089-exec-4]-伪@Before, before proceed()执行了
2020-07-27 18:24:20:499[INFO][http-nio-8089-exec-4]-@Before执行了
2020-07-27 18:24:20:501[INFO][http-nio-8089-exec-4]-具体业务逻辑
http-nio-8089-exec-4 -&gt; {&quot;age&quot;:19,&quot;cardId&quot;:&quot;234234234&quot;,&quot;gender&quot;:&quot;male&quot;,&quot;handsomeValue&quot;:100,&quot;motto&quot;:&quot;test&quot;,&quot;name&quot;:&quot;hjwu&quot;}
2020-07-27 18:24:20:549[INFO][http-nio-8089-exec-4]-伪@After, After proceed()执行了
2020-07-27 18:24:20:549[INFO][http-nio-8089-exec-4]-@After执行了
2020-07-27 18:24:20:549[INFO][http-nio-8089-exec-4]-@AfterReturning执行了，返回结果为{code=0000, params={&quot;age&quot;:19,&quot;cardId&quot;:&quot;234234234&quot;,&quot;gender&quot;:&quot;male&quot;,&quot;handsomeValue&quot;:100,&quot;motto&quot;:&quot;test&quot;,&quot;name&quot;:&quot;hjwu&quot;}, message=成功}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="过滤器、拦截器、aop的区别" tabindex="-1"><a class="header-anchor" href="#过滤器、拦截器、aop的区别" aria-hidden="true">#</a> 过滤器、拦截器、AOP的区别</h2>
<p><strong>过滤器</strong></p>
<p>过滤器可以拦截到方法的请求和响应（ServletRequest request, SetvletResponse response），并对请求响应做出响应的过滤操作，比如设置字符编码、鉴权操作。</p>
<p><strong>拦截器</strong></p>
<p>拦截器可以在方法之前（preHandle）和方法执行之后（afterCompletion）进行操作，回调操作（postHandle），可以获取执行的方法的名称，请求（HttpServletRequest）。</p>
<p><strong>AOP切片</strong></p>
<p>AOP操作可以对操作进行横向的拦截，最大的优势在于可以获取执行方法的参数，对方法进行统一的处理，常见使用日志，事务，请求参数安全验证等。</p>
<p><strong>顺序</strong></p>
<p>请求-&gt;&gt;过滤器-&gt;&gt;拦截器--&gt;Aspect-&gt;&gt;拦截器-&gt;&gt;过滤器-&gt;&gt;响应</p>
<p>AOP顺序：@Around -&gt; (伪Before) -&gt; @Before -&gt; (业务) -&gt; @After -&gt; (伪After) -&gt; @Around -&gt; @AfterReturning -&gt; @AfterThrowing</p>
</div></template>


