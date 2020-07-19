---
title: Lombok
tags:
 - Lombok
categories:
 - framework
date: 2020-05-11
---

::: tip

Java项目中的POJO类，我们会话很多的步骤去创建**getter**/**setter**/**toString**；异常处理；I/O流的关闭操作等等，这些样板代码既没有技术含量，又影响着代码的美观，Lombok应运而生。

:::

<!-- more -->


## Idea使用

#### 1. 引入相应的maven依赖

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.16.18</version>
    <scope>provided</scope>
</dependency>
```

注：

版本自行选择；

Lombok的    **<scope>provided</scope>**，说明它只在编译阶段生效，不需要打入包中。Lombok在编译期将带Lombok注解的Java文件正确编译为完整的Class文件。

#### 2. IDEA插件支持

 点击File-- Settings设置界面，安装Lombok插件；

 点击File-- Settings设置界面，Build--Complier--AnnocationProcessors，开启 AnnocationProcessors：（开启该项是为了让Lombok注解在编译阶段起到作用）

#### 3. lombok常用注解

| 注解                                           | 介绍                                                         |
| ---------------------------------------------- | ------------------------------------------------------------ |
| **@Data**                                      | 在JavaBean中使用，注解包含包含getter、setter、NoArgsConstructor注解 |
| **@Value**                                     | Data类似，区别在于它会把所有成员变量默认定义为private final修饰，并且不会生成set方法 |
| **@getter**                                    | 在JavaBean中使用，注解会生成对应的getter方法                 |
| **@setter**                                    | 在JavaBean中使用，注解会生成对应的setter方法                 |
| **@NoArgsConstructor**                         | 在JavaBean中使用，注解会生成对应的无参构造方法               |
| **@AllArgsConstructor**                        | 在JavaBean中使用，注解会生成对应的有参构造方法               |
| **@RequiredArgsConstructor**                   | 生成private构造方法，使用staticName选项生成指定名称的static方法 |
| **@ToString**                                  | 在JavaBean中使用，注解会自动重写对应的toStirng方法           |
| **@ToString(exclude={"column1","column2"})**   | 排除多个column列所对应的元素                                 |
| **@ToString(of={"column1","column2"})**        | 只生成包含多个column列所对应的元素                           |
| **@EqualsAndHashCode**                         | 在JavaBean中使用，注解会自动重写对应的equals方法和hashCode方法 |
| **@Slf4j**                                     | 在需要打印日志的类中使用，项目中使用slf4j日志框架            |
| **@Log4j**                                     | 在需要打印日志的类中使用，项目中使用log4j日志框架            |
| **@NonNull**                                   | 注解快速判断是否为空,为空抛出java.lang.NullPointerException  |
| **@Synchronized**                              | 注解自动添加到同步机制，生成的代码并不是直接锁方法,而是锁代码块， 作用范围是方法上 |
| **@Cleanup**                                   | 注解用于确保已分配的资源被释放（IO的连接关闭）               |
| **@Accessors(chain = true)**                   | 链式风格，在调用set方法时，返回这个类的实例对象              |
| **@RequiredArgsContructor(staticName = "of")** | 生成一个静态方法，用于构建本类对象，与@NonNull联用，指定那些属性是本方法参数 |
| **@Builder**                                   | 构建者模式                                                   |
| **@Delegate**                                  | 代理模式                                                     |

## Lombok的五大弊端

### 说明：

Lombok的目的是减少代码的重复编写，并提供比较好的解决方案。当然也存在一些争议性的注解，可以根据实际场景选择使用。

1️⃣协同性要求较高，侵入性高
 因为Lombok的使用要求开发者一定要在IDE中安装对应的插件。如果未安装插件的话，使用IDE打开一个基于Lombok的项目的话会提示找不到方法等错误。导致项目编译失败。也就是说，如果项目组中有一个人使用了Lombok，那么其他人就必须也要安装IDE插件。否则就没办法协同开发。更重要的是，如果定义的一个jar包中使用了Lombok，那么就要求所有依赖这个jar包的所有应用都必须安装插件，这种侵入性是很高的。

2️⃣代码可读性差，可调试性低。

在代码中使用了Lombok，确实可以帮忙减少很多代码，因为Lombok会帮忙自动生成很多代码。但是这些代码是要在编译阶段才会生成的，所以在开发的过程中，其实很多代码其实是缺失的。在代码中大量使用Lombok，就导致代码的可读性会低很多，而且也会给代码调试带来一定的问题。比如，想要知道某个类中的某个属性的getter方法都被哪些类引用的话，就没那么简单了。

3️⃣有坑

因为Lombok使代码开发非常简便，这就使得部分开发者对其产生过度依赖。在使用Lombok过程中，如果对于各种注解的底层原理不理解的话，很容易产生意想不到的结果。举一个简单的例子，当使用@Data定义一个类的时候，会自动生成equals()方法 。但是如果只使用了@Data，而不使用`@EqualsAndHashCode(callSuper=true)`的话，会默认是`@EqualsAndHashCode(callSuper=false)`，这时候生成的equals()方法只会比较子类的属性，不会考虑从父类继承的属性，无论父类属性访问权限是否开放。这就可能得到意想不到的结果。

4️⃣影响升级

因为Lombok对于代码有很强的侵入性，就可能带来一个比较大的问题，那就是会影响对JDK的升级。按照如今JDK的升级频率，每半年都会推出一个新的版本，但是Lombok作为一个第三方工具，并且是由开源团队维护的，那么迭代速度是无法保证的。所以，如果需要升级到某个新版本的JDK的时候，若其中的特性在Lombok中不支持的话就会受到影响。还有一个可能带来的问题，就是Lombok自身的升级也会受到限制。因为一个应用可能依赖了多个jar包，而每个jar包可能又要依赖不同版本的Lombok，这就导致在应用中需要做版本仲裁，而jar包版本仲裁是没那么容易的，而且发生问题的概率也很高。

5️⃣破坏封装性

以上几个问题，我认为都是有办法可以避免的。但是有些人排斥使用Lombok还有一个重要的原因，那就是他会破坏封装性。众所周知，Java的三大特性包括封装性、继承性和多态性。如果在代码中直接使用Lombok，那么会自动生成getter、setter 等方法，这就意味着，一个类中的所有参数都自动提供了设置和读取方法。

面向对象封装的定义是：通过访问权限控制，隐藏内部数据，外部仅能通过类提供的有限的接口访问、修改内部数据。所以，暴露不应该暴露的 setter 方法，明显违反了面向对象的封装特性。

### 实操需要注意的地方:

##### 1、@Getter 和 @Setter

该注解使用在类或者属性上。生成的getter遵循布尔属性的约定。例如：boolean类型的flag，getter方法为 isFlag() 而不是 getFlag()。在使用该注解时，会默认生成一个无参构造，和对应的 getter 和 setter 方法 。

##### 2、@NonNull

该注解使用在属性上，该注解用于属性的非空检查，当放在setter方法的字段上，将生成一个空检查，如果为空则抛出NullPointerException。该注解会默认是生成一个无参构造。

##### 3、@ToString

该注解使用在类上，该注解默认生成任何非静态字段以名称-值的形式输出。

1. 如果需要可以通过注释参数`includeFieldNames`来控制输出中是否包含的属性名称。
2. 可以通过`exclude`参数中包含字段名称，可以从生成的方法中排除特定字段。
3. 可以通过`callSuper`参数控制父类的输出。

注意：父类也要有toString方法，不然打印的是对象内存地址

##### 4、@EqualsAndHashCode

该注解使用在类上，会同时生成`equals`和`hashCode`。注意继承关系的时候该注解的使用。存在继承关系需要设置`callSuper`参数为true。

##### 5、@Data

该注解使用在类上，该注解会提供Getter、Setter、equals、canEqual、hasCode和toString等方法，注解后在编译时会自动加进去。该注解是最常用的注解，本质上使用`@Data`注解，类默认`@ToString`和`@EqualsAndHashCode`以及每个字段都有`@Setter`和`@Getter`。该注解也会生成一个公共构造函数，可以将任何`@NonNull`和final字段作为参数。

虽然`@Data`注解非常有用，但是它没有与其他注解相同的控制粒度。@Data提供了一个可以生成静态工厂的单一参数，将staticConstructor参数设置为所需要的名称，Lombok自动生成的构造函数设置为私有，并提供公开的给定名称的静态工厂方法。

##### 6、@AllArgsConstructor

该注解使用在类上。该注解提供一个全参数的构造方法，默认不提供无参构造。

##### 7、@NoArgsConstructor

该注解使用在类上。使用后创建一个无参构造函数。

##### 8、@RequiredArgsConstructor

该注解使用在类上。使用类中所有带有`@NonNull`注解的或者带有 final 修饰的成员变量生成对应的构造方法。

##### 9、 @Value

这个注解用在类上。会生成含所有参数的构造方法，get 方法。此外还提供了equals、hashCode、toString 方法。

注意：没有setter

##### 10、@Cleanup

该注解使用在属性前。该注解是用来保证分配的资源被释放。在本地变量上使用该注解，任何后续代码都将封装在try/finally中，确保当前作用于中的资源被释放。默认`@Cleanup`清理的方法为close，可以使用value指定不同的方法名称。

##### 11、@Synchronized

该注解使用在类或者实例方法上。Synchronized在一个方法上，使用关键字可能会导致结果和想要的结果不同，因为多线程情况下会出现异常情况。Synchronized
 关键字将在this示例方法情况下锁定当前对象，或者class讲台方法的对象上多锁定。这可能会导致死锁现象。一般情况下建议锁定一个专门用于此目的的独立锁，而不是允许公共对象进行锁定。该注解也是为了达到该目的。

##### 12、@SneakyThrows

该注解使用在方法上。该注解可以将方法中的代码用 try-catch 语句包裹起来，捕获异常并在 catch 中用 `Lombok.sneakyThrow(e)`把异常抛出，可以使用 `@SneakyThrows(Exception.class)`的形式指定抛出哪种异常。该注解需要谨慎使用。

##### 13、@Log

(这是一个泛型注解，具体有很多种形式)

注解在类上。有如下选择可用：

```java
//@CommonsLog
private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(LogExample.class);
//@JBossLog
private static final org.jboss.logging.Logger log = org.jboss.logging.Logger.getLogger(LogExample.class);
//@Log
private static final java.util.logging.Logger log = java.util.logging.Logger.getLogger(LogExample.class.getName());
//@Log4j
private static final org.apache.log4j.Logger log = org.apache.log4j.Logger.getLogger(LogExample.class);
//@Log4j2
private static final org.apache.logging.log4j.Logger log = org.apache.logging.log4j.LogManager.getLogger(LogExample.class);
//@Slf4j
private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(LogExample.class);
//@XSlf4j
private static final org.slf4j.ext.XLogger log = org.slf4j.ext.XLoggerFactory.getXLogger(LogExample.class);
```

默认情况下，记录器的主题（或名称）将是使用注释进行@Log注释的类的类名称。这可以通过指定topic参数来定制。例如：@XSlf4j(topic="reporting")。该类型注解可以满足不同的日志系统的日志使用，Lombok提供了一些自定义配置项可以参看官方说明文档。

##### 14、@Builder [Builder Pattern](https://www.jianshu.com/p/e4944a1bb3a2)

关于Builder较为复杂一些，Builder的作用之一是为了解决在某个类有很多构造函数的情况，也省去写很多构造函数的麻烦，在设计模式[Design Pattern](https://www.jianshu.com/p/f2dd70d1e2fd)中的思想是：用一个内部类去实例化一个对象，避免一个类出现过多构造函数。

## 报错：

#### 1. @AllArgsConstructor 添加后编译失败（暂未解决）

```cmd
Parameter 0 of constructor in com.hjwu.springboot.entity.User required a bean of type 'java.lang.Integer' that could not be found.
```

