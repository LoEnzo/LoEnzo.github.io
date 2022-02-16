---
title: RestTemplate简单使用
tags:
 - RestTemplate
categories:
 - JavaNotes
date: 2020-09-11
---

::: tip

`RestTemplate`是Spring的通过客户端访问RESTful服务端的核心类，和`JdbcTemplate`、`JmsTemplate`概念相似，都是Spring提供的模板类`RestTemplate`的行为可以通过callback回调方法和配置`HttpMessageConverter` 来定制，用来把对象封装到HTTP请求体，将响应信息放到一个对象中，[参考](https://www.jianshu.com/p/0fd5f3f64137)

:::

<!-- more -->

## RestTemplate

`RestTemplate`是`Spring`提供的用于访问Rest服务的客户端，同步client端的核心类，简化了与http服务的通信，并满足`RestFul`原则`RestTemplate`提供了多种便捷访问远程Http服务的方法，相比之前使用`Apache`的`HttpClient`能更加有效的提高客户端的编写效率。



## RestTemplate method

RestTemplate提供的方法与RESTFul设计规范对比

| Http method | 对应操作 | RestTemplate method                                          |
| ----------- | -------- | ------------------------------------------------------------ |
| **DELETE**  | DELETE   | **delete**<br>void delete(URI url)<br>void delete(String url, Object... uriVariables) <br/>void delete(String url, Map<String,?> uriVariables) |
| **GET**     | SELECT   | **getForObject**<br>T   getForObject(String url, Class< T> responseType, Object... uriVariables)<br />T   getForObject(String url, Class< T> responseType, Map<String,?> uriVariables)<br />T   getForObject(URI url, Class< T> responseType) |
|             |          | **getForEntity**<br />ResponseEntity< T>  getForEntity(URI url, Class< T> responseType)<br />ResponseEntity< T>  getForEntity(String url, Class< T> responseType, Object... uriVariables)<br />ResponseEntity< T>  getForEntity(String url, Class< T> responseType, Map<String,?> uriVariables) |
| **POST**    | INSERT   | **postForObject**<br>T  postForObject(String url, Object request, Class< T> responseType, Object... uriVariables)<br />T  postForObject(String url, Object request, Class< T> responseType, Map<String,?> uriVariables)<br />T  postForObject(URI url, Object request, Class< T> responseType) |
|             |          | **postForEntity**<br />ResponseEntity< T>  postForEntity(String url, Object request, Class< T> responseType, Object... uriVariables)<br />ResponseEntity< T>  postForEntity(String url, Object request, Class< T> responseType, Map<String,?> uriVariables)<br />ResponseEntity< T>  postForEntity(URI url, Object request, Class< T> responseType) |
| **PUT**     | UPDATE   | **put**<br>void   put(String url, Object request, Object... uriVariables)<br />void   put(String url, Object request, Map<String,?> uriVariables)<br />void   put(URI url, Object request) |
| **OPTIONS** |          | **optionsForAllow**<br>Set< HttpMethod>  optionsForAllow(URI url)<br />Set< HttpMethod>  optionsForAllow(String url, Object... uriVariables)<br />Set< HttpMethod>  optionsForAllow(String url, Map<String,?> uriVariables) |
| **HEAD**    |          | **headForHeaders**<br>HttpHeaders   headForHeaders(URI url)<br />HttpHeaders   headForHeaders(String url, Object... uriVariables)<br />HttpHeaders   headForHeaders(String url, Map<String,?> uriVariables) |
| **any**     |          | **exchange**<br >ResponseEntity< T> exchange(String url, httpMethod method, HttpEntity<?> requestEntity, Class< T> responseType ) |
|             |          | **excute**                                                   |

* RestTemplate的方法名遵循一定的命名规范，第一部分表示用哪种HTTP方法调用（get，post），第二部分表示返回类型
* getForObject() -- 发送GET请求，将HTTP response转换成一个指定的object对象
* postForEntity() -- 发送POST请求，将给定的对象封装到HTTP请求体，返回类型是一个HttpEntity对象
* 每个HTTP方法对应的RestTemplate方法都有3种。其中2种的url参数为字符串，URI参数变量分别是Object数组和Map，第3种使用URI类型作为参数
* `exchange` 和`execute` 方法比上面列出的其它方法（如getForObject、postForEntity等）使用范围更广，允许调用者指定HTTP请求的方法（GET、POST、PUT等），并且可以支持像HTTP PATCH（部分更新），但需要底层的HTTP库支持，JDK自带的`HttpURLConnection`不支持PATCH方法，Apache的HTTPClient 4.2及以后版本支持

## 处理请求、返回头信息

### 设置请求头

`注：`请求中设置header有两种方式，一种是`add()`，一种是`set()`;

`add()：`添加一个新的请求头字段。（一个请求头中允许有重名字段。）

`set()：`设置一个请求头字段，有则覆盖，无则添加。

```java
HttpHeaders requestHeaders = new HttpHeaders();
requestHeaders.set("headerKey", "keaderValue");
// 只添加请求头
HttpEntity requestEntity = new HttpEntity(requestHeaders);
// 添加请求头和请求体
HttpEntity requestEntity = new HttpEntity(requestBody, requestHeaders);

Book book = restTemplate.postForObject("http://localhost:8080/getbook", requestEntity, Book.class);
```

### 处理返回头

```java
HttpHeaders requestHeaders = new HttpHeaders();
requestHeaders.set("headKey", "headValue");
HttpEntity requestEntity = new HttpEntity(requestHeaders);

HttpEntity<String> response = template.exchange("http://localhost:8080/hotels/{hotel}",HttpMethod.POST, requestEntity, String.class);

//response相关信息
HttpHeaders rsHeaders = response.getHeaders();
String rsHeaderValue = rsHeaders.getFirst("rsHeaderKey");
String rsBody = response.getBody();
```

## ClientHttpRequestFactory

`ClientHttpRequestFactory`是`Spring`定义的一个接口，其用于生产`org.springframework.http.client.ClientHttpRequest`对象，`RestTemplate`只是模板类，抽象了很多调用方法，而底层真正使用何种框架发送HTTP请求是通过`ClientHttpRequestFactory`指定的

`RestTemplate`可以在构造时设置`ClientHttpRequestFactory`，也可以通过`setRequestFactory()`方法设置，通过注释可以看到`Spring`给了两种`ClientHttpRequestFactory`的实现类，分别是：`SimpleClientHttpRequestFactory`，`HttpComponentsClientHttpRequestFactory`

```java
RestTemplate构造方法设置：
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
```

### SimpleClientHttpRequestFactory

如果不进行设置，`RestTemplate`默认使用的是`SimpleClientHttpRequestFactory`，其内部使用的是jdk的`java.net.HttpURLConnection`创建底层连接，默认是没有连接池的，`connectTimeout`和`readTimeout`都是 **-1**，即没有超时时间

::: details SimpleClientHttpRequestFactory底层实现

```java
public class SimpleClientHttpRequestFactory implements ClientHttpRequestFactory, AsyncClientHttpRequestFactory {
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
     * <p>The default implementation uses the given {@linkplain #setProxy(java.net.Proxy) proxy} -
     * if any - to open a connection.
     * @param url the URL to open a connection to
     * @param proxy the proxy to use, may be {@code null}
     * @return the opened connection  返回类型为 java.net.HttpURLConnection
     * @throws IOException in case of I/O errors
     */
    protected HttpURLConnection openConnection(URL url, Proxy proxy) throws IOException {
        URLConnection urlConnection = (proxy != null ? url.openConnection(proxy) : url.openConnection());
        if (!HttpURLConnection.class.isInstance(urlConnection)) {
            throw new IllegalStateException("HttpURLConnection required for [" + url + "] but got: " + urlConnection);
        }
        return (HttpURLConnection) urlConnection;
    }
    
    
    /**
     * Template method for preparing the given {@link HttpURLConnection}.
     * <p>The default implementation prepares the connection for input and output, and sets the HTTP method.
     * @param connection the connection to prepare
     * @param httpMethod the HTTP request method ({@code GET}, {@code POST}, etc.)
     * @throws IOException in case of I/O errors
     */
    protected void prepareConnection(HttpURLConnection connection, String httpMethod) throws IOException {
         //如果connectTimeout大于等于0，设置连接超时时间
        if (this.connectTimeout >= 0) {
            connection.setConnectTimeout(this.connectTimeout);
        }
         //如果readTimeout大于等于0，设置读超时时间
        if (this.readTimeout >= 0) {
            connection.setReadTimeout(this.readTimeout);
        }

        connection.setDoInput(true);

        if ("GET".equals(httpMethod)) {
            connection.setInstanceFollowRedirects(true);
        }
        else {
            connection.setInstanceFollowRedirects(false);
        }

        if ("POST".equals(httpMethod) || "PUT".equals(httpMethod) ||
                "PATCH".equals(httpMethod) || "DELETE".equals(httpMethod)) {
            connection.setDoOutput(true);
        }
        else {
            connection.setDoOutput(false);
        }

        connection.setRequestMethod(httpMethod);
    }
    
    。。。。。。
}
```

:::

### HttpComponentsClientHttpRequestFactory

`HttpComponentsClientHttpRequestFactory`底层使用`Apache HttpClient`创建请求，访问远程的`Http`服务，**可以使用一个已经配置好的HttpClient实例创建HttpComponentsClientHttpRequestFactory请求工厂，HttpClient实例中可以配置连接池和证书等信息**

**添加依赖**

```xml
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>x.x.x</version>   <!-- springboot项目不用指定版本号 -->
</dependency>
```

**设置超时时间**

可以直接使用Spring的底层基于`HttpClient的HttpComponentsClientHttpRequestFactory`，此处设置的是`ClientHttpRequestFactory`级别的全局超时时间

```java
@Configuration  
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
```

**注意**：如果通过一个`HttpClient`实例创建`HttpComponentsClientHttpRequestFactory`，并通过`HttpClient`指定了`DefaultRequestConfig`，设置了`connectTimeout`、`readTimeout`等，在实际执行请求创建`request`时会与`HttpComponentsClientHttpRequestFactory`的配置合并，`connectTimeout`、`socketTimeout`、`connectionRequestTimeout`以`HttpComponentsClientHttpRequestFactory`的配置为准

::: details 合并RequestConfig 和 HttpComponentsClientHttpRequestFactory的配置

```java
HttpComponentsClientHttpRequestFactory：
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
    if (connectTimeout >= 0) {
        builder.setConnectTimeout(connectTimeout);
    }
    int connectionRequestTimeout = this.requestConfig.getConnectionRequestTimeout();
    if (connectionRequestTimeout >= 0) {
        builder.setConnectionRequestTimeout(connectionRequestTimeout);
    }
    int socketTimeout = this.requestConfig.getSocketTimeout();
    if (socketTimeout >= 0) {
        builder.setSocketTimeout(socketTimeout);
    }
    return builder.build();
}
```

:::

上例中虽然没有指定http连接池，但**HttpComponentsClientHttpRequestFactory无参构造会创建一个HttpClient，并默认使用了连接池配置**，MaxTotal=10，DefaultMaxPerRoute=5 **，具体如下：

::: details HttpComponentsClientHttpRequestFactory默认连接池配置

```java
HttpComponentsClientHttpRequestFactory：
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
        @SuppressWarnings("resource")
        final PoolingHttpClientConnectionManager poolingmgr = new PoolingHttpClientConnectionManager(
                RegistryBuilder.<ConnectionSocketFactory>create()
                    .register("http", PlainConnectionSocketFactory.getSocketFactory())
                    .register("https", sslSocketFactoryCopy)
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
            String s = System.getProperty("http.keepAlive", "true");  //http.keepAlive默认值为true
            if ("true".equalsIgnoreCase(s)) {
                s = System.getProperty("http.maxConnections", "5");  //默认值为5
                final int max = Integer.parseInt(s);
                poolingmgr.setDefaultMaxPerRoute(max);  //DefaultMaxPerRoute=5
                poolingmgr.setMaxTotal(2 * max);  //MaxTotal=10
            }
        }
        if (maxConnTotal > 0) {
            poolingmgr.setMaxTotal(maxConnTotal);
        }
        if (maxConnPerRoute > 0) {
            poolingmgr.setDefaultMaxPerRoute(maxConnPerRoute);
        }
        connManagerCopy = poolingmgr;
    }
}
```

:::

### 自定义配置连接池

```java
@Configuration  
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
            logger.error("初始化clientHttpRequestFactory出错", e);
        }
        return null;
    } 
} 
```

::: details 工程配置样例 RestTemplateBuilder 模板 Builder

通过一个`HttpClient`实例创建`HttpComponentsClientHttpRequestFactory`，

再通过`HttpComponentsClientHttpRequestFactory`实例化`RestTemplate`自定义了`messageConverter`

Registry< ConnectionSocketFactory>（忽略/使用自定义证书，待学习）参考：[绕过证书](https://blog.csdn.net/xiaoxian8023/article/details/49865335)，[信任自定义证书](https://blog.csdn.net/xiaoxian8023/article/details/49866397?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param)

```java
import org.apache.http.client.HttpClient;
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

    private static final String HTTP = "http";
    private static final String HTTPS = "https";

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

    private List<HttpMessageConverter<?>> convertCharsetToUtf8(List<HttpMessageConverter<?>> defaultMessageConverters) {
        List<HttpMessageConverter<?>> messageConverters = new ArrayList<>();
        for (HttpMessageConverter<?> messageConverter : defaultMessageConverters) {
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
        Registry<ConnectionSocketFactory> registry = RegistryBuilder.<ConnectionSocketFactory>create()
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
            	.setProxy(new HttpHost("127.0.0.1",8888))
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
            return new SSLContextBuilder().loadTrustMaterial(null, (TrustStrategy) (arg0, arg1) -> true)
                    .build();
        } catch (NoSuchAlgorithmException | KeyManagementException | KeyStoreException e) {
            LOGGER.error("createSSLContext error:", e);
            return null;
        }
    }

    private SSLConnectionSocketFactory createSslConnectionSocketFactory() {
        SSLContext sslContext = createSslContext();
        return null != sslContext ? new SSLConnectionSocketFactory(sslContext)
                : SSLConnectionSocketFactory.getSocketFactory();
    }
}
```

:::

::: RestTemplateProxy 代理类

```java
import org.springframework.cglib.proxy.*;
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
    private static final String NOT_URL = "NOT_URL";
    private static final String SPLIT_TAG = "|";

    private static final String SUCCESS = "SUCCESS";
    private static final String FAILED = "FAILED";

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
        if (null != args && args.length > 1 && args[0] instanceof String) {
            url = (String) args[0];
        }
        return url;
    }
}

class HttpPerfHandlerFilter implements CallbackFilter {
	// 代理 RestTemplate 中的 exchange、postForEntity 方法
    private static final List<String> REST_TEMPLATE_METHODS = Arrays.asList("exchange", "postForEntity");

    @Override
    public int accept(Method arg) {
        return REST_TEMPLATE_METHODS.contains(arg.getName()) ? 0 : 1;
    }
}

```

:::

::: 使用 RestTemplateBuilder 构建自己的 RestTemplate

* 根据自己情况可自定义一些连接、超时 时间配置

```java
@Configuration
public class HttpCommonRestTemplateConfig {

    @Value("${http.common.readTimeout:30000}")
    private Integer readTimeout;

    @Value("${http.common.connectTimeout:1000}")
    private Integer connectTimeout;

    @Value("${http.common.connectRequestTimeout:1000}")
    private Integer connectRequestTimeout;

    @Value("${http.common.maxPool:100}")
    private Integer maxPool;

    @Value("${http.common.maxPerRoute:5}")
    private Integer maxPerRoute;

    @Value("${http.common.maxIdleTime:6000}")
    private long maxIdleTime;

    @Value("${http.common.connTimeToLive:6000}")
    private long connTimeToLive;

    @Bean(name = "httpCommonRestTemplate")
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
```

:::

## 拓展

### http请求中各种超时

| 超时（单位、毫秒）          | 说明                                                         |
| --------------------------- | ------------------------------------------------------------ |
| **connectionRequestTimout** | 从连接池获取连接的超时时间，如果连接池里连接都被用了，且超过这个connectionrequesttimeout，会抛出超时异常 |
| **connetionTimeout**        | 指客户端和服务器建立连接超时，连接主机超时， <br/>就是http请求的三个阶段，一：建立连接；二：数据传送；三，断开连接。超时后会ConnectionTimeOutException |
| **socketTimeout**           | 指客户端和服务器建立连接后，客户端从服务器读取数据的timeout，超出后会抛出SocketTimeOutException |
| **ReadTimeout**             | 从主机读取数据超时                                           |