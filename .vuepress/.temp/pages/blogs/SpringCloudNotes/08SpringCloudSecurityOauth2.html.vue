<template><div><p>::: tip</p>
<p>Spring Cloud Security 为构建安全的SpringBoot应用提供了一系列解决方案，结合Oauth2可以实现单点登录、令牌中继、令牌交换等功能，<a href="https://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html" target="_blank" rel="noopener noreferrer">参考阮一峰</a></p>
<p>:::</p>
<!-- more -->
<h1 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h1>
<h2 id="oauth2" tabindex="-1"><a class="header-anchor" href="#oauth2" aria-hidden="true">#</a> Oauth2</h2>
<p>OAuth（开放授权）是一个开放标准，允许用户授权第三方移动应用访问他们存储在另外的服务提供者上的信息，而不需要将用户名和密码提供给第三方移动应用或分享他们数据的所有内容，OAuth2.0是OAuth协议的延续版本，但不向后兼容OAuth 1.0即完全废止了OAuth1.0。</p>
<p>场景：第三方QQ、微信、支付宝授权登录</p>
<h2 id="相关名词" tabindex="-1"><a class="header-anchor" href="#相关名词" aria-hidden="true">#</a> 相关名词</h2>
<ul>
<li><strong>Resource owner</strong>（资源拥有者：<code v-pre>登陆用户</code>）：拥有该资源的最终用户，他有访问资源的账号密码；</li>
<li><strong>Resource server</strong>（资源服务器）：拥有受保护资源的服务器，如果请求包含正确的访问令牌，可以访问资源；</li>
<li><strong>Client</strong>（客户端：<code v-pre>使用第三方账号授权登陆的app、web等应用</code>）：访问资源的客户端，会使用访问令牌去获取资源服务器的资源，可以是浏览器、移动设备或者服务器；</li>
<li><strong>Authorization server</strong>（认证服务器）：用于认证用户的服务器，如果客户端认证通过，发放访问资源服务器的令牌。</li>
</ul>
<h1 id="授权模式" tabindex="-1"><a class="header-anchor" href="#授权模式" aria-hidden="true">#</a> 授权模式</h1>
<ul>
<li>授权码模式（authorization code）（常用）：正宗的OAuth2的授权模式，客户端先将用户导向认证服务器，登录后获取授权码，然后进行授权，最后根据授权码获取访问令牌</li>
<li>密码模式（resource owner password credentials）（常用）：和授权码模式相比，取消了获取授权码的过程，直接获取访问令牌</li>
<li>简化模式（implicit）：客户端直接向用户获取用户名和密码，之后向认证服务器获取访问令牌</li>
<li>客户端模式（client credentials）：客户端直接通过客户端认证（比如client_id和client_secret）从认证服务器获取访问令牌</li>
</ul>
<h2 id="授权码模式" tabindex="-1"><a class="header-anchor" href="#授权码模式" aria-hidden="true">#</a> 授权码模式</h2>
<ul>
<li>（A）用户打开客户端以后，客户端要求用户给予授权（前端，携带回调地址，跳转三方登陆或者弹出窗口，要求授权）</li>
<li>（B）用户同意给予客户端授权（前端，用户密码登陆或者扫码确定授权）</li>
<li>（C）客户端使用上一步获得的授权，向认证服务器申请令牌（后端，携带授权码申请令牌）</li>
<li>（D）认证服务器对客户端进行认证以后，确认无误，同意发放令牌，有需要带上刷新令牌（后端，认证通过，返回令牌）</li>
<li>（E）客户端使用令牌，向资源服务器申请获取资源（后端，卸载令牌，访问资源，登陆）</li>
<li>（F）资源服务器确认令牌无误，同意向客户端开放资源（前端，登陆成功，访问具体资源）</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210901165641559.png" alt="image-20210901165641559"></p>
<h3 id="实例分析" tabindex="-1"><a class="header-anchor" href="#实例分析" aria-hidden="true">#</a> 实例分析：</h3>
<p>用户登陆A.com，需要三方授权，跳转到B.com，授权成功，跳转回来，登陆成功</p>
<p>A，获取授权码，用户登陆 A.com，选用三方登陆，前端进行弹出窗口或这跳转链接到 B.com 要求用户登陆，发起的请求链接如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>https://b.com/oauth/authorize?response_type=code&amp;
  client_id=CLIENT_ID&amp;
  redirect_uri=CALLBACK_URL&amp;
  scope=read
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details 参数说明</p>
<p>上面 URL 中，</p>
<p><code v-pre>response_type</code>参数表示要求返回授权码（<code v-pre>code</code>）</p>
<p><code v-pre>client_id</code>参数让 B 知道是谁在请求，</p>
<p><code v-pre>redirect_uri</code>参数是 B 接受或拒绝请求后的跳转网址</p>
<p><code v-pre>scope</code>参数表示要求的授权范围（这里是只读）</p>
<p>:::</p>
<p>B，用户输入密码，或者扫码成功后，确认授权登陆，返回下面信息，<code v-pre>callback</code>是之前设置的回调地址，<code v-pre>code</code>参数就是授权码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>https://a.com/callback?code=AUTHORIZATION_CODE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>C，后端拿着这个授权码，向认证服务器申请令牌</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>https://b.com/oauth/token?
	client_id=CLIENT_ID&amp;
	client_secret=CLIENT_SECRET&amp;
	grant_type=authorization_code&amp;
	code=AUTHORIZATION_CODE&amp;
	redirect_uri=CALLBACK_URL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details 参数说明</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code># 上面 URL 中，

