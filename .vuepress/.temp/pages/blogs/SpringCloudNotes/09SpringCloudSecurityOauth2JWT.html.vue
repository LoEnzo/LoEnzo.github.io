<template><div><p>::: tip</p>
<p>Spring Cloud Security 为构建安全的SpringBoot应用提供了一系列解决方案，结合Oauth2还可以实现更多功能，比如使用JWT令牌存储信息，刷新令牌功能</p>
<p>:::</p>
<!-- more -->
<h1 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h1>
<h2 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h2>
<p>JWT是JSON WEB TOKEN的缩写，它是基于 RFC 7519 标准定义的一种可以安全传输的的JSON对象，由于使用了数字签名，所以是可信任和安全的</p>
<h2 id="jwt的组成" tabindex="-1"><a class="header-anchor" href="#jwt的组成" aria-hidden="true">#</a> JWT的组成</h2>
<ul>
<li>JWT token的格式：header.payload.signature；</li>
</ul>
<p>::: details header中用于存放签名的生成算法</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>{
    &quot;alg&quot;: &quot;HS256&quot;,
    &quot;typ&quot;: &quot;JWT&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details payload中用于存放数据，比如过期时间、用户名、用户所拥有的权限等</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>{
    &quot;exp&quot;: 1572682831,
    &quot;user_name&quot;: &quot;macro&quot;,
    &quot;authorities&quot;: [
        &quot;admin&quot;
    ],
    &quot;jti&quot;: &quot;c1a0645a-28b5-4468-b4c7-9623131853af&quot;,
    &quot;client_id&quot;: &quot;admin&quot;,
    &quot;scope&quot;: [
        &quot;all&quot;
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>signature为以header和payload生成的签名，一旦header和payload被篡改，验证将失败</p>
<ul>
<li>JWT实例，jwt为一行，这里以.间隔分成三行，便于查看，可以在该<a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">网站</a>解析</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJleHAiOjE1NzI2ODI4MzEsInVzZXJfbmFtZSI6Im1hY3JvIiwiYXV0aG9yaXRpZXMiOlsiYWRtaW4iXSwianRpIjoiYzFhMDY0NWEtMjhiNS00NDY4LWI0YzctOTYyMzEzMTg1M2FmIiwiY2xpZW50X2lkIjoiYWRtaW4iLCJzY29wZSI6WyJhbGwiXX0.
x4i6sRN49R6JSjd5hd1Fr2DdEMBsYdC4KB6Uw1huXPg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="创建oauth2-jwt-server模块" tabindex="-1"><a class="header-anchor" href="#创建oauth2-jwt-server模块" aria-hidden="true">#</a> 创建Oauth2-jwt-server模块</h1>
<ul>
<li>
<p>pom.xml</p>
<p>该模块在Oauth2-server上延申，除了之前的依赖，还需要添加下列依赖</p>
</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;!-- redis --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;!-- jwt工具 --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt;
    &lt;artifactId&gt;jjwt&lt;/artifactId&gt;
    &lt;version&gt;0.9.0&lt;/version&gt;
&lt;/dependency&gt;
&lt;!-- hutool工具 --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;cn.hutool&lt;/groupId&gt;
    &lt;artifactId&gt;hutool-all&lt;/artifactId&gt;
    &lt;version&gt;4.6.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>application.yaml</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 9401
spring:
  application:
    name: oauth2-jwt-service
  redis: #redis相关配置
    password: 123456 #有密码时设置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>代码配置</p>
<p>之前的示例，是将令牌存储在内存中，多个服务的时候会造成令牌无法使用，Spring security 有两种存储令牌的方式，JWT和Redis</p>
</li>
</ul>
<p>::: details Redis存储配置</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
public class RedisTokenStoreConfig {

    @Autowired
    private RedisConnectionFactory redisConnectionFactory;

    @Bean
    public TokenStore redisTokenStore (){
        return new RedisTokenStore(redisConnectionFactory);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details JWT存储配置</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
public class JwtTokenStoreConfig {

//    @Bean
    public TokenStore jwtTokenStore() {
        return new JwtTokenStore(jwtAccessTokenConverter());
    }

    @Bean
    public JwtAccessTokenConverter jwtAccessTokenConverter() {
        JwtAccessTokenConverter accessTokenConverter = new JwtAccessTokenConverter();
        //配置JWT使用的秘钥
        accessTokenConverter.setSigningKey(&quot;test_key&quot;);
        return accessTokenConverter;
    }

    @Bean
    public JwtTokenEnhancer jwtTokenEnhancer() {
        return new JwtTokenEnhancer();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details 扩展JWT中存储的内容</p>
<p>更多的时候我们需要在 JWT 中还存储其他内容信息，这里扩展一个key为<code v-pre>enhance</code>，value为<code v-pre>enhance info</code>的数据</p>
<ul>
<li>继承TokenEnhancer实现一个JWT内容增强器</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public class JwtTokenEnhancer implements TokenEnhancer {
    @Override
    public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {
        Map&lt;String, Object&gt; info = new HashMap&lt;&gt;();
        info.put(&quot;enhance&quot;, &quot;enhance info&quot;);
        ((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(info);
        return accessToken;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建一个JwtTokenEnhancer实例</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
public class JwtTokenStoreConfig {

    //省略代码...

    @Bean
    public JwtTokenEnhancer jwtTokenEnhancer() {
        return new JwtTokenEnhancer();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details 认证服务器配置，选择不同的令牌储存方式</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    @Qualifier(&quot;redisTokenStore&quot;)
//  @Qualifier(&quot;jwtTokenStore&quot;) 选择存储方式
    private TokenStore tokenStore;
    
    @Autowired
    private JwtAccessTokenConverter jwtAccessTokenConverter;
    @Autowired
    private JwtTokenEnhancer jwtTokenEnhancer;

    /**
     * 使用密码模式需要配置
     */
    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) {
        TokenEnhancerChain enhancerChain = new TokenEnhancerChain();
        List&lt;TokenEnhancer&gt; delegates = new ArrayList&lt;&gt;();
        //配置JWT的内容增强器
        delegates.add(jwtTokenEnhancer);
        delegates.add(jwtAccessTokenConverter);
        enhancerChain.setTokenEnhancers(delegates);
        endpoints.authenticationManager(authenticationManager)
                .userDetailsService(userService)
                //配置令牌存储策略
                .tokenStore(tokenStore)
                .accessTokenConverter(jwtAccessTokenConverter)
                .tokenEnhancer(enhancerChain);
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient(&quot;admin&quot;)
                .secret(passwordEncoder.encode(&quot;admin123456&quot;))
                .accessTokenValiditySeconds(3600)
                .refreshTokenValiditySeconds(864000)
//                .redirectUris(&quot;http://www.baidu.com&quot;)
                //单点登录时配置
                .redirectUris(&quot;http://localhost:9501/login&quot;)
                .autoApprove(true) //自动授权配置
                .scopes(&quot;all&quot;)
                .authorizedGrantTypes(&quot;authorization_code&quot;,&quot;password&quot;,&quot;refresh_token&quot;);
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) {
        // 获取密钥需要身份认证，使用单点登录时必须配置
        security.tokenKeyAccess(&quot;isAuthenticated()&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details 调用接口，使用 jwt 和 hutool 工具包解析JWT内容</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@RestController
@RequestMapping(&quot;/user&quot;)
public class UserController {

    @GetMapping(&quot;/getCurrentUser&quot;)
    public Object getCurrentUser(Authentication authentication, HttpServletRequest request) {
        System.out.println(authentication);
        String header = request.getHeader(&quot;Authorization&quot;);
        // 获取 JWT token Bearer后面的部分
        String token = StrUtil.subAfter(header, &quot;Bearer &quot;, false);
        return Jwts.parser()
            	// JWT 签名的密钥
                .setSigningKey(&quot;test_key&quot;.getBytes(StandardCharsets.UTF_8))
                .parseClaimsJws(token)
                .getBody();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h1 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证：</h1>
<ul>
<li>
<p>获取令牌</p>
<p>PostMan 发送 post请求 <code v-pre>http://localhost:9401/oauth/token</code>，使用密码方式</p>
<p>Header：Basic Auth，输入用户名、密码</p>
<p>Body：grant_type:password；username:macro；password:123456；scope:all</p>
</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210902161801882.png" alt="image-20210902161801882"></p>
<ul>
<li>
<p>携带令牌，访问接口，redis可以查看token存储</p>
<p>PostMan 发送 post请求 <code v-pre>http://localhost:9401/user/getCurrentUser</code>，Bearer Token 输入上面的 access_token</p>
</li>
</ul>
<p>::: details 返回示例</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>{
    &quot;user_name&quot;: &quot;macro&quot;,
    &quot;scope&quot;: [
        &quot;all&quot;
    ],
    &quot;exp&quot;: 1630572518,
    &quot;authorities&quot;: [
        &quot;admin&quot;
    ],
    &quot;jti&quot;: &quot;a2449140-cad4-4081-960f-23eafee71946&quot;,
    &quot;client_id&quot;: &quot;admin&quot;,
    &quot;enhance&quot;: &quot;enhance info&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li>
<p>刷新令牌</p>
<p>Spring Cloud Security 中使用oauth2时，如果令牌失效了，可以使用刷新令牌通过<code v-pre>refresh_token</code>的授权模式再次获取<code v-pre>access_token</code></p>
<p>PostMan 发送 post请求 <code v-pre>http://localhost:9401/oauth/token</code>，</p>
<p>Body：grant_type：refresh_token；refresh_token：XXX</p>
</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210902163259079.png" alt="image-20210902163259079"></p>
</div></template>


