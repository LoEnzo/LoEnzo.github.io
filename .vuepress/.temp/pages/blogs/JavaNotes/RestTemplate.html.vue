<template><div><p>::: tip</p>
<p><code v-pre>RestTemplate</code>是Spring的通过客户端访问RESTful服务端的核心类，和<code v-pre>JdbcTemplate</code>、<code v-pre>JmsTemplate</code>概念相似，都是Spring提供的模板类<code v-pre>RestTemplate</code>的行为可以通过callback回调方法和配置<code v-pre>HttpMessageConverter</code> 来定制，用来把对象封装到HTTP请求体，将响应信息放到一个对象中，<a href="https://www.jianshu.com/p/0fd5f3f64137" target="_blank" rel="noopener noreferrer">参考</a></p>
<p>:::</p>
<!-- more -->
<h2 id="resttemplate" tabindex="-1"><a class="header-anchor" href="#resttemplate" aria-hidden="true">#</a> RestTemplate</h2>
<p><code v-pre>RestTemplate</code>是<code v-pre>Spring</code>提供的用于访问Rest服务的客户端，同步client端的核心类，简化了与http服务的通信，并满足<code v-pre>RestFul</code>原则<code v-pre>RestTemplate</code>提供了多种便捷访问远程Http服务的方法，相比之前使用<code v-pre>Apache</code>的<code v-pre>HttpClient</code>能更加有效的提高客户端的编写效率。</p>
<h2 id="resttemplate-method" tabindex="-1"><a class="header-anchor" href="#resttemplate-method" aria-hidden="true">#</a> RestTemplate method</h2>
<p>RestTemplate提供的方法与RESTFul设计规范对比</p>
<table>
<thead>
<tr>
<th>Http method</th>
<th>对应操作</th>
<th>RestTemplate method</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>DELETE</strong></td>
<td>DELETE</td>
<td><strong>delete</strong><br>void delete(URI url)<br>void delete(String url, Object... uriVariables) <br/>void delete(String url, Map&lt;String,?&gt; uriVariables)</td>
</tr>
<tr>
<td><strong>GET</strong></td>
<td>SELECT</td>
<td><strong>getForObject</strong><br>T   getForObject(String url, Class&lt; T&gt; responseType, Object... uriVariables)<br />T   getForObject(String url, Class&lt; T&gt; responseType, Map&lt;String,?&gt; uriVariables)<br />T   getForObject(URI url, Class&lt; T&gt; responseType)</td>
</tr>
<tr>
<td></td>
<td></td>
<td><strong>getForEntity</strong><br />ResponseEntity&lt; T&gt;  getForEntity(URI url, Class&lt; T&gt; responseType)<br />ResponseEntity&lt; T&gt;  getForEntity(String url, Class&lt; T&gt; responseType, Object... uriVariables)<br />ResponseEntity&lt; T&gt;  getForEntity(String url, Class&lt; T&gt; responseType, Map&lt;String,?&gt; uriVariables)</td>
</tr>
<tr>
<td><strong>POST</strong></td>
<td>INSERT</td>
<td><strong>postForObject</strong><br>T  postForObject(String url, Object request, Class&lt; T&gt; responseType, Object... uriVariables)<br />T  postForObject(String url, Object request, Class&lt; T&gt; responseType, Map&lt;String,?&gt; uriVariables)<br />T  postForObject(URI url, Object request, Class&lt; T&gt; responseType)</td>
</tr>
<tr>
<td></td>
<td></td>
<td><strong>postForEntity</strong><br />ResponseEntity&lt; T&gt;  postForEntity(String url, Object request, Class&lt; T&gt; responseType, Object... uriVariables)<br />ResponseEntity&lt; T&gt;  postForEntity(String url, Object request, Class&lt; T&gt; responseType, Map&lt;String,?&gt; uriVariables)<br />ResponseEntity&lt; T&gt;  postForEntity(URI url, Object request, Class&lt; T&gt; responseType)</td>
</tr>
<tr>
<td><strong>PUT</strong></td>
<td>UPDATE</td>
<td><strong>put</strong><br>void   put(String url, Object request, Object... uriVariables)<br />void   put(String url, Object request, Map&lt;String,?&gt; uriVariables)<br />void   put(URI url, Object request)</td>
</tr>
<tr>
<td><strong>OPTIONS</strong></td>
<td></td>
<td><strong>optionsForAllow</strong><br>Set&lt; HttpMethod&gt;  optionsForAllow(URI url)<br />Set&lt; HttpMethod&gt;  optionsForAllow(String url, Object... uriVariables)<br />Set&lt; HttpMethod&gt;  optionsForAllow(String url, Map&lt;String,?&gt; uriVariables)</td>
</tr>
<tr>
<td><strong>HEAD</strong></td>
<td></td>
<td><strong>headForHeaders</strong><br>HttpHeaders   headForHeaders(URI url)<br />HttpHeaders   headForHeaders(String url, Object... uriVariables)<br />HttpHeaders   headForHeaders(String url, Map&lt;String,?&gt; uriVariables)</td>
</tr>
<tr>
<td><strong>any</strong></td>
<td></td>
<td><strong>exchange</strong><br >ResponseEntity&lt; T&gt; exchange(String url, httpMethod method, HttpEntity&lt;?&gt; requestEntity, Class&lt; T&gt; responseType )</td>
</tr>
<tr>
<td></td>
<td></td>
<td><strong>excute</strong></td>
</tr>
</tbody>
</table>
<ul>
<li>RestTemplate的方法名遵循一定的命名规范，第一部分表示用哪种HTTP方法调用（get，post），第二部分表示返回类型</li>
<li>getForObject() -- 发送GET请求，将HTTP response转换成一个指定的object对象</li>
<li>postForEntity() -- 发送POST请求，将给定的对象封装到HTTP请求体，返回类型是一个HttpEntity对象</li>
<li>每个HTTP方法对应的RestTemplate方法都有3种。其中2种的url参数为字符串，URI参数变量分别是Object数组和Map，第3种使用URI类型作为参数</li>
<li><code v-pre>exchange</code> 和<code v-pre>execute</code> 方法比上面列出的其它方法（如getForObject、postForEntity等）使用范围更广，允许调用者指定HTTP请求的方法（GET、POST、PUT等），并且可以支持像HTTP PATCH（部分更新），但需要底层的HTTP库支持，JDK自带的<code v-pre>HttpURLConnection</code>不支持PATCH方法，Apache的HTTPClient 4.2及以后版本支持</li>
</ul>
<h2 id="处理请求、返回头信息" tabindex="-1"><a class="header-anchor" href="#处理请求、返回头信息" aria-hidden="true">#</a> 处理请求、返回头信息</h2>
<h3 id="设置请求头" tabindex="-1"><a class="header-anchor" href="#设置请求头" aria-hidden="true">#</a> 设置请求头</h3>
<p><code v-pre>注：</code>请求中设置header有两种方式，一种是<code v-pre>add()</code>，一种是<code v-pre>set()</code>;</p>
<p><code v-pre>add()：</code>添加一个新的请求头字段。（一个请求头中允许有重名字段。）</p>
<p><code v-pre>set()：</code>设置一个请求头字段，有则覆盖，无则添加。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>HttpHeaders requestHeaders = new HttpHeaders();
requestHeaders.set(&quot;headerKey&quot;, &quot;keaderValue&quot;);
// 只添加请求头
HttpEntity requestEntity = new HttpEntity(requestHeaders);
// 添加请求头和请求体
HttpEntity requestEntity = new HttpEntity(requestBody, requestHeaders);

