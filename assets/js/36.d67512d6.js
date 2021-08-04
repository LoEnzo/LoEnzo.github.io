(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{661:function(t,v,_){"use strict";_.r(v);var a=_(4),l=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"}),_("p",[t._v("现在的系统已经离不开消息队列，我们可以用他做异步，做解耦，做流处理，做可靠传输。异步消息可以作为解耦消息的生产和处理的一种解决方案，通常会想到两种主要的消息模式——消息队列和发布/订阅模式。常被提到的就是RabbitMQ和Kafka，两者各有优势。"),_("a",{attrs:{href:"https://mp.weixin.qq.com/s/wNMoIftlO1iNeqJVvPDLwg",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),_("OutboundLink")],1)])]),t._v(" "),_("p",[_("strong",[t._v("优先选择RabbitMQ的条件：")])]),t._v(" "),_("ul",[_("li",[t._v("高级灵活的路由规则；")]),t._v(" "),_("li",[t._v("消息时序控制（控制消息过期或者消息延迟）；")]),t._v(" "),_("li",[t._v("高级的容错处理能力，在消费者更有可能处理消息不成功的情景中（瞬时或者持久）；")]),t._v(" "),_("li",[t._v("更简单的消费者实现。")])]),t._v(" "),_("p",[_("strong",[t._v("优先选择Kafka的条件：")])]),t._v(" "),_("ul",[_("li",[t._v("严格的消息顺序；")]),t._v(" "),_("li",[t._v("延长消息留存时间，包括过去消息重放的可能；")]),t._v(" "),_("li",[t._v("传统解决方案无法满足的高伸缩能力。")])]),t._v(" "),_("p",[_("strong",[t._v("两者结合更优：")])]),t._v(" "),_("p",[t._v("例如，在一个事件驱动的架构系统中，我们可以使用RabbitMQ在服务之间发送命令，并且使用Kafka实现业务事件通知。")]),t._v(" "),_("p",[t._v("原因是事件通知常常用于事件溯源，批量操作（ETL风格），或者审计目的，因此Kafka的消息留存能力就显得很有价值。")]),t._v(" "),_("p",[t._v("相反，命令一般需要在消费者端做额外处理，并且处理可以失败，所以需要高级的容错处理能力。")])])}),[],!1,null,null,null);v.default=l.exports}}]);