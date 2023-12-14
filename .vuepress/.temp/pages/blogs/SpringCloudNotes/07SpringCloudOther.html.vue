<template><div><p>::: tip</p>
<p>准备整理一些微服务遇到的一些概念，工具的选型区别，对比。例如注册中心：<strong>ZooKeeper</strong>、<strong>Eureka</strong>、<strong>Consul</strong> 、<strong>Nacos</strong>对比，例如网关：<strong>Zuul</strong>，<strong>Gateway</strong>区别等。</p>
<p>:::</p>
<!-- more -->
<h2 id="服务注册于发现对比" tabindex="-1"><a class="header-anchor" href="#服务注册于发现对比" aria-hidden="true">#</a> 服务注册于发现对比</h2>
<ul>
<li><a href="https://my.oschina.net/u/3077716/blog/4470917" target="_blank" rel="noopener noreferrer">参考</a></li>
</ul>
<p>微服务：注册中心<strong>ZooKeeper</strong>、<strong>Eureka</strong>、<strong>Consul</strong> 、<strong>Nacos</strong>对比</p>
<p>服务注册中心本质上是为了解耦服务提供者和服务消费者。对于任何一个微服务，原则上都应存在或者支持多个提供者，这是由微服务的分布式属性决定的。</p>
<h3 id="cap理论" tabindex="-1"><a class="header-anchor" href="#cap理论" aria-hidden="true">#</a> CAP理论</h3>
<p>CAP理论是分布式架构中的重要理论，CAP 不可能都取，只能取其中2个</p>
<ul>
<li>一致性(<strong>C</strong>onsistency) (所有节点在同一时间具有相同的数据)</li>
<li>可用性(<strong>A</strong>vailability) (保证每个请求不管成功或者失败都有响应)</li>
<li>分隔容忍(<strong>P</strong>artition tolerance) (系统中任意信息的丢失或失败不会影响系统的继续运作)</li>
</ul>
<p><strong>理解：</strong></p>
<p>一致性(<strong>C</strong>onsistency)，各节点保证数据统一，需要进行数据同步，就会影响可用性(<strong>A</strong>vailability)，</p>
<p>可用性(<strong>A</strong>vailability)，只要有一个节点健康，就能提供服务，但不保证结果正确性</p>
<p>分隔容忍(<strong>P</strong>artition tolerance) ，某些节点宕机了，不影响整体系统的运行</p>
<h3 id="主流注册中心产品" tabindex="-1"><a class="header-anchor" href="#主流注册中心产品" aria-hidden="true">#</a> 主流注册中心产品</h3>
<table>
<thead>
<tr>
<th style="text-align:left">Feature</th>
<th style="text-align:left"><strong>Eureka</strong></th>
<th style="text-align:left"><strong>Zookeeper</strong></th>
<th style="text-align:left"><strong>Nacos</strong></th>
<th style="text-align:left"><strong>Consul</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>一致性协议（CAP）</strong></td>
<td style="text-align:left">AP</td>
<td style="text-align:left">CP</td>
<td style="text-align:left">CP+AP</td>
<td style="text-align:left">CP</td>
</tr>
<tr>
<td style="text-align:left"><strong>集群结构</strong></td>
<td style="text-align:left">平级</td>
<td style="text-align:left">主从</td>
<td style="text-align:left">支持平级和主从</td>
<td style="text-align:left">主从</td>
</tr>
<tr>
<td style="text-align:left"><strong>集群角色</strong></td>
<td style="text-align:left">主人</td>
<td style="text-align:left">Leader、follower observer</td>
<td style="text-align:left">leader、follower、candidate</td>
<td style="text-align:left">server-leader、server以及client</td>
</tr>
<tr>
<td style="text-align:left"><strong>健康检查</strong></td>
<td style="text-align:left">Client Beat</td>
<td style="text-align:left">Keep Alive</td>
<td style="text-align:left">TCP/HTTP/MYSQL/Client Beat</td>
<td style="text-align:left">TCP/HTTP/gRPC/Cmd</td>
</tr>
<tr>
<td style="text-align:left"><strong>负载均衡策略</strong></td>
<td style="text-align:left">Ribbon</td>
<td style="text-align:left">—</td>
<td style="text-align:left">权重/ metadata/Selector</td>
<td style="text-align:left">Fabio</td>
</tr>
<tr>
<td style="text-align:left"><strong>雪崩保护</strong></td>
<td style="text-align:left">有</td>
<td style="text-align:left">无</td>
<td style="text-align:left">有</td>
<td style="text-align:left">无</td>
</tr>
<tr>
<td style="text-align:left"><strong>自动注销实例</strong></td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
</tr>
<tr>
<td style="text-align:left"><strong>访问协议</strong></td>
<td style="text-align:left">HTTP</td>
<td style="text-align:left">TCP</td>
<td style="text-align:left">HTTP/DNS</td>
<td style="text-align:left">HTTP/DNS</td>
</tr>
<tr>
<td style="text-align:left"><strong>监听支持</strong></td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
</tr>
<tr>
<td style="text-align:left"><strong>多数据中心</strong></td>
<td style="text-align:left">支持</td>
<td style="text-align:left">不支持</td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
</tr>
<tr>
<td style="text-align:left"><strong>跨注册中心同步</strong></td>
<td style="text-align:left">不支持</td>
<td style="text-align:left">不支持</td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
</tr>
<tr>
<td style="text-align:left"><strong>SpringCloud集成</strong></td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
</tr>
<tr>
<td style="text-align:left"><strong>Dubbo集成</strong></td>
<td style="text-align:left">不支持</td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
</tr>
<tr>
<td style="text-align:left"><strong>K8S集成</strong></td>
<td style="text-align:left">不支持</td>
<td style="text-align:left">不支持</td>
<td style="text-align:left">支持</td>
<td style="text-align:left">支持</td>
</tr>
</tbody>
</table>
<p><strong>ZooKeeper</strong>基于CP，不保证高可用，如果zookeeper正在选主，或者Zookeeper集群中半数以上机器不可用，那么将无法获得数据。</p>
<p><strong>Eureka</strong>基于AP，能保证高可用，即使所有机器都挂了，也能拿到本地缓存的数据。作为注册中心，其实配置是不经常变动的，只有发版和机器出故障时会变。对于不经常变动的配置来说，CP是不合适的，而AP在遇到问题时可以用牺牲一致性来保证可用性，既返回旧数据，缓存数据。</p>
<p>所以理论上Eureka是更适合做注册中心。而现实环境中大部分项目可能会使用ZooKeeper，那是因为集群不够大，并且基本不会遇到用做注册中心的机器一半以上都挂了的情况。所以实际上也没什么大问题。</p>
<p>consul 和新晋的 nacos 的社区活跃度比较高， nacos 可以同时支持 AP 和 CP ；consul 则结合了 zookeeper 和 nacos 的诸多优点，还天然支持 多数据中心 ；而 zookeeper 则又可以唯一感知到服务状态的实时变化； Eureka 的自我保护机制使得它即使只剩下一台服务，也不影响正常运行，具有高可用性。</p>
<p>需要结合业务场景来进行选择。比如说，对于金融类的业务场景，对于 一致性 要求更高，那么就会排除掉 Eureka ,然后根据易用性、性价比等其他方面再进行后续的选择；对于 高可用 比较注重的项目，如电商类项目，则可以选择 Eurek 或者 Nacos ，但再比较其他方面，Nacos不仅可以做注册中心，还可以作为架构中的配置中心，并且社区活跃度比较高，功能也日渐在完善，使用的人越来越多，因此综合来讲，就选择了 Nacos</p>
<h2 id="api网关对比" tabindex="-1"><a class="header-anchor" href="#api网关对比" aria-hidden="true">#</a> API网关对比</h2>
<p>API 网关是介于客户端和服务器端之间的中间层，可以分为<strong>硬件网关</strong>和<strong>软件网关</strong>, 硬件网关包括<strong>LVS</strong> 和<strong>F5</strong>, 软件网关包括<strong>Nginx</strong>，<strong>Zuul</strong>，<strong>Gateway</strong>等, PI 的实现方面更多的考虑业务逻辑，而安全、性能、监控可以交由 API 网关来做，这样既提高业务灵活性又不缺安全。</p>
<p>API 网关出现的原因是微服务架构的出现，不同的微服务一般会有不同的网络地址，而外部客户端可能需要调用多个服务的接口才能完成一个业务需求，如果让客户端直接与各个微服务通信，会有以下的问题：</p>
<ul>
<li>客户端会多次请求不同的微服务，增加了客户端的复杂性。</li>
<li>存在跨域请求，在一定场景下处理相对复杂。</li>
<li>认证复杂，每个服务都需要独立认证。</li>
<li>难以重构，随着项目的迭代，可能需要重新划分微服务。例如，可能将多个服务合并成一个或者将一个服务拆分成多个。如果客户端直接与微服务通信，那么重构将会很难实施。</li>
<li>某些微服务可能使用了防火墙 / 浏览器不友好的协议，直接访问会有一定的困难。</li>
</ul>
<p>Gateway在Zuul的基础上进行了修改，主要是底层使用了高性能的通信框架Netty，区分了Route和Filter，提供了很多开箱即用的功能，</p>
<p>Ngnix：轻量级，免费，开源，社区活跃，暂用资源少，反向代理，高性能，抗并发，异步非阻塞，处理静态资源优秀</p>
<p>Apache：稳定，模块多，rewrite 强大，处理动态资源优秀</p>
<p>Gateway：主要用于替代zuul</p>
</div></template>