Book book = restTemplate.postForObject(&quot;http://localhost:8080/getbook&quot;, requestEntity, Book.class);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理返回头" tabindex="-1"><a class="header-anchor" href="#处理返回头" aria-hidden="true">#</a> 处理返回头</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>HttpHeaders requestHeaders = new HttpHeaders();
requestHeaders.set(&quot;headKey&quot;, &quot;headValue&quot;);
HttpEntity requestEntity = new HttpEntity(requestHeaders);

HttpEntity&lt;String&gt; response = template.exchange(&quot;http://localhost:8080/hotels/{hotel}&quot;,HttpMethod.POST, requestEntity, String.class);

//response相关信息
HttpHeaders rsHeaders = response.getHeaders();
String rsHeaderValue = rsHeaders.getFirst(&quot;rsHeaderKey&quot;);
String rsBody = response.getBody();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clienthttprequestfactory" tabindex="-1"><a class="header-anchor" href="#clienthttprequestfactory" aria-hidden="true">#</a> ClientHttpRequestFactory</h2>
<p><code v-pre>ClientHttpRequestFactory</code>是<code v-pre>Spring</code>定义的一个接口，其用于生产<code v-pre>org.springframework.http.client.ClientHttpRequest</code>对象，<code v-pre>RestTemplate</code>只是模板类，抽象了很多调用方法，而底层真正使用何种框架发送HTTP请求是通过<code v-pre>ClientHttpRequestFactory</code>指定的</p>
<p><code v-pre>RestTemplate</code>可以在构造时设置<code v-pre>ClientHttpRequestFactory</code>，也可以通过<code v-pre>setRequestFactory()</code>方法设置，通过注释可以看到<code v-pre>Spring</code>给了两种<code v-pre>ClientHttpRequestFactory</code>的实现类，分别是：<code v-pre>SimpleClientHttpRequestFactory</code>，<code v-pre>HttpComponentsClientHttpRequestFactory</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>RestTemplate构造方法设置：
/**
 * Create a new instance of the {@link RestTemplate} based on the given {@link ClientHttpRequestFactory}.
 * @param requestFactory HTTP request factory to use
 * @see org.springframework.http.client.SimpleClientHttpRequestFactory
 * @see org.springframework.http.client.HttpComponentsClientHttpRequestFactory
 */
public RestTemplate(ClientHttpRequestFactory requestFactory) {
    this();
    setRequestFactory(requestFactory);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="simpleclienthttprequestfactory" tabindex="-1"><a class="header-anchor" href="#simpleclienthttprequestfactory" aria-hidden="true">#</a> SimpleClientHttpRequestFactory</h3>
<p>如果不进行设置，<code v-pre>RestTemplate</code>默认使用的是<code v-pre>SimpleClientHttpRequestFactory</code>，其内部使用的是jdk的<code v-pre>java.net.HttpURLConnection</code>创建底层连接，默认是没有连接池的，<code v-pre>connectTimeout</code>和<code v-pre>readTimeout</code>都是 <strong>-1</strong>，即没有超时时间</p>
<p>::: details SimpleClientHttpRequestFactory底层实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public class SimpleClientHttpRequestFactory implements ClientHttpRequestFactory, AsyncClientHttpRequestFactory {
    。。。。。。
        
    private int connectTimeout = -1;
    private int readTimeout = -1;
    
    //创建Request
    @Override
    public ClientHttpRequest createRequest(URI uri, HttpMethod httpMethod) throws IOException {
        HttpURLConnection connection = openConnection(uri.toURL(), this.proxy);
        prepareConnection(connection, httpMethod.name());

         //bufferRequestBody默认为true
        if (this.bufferRequestBody) {
            return new SimpleBufferingClientHttpRequest(connection, this.outputStreaming);
        }
        else {
            return new SimpleStreamingClientHttpRequest(connection, this.chunkSize, this.outputStreaming);
        }
    }
    
    
    /**
     * Opens and returns a connection to the given URL.
     * 打开并返回一个指定URL的连接
     * &lt;p&gt;The default implementation uses the given {@linkplain #setProxy(java.net.Proxy) proxy} -
     * if any - to open a connection.
     * @param url the URL to open a connection to
     * @param proxy the proxy to use, may be {@code null}
     * @return the opened connection  返回类型为 java.net.HttpURLConnection
     * @throws IOException in case of I/O errors
     */
    protected HttpURLConnection openConnection(URL url, Proxy proxy) throws IOException {
        URLConnection urlConnection = (proxy != null ? url.openConnection(proxy) : url.openConnection());
        if (!HttpURLConnection.class.isInstance(urlConnection)) {
            throw new IllegalStateException(&quot;HttpURLConnection required for [&quot; + url + &quot;] but got: &quot; + urlConnection);
        }
        return (HttpURLConnection) urlConnection;
    }
    
    
    /**
     * Template method for preparing the given {@link HttpURLConnection}.
     * &lt;p&gt;The default implementation prepares the connection for input and output, and sets the HTTP method.
     * @param connection the connection to prepare
     * @param httpMethod the HTTP request method ({@code GET}, {@code POST}, etc.)
     * @throws IOException in case of I/O errors
     */
    protected void prepareConnection(HttpURLConnection connection, String httpMethod) throws IOException {
         //如果connectTimeout大于等于0，设置连接超时时间
        if (this.connectTimeout &gt;= 0) {
            connection.setConnectTimeout(this.connectTimeout);
        }
         //如果readTimeout大于等于0，设置读超时时间
        if (this.readTimeout &gt;= 0) {
            connection.setReadTimeout(this.readTimeout);
        }

        connection.setDoInput(true);

        if (&quot;GET&quot;.equals(httpMethod)) {
            connection.setInstanceFollowRedirects(true);
        }
        else {
            connection.setInstanceFollowRedirects(false);
        }

        if (&quot;POST&quot;.equals(httpMethod) || &quot;PUT&quot;.equals(httpMethod) ||
                &quot;PATCH&quot;.equals(httpMethod) || &quot;DELETE&quot;.equals(httpMethod)) {
            connection.setDoOutput(true);
        }
        else {
            connection.setDoOutput(false);
        }

        connection.setRequestMethod(httpMethod);
    }
    
    。。。。。。
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="httpcomponentsclienthttprequestfactory" tabindex="-1"><a class="header-anchor" href="#httpcomponentsclienthttprequestfactory" aria-hidden="true">#</a> HttpComponentsClientHttpRequestFactory</h3>
<p><code v-pre>HttpComponentsClientHttpRequestFactory</code>底层使用<code v-pre>Apache HttpClient</code>创建请求，访问远程的<code v-pre>Http</code>服务，<strong>可以使用一个已经配置好的HttpClient实例创建HttpComponentsClientHttpRequestFactory请求工厂，HttpClient实例中可以配置连接池和证书等信息</strong></p>
<p><strong>添加依赖</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.apache.httpcomponents&lt;/groupId&gt;
    &lt;artifactId&gt;httpclient&lt;/artifactId&gt;
    &lt;version&gt;x.x.x&lt;/version&gt;   &lt;!-- springboot项目不用指定版本号 --&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>设置超时时间</strong></p>
<p>可以直接使用Spring的底层基于<code v-pre>HttpClient的HttpComponentsClientHttpRequestFactory</code>，此处设置的是<code v-pre>ClientHttpRequestFactory</code>级别的全局超时时间</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration  
public class RestTemplateConfig {  
  
    @Bean  
    public RestTemplate restTemplate() {  
        return new RestTemplate(clientHttpRequestFactory());  
    }  
  
    @Bean 
    private ClientHttpRequestFactory clientHttpRequestFactory() {  
        HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();  
        factory.setConnectTimeout(30 * 1000);  //连接超时时间
        factory.setReadTimeout(60 * 1000);  //读超时时间
        return factory;  
    }  
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：如果通过一个<code v-pre>HttpClient</code>实例创建<code v-pre>HttpComponentsClientHttpRequestFactory</code>，并通过<code v-pre>HttpClient</code>指定了<code v-pre>DefaultRequestConfig</code>，设置了<code v-pre>connectTimeout</code>、<code v-pre>readTimeout</code>等，在实际执行请求创建<code v-pre>request</code>时会与<code v-pre>HttpComponentsClientHttpRequestFactory</code>的配置合并，<code v-pre>connectTimeout</code>、<code v-pre>socketTimeout</code>、<code v-pre>connectionRequestTimeout</code>以<code v-pre>HttpComponentsClientHttpRequestFactory</code>的配置为准</p>
<p>::: details 合并RequestConfig 和 HttpComponentsClientHttpRequestFactory的配置</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>HttpComponentsClientHttpRequestFactory：
/**
 * Merge the given {@link HttpClient}-level {@link RequestConfig} with
 * the factory-level {@link RequestConfig}, if necessary.
 * @param clientConfig the config held by the current    httpClient级别的requestConfig配置
 * @return the merged request config
 * (may be {@code null} if the given client config is {@code null})
 * @since 4.2
 */
protected RequestConfig mergeRequestConfig(RequestConfig clientConfig) {
    if (this.requestConfig == null) {  // nothing to merge
        return clientConfig;
    }

    RequestConfig.Builder builder = RequestConfig.copy(clientConfig);
    int connectTimeout = this.requestConfig.getConnectTimeout();  //HttpComponentsClientHttpRequestFactory级别的配置
    if (connectTimeout &gt;= 0) {
        builder.setConnectTimeout(connectTimeout);
    }
    int connectionRequestTimeout = this.requestConfig.getConnectionRequestTimeout();
    if (connectionRequestTimeout &gt;= 0) {
        builder.setConnectionRequestTimeout(connectionRequestTimeout);
    }
    int socketTimeout = this.requestConfig.getSocketTimeout();
    if (socketTimeout &gt;= 0) {
        builder.setSocketTimeout(socketTimeout);
    }
    return builder.build();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>上例中虽然没有指定http连接池，但<strong>HttpComponentsClientHttpRequestFactory无参构造会创建一个HttpClient，并默认使用了连接池配置</strong>，MaxTotal=10，DefaultMaxPerRoute=5 **，具体如下：</p>
<p>::: details HttpComponentsClientHttpRequestFactory默认连接池配置</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>HttpComponentsClientHttpRequestFactory：
/**
 * Create a new instance of the {@code HttpComponentsClientHttpRequestFactory}
 * with a default {@link HttpClient}.
 */
public HttpComponentsClientHttpRequestFactory() {
    this(HttpClients.createSystem());
}


HttpClients：
/**
 * Creates {@link CloseableHttpClient} instance with default
 * configuration based on system properties.
 * 创建CloseableHttpClient实例使用基于system properties的默认配置
 */
public static CloseableHttpClient createSystem() {
    return HttpClientBuilder.create().useSystemProperties().build();
}


HttpClientBuilder：
/**
 * Use system properties when creating and configuring default
 * implementations.
 */
public final HttpClientBuilder useSystemProperties() {
    this.systemProperties = true;  //设置systemProperties为true
    return this;
}

public CloseableHttpClient build() {
    HttpClientConnectionManager connManagerCopy = this.connManager; //没有设置，为null
    if (connManagerCopy == null) {
        。。。。。。
        //创建连接池管理器PoolingHttpClientConnectionManager
        @SuppressWarnings(&quot;resource&quot;)
        final PoolingHttpClientConnectionManager poolingmgr = new PoolingHttpClientConnectionManager(
                RegistryBuilder.&lt;ConnectionSocketFactory&gt;create()
                    .register(&quot;http&quot;, PlainConnectionSocketFactory.getSocketFactory())
                    .register(&quot;https&quot;, sslSocketFactoryCopy)
                    .build(),
                null,
                null,
                dnsResolver,
                connTimeToLive,
                connTimeToLiveTimeUnit != null ? connTimeToLiveTimeUnit : TimeUnit.MILLISECONDS);
        if (defaultSocketConfig != null) {
            poolingmgr.setDefaultSocketConfig(defaultSocketConfig);
        }
        if (defaultConnectionConfig != null) {
            poolingmgr.setDefaultConnectionConfig(defaultConnectionConfig);
        }
        //由于是HttpClientBuilder.create().useSystemProperties().build(),systemProperties为true
        if (systemProperties) {
            String s = System.getProperty(&quot;http.keepAlive&quot;, &quot;true&quot;);  //http.keepAlive默认值为true
            if (&quot;true&quot;.equalsIgnoreCase(s)) {
                s = System.getProperty(&quot;http.maxConnections&quot;, &quot;5&quot;);  //默认值为5
                final int max = Integer.parseInt(s);
                poolingmgr.setDefaultMaxPerRoute(max);  //DefaultMaxPerRoute=5
                poolingmgr.setMaxTotal(2 * max);  //MaxTotal=10
            }
        }
        if (maxConnTotal &gt; 0) {
            poolingmgr.setMaxTotal(maxConnTotal);
        }
        if (maxConnPerRoute &gt; 0) {
            poolingmgr.setDefaultMaxPerRoute(maxConnPerRoute);
        }
        connManagerCopy = poolingmgr;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="自定义配置连接池" tabindex="-1"><a class="header-anchor" href="#自定义配置连接池" aria-hidden="true">#</a> 自定义配置连接池</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration  
public class RestTemplateConfig {  
  
    @Bean  
    public RestTemplate restTemplate() {  
        return new RestTemplate(clientHttpRequestFactory());  
    }  
  
    @Bean
    public HttpComponentsClientHttpRequestFactory clientHttpRequestFactory() {
        try {
            HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();

            //开始设置连接池
            PoolingHttpClientConnectionManager poolingHttpClientConnectionManager 
                                                    = new PoolingHttpClientConnectionManager();
            poolingHttpClientConnectionManager.setMaxTotal(100);			//最大连接数
            poolingHttpClientConnectionManager.setDefaultMaxPerRoute(20);	//同路由并发数
            httpClientBuilder.setConnectionManager(poolingHttpClientConnectionManager);

            HttpClient httpClient = httpClientBuilder.build();
            // httpClient连接配置
            HttpComponentsClientHttpRequestFactory clientHttpRequestFactory 
                                                    = new HttpComponentsClientHttpRequestFactory(httpClient);
            clientHttpRequestFactory.setConnectTimeout(30 * 1000);			//连接超时
            clientHttpRequestFactory.setReadTimeout(60 * 1000);				//数据读取超时时间
            clientHttpRequestFactory.setConnectionRequestTimeout(30 * 1000);//连接不够用的等待时间
            return clientHttpRequestFactory;
        }
        catch (Exception e) {
            logger.error(&quot;初始化clientHttpRequestFactory出错&quot;, e);
        }
        return null;
    } 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details 工程配置样例 RestTemplateBuilder 模板 Builder</p>
<p>通过一个<code v-pre>HttpClient</code>实例创建<code v-pre>HttpComponentsClientHttpRequestFactory</code>，</p>
<p>再通过<code v-pre>HttpComponentsClientHttpRequestFactory</code>实例化<code v-pre>RestTemplate</code>自定义了<code v-pre>messageConverter</code></p>
<p>Registry&lt; ConnectionSocketFactory&gt;（忽略/使用自定义证书，待学习）参考：<a href="https://blog.csdn.net/xiaoxian8023/article/details/49865335" target="_blank" rel="noopener noreferrer">绕过证书</a>，<a href="https://blog.csdn.net/xiaoxian8023/article/details/49866397?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param" target="_blank" rel="noopener noreferrer">信任自定义证书</a></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.impl.DefaultConnectionReuseStrategy;
import org.apache.http.impl.client.DefaultConnectionKeepAliveStrategy;
import org.apache.http.impl.client.DefaultHttpRequestRetryHandler;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.ssl.SSLContextBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import javax.net.ssl.SSLContext;
import java.nio.charset.StandardCharsets;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;


public class RestTemplateBuilder {
    private static final Logger LOGGER = LoggerFactory.getLogger(RestTemplateBuilder.class);

    private static final String HTTP = &quot;http&quot;;
    private static final String HTTPS = &quot;https&quot;;

    /** 等待数据超时时间 */
    private int readTimeout = 60000;

    /** 连接超时时间 */
    private int connectTimeout = 10000;

    /** 从连接池获取连接的等待超时时间 */
    private int connectRequestTimeout = 10000;

    /** 设置最大连接数 */
    private int maxPool = 10;

    /** 每个路由的最大连接 */
    private int maxPerRoute = 10;

    /** 最长空闲时间 */
    private long maxIdleTime = 60000;

    /** 连接存活时间 */
    private long connTimeToLive = 60000;

    /** 重试次数 */
    private int retryCount = 3;

    private final RestTemplateProxy proxy = new RestTemplateProxy();

    private RestTemplateBuilder() {
    }

    public static RestTemplateBuilder create() {
        return new RestTemplateBuilder();
    }

    public RestTemplate build() {
        // 设置代理，可以用于调用 RestTemplate 调用三方的一些日志记录
        RestTemplate restTemplate = proxy.getInstance();
        restTemplate.setRequestFactory(httpRequestFactory());
        restTemplate.setMessageConverters(convertCharsetToUtf8(restTemplate.getMessageConverters()));
        return restTemplate;
    }

    private List&lt;HttpMessageConverter&lt;?&gt;&gt; convertCharsetToUtf8(List&lt;HttpMessageConverter&lt;?&gt;&gt; defaultMessageConverters) {
        List&lt;HttpMessageConverter&lt;?&gt;&gt; messageConverters = new ArrayList&lt;&gt;();
        for (HttpMessageConverter&lt;?&gt; messageConverter : defaultMessageConverters) {
            if (messageConverter instanceof StringHttpMessageConverter) {
                // 设置字符编码
                messageConverters.add(new StringHttpMessageConverter(StandardCharsets.UTF_8));
            } else {
                messageConverters.add(messageConverter);
            }
        }
        return messageConverters;
    }

    private ClientHttpRequestFactory httpRequestFactory() {
        return new HttpComponentsClientHttpRequestFactory(httpClient());
    }

    private HttpClient httpClient() {
        // 注册访问协议相关的Socket工厂
        Registry&lt;ConnectionSocketFactory&gt; registry = RegistryBuilder.&lt;ConnectionSocketFactory&gt;create()
                .register(HTTP, PlainConnectionSocketFactory.getSocketFactory())
                .register(HTTPS, createSslConnectionSocketFactory())
                .build();

        // 创建连接池管理器
        PoolingHttpClientConnectionManager connectionManager = new PoolingHttpClientConnectionManager(registry);
        // 设置最大连接数。高于这个值时，新连接请求，需要阻塞，排队等待
        connectionManager.setMaxTotal(maxPool);
        // 每个路由的最大连接
        connectionManager.setDefaultMaxPerRoute(maxPerRoute);
        // 配置默认的请求参数
        RequestConfig requestConfig = RequestConfig.custom()
                // 等待数据超时时间
                .setSocketTimeout(readTimeout)
                // 连接超时时间
                .setConnectTimeout(connectTimeout)
                // 从连接池获取连接的等待超时时间
                .setConnectionRequestTimeout(connectRequestTimeout)
                .build();

        return HttpClients.custom()
                .setConnectionManager(connectionManager)
                // 连接池不是共享模式，这个共享是指与其它httpClient是否共享
                .setConnectionManagerShared(false)
                // 定期回收空闲连接
                .evictIdleConnections(maxIdleTime, TimeUnit.MILLISECONDS)
                // 回收过期连接
                .evictExpiredConnections()
                // 连接存活时间，如果不设置，则根据长连接信息决定
                .setConnectionTimeToLive(connTimeToLive, TimeUnit.MILLISECONDS)
                // 设置默认的请求参数
                .setDefaultRequestConfig(requestConfig)
                // 连接重用策略，即是否能keepAlive
                .setConnectionReuseStrategy(DefaultConnectionReuseStrategy.INSTANCE)
                // 长连接配置，即获取长连接生产多长时间
                .setKeepAliveStrategy(DefaultConnectionKeepAliveStrategy.INSTANCE)
                // 设置重试次数，默认为3次
                .setRetryHandler(new DefaultHttpRequestRetryHandler(retryCount, false))
            	// 可以配合 Fiddler 本地抓包测试，默认端口是 8888
            	.setProxy(new HttpHost(&quot;127.0.0.1&quot;,8888))
                .build();
    }


    public RestTemplateBuilder setMaxPool(int maxPool) {
        this.maxPool = maxPool;
        return this;
    }

    public RestTemplateBuilder setMaxPerRoute(int maxPerRoute) {
        this.maxPerRoute = maxPerRoute;
        return this;
    }

    public RestTemplateBuilder setReadTimeout(int readTimeout) {
        this.readTimeout = readTimeout;
        return this;
    }

    public RestTemplateBuilder setConnectTimeout(int connectTimeout) {
        this.connectTimeout = connectTimeout;
        return this;
    }

    public RestTemplateBuilder setConnectRequestTimeout(int connectRequestTimeout) {
        this.connectRequestTimeout = connectRequestTimeout;
        return this;
    }

    public RestTemplateBuilder setMaxIdleTime(long maxIdleTime) {
        this.maxIdleTime = maxIdleTime;
        return this;
    }

    public RestTemplateBuilder setConnTimeToLive(long connTimeToLive) {
        this.connTimeToLive = connTimeToLive;
        return this;
    }

    public TemplateBuilder setRetryCount(int retryCount) {
        this.retryCount = retryCount;
        return this;
    }

    private SSLContext createSslContext() {
        try {
            //忽略证书
            return new SSLContextBuilder().loadTrustMaterial(null, (TrustStrategy) (arg0, arg1) -&gt; true)
                    .build();
        } catch (NoSuchAlgorithmException | KeyManagementException | KeyStoreException e) {
            LOGGER.error(&quot;createSSLContext error:&quot;, e);
            return null;
        }
    }

    private SSLConnectionSocketFactory createSslConnectionSocketFactory() {
        SSLContext sslContext = createSslContext();
        return null != sslContext ? new SSLConnectionSocketFactory(sslContext)
                : SSLConnectionSocketFactory.getSocketFactory();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: RestTemplateProxy 代理类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>import org.springframework.cglib.proxy.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Method;
import java.time.Instant;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.StringJoiner;

class RestTemplateProxy implements MethodInterceptor {
    private static final String NOT_URL = &quot;NOT_URL&quot;;
    private static final String SPLIT_TAG = &quot;|&quot;;

    private static final String SUCCESS = &quot;SUCCESS&quot;;
    private static final String FAILED = &quot;FAILED&quot;;

    private static final HttpPerfHandlerFilter FILTER = new HttpPerfHandlerFilter();
    private static final Callback[] CALLBACKS = new Callback[]{new RestTemplateProxy(), NoOp.INSTANCE};

    RestTemplate getInstance() {
        Enhancer enhancer = new Enhancer();
        enhancer.setSuperclass(RestTemplate.class);
        enhancer.setCallbackFilter(FILTER);
        enhancer.setCallbacks(CALLBACKS);
        return (RestTemplate) enhancer.create();
    }

    @Override
    public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
        Object result = null;
        Instant start = Instant.now();
        try {
            result = proxy.invokeSuper(obj, args);
        } finally {
            // 记录用户 IP
            String clientIp = ContextManager.getClientIP();
            // 记录花销时间
            String cost = String.valueOf(Instant.now().toEpochMilli() - start.toEpochMilli());
            // 记录返回状态码
            String httpCode = getHttpCode(result);
            // 记录成功与否标识
            String resultFlag = String.valueOf(HttpStatus.EXPECTATION_FAILED.value()).equals(httpCode) ? FAILED : SUCCESS;
            // 记录调用地址
            String uri = fetchUrl(args);
			// 拼接日志记录格式
            StringJoiner msg = new StringJoiner(SPLIT_TAG);
            msg.add(SPLIT_TAG + clientIp).add(cost).add(httpCode).add(resultFlag).add(uri + SPLIT_TAG);
        }
        return result;
    }

    private String getHttpCode(Object result) {
        if (Objects.isNull(result)) {
            return String.valueOf(HttpStatus.EXPECTATION_FAILED.value());
        }
        if (result instanceof ResponseEntity) {
            return String.valueOf(((ResponseEntity) result).getStatusCodeValue());
        }
        return String.valueOf(HttpStatus.EXPECTATION_FAILED.value());
    }

    private String fetchUrl(Object[] args) {
        String url = NOT_URL;
        if (null != args &amp;&amp; args.length &gt; 1 &amp;&amp; args[0] instanceof String) {
            url = (String) args[0];
        }
        return url;
    }
}

class HttpPerfHandlerFilter implements CallbackFilter {
	// 代理 RestTemplate 中的 exchange、postForEntity 方法
    private static final List&lt;String&gt; REST_TEMPLATE_METHODS = Arrays.asList(&quot;exchange&quot;, &quot;postForEntity&quot;);

    @Override
    public int accept(Method arg) {
        return REST_TEMPLATE_METHODS.contains(arg.getName()) ? 0 : 1;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: 使用 RestTemplateBuilder 构建自己的 RestTemplate</p>
<ul>
<li>根据自己情况可自定义一些连接、超时 时间配置</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
public class HttpCommonRestTemplateConfig {

    @Value(&quot;${http.common.readTimeout:30000}&quot;)
    private Integer readTimeout;

    @Value(&quot;${http.common.connectTimeout:1000}&quot;)
    private Integer connectTimeout;

    @Value(&quot;${http.common.connectRequestTimeout:1000}&quot;)
    private Integer connectRequestTimeout;

    @Value(&quot;${http.common.maxPool:100}&quot;)
    private Integer maxPool;

    @Value(&quot;${http.common.maxPerRoute:5}&quot;)
    private Integer maxPerRoute;

    @Value(&quot;${http.common.maxIdleTime:6000}&quot;)
    private long maxIdleTime;

    @Value(&quot;${http.common.connTimeToLive:6000}&quot;)
    private long connTimeToLive;

    @Bean(name = &quot;httpCommonRestTemplate&quot;)
    public RestTemplate httpCommonRestTemplate() {
        return RestTemplateBuilder.create()
                .setReadTimeout(readTimeout)
                .setConnectTimeout(connectTimeout)
                .setConnectRequestTimeout(connectRequestTimeout)
                .setMaxPool(maxPool)
                .setMaxPerRoute(maxPerRoute)
                .setMaxIdleTime(maxIdleTime)
                .setConnTimeToLive(connTimeToLive)
                .build();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h2>
<h3 id="http请求中各种超时" tabindex="-1"><a class="header-anchor" href="#http请求中各种超时" aria-hidden="true">#</a> http请求中各种超时</h3>
<table>
<thead>
<tr>
<th>超时（单位、毫秒）</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>connectionRequestTimout</strong></td>
<td>从连接池获取连接的超时时间，如果连接池里连接都被用了，且超过这个connectionrequesttimeout，会抛出超时异常</td>
</tr>
<tr>
<td><strong>connetionTimeout</strong></td>
<td>指客户端和服务器建立连接超时，连接主机超时， <br/>就是http请求的三个阶段，一：建立连接；二：数据传送；三，断开连接。超时后会ConnectionTimeOutException</td>
</tr>
<tr>
<td><strong>socketTimeout</strong></td>
<td>指客户端和服务器建立连接后，客户端从服务器读取数据的timeout，超出后会抛出SocketTimeOutException</td>
</tr>
<tr>
<td><strong>ReadTimeout</strong></td>
<td>从主机读取数据超时</td>
</tr>
</tbody>
</table>
</div></template>


