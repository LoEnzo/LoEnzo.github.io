---
title: Spring Cloud Security Oauth2 单点登陆
tags:
 - Spring Cloud Security
 - Oauth2
 - JWT
categories:
 - SpringCloudNotes
date: 2021-09-02
---

::: tip

Spring Cloud Security 为构建安全的SpringBoot应用提供了一系列解决方案，结合Oauth2可以实现单点登录功能

:::
<!-- more -->

# 概念

## 单点登陆

单点登录（Single Sign On）指的是当有多个系统需要登录时，用户只需登录一个系统，就可以访问其他需要登录的系统而无需登录

## 模块划分

* oauth2-client 作为客户端
* oauth2-jwt-server 作为认证服务器

当我们访问 oauth2-client 需要认证的接口，跳转到 oauth2-jwt-server 上登陆认证成功后，即可直接放 oauth2-client的接口了

# 创建oauth2-client

* pom.xml

::: details pom.xml 和 oauth2-jwt-client 保持一致即可

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-oauth2</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.0</version>
</dependency>
<dependency>
    <groupId>cn.hutool</groupId>
    <artifactId>hutool-all</artifactId>
    <version>4.6.3</version>
</dependency>
```

:::

* application.xml

```yaml
server:
  port: 9501
  servlet:
    session:
      cookie:
        name: OAUTH2-CLIENT-SESSIONID #防止Cookie冲突，冲突会导致登录验证不通过
oauth2-server-url: http://localhost:9401
spring:
  application:
    name: oauth2-client
security:
  oauth2: #与oauth2-server对应的配置
    client:
      client-id: admin
      client-secret: admin123456
      user-authorization-uri: ${oauth2-server-url}/oauth/authorize
      access-token-uri: ${oauth2-server-url}/oauth/token
    resource:
      jwt:
        key-uri: ${oauth2-server-url}/oauth/token_key
```

## 单点登陆

* 启用单点登陆功能

```java
@EnableOAuth2Sso
@SpringBootApplication
public class Oauth2ClientApplication {
    public static void main(String[] args) {
        SpringApplication.run(Oauth2ClientApplication.class, args);
    }
}
```

* 修改认证服务器配置

::: details 修改认证服务器配置为 oauth2-jwt-server

`.autoApprove(true)`  自动授权配置，是指接入第三方认证后需要点击确认的操作，自动授权配置省略了这一步，只要选择了第三方登陆，默认统一授权

```java
@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {
    //以上省略一堆代码...
    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient("admin")
                .secret(passwordEncoder.encode("admin123456"))
                .accessTokenValiditySeconds(3600)
                .refreshTokenValiditySeconds(864000)
                .redirectUris("http://localhost:9501/login") //单点登录时配置
                .autoApprove(true) //自动授权配置
                .scopes("all")
                .authorizedGrantTypes("authorization_code","password","refresh_token");
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) {
        security.tokenKeyAccess("isAuthenticated()"); // 获取密钥需要身份认证，使用单点登录时必须配置
    }
}
```

:::

## 验证

访问客户端接口`http://localhost:9501/user/getCurrentUser`

* 通过浏览器访问

  会跳转到 oauth1-jwt-server 的认证服务器，要求登陆用户名、密码确定授权，可查看浏览器url变化`http://localhost:9401/login`

![image-20210903100554893](./images/image-20210903100554893.png)

* 通过PostMan 测试 Oauth2 的方式调用，填充下面的参数

![image-20210902192323966](./images/image-20210902192323966.png)

* 登陆成功，返回token相关信息

![image-20210902194013109](./images/image-20210902194013109.png)

* 最后使用该Token，可以看到请求的时候 Header中 添加了 Authorization Bearer token，token即是刚才获取的，我这里不知道为什么浏览器可以登陆成功，postman获取token后返回还是重定向到登陆界面，`待解决`，有成功的，下面回复下哦，感谢

## 增加权限、角色

* 添加配置开启基于方法的权限校验`EnableGlobalMethodSecurity(prePostEnabled = true)`

```java
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Order(101)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
}
```

::: details EnableGlobalMethodSecurity 注解、参数说明

当我们想要开启spring方法级安全时，只需要在任何 `@Configuration`实例上使用 `@EnableGlobalMethodSecurity` 注解就能达到此目的。

同时这个注解为我们提供了`prePostEnabled` 、`securedEnabled`和 `jsr250Enabled` 三种不同的机制来实现同一种功能：

| 注解                  | 说明                                                   | 备注                     |
| --------------------- | ------------------------------------------------------ | ------------------------ |
| prePostEnabled = true | 开启此类注解后，会解锁下面两个个注解，用于方法调用之上 |                          |
| @PreAuthorize         | 方法执行前进行验证                                     |                          |
| @PostAuthorize        | 方法执行后进行验证                                     | 适合验证带有返回值的权限 |

:::

* 在`UserController`中添加需要一些权限的接口作为测试验证

::: details 验证权限接口

