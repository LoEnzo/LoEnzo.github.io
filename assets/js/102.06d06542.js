(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{676:function(t,e,l){"use strict";l.r(e);var v=l(3),_=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("准备整理一些微服务遇到的一些概念，工具的选型区别，对比。例如注册中心："),e("strong",[t._v("ZooKeeper")]),t._v("、"),e("strong",[t._v("Eureka")]),t._v("、"),e("strong",[t._v("Consul")]),t._v(" 、"),e("strong",[t._v("Nacos")]),t._v("对比，例如网关："),e("strong",[t._v("Zuul")]),t._v("，"),e("strong",[t._v("Gateway")]),t._v("区别等。")])]),t._v(" "),e("h2",{attrs:{id:"服务注册于发现对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务注册于发现对比"}},[t._v("#")]),t._v(" 服务注册于发现对比")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://my.oschina.net/u/3077716/blog/4470917",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("微服务：注册中心"),e("strong",[t._v("ZooKeeper")]),t._v("、"),e("strong",[t._v("Eureka")]),t._v("、"),e("strong",[t._v("Consul")]),t._v(" 、"),e("strong",[t._v("Nacos")]),t._v("对比")]),t._v(" "),e("p",[t._v("服务注册中心本质上是为了解耦服务提供者和服务消费者。对于任何一个微服务，原则上都应存在或者支持多个提供者，这是由微服务的分布式属性决定的。")]),t._v(" "),e("h3",{attrs:{id:"cap理论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cap理论"}},[t._v("#")]),t._v(" CAP理论")]),t._v(" "),e("p",[t._v("CAP理论是分布式架构中的重要理论，CAP 不可能都取，只能取其中2个")]),t._v(" "),e("ul",[e("li",[t._v("一致性("),e("strong",[t._v("C")]),t._v("onsistency) (所有节点在同一时间具有相同的数据)")]),t._v(" "),e("li",[t._v("可用性("),e("strong",[t._v("A")]),t._v("vailability) (保证每个请求不管成功或者失败都有响应)")]),t._v(" "),e("li",[t._v("分隔容忍("),e("strong",[t._v("P")]),t._v("artition tolerance) (系统中任意信息的丢失或失败不会影响系统的继续运作)")])]),t._v(" "),e("p",[e("strong",[t._v("理解：")])]),t._v(" "),e("p",[t._v("一致性("),e("strong",[t._v("C")]),t._v("onsistency)，各节点保证数据统一，需要进行数据同步，就会影响可用性("),e("strong",[t._v("A")]),t._v("vailability)，")]),t._v(" "),e("p",[t._v("可用性("),e("strong",[t._v("A")]),t._v("vailability)，只要有一个节点健康，就能提供服务，但不保证结果正确性")]),t._v(" "),e("p",[t._v("分隔容忍("),e("strong",[t._v("P")]),t._v("artition tolerance) ，某些节点宕机了，不影响整体系统的运行")]),t._v(" "),e("h3",{attrs:{id:"主流注册中心产品"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主流注册中心产品"}},[t._v("#")]),t._v(" 主流注册中心产品")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Feature")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Eureka")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Zookeeper")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Nacos")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Consul")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("一致性协议（CAP）")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("AP")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CP")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CP+AP")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CP")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("集群结构")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("平级")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("主从")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持平级和主从")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("主从")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("集群角色")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("主人")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Leader、follower observer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("leader、follower、candidate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("server-leader、server以及client")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("健康检查")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Client Beat")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Keep Alive")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("TCP/HTTP/MYSQL/Client Beat")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("TCP/HTTP/gRPC/Cmd")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("负载均衡策略")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ribbon")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("权重/ metadata/Selector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Fabio")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("雪崩保护")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("有")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("有")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("自动注销实例")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("访问协议")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("TCP")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP/DNS")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP/DNS")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("监听支持")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("多数据中心")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("跨注册中心同步")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("SpringCloud集成")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("Dubbo集成")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[t._v("K8S集成")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持")])])])]),t._v(" "),e("p",[e("strong",[t._v("ZooKeeper")]),t._v("基于CP，不保证高可用，如果zookeeper正在选主，或者Zookeeper集群中半数以上机器不可用，那么将无法获得数据。")]),t._v(" "),e("p",[e("strong",[t._v("Eureka")]),t._v("基于AP，能保证高可用，即使所有机器都挂了，也能拿到本地缓存的数据。作为注册中心，其实配置是不经常变动的，只有发版和机器出故障时会变。对于不经常变动的配置来说，CP是不合适的，而AP在遇到问题时可以用牺牲一致性来保证可用性，既返回旧数据，缓存数据。")]),t._v(" "),e("p",[t._v("所以理论上Eureka是更适合做注册中心。而现实环境中大部分项目可能会使用ZooKeeper，那是因为集群不够大，并且基本不会遇到用做注册中心的机器一半以上都挂了的情况。所以实际上也没什么大问题。")]),t._v(" "),e("p",[t._v("consul 和新晋的 nacos 的社区活跃度比较高， nacos 可以同时支持 AP 和 CP ；consul 则结合了 zookeeper 和 nacos 的诸多优点，还天然支持 多数据中心 ；而 zookeeper 则又可以唯一感知到服务状态的实时变化； Eureka 的自我保护机制使得它即使只剩下一台服务，也不影响正常运行，具有高可用性。")]),t._v(" "),e("p",[t._v("需要结合业务场景来进行选择。比如说，对于金融类的业务场景，对于 一致性 要求更高，那么就会排除掉 Eureka ,然后根据易用性、性价比等其他方面再进行后续的选择；对于 高可用 比较注重的项目，如电商类项目，则可以选择 Eurek 或者 Nacos ，但再比较其他方面，Nacos不仅可以做注册中心，还可以作为架构中的配置中心，并且社区活跃度比较高，功能也日渐在完善，使用的人越来越多，因此综合来讲，就选择了 Nacos")]),t._v(" "),e("h2",{attrs:{id:"api网关对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api网关对比"}},[t._v("#")]),t._v(" API网关对比")]),t._v(" "),e("p",[t._v("API 网关是介于客户端和服务器端之间的中间层，可以分为"),e("strong",[t._v("硬件网关")]),t._v("和"),e("strong",[t._v("软件网关")]),t._v(", 硬件网关包括"),e("strong",[t._v("LVS")]),t._v(" 和"),e("strong",[t._v("F5")]),t._v(", 软件网关包括"),e("strong",[t._v("Nginx")]),t._v("，"),e("strong",[t._v("Zuul")]),t._v("，"),e("strong",[t._v("Gateway")]),t._v("等, PI 的实现方面更多的考虑业务逻辑，而安全、性能、监控可以交由 API 网关来做，这样既提高业务灵活性又不缺安全。")]),t._v(" "),e("p",[t._v("API 网关出现的原因是微服务架构的出现，不同的微服务一般会有不同的网络地址，而外部客户端可能需要调用多个服务的接口才能完成一个业务需求，如果让客户端直接与各个微服务通信，会有以下的问题：")]),t._v(" "),e("ul",[e("li",[t._v("客户端会多次请求不同的微服务，增加了客户端的复杂性。")]),t._v(" "),e("li",[t._v("存在跨域请求，在一定场景下处理相对复杂。")]),t._v(" "),e("li",[t._v("认证复杂，每个服务都需要独立认证。")]),t._v(" "),e("li",[t._v("难以重构，随着项目的迭代，可能需要重新划分微服务。例如，可能将多个服务合并成一个或者将一个服务拆分成多个。如果客户端直接与微服务通信，那么重构将会很难实施。")]),t._v(" "),e("li",[t._v("某些微服务可能使用了防火墙 / 浏览器不友好的协议，直接访问会有一定的困难。")])]),t._v(" "),e("p",[t._v("Gateway在Zuul的基础上进行了修改，主要是底层使用了高性能的通信框架Netty，区分了Route和Filter，提供了很多开箱即用的功能，")]),t._v(" "),e("p",[t._v("Ngnix：轻量级，免费，开源，社区活跃，暂用资源少，反向代理，高性能，抗并发，异步非阻塞，处理静态资源优秀")]),t._v(" "),e("p",[t._v("Apache：稳定，模块多，rewrite 强大，处理动态资源优秀")]),t._v(" "),e("p",[t._v("Gateway：主要用于替代zuul")])])}),[],!1,null,null,null);e.default=_.exports}}]);