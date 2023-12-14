<template><div><p>::: tip</p>
<p>Spring Cloud Security 为构建安全的SpringBoot应用提供了一系列解决方案，结合Oauth2可以实现单点登录功能</p>
<p>:::</p>
<!-- more -->
<h1 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h1>
<h2 id="单点登陆" tabindex="-1"><a class="header-anchor" href="#单点登陆" aria-hidden="true">#</a> 单点登陆</h2>
<p>单点登录（Single Sign On）指的是当有多个系统需要登录时，用户只需登录一个系统，就可以访问其他需要登录的系统而无需登录</p>
<p>Spring Security：用于安全访问的，这里我们我们用来做访问权限控制</p>
<p>OAuth2：是用来允许用户授权第三方应用访问他在另一个服务器上的资源的一种协议，它不是用来做单点登录的，但我们可以利用它来实现单点登录。在本例实现SSO的过程中，受保护的资源就是用户的信息（包括，用户的基本信息，以及用户所具有的权限），而我们想要访问这这一资源就需要用户登录并授权，OAuth2服务端负责令牌的发放等操作，</p>
<p>JWT：这令牌的生成我们采用JWT，也就是说JWT是用来承载用户的Access_Token的</p>
<p>SSO：是一种点单登陆思想，或者说是一种解决方案，是抽象的，我们要做的就是按照它的这种思想去实现它</p>
<h1 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h1>
<ul>
<li>单点登陆：登陆任何一个子系统，其他子系统可以直接进入</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/sso.png" alt="sso"></p>
<ul>
<li>单点注销：注销任何一个子系统，其他子系统也会被注销</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/sso1.png" alt="sso1"></p>
<h2 id="涉及参数" tabindex="-1"><a class="header-anchor" href="#涉及参数" aria-hidden="true">#</a> 涉及参数</h2>
<p>::: details Oauth2-client涉及参数详细说明</p>
<p><a href="https://andaily.com/spring-oauth-server/db_table_description.html" target="_blank" rel="noopener noreferrer">客户端配置说明</a></p>
<p><code v-pre>clientId</code>：（必须的）第三方用户的id（可理解为账号）。</p>
<p><code v-pre>clientSecret</code>：第三方应用和授权服务器之间的安全凭证(可理解为密码)</p>
<p><code v-pre>scope</code>：指定客户端申请的权限范围,可选值包括read,write,trust;其实授权赋予第三方用户可以在资源服务器获取资源，第三方访问资源的一个权限，访问范围。</p>
<p><code v-pre>resourceIds</code>：客户端所能访问的资源id集合</p>
<p><code v-pre>authorizedGrantTypes</code>：此客户端可以使用的授权类型，默认为空。</p>
<p>可选值包括<code v-pre>authorization_code</code>,<code v-pre>password,refresh_token</code>,<code v-pre>implicit,client_credentials</code></p>
<p>最常用的grant_type组合有: &quot;<code v-pre>authorization_code,refresh_token</code>&quot;(针对通过浏览器访问的客户端); &quot;<code v-pre>password,refresh_token</code>&quot;(针对移动设备的客户端)</p>
<p><code v-pre>registeredRedirectUris</code>：客户端的重定向URI</p>
<p><code v-pre>autoApproveScopes</code>：设置用户是否自动<code v-pre>Approval</code>操作, 默认值为 <code v-pre>false</code>, 可选值包括 <code v-pre>true</code>,<code v-pre>false</code>, <code v-pre>read</code>,<code v-pre>write</code>.</p>
<p>该字段只适用于<code v-pre>grant_type=&quot;authorization_code</code>的情况,当用户登录成功后,</p>
<p>若该值为<code v-pre>true</code>或支持的scope值,则会跳过用户Approve的页面, 直接授权.</p>
<p><code v-pre>authorities</code>：指定客户端所拥有的Spring Security的权限值。</p>
<p><code v-pre>accessTokenValiditySeconds</code>：设定客户端的<code v-pre>access_token</code>的有效时间值(单位:秒),可选, 若不设定值则使用默认的有效时间值(60 * 60 * 12, 12小时).</p>
<p><code v-pre>refreshTokenValiditySeconds</code>：设定客户端的<code v-pre>refresh_token</code>的有效时间值(单位:秒),可选, 若不设定值则使用默认的有效时间值(60 * 60 * 24 * 30, 30天).</p>
<p><code v-pre>additionalInformation</code>：这是一个预留的字段,在<code v-pre>Oauth</code>的流程中没有实际的使用,可选,但若设置值,必须是<code v-pre>JSON</code>格式的数据</p>
<p><code v-pre>security.oauth2.client.client-id</code>：指定OAuth2 client ID.</p>
<p><code v-pre>security.oauth2.client.client-secret</code>：指定OAuth2 client secret. 默认是一个随机的密码.</p>
<p><code v-pre>security.oauth2.client.user-authorization-uri</code>：用户跳转去获取access token的URI（授权端）</p>
<p><code v-pre>security.oauth2.client.access-token-uri</code>：指定获取access token的URI（令牌端）</p>
<p><code v-pre>security.oauth2.resource.jwt.key-uri</code>：JWT token的URI</p>
<p>需要确保以上URL都是存在的，不然启动会报错</p>
<p>注：在客户端配置文件中指定<code v-pre>security.oauth2.client.registered-redirect-uri</code>客户端跳转URI不生效，需要在认证中心中指定</p>
<p>:::</p>
<p>::: details Oauth2获取token，刷新token流程</p>
<h3 id="重点" tabindex="-1"><a class="header-anchor" href="#重点" aria-hidden="true">#</a> 重点：</h3>
<p><code v-pre>/oauth/authorize</code>：验证 <code v-pre>/oauth/token</code>：获取token</p>
<p><code v-pre>/oauth/confirm_access</code>：用户授权</p>
<p><code v-pre>/oauth/error</code>：认证失败</p>
<p><code v-pre>/oauth/check_token</code>：资源服务器用来校验token</p>
<p><code v-pre>/oauth/token_key</code>：如果jwt模式则可以用此来从认证服务器获取公钥</p>
<p>以上这些endpoint都在源码里的endpoint包里面。</p>
<h4 id="oauth2获取token的主要流程" tabindex="-1"><a class="header-anchor" href="#oauth2获取token的主要流程" aria-hidden="true">#</a> OAuth2获取token的主要流程：</h4>
<p>1.用户发起获取<code v-pre>token</code>的请求。</p>
<p>2.过滤器会验证<code v-pre>path</code>是否是认证的请求<code v-pre>/oauth/token</code>，如果为<code v-pre>false</code>，则直接返回没有后续操作。</p>
<p>3.过滤器通过<code v-pre>clientId</code>查询生成一个<code v-pre>Authentication</code>对象。</p>
<p>4.然后会通过<code v-pre>username</code>和生成的<code v-pre>Authentication</code>对象生成一个<code v-pre>UserDetails</code>对象，并检查用户是否存在。</p>
<p>5.以上全部通过会进入地址<code v-pre>/oauth/token</code>，即<code v-pre>TokenEndpoint</code>的<code v-pre>postAccessToken</code>方法中。</p>
<p>6.<code v-pre>postAccessToken</code>方法中会验证<code v-pre>Scope</code>，然后验证是否是<code v-pre>refreshToken</code>请求等。</p>
<p>7.之后调用AbstractTokenGranter中的grant方法。</p>
<p>8.<code v-pre>grant</code>方法中调用<code v-pre>AbstractUserDetailsAuthenticationProvider</code>的<code v-pre>authenticate</code>方法，通过<code v-pre>username</code>和<code v-pre>Authentication</code>对象来检索用户是否存在。</p>
<p>9.然后通过<code v-pre>DefaultTokenServices</code>类从<code v-pre>tokenStore</code>中获取<code v-pre>OAuth2AccessToken</code>对象。</p>
<p>10.然后将<code v-pre>OAuth2AccessToken</code>对象包装进响应流返回。</p>
<h4 id="oauth2刷新token的流程" tabindex="-1"><a class="header-anchor" href="#oauth2刷新token的流程" aria-hidden="true">#</a> OAuth2刷新token的流程</h4>
<p>刷新token（refresh token）的流程与获取token的流程只有⑨有所区别：</p>
<p>获取<code v-pre>token</code>调用的是<code v-pre>AbstractTokenGranter</code>中的<code v-pre>getAccessToken</code>方法，然后调用<code v-pre>tokenStore</code>中的<code v-pre>getAccessToken</code>方法获取<code v-pre>token</code>。</p>
<p>刷新<code v-pre>token</code>调用的是<code v-pre>RefreshTokenGranter</code>中的<code v-pre>getAccessToken</code>方法，然后使用<code v-pre>tokenStore</code>中的<code v-pre>refreshAccessToken</code>方法获取<code v-pre>token</code>。</p>
<p>:::</p>
<h2 id="模块划分" tabindex="-1"><a class="header-anchor" href="#模块划分" aria-hidden="true">#</a> 模块划分</h2>
<ul>
<li>oauth2-client 作为客户端</li>
<li>oauth2-jwt-server 作为认证服务器</li>
</ul>
<p>当我们访问 oauth2-client 需要认证的接口，跳转到 oauth2-jwt-server 上登陆认证成功后，即可直接放 oauth2-client的接口了</p>
<h1 id="创建oauth2-client" tabindex="-1"><a class="header-anchor" href="#创建oauth2-client" aria-hidden="true">#</a> 创建oauth2-client</h1>
<ul>
<li>pom.xml</li>
</ul>
<p>::: details pom.xml 和 oauth2-jwt-client 保持一致即可</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-oauth2&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt;
    &lt;artifactId&gt;jjwt&lt;/artifactId&gt;
    &lt;version&gt;0.9.0&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;cn.hutool&lt;/groupId&gt;
    &lt;artifactId&gt;hutool-all&lt;/artifactId&gt;
    &lt;version&gt;4.6.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li>application.xml</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单点登陆-1" tabindex="-1"><a class="header-anchor" href="#单点登陆-1" aria-hidden="true">#</a> 单点登陆</h2>