`client_id`参数和`client_secret`参数用来让 B 确认 A 的身份（`client_secret`参数是保密的，因此只能在后端发请求），
`grant_type`参数的值是`AUTHORIZATION_CODE`，表示采用的授权方式是授权码，
`code`参数是上一步拿到的授权码，
`redirect_uri`参数是令牌颁发后的回调网址。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>D，认证服务器返回令牌</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>{    
  &quot;access_token&quot;:&quot;ACCESS_TOKEN&quot;,
  &quot;token_type&quot;:&quot;bearer&quot;,
  &quot;expires_in&quot;:2592000,
  &quot;refresh_token&quot;:&quot;REFRESH_TOKEN&quot;,
  &quot;scope&quot;:&quot;read&quot;,
  &quot;uid&quot;:100101,
  &quot;info&quot;:{...}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>E，客户端拿到令牌后，携带令牌访问用户资源，即登陆成功</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://a.com/xxx
header中添加 Authorization Bearer 396465c0-ef6e-4c0d-8b76-b43ac2b6f715
Bearer 后面的即为之前拿到的令牌
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="密码模式" tabindex="-1"><a class="header-anchor" href="#密码模式" aria-hidden="true">#</a> 密码模式</h2>
<ul>
<li>(A)客户端从用户获取用户名和密码</li>
<li>(B)客户端通过用户的用户名和密码访问认证服务器</li>
<li>(C)认证服务器返回访问令牌（有需要带上刷新令牌）</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210901121253902.png" alt="image-20210901121253902"></p>
<p>这个相比之前的授权码模式，简化了获取授权码的步骤，直接是客户端拿到用户的用户名和密码，直接向认证服务器申请令牌，<code v-pre>grant_type</code>的值为<code v-pre>password</code>，请求如下：</p>
<p>这种方式风险很大，因此只适用于其他授权方式都无法采用的情况，而且必须是用户高度信任的应用</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>https://oauth.b.com/token?
  grant_type=password&amp;
  username=USERNAME&amp;
  password=PASSWORD&amp;
  client_id=CLIENT_ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简化模式-未尝试" tabindex="-1"><a class="header-anchor" href="#简化模式-未尝试" aria-hidden="true">#</a> 简化模式（未尝试）</h2>
<p>简化模式（implicit grant type）不通过第三方应用程序的服务器，直接在浏览器中向认证服务器申请令牌，跳过了&quot;授权码&quot;这个步骤，因此得名。所有步骤在浏览器中完成，令牌对访问者是可见的，且客户端不需要认证，</p>
<p>这种方式把令牌直接传给前端，是很不安全的。因此，只能用于一些安全要求不高的场景，并且令牌的有效期必须非常短，通常就是会话期间（session）有效，浏览器关掉，令牌就失效了</p>
<ul>
<li>（A）客户端将用户导向认证服务器</li>
<li>（B）用户决定是否给于客户端授权</li>
<li>（C）假设用户给予授权，认证服务器将用户导向客户端指定的&quot;重定向URI&quot;，并在URI的Hash部分包含了访问令牌。</li>
<li>（D）浏览器向资源服务器发出请求，其中不包括上一步收到的Hash值</li>
<li>（E）资源服务器返回一个网页，其中包含的代码可以获取Hash值中的令牌</li>
<li>（F）浏览器执行上一步获得的脚本，提取出令牌</li>
<li>（G）浏览器将令牌发给客户端</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210901121439658.png" alt="image-20210901121439658"></p>
<h2 id="客户端模式-未尝试" tabindex="-1"><a class="header-anchor" href="#客户端模式-未尝试" aria-hidden="true">#</a> 客户端模式（未尝试）</h2>
<ul>
<li>（A）客户端向认证服务器进行身份认证，并要求一个访问令牌。</li>
<li>（B）认证服务器确认无误后，向客户端提供访问令牌。</li>
</ul>
<p>注意：</p>
<p>A步骤中，客户端发出的HTTP请求，包含以下参数：</p>
<ul>
<li>granttype：表示授权类型，此处的值固定为&quot;clientcredentials&quot;，必选项。</li>
<li>scope：表示权限范围，可选项</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210901122110985.png" alt="image-20210901122110985"></p>
<h1 id="创建oauth2-server模块" tabindex="-1"><a class="header-anchor" href="#创建oauth2-server模块" aria-hidden="true">#</a> 创建Oauth2-server模块</h1>
<p>作用：模拟资源服务器，认证服务器，接口调用</p>
<ul>
<li>pom依赖</li>
</ul>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>application-yml</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 9401
spring:
  application:
    name: oauth2-service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加UserService实现UserDetailsService接口，用于加载用户信息</li>
</ul>
<p>::: details 初始化一些用户信息</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Service
public class UserService implements UserDetailsService {
    private List&lt;User&gt; userList;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostConstruct
    public void initData() {
        String password = passwordEncoder.encode(&quot;123456&quot;);
        userList = new ArrayList&lt;&gt;();
        userList.add(new User(&quot;macro&quot;, password, AuthorityUtils.commaSeparatedStringToAuthorityList(&quot;admin&quot;)));
        userList.add(new User(&quot;andy&quot;, password, AuthorityUtils.commaSeparatedStringToAuthorityList(&quot;client&quot;)));
        userList.add(new User(&quot;mark&quot;, password, AuthorityUtils.commaSeparatedStringToAuthorityList(&quot;client&quot;)));
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
<ul>
<li>添加<code v-pre>认证服务器配置</code>，使用<code v-pre>@EnableAuthorizationServer</code>注解开启</li>
</ul>
<p>::: details 模拟认证服务器配置</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    /**
     * 使用密码模式需要配置
     */
    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) {
        endpoints.authenticationManager(authenticationManager)
                .userDetailsService(userService);
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient(&quot;admin&quot;)//配置client_id
                .secret(passwordEncoder.encode(&quot;admin123456&quot;))//配置client_secret
                .accessTokenValiditySeconds(3600)//配置访问token的有效期
                .refreshTokenValiditySeconds(864000)//配置刷新token的有效期
                .redirectUris(&quot;http://www.baidu.com&quot;)//配置redirect_uri，用于授权成功后跳转
                .scopes(&quot;all&quot;)//配置申请的权限范围
                .authorizedGrantTypes(&quot;authorization_code&quot;,&quot;password&quot;);//配置grant_type，表示授权类型
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li>添加<code v-pre>资源服务器配置</code>，使用<code v-pre>@EnableResourceServer</code>注解开启</li>
</ul>
<p>::: details 模拟资源服务器配置</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest()
                .authenticated()
                .and()
                .requestMatchers()
                .antMatchers(&quot;/user/**&quot;);//配置需要保护的资源路径
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li>添加<code v-pre>SpringSecurity配置</code>，允许认证相关路径的访问及表单登录</li>
</ul>
<p>::: details 过滤不需认证的路径</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.csrf()
                .disable()
                .authorizeRequests()
                .antMatchers(&quot;/oauth/**&quot;, &quot;/login/**&quot;, &quot;/logout/**&quot;)
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .permitAll();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li>测试接口，返回认证信息</li>
</ul>
<p>::: details 测试接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@RestController
@RequestMapping(&quot;/user&quot;)
public class UserController {
    @GetMapping(&quot;/getCurrentUser&quot;)
    public Object getCurrentUser(Authentication authentication) {
        return authentication.getPrincipal();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h1 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h1>
<h2 id="授权码模式大致流程" tabindex="-1"><a class="header-anchor" href="#授权码模式大致流程" aria-hidden="true">#</a> 授权码模式大致流程</h2>
<ul>
<li>
<p>启动auth2-server服务</p>
</li>
<li>
<p><a href="http://localhost:9401/oauth/authorize?response_type=code&amp;client_id=admin&amp;redirect_uri=http://www.baidu.com&amp;scope=all&amp;state=normal" target="_blank" rel="noopener noreferrer">访问地址</a>：模拟用户登陆时候，选择三方登陆，统一授权，返回的url中，包含了认证服务器给的授权码</p>
<p>https://www.baidu.com/?code=11KUJe&amp;state=normal`</p>
</li>
<li>
<p>携带授权码，向认证服务器申请令牌，认证服务器返回令牌</p>
</li>
<li>
<p>携带令牌访问资源，用户使用三方账号登陆成功</p>
</li>
</ul>
</div></template>


