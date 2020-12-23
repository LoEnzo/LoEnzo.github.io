---
title: Spring IoC AOP理解
tags:
categories:
 - StudyNotes
date: 2020-05-11
---

::: tip

Spring 的核心是**控制反转**（Ioc）和**面向切面**（AOP），**依赖注入**（DI）感觉是控制反转的另一个理解角度。Ioc主要目的是降低开发的复杂性，让对象的统一让Spring进行管理，不需要使用都自己new一个对象；AOP主要是把共用的代码封装起来，减少重复代码，比如连接数据库创建的Connection对象等，用户登陆校验这些，就不需要每次都做重复性的工作了。[参考](https://blog.csdn.net/justry_deng/article/details/85065656)

:::

<!-- more -->

## IoC

Inversion of Control，控制反转，以前创建一个对象并使用：

```java
public static void main(String[] args) {
    User user = new User();
    System.out.println(user.getName());
}
```

spring可以在配置文件里面创建对应的bean来指定

```xml
<!-- 配置service <bean> 配置需要创建的对象   id ：用于之后从spring容器获得实例时使用的   class ：需要创建实例的全限定类名  -->
<bean id="user" class="com.hjwu.ioc.User"></bean>    
```

实际使用：

```java
public void runUser() {
    // 1. 加载Spring配置文件，根据创建对象
    ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
    // 2. 得到配置创建的对象
    User user = (User) context.getBean("user");
    System.out.println(user.getName());
}
```

::: tip

看起来更复杂，但是这是一种思想，我一般也没有用后面一种，Springmvc之后可以用注解就能更清晰的体现出来了

:::

## DI

dependency injection，依赖注入，SpringMVC之后框架特点就能使用注解，配置更少，尤其是bean

实际使用：

```java
class Demo{
    
    @Resource()
    private User user;
    
    System.out.println(user.getName());
}
```

::: tip

其他还有大量的注解，不一一解释，自己大概理解的意思就是，从最以前的每次调用的对象都需要new一个对象出来，后面可以在配置文件中配置bean来指定具体某个包下某个类的对象，再到后面可以使用注解，直接装配，

:::

## AOP

spect-oriented programming，面向切面编程

Spring提供了4种类型的AOP支持：

- 基于代理的经典Spring AOP；
- 纯POJO切面；
- @AspectJ注解驱动的切面；
- 注入式AspectJ切面（适用于Spring各版本）；

前面三种都是Spring AOP实现的变体，Spring AOP构建在动态代理基础之上，因此，Spring对AOP的支持局限于方法拦截；也正是因为Spring基于动态代理，所以Spring只支持方法连接点。

AOP主要的作用是：**日志记录，性能统计，安全控制，事务处理，异常处理，权限登录**等等。AOP代理由Spring的IoC容器负责生成、管理，其依赖关系也由IoC容器负责管理。

相关概念

| 注解                        | 备注                                                         |
| --------------------------- | ------------------------------------------------------------ |
| @Aspect（切面）             | 通知和切点共同定义了切面的全部内容；                         |
| @Joint Point（连接点）      | 程序执行过程中明确的点，是在应用执行过程中能够插入切面的一个点，切面代码利用这些点插入到应用的正常流程之中并添加新的行为； |
| Advice（通知）              | AOP在特定的切入点上执行的增强处理，**五个通知类型**          |
| 环绕通知（Around）          | 需要放行操作。通知包裹了被通知的方法，在被通知的方法**调用之前**和**调用之后**执行**自定义的行为**。环绕通知是最重要的通知类型，**像事务、日志等都是环绕通知**； |
| 前置通知（Before）          | 在目标方法被调用之前调用通知功能，@Before只需要指定切入点表达式即可； |
| 后置通知（After）           | 在目标方法完成之后调用通知，此时不关心方法的输出是什么。不论拦截的方法是否有异常。在目标方法完成之后做增强，无论目标方法什么时候成功完成。@After可以指定一个切入点表达式； |
| 返回通知（After-returning） | 在目标方法成功执行之后调用通知，@AfterReturning除了指定切入点表达式后，还可以指定一个返回值形参名returning，代表目标方法的返回值； |
| 异常通知（After-throwing）  | 要用来处理程序中未处理的异常，在目标抛出异常后调用通知，@AfterThrowing除了指定切入点表达式后，还可以指定一个throwing的返回值形参名，可以通过该形参名来访问目标方法中所抛出的异常对象； |
| Pointcut（切入点）          | 带有通知的连接点，在程序中主要体现为书写切入点表达式。如果说通知定义了切面的“什么”和“何时”的话，那么切点就定义了“何处”； |
| AOP代理：                   | AOP框架创建的对象，代理就是目标对象的增强。Spring中的AOP代理可以使JDK动态代理，也可以是CGLIB代理，前者基于接口，后者基于子类； |
| 织入（Weaving）             | 实现AOP代理所声明的功能，即把切面应用到目标对象并创建新的代理对象的过程。在目标对象的生命周期中，可以在编译期、类加载期、运行期进行织入； |
| 关注点                      | 切面的具体功能方法被称为关注点                               |

### AspectJ

Spring借助AspectJ的切点表达式语言来定义Spring切面

Spring AOP所支持的AspectJ切点指示器

| AspectJ指示器 | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| arg()         | 限制连接点匹配参数为指定类型的执行方法                       |
| @args()       | 限制连接点匹配参数由指定注解标注的执行方法                   |
| execution()   | 用于匹配是连接点的执行方法                                   |
| this()        | 限制连接点匹配AOP代理的bean引用为指定类型的类                |
| target        | 限制连接点匹配目标对象为指定类型的类                         |
| @target()     | 限制连接点匹配特定的执行对象，这些对象对应的类要具有指定类型的注解 |
| within()      | 限制连接点匹配指定的类型                                     |
| @within()     | 限制连接点匹配指定注解所标注的类型（当使用Spring AOP时，方法定义在由指定的注解所标注的类里） |
| @annotation   | 限定匹配带有指定注解的连接点                                 |

within()、@within()、@annotation、execution()，用于声明aop拦截点，具体细化到包，类，方法，注解等

```java
/**
 *   第一个*, 匹配所有返回类型
 *   第二个..*，匹配包下面的所有类
 *   第三个.*，匹配所有的方法
 *   第四个(..), 匹配任意方法任意参数。
 */
@Pointcut(
        "("+ "@within(com.hjwu.demoAOP.annotation.RecordParameters)"
         + " || "
         + "@annotation(com.hjwu.demoAOP.annotation.RecordParameters)"
         + " || "
         + "execution(* com.hjwu.demoAOP.controller..*.*(..))" + ")"
         + " && "
         + "!@annotation(com.hjwu.demoAOP.annotation.IgnoreRecordParameters)"
)
public void executeAdvice() {}
```



### 样例

**自定义注解**

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface AdviceOne {
    
    // 可以添加一些校验方法，
    boolean validateUser() default true;
}
```

**调用方式：**

在需要被增强的方法前使用改注解，主要在定义切点的地方指定改注解才能生效

```java
@AdviceOne
public void static getMethod(){
    // 业务逻辑；
}
```

**AopConfig**

@Before 、@After、 @Around、 @AfterReturning、 @AfterThrowing

@Around里面都可以实现 @Before @After的功能，@Around 中执行 ProceedingJoinPoint.proceed() 语句前后的输出可以相当于@Before @After

总的顺序是： @Around -> (伪Before) -> @Before -> (业务) -> @After -> (伪After) -> @Around -> @AfterReturning -> @AfterThrowing

```java
@Aspect
@Configuration
public class AopConfig {

    /**
     * 将表达式【* com.aspire.controller.AopController.*(..))】所匹配的所有方法标记为切点，
     * 切点名为 executeAdvice()
     *
     * 注:execution里的表达式所涉及到的类名(除了基本类以外)，其它的要用全类名;干脆不管是不是基础类，都推荐使用全类名
     * 注:如果有多个表达式进行交集或者并集的话，可以使用&&、||、or，示例:
     * @Pointcut(
     *  "execution(* com.szlzcl.laodeduo.common.CommonResponse com.szlzcl.laodeduo.*.controller..*(..)) "
     *      + " || "
     *      + "execution(* com.szlzcl.laodeduo.common.CommonResponse com.szlzcl.laodeduo.config.common..*(..))"
     *  )
     */
     
     // @Pointcut("execution(* com.hjwu.demoAOP.controller.AopController.*(..))")
     // 使用注解来定位AOP作为节点的方法
    @Pointcut("@annotation(com.hjwu.demoAOP.aspect.AdviceOne)")
    public void executeAdvice() {}

    /**
     * 切点executeAdvice()的前置增强方法
     */
    @Before(value = "executeAdvice()")
    public void beforeAdvice(JoinPoint joinPoint) {
        LOGGER.info("@Before执行了")
    }

    /**
     * 切点executeAdvice()的后增强方法
     */
    @After("executeAdvice()")
    public void afterAdvice() {
        String threadName = Thread.currentThread().getName();
        System.out.println(threadName + " -> 后置增强afterAdvice执行了");
    }

    /**
     * 切点executeAdvice()的后增强方法
     *
     * 注:当被增强方法 或  afterAdvice正常执行时，才会走此方法
     * 注: returning指明获取到的(环绕增强返回的)返回值
     */
    @AfterReturning(value = "executeAdvice()", returning = "map")
    public void afterReturningAdvice(Map<String, Object> map) {
        LOGGER.info("@AfterReturning执行饿了，返回结果为" + map);
    }


    /**
     *  当被增强方法 或 afterAdvice 或 afterReturningAdvice抛出异常时，会被afterThrowingAdvice
     *  捕获到异常，进而短路走 afterThrowingAdvice方法
     */
    @AfterThrowing(value = "executeAdvice()", throwing ="ex")
    public void afterThrowingAdvice(Exception ex) {
        LOGGER.info("AfterThrowing捕获到了异常：" + ex);
    }


    /**
     *  环绕增强 会在 被增强方法执行完毕后  第一个执行，
     *  所以在绝大多数时候，我们都直接返回thisJoinPoint.proceed();的返回值；
     *  如果此方法返回null,那么@AfterReturning方法获取到的返回值 就会是null
     *
     * @throws Throwable 当目标方法抛出异常时
     */
    @Around("executeAdvice()")
    public Object aroundAdvice(ProceedingJoinPoint thisJoinPoint) throws Throwable {
        LOGGER.info("伪@Before, before proceed()执行了");
        // 执行被增强方法，并获取到返回值，类似于 过滤器的chain.doFilter(req,resp)方法
        Object obj = thisJoinPoint.proceed();
		LOGGER.info("伪@After, After proceed()执行了");
        return obj;
    }
}
```

调用：

```java
@RestController
public class AopController {

    private static final Logger LOG = LoggerFactory.getLogger(AopController.class);

    @AdviceOne
    @RequestMapping(value = "/test", method = {RequestMethod.POST})
    public Map<String, Object> test(@RequestBody User user) {
        LOG.info("具体业务逻辑");
        String threadName = Thread.currentThread().getName();
        System.out.println(threadName + " -> " + JSON.toJSONString(user));
        Map<String, Object> map = new HashMap<>(8);
        map.put("params", JSON.toJSONString(user));
        map.put("code", "0000");
        map.put("message", "成功");
        return map;
    }
}
```

控制台：

```java
2020-07-27 18:24:20:499[INFO][http-nio-8089-exec-4]-伪@Before, before proceed()执行了
2020-07-27 18:24:20:499[INFO][http-nio-8089-exec-4]-@Before执行了
2020-07-27 18:24:20:501[INFO][http-nio-8089-exec-4]-具体业务逻辑
http-nio-8089-exec-4 -> {"age":19,"cardId":"234234234","gender":"male","handsomeValue":100,"motto":"test","name":"hjwu"}
2020-07-27 18:24:20:549[INFO][http-nio-8089-exec-4]-伪@After, After proceed()执行了
2020-07-27 18:24:20:549[INFO][http-nio-8089-exec-4]-@After执行了
2020-07-27 18:24:20:549[INFO][http-nio-8089-exec-4]-@AfterReturning执行了，返回结果为{code=0000, params={"age":19,"cardId":"234234234","gender":"male","handsomeValue":100,"motto":"test","name":"hjwu"}, message=成功}
```

## 过滤器、拦截器、AOP的区别

**过滤器**

过滤器可以拦截到方法的请求和响应（ServletRequest request, SetvletResponse response），并对请求响应做出响应的过滤操作，比如设置字符编码、鉴权操作。

**拦截器**

拦截器可以在方法之前（preHandle）和方法执行之后（afterCompletion）进行操作，回调操作（postHandle），可以获取执行的方法的名称，请求（HttpServletRequest）。

**AOP切片**

AOP操作可以对操作进行横向的拦截，最大的优势在于可以获取执行方法的参数，对方法进行统一的处理，常见使用日志，事务，请求参数安全验证等。

**顺序**

请求->>过滤器->>拦截器-->Aspect->>拦截器->>过滤器->>响应

AOP顺序：@Around -> (伪Before) -> @Before -> (业务) -> @After -> (伪After) -> @Around -> @AfterReturning -> @AfterThrowing