<ul>
<li>启用单点登陆功能</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@EnableOAuth2Sso
@SpringBootApplication
public class Oauth2ClientApplication {
    public static void main(String[] args) {
        SpringApplication.run(Oauth2ClientApplication.class, args);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改认证服务器配置</li>
</ul>
<p>::: details 修改认证服务器配置为 oauth2-jwt-server</p>
<p><code v-pre>.autoApprove(true)</code>  自动授权配置，是指接入第三方认证后需要点击确认的操作，自动授权配置省略了这一步，只要选择了第三方登陆，默认统一授权</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {
    //以上省略一堆代码...
    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient(&quot;admin&quot;)
                .secret(passwordEncoder.encode(&quot;admin123456&quot;))
                .accessTokenValiditySeconds(3600)
                .refreshTokenValiditySeconds(864000)
                .redirectUris(&quot;http://localhost:9501/login&quot;) //单点登录时配置
                .autoApprove(true) //自动授权配置
                .scopes(&quot;all&quot;)
                .authorizedGrantTypes(&quot;authorization_code&quot;,&quot;password&quot;,&quot;refresh_token&quot;);
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) {
        security.tokenKeyAccess(&quot;isAuthenticated()&quot;); // 获取密钥需要身份认证，使用单点登录时必须配置
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2>
<p>访问客户端接口<code v-pre>http://localhost:9501/user/getCurrentUser</code></p>
<ul>
<li>
<p>通过浏览器访问</p>
<p>会跳转到 oauth1-jwt-server 的认证服务器，要求登陆用户名、密码确定授权，可查看浏览器url变化<code v-pre>http://localhost:9401/login</code></p>
</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210903100554893.png" alt="image-20210903100554893"></p>
<ul>
<li>通过PostMan 测试 Oauth2 的方式调用，填充下面的参数</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210902192323966.png" alt="image-20210902192323966"></p>
<ul>
<li>登陆成功，返回token相关信息</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210902194013109.png" alt="image-20210902194013109"></p>
<ul>
<li>最后使用该Token，可以看到请求的时候 Header中 添加了 Authorization Bearer token，token即是刚才获取的，我这里不知道为什么浏览器可以登陆成功，postman获取token后返回还是重定向到登陆界面，<code v-pre>待解决</code>，有成功的，下面回复下哦，感谢</li>
</ul>
<h2 id="增加权限、角色" tabindex="-1"><a class="header-anchor" href="#增加权限、角色" aria-hidden="true">#</a> 增加权限、角色</h2>
<ul>
<li>添加配置开启基于方法的权限校验<code v-pre>EnableGlobalMethodSecurity(prePostEnabled = true)</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Order(101)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details EnableGlobalMethodSecurity 注解、参数说明</p>
<p>当我们想要开启spring方法级安全时，只需要在任何 <code v-pre>@Configuration</code>实例上使用 <code v-pre>@EnableGlobalMethodSecurity</code> 注解就能达到此目的。</p>
<p>同时这个注解为我们提供了<code v-pre>prePostEnabled</code> 、<code v-pre>securedEnabled</code>和 <code v-pre>jsr250Enabled</code> 三种不同的机制来实现同一种功能：</p>
<table>
<thead>
<tr>
<th>注解</th>
<th>说明</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>prePostEnabled = true</td>
<td>开启此类注解后，会解锁下面两个个注解，用于方法调用之上</td>
<td></td>
</tr>
<tr>
<td>@PreAuthorize</td>
<td>方法执行前进行验证</td>
<td></td>
</tr>
<tr>
<td>@PostAuthorize</td>
<td>方法执行后进行验证</td>
<td>适合验证带有返回值的权限</td>
</tr>
</tbody>
</table>
<p>:::</p>
<ul>
<li>在<code v-pre>UserController</code>中添加需要一些权限的接口作为测试验证</li>
</ul>
<p>::: details 验证权限接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@RestController
@RequestMapping(&quot;/user&quot;)
public class UserController {

    @GetMapping(&quot;/write&quot;)
    @PreAuthorize(&quot;hasAuthority('write')&quot;)
    public String getWrite(Authentication authentication) {
        return &quot;user &quot; + authentication.getName() + &quot; have a write authority&quot;;
    }

    @GetMapping(&quot;/read&quot;)
    @PreAuthorize(&quot;hasAuthority('read')&quot;)
    public String readDate(Authentication authentication) {
        return &quot;user &quot; + authentication.getName() + &quot; have a read authority&quot;;
    }

    @GetMapping(&quot;/read-or-write&quot;)
    @PreAuthorize(&quot;hasAnyAuthority('read','write')&quot;)
    public String readWriteDate(Authentication authentication) {
        return &quot;user &quot; + authentication.getName() + &quot; have a read or write authority&quot;;
    }

    @GetMapping(&quot;/admin-role&quot;)
    @PreAuthorize(&quot;hasRole('ROLE_ADMIN')&quot;)
    public String readAdmin(Authentication authentication) {
        return &quot;user &quot; + authentication.getName() + &quot; have a admin role&quot;;
    }

    @GetMapping(&quot;/user-role&quot;)
    @PreAuthorize(&quot;hasRole('ROLE_USER')&quot;)
    public String readUser(Authentication authentication) {
        return &quot;user &quot; + authentication.getName() + &quot; have a user role&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details PreAuthorize 注解参数说明</p>
<p>常用参数说明，<a href="https://docs.spring.io/spring-security/site/docs/4.0.1.RELEASE/reference/htmlsingle/#el-common-built-in" target="_blank" rel="noopener noreferrer">官方说明</a></p>
<table>
<thead>
<tr>
<th>Expression</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>hasRole([role])</code></td>
<td>‎如果当前本金具有指定角色，则返回。默认情况下，如果所提供的角色不是从&quot;ROLE_&quot;开始的，则会添加该角色。这可以通过修改打开进行自定义‎ .<code v-pre>true``defaultRolePrefix``DefaultWebSecurityExpressionHandler</code></td>
</tr>
<tr>
<td><code v-pre>hasAnyRole([role1,role2])</code></td>
<td>‎返回‎<code v-pre>true</code> ‎如果当前委托人具有任何提供的角色（作为逗乐分离字符串列表给出）。默认情况下，如果所提供的角色不是从&quot;ROLE_&quot;开始的，则会添加该角色。这可以通过修改‎ <code v-pre>defaultRolePrefix</code> on <code v-pre>DefaultWebSecurityExpressionHandler</code>.</td>
</tr>
<tr>
<td><code v-pre>hasAuthority([authority])</code></td>
<td>‎如果当前委托人具有指定的权限，则返回。‎<code v-pre>true</code></td>
</tr>
<tr>
<td><code v-pre>hasAnyAuthority([authority1,authority2])</code></td>
<td>‎如果当前委托人具有任何提供的角色（作为逗乐分离字符串列表），则返回‎<code v-pre>true</code></td>
</tr>
<tr>
<td><code v-pre>principal</code></td>
<td>‎允许直接访问代表当前用户的主要对象‎</td>
</tr>
<tr>
<td><code v-pre>authentication</code></td>
<td>‎允许直接访问从‎<code v-pre>Authentication``SecurityContext</code></td>
</tr>
<tr>
<td><code v-pre>permitAll</code></td>
<td>‎始终评估到‎<code v-pre>true</code></td>
</tr>
<tr>
<td><code v-pre>denyAll</code></td>
<td>‎始终评估到‎<code v-pre>false</code></td>
</tr>
<tr>
<td><code v-pre>isAnonymous()</code></td>
<td>‎如果当前本金是匿名用户，则返回‎<code v-pre>true</code></td>
</tr>
<tr>
<td><code v-pre>isRememberMe()</code></td>
<td>‎如果当前本金是记住-我用户，则返回‎<code v-pre>true</code></td>
</tr>
<tr>
<td><code v-pre>isAuthenticated()</code></td>
<td>‎如果用户不是匿名的，则返回‎<code v-pre>true</code></td>
</tr>
<tr>
<td><code v-pre>isFullyAuthenticated()</code></td>
<td>‎如果用户不是匿名用户或记住我用户，则返回‎<code v-pre>true</code></td>
</tr>
<tr>
<td><code v-pre>hasPermission(Object target, Object permission)</code></td>
<td>‎如果用户有权访问所提供的目标以获得给定的权限，则返回。例如‎<code v-pre>true``hasPermission(domainObject, 'read')</code></td>
</tr>
<tr>
<td><code v-pre>hasPermission(Object targetId, String targetType, Object permission)</code></td>
<td>‎如果用户有权访问所提供的目标以获得给定的权限，则返回。例如‎<code v-pre>true``hasPermission(1, 'com.example.domain.Message', 'read'</code></td>
</tr>
</tbody>
</table>
<p>:::</p>
<ul>
<li><code v-pre>oauth2-jwt-server </code>中<code v-pre>UserDetailsService</code>类修改权限，加入权限、角色划分</li>
</ul>
<p>::: details 加入权限角色划分</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Service
public class UserService implements UserDetailsService {
    private List&lt;User&gt; userList;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostConstruct
    public void initData() {
        String password = passwordEncoder.encode(&quot;123456&quot;);
        userList = new ArrayList&lt;&gt;();
        userList.add(new User(&quot;macro&quot;, password, AuthorityUtils.commaSeparatedStringToAuthorityList(&quot;read,write,ROLE_ADMIN&quot;)));
        userList.add(new User(&quot;andy&quot;, password, AuthorityUtils.commaSeparatedStringToAuthorityList(&quot;read,ROLE_USER&quot;)));
        userList.add(new User(&quot;mark&quot;, password, AuthorityUtils.commaSeparatedStringToAuthorityList(&quot;read,ROLE_USER&quot;)));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List&lt;User&gt; findUserList = userList.stream().filter(user -&gt; user.getUsername().equals(username)).collect(Collectors.toList());
        if (!CollectionUtils.isEmpty(findUserList)) {
            return findUserList.get(0);
        } else {
            throw new UsernameNotFoundException(&quot;用户名或密码错误&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="验证-1" tabindex="-1"><a class="header-anchor" href="#验证-1" aria-hidden="true">#</a> 验证</h2>
<p>参考：<a href="https://www.cnblogs.com/lori/p/10396302.html" target="_blank" rel="noopener noreferrer">SpringSecurity设置角色和权限的注意点</a></p>
<ul>
<li>
<p>macro 具有 admin 角色，read、write 权限</p>
</li>
<li>
<p>andy、mark 具有 user 角色，只有 read 权限</p>
</li>
<li>
<p>访问<code v-pre>http://localhost:9501/user/admin-role</code>，分别 登陆 macro、andy 用户</p>
</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210903171102416.png" alt="image-20210903171102416"></p>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210903171613170.png" alt="image-20210903171613170"></p>
<ul>
<li>
<p>其他可以尝试访问 controller 中验证相应角色、权限的接口</p>
</li>
<li>
<p>启动另外一个 <code v-pre>oauth2-client</code> 模拟多个子系统单点登陆，修改配置文件<code v-pre>application-client1.yml</code>，只改变端口为9502即可，注意，<code v-pre>oauth2-jwt-server</code>中，权限配置，需要配置多个回调地址</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>.redirectUris(&quot;http://localhost:9501/login&quot;,&quot;http://localhost:9502/login&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>测试，访问<code v-pre>http://localhost:9501/user/admin-role</code>，分别 登陆 macro、andy 用户，登陆成功后，再访问<code v-pre>http://localhost:9502/user/admin-role</code>发现不再需要验证</p>
</li>
</ul>
<h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意：</h2>
<ul>
<li>
<p>Controller 中我没有加<code v-pre>ROLE_</code>前缀，报错没有权限，加了就没问题了，但是看别人的使用，是不需要添加的，<code v-pre>待处理</code></p>
</li>
<li>
<p>注解 <code v-pre>hasAuthority</code> 和 <code v-pre>hasRole</code> 查看源码</p>
<p>发现 <code v-pre>hasAuthority</code> 和 <code v-pre>hasRole</code> 最终的判断逻辑都是 <code v-pre>hasAnyAuthorityName</code> 方法，检验逻辑也没有看到会凭借 <code v-pre>ROLE_</code>前缀的地方，<code v-pre>待了解</code></p>
</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210903172049136.png" alt="image-20210903172049136"></p>
<ul>
<li>通过浏览器访问，每次访问接口，跳转到到认证中心，认证通过后后续访问接口都是当前用户，因为只是简单权限校验，没有退出登陆，清除 Session、Cookie 等操作，所以需要手动清除以下：浏览器邮件检查，或者F12，下方选择网络，清除应用数据即可，后续访问接口则需要重新登陆认证，确认权限</li>
</ul>
<h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1>
<p><a href="https://www.cnblogs.com/cjsblog/p/10548022.html" target="_blank" rel="noopener noreferrer">OAuth2实现单点登录SSO - 废物大师兄 - 博客园 (cnblogs.com)</a>，<a href="https://github.com/liuminglei/spring-security-oauth2-sso-sample" target="_blank" rel="noopener noreferrer">对应代码</a></p>
<p><a href="http://www.macrozheng.com/#/cloud/oauth2_sso?id=%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95%E7%AE%80%E4%BB%8B" target="_blank" rel="noopener noreferrer">Spring Cloud Security：Oauth2实现单点登录</a></p>
</div></template>


