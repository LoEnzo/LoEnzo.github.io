

nginx 使用

nginx zuul gateway 区别

https://www.jianshu.com/p/8d82c6c2e5ee

nginx 

​	免费， 高性能，Nginx适合于服务器端负载均衡，功能更强大，因为Nginx整合一些脚本语言( Nginx + lua )

zuul

​	springCloud套件，适合微服务实现网关，采用 Ribbon + Eureka 来实现本地负载均衡.

gateway

​	gateway对比zuul多依赖了spring-webflux，在spring的支持下，功能更强大，内部实现了限流、负载均衡等，扩展性也更强，但同时也限制了仅适合于Spring Cloud套件，而zuul则可以扩展至其他微服务框架中，其内部没有实现限流、负载均衡等