```java
@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping("/write")
    @PreAuthorize("hasAuthority('write')")
    public String getWrite(Authentication authentication) {
        return "user " + authentication.getName() + " have a write authority";
    }

    @GetMapping("/read")
    @PreAuthorize("hasAuthority('read')")
    public String readDate(Authentication authentication) {
        return "user " + authentication.getName() + " have a read authority";
    }

    @GetMapping("/read-or-write")
    @PreAuthorize("hasAnyAuthority('read','write')")
    public String readWriteDate(Authentication authentication) {
        return "user " + authentication.getName() + " have a read or write authority";
    }

    @GetMapping("/admin-role")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String readAdmin(Authentication authentication) {
        return "user " + authentication.getName() + " have a admin role";
    }

    @GetMapping("/user-role")
    @PreAuthorize("hasRole('ROLE_USER')")
    public String readUser(Authentication authentication) {
        return "user " + authentication.getName() + " have a user role";
    }
}
```

:::

::: details PreAuthorize 注解参数说明

常用参数说明，[官方说明](https://docs.spring.io/spring-security/site/docs/4.0.1.RELEASE/reference/htmlsingle/#el-common-built-in)

| Expression                                                   | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `hasRole([role])`                                            | ‎如果当前本金具有指定角色，则返回。默认情况下，如果所提供的角色不是从"ROLE_"开始的，则会添加该角色。这可以通过修改打开进行自定义‎ .`true``defaultRolePrefix``DefaultWebSecurityExpressionHandler` |
| `hasAnyRole([role1,role2])`                                  | ‎返回‎`true` ‎如果当前委托人具有任何提供的角色（作为逗乐分离字符串列表给出）。默认情况下，如果所提供的角色不是从"ROLE_"开始的，则会添加该角色。这可以通过修改‎ `defaultRolePrefix` on `DefaultWebSecurityExpressionHandler`. |
| `hasAuthority([authority])`                                  | ‎如果当前委托人具有指定的权限，则返回。‎`true`                 |
| `hasAnyAuthority([authority1,authority2])`                   | ‎如果当前委托人具有任何提供的角色（作为逗乐分离字符串列表），则返回‎`true` |
| `principal`                                                  | ‎允许直接访问代表当前用户的主要对象‎                           |
| `authentication`                                             | ‎允许直接访问从‎`Authentication``SecurityContext`              |
| `permitAll`                                                  | ‎始终评估到‎`true`                                             |
| `denyAll`                                                    | ‎始终评估到‎`false`                                            |
| `isAnonymous()`                                              | ‎如果当前本金是匿名用户，则返回‎`true`                         |
| `isRememberMe()`                                             | ‎如果当前本金是记住-我用户，则返回‎`true`                      |
| `isAuthenticated()`                                          | ‎如果用户不是匿名的，则返回‎`true`                             |
| `isFullyAuthenticated()`                                     | ‎如果用户不是匿名用户或记住我用户，则返回‎`true`               |
| `hasPermission(Object target, Object permission)`            | ‎如果用户有权访问所提供的目标以获得给定的权限，则返回。例如‎`true``hasPermission(domainObject, 'read')` |
| `hasPermission(Object targetId, String targetType, Object permission)` | ‎如果用户有权访问所提供的目标以获得给定的权限，则返回。例如‎`true``hasPermission(1, 'com.example.domain.Message', 'read'` |

:::

* `oauth2-jwt-server `中`UserDetailsService`类修改权限，加入权限、角色划分

::: details 加入权限角色划分

```java
@Service
public class UserService implements UserDetailsService {
    private List<User> userList;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostConstruct
    public void initData() {
        String password = passwordEncoder.encode("123456");
        userList = new ArrayList<>();
        userList.add(new User("macro", password, AuthorityUtils.commaSeparatedStringToAuthorityList("read,write,ROLE_ADMIN")));
        userList.add(new User("andy", password, AuthorityUtils.commaSeparatedStringToAuthorityList("read,ROLE_USER")));
        userList.add(new User("mark", password, AuthorityUtils.commaSeparatedStringToAuthorityList("read,ROLE_USER")));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<User> findUserList = userList.stream().filter(user -> user.getUsername().equals(username)).collect(Collectors.toList());
        if (!CollectionUtils.isEmpty(findUserList)) {
            return findUserList.get(0);
        } else {
            throw new UsernameNotFoundException("用户名或密码错误");
        }
    }
}
```

:::

## 验证

参考：[SpringSecurity设置角色和权限的注意点](https://www.cnblogs.com/lori/p/10396302.html)

* macro 具有 admin 角色，read、write 权限

* andy、mark 具有 user 角色，只有 read 权限

* 访问`http://localhost:9501/user/admin-role`，分别 登陆 macro、andy 用户

![image-20210903171102416](./images/image-20210903171102416.png)

![image-20210903171613170](./images/image-20210903171613170.png)

* 其他可以尝试访问 controller 中验证相应角色、权限的接口

## 注意：

* Controller 中我没有加`ROLE_`前缀，报错没有权限，加了就没问题了，但是看别人的使用，是不需要添加的，`待处理`

* 注解 `hasAuthority` 和 `hasRole` 查看源码

  发现 `hasAuthority` 和 `hasRole` 最终的判断逻辑都是 `hasAnyAuthorityName` 方法，检验逻辑也没有看到会凭借 `ROLE_`前缀的地方，`待了解`

![image-20210903172049136](./images/image-20210903172049136.png)



* 通过浏览器访问，每次访问接口，跳转到到认证中心，认证通过后后续访问接口都是当前用户，因为只是简单权限校验，没有退出登陆，清除 Session、Cookie 等操作，所以需要手动清除以下：浏览器邮件检查，或者F12，下方选择网络，清除应用数据即可，后续访问接口则需要重新登陆认证，确认权限