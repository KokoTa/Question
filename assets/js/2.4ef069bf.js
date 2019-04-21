(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{167:function(t,e,s){t.exports=s.p+"assets/img/1.95fc8282.png"},168:function(t,e,s){t.exports=s.p+"assets/img/2.02743d9a.png"},169:function(t,e,s){t.exports=s.p+"assets/img/3.9b249595.png"},173:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"tcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),a("h2",{attrs:{id:"tcp-三次握手和四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-三次握手和四次挥手","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP 三次握手和四次挥手")]),t._v(" "),a("p",[a("img",{attrs:{src:s(167),alt:"三次握手"}})]),t._v(" "),a("ol",[a("li",[t._v("client 发送 syn 给 server，此时 client 状态为 syn_sent")]),t._v(" "),a("li",[t._v("server 接收到 syn 后发送 ack 给 client，此时 server 状态为 sync_rcvd")]),t._v(" "),a("li",[t._v("client 接收到 ack 后，client 状态变为 established")]),t._v(" "),a("li",[t._v("server 发送 syn 给 client")]),t._v(" "),a("li",[t._v("client 接收到 syn 后发送 ack 个 server，server 状态变为 established")])]),t._v(" "),a("p",[t._v("通常的流程如上，但可以把 2、4 进行合并，即和图片一样只有三次握手")]),t._v(" "),a("p",[t._v("syn_sent 和 syn_rcvd，这两个状态叫着「半打开」状态。syn_sent 是主动打开方的「半打开」状态，syn_rcvd 是被动打开方的「半打开」状态。")]),t._v(" "),a("p",[t._v("可以把 syn 当作打招呼，ack 当作打招呼的回应去理解")]),t._v(" "),a("h2",{attrs:{id:"tcp-传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-传输","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP 传输")]),t._v(" "),a("p",[a("img",{attrs:{src:s(168),alt:"TCP传输"}})]),t._v(" "),a("p",[t._v("如果 client 传输 data 时，没有接收到返回的 ack，那么 client 就会再次发送 data，即 "),a("strong",[t._v("重传")])]),t._v(" "),a("p",[t._v("如果 server 连续接收到多个 client 的相同 data，那么 server 就只会取其中一个，即 "),a("strong",[t._v("去重")])]),t._v(" "),a("p",[t._v("client 和 server 可以相互传输，因为 TCP 是 "),a("strong",[t._v("双工")]),t._v(" 的")]),t._v(" "),a("p",[t._v("client 连续发送多个 data，server 可以只回一个 ack，即 "),a("strong",[t._v("批量ack")])]),t._v(" "),a("p",[t._v("client 不能连续发送太多个 data，server 可能处理不过来，两者之间需要有协商好的合适的发送和接受速率，这个就是 "),a("strong",[t._v("TCP窗口大小")])]),t._v(" "),a("h2",{attrs:{id:"tcp-四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-四次挥手","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP 四次挥手")]),t._v(" "),a("p",[a("img",{attrs:{src:s(169),alt:"TCP四次挥手"}})]),t._v(" "),a("p",[t._v("上面有一个非常特殊的状态time_wait，它是主动关闭的一方在回复完对方的挥手后进入的一个长期状态，这个状态标准的持续时间是4分钟，4分钟后才会进入到closed状态，释放套接字资源。不过在具体实现上这个时间是可以调整的")]),t._v(" "),a("p",[t._v("time_wait 状态下，如果 server 没有拿到 ack，会再次发送 fin 给 client，此时 time_wait 状态下的 client 会再次发送 ack 给 server。同时在这段时间内，该链接收到的报文传都会被立即丢弃掉。4分钟的时间足以使得这些残留报文彻底消逝。不然当新的端口被重复利用时，这些残留报文可能会干扰新的链接")]),t._v(" "),a("p",[t._v("4 分钟就是 2 个 MSL，每个 MSL 是 2 分钟。MSL 就是 maximium segment lifetime —— 最长报文寿命")]),t._v(" "),a("p",[t._v("四次挥手也并不总是四次挥手，中间的两个动作有时候是可以合并一起进行的，这个时候就成了三次挥手，主动关闭方就会从fin_wait_1 状态直接进入到 time_wait 状态，跳过了 fin_wait_2 状态")]),t._v(" "),a("h2",{attrs:{id:"tcp-有哪些手段保证可靠交付"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-有哪些手段保证可靠交付","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP 有哪些手段保证可靠交付")]),t._v(" "),a("ol",[a("li",[t._v("将数据截断为合理的长度")]),t._v(" "),a("li",[t._v("超时重发")]),t._v(" "),a("li",[t._v("对于收到的请求，给出确认响应")]),t._v(" "),a("li",[t._v("接收端校验报文段有错会丢弃报文段，不给出响应；发送端没收到响应，超时时会重发数据")]),t._v(" "),a("li",[t._v("对失序数据进行重新排序，然后才交给应用层")]),t._v(" "),a("li",[t._v("对于重复数据，能够丢弃重复数据")]),t._v(" "),a("li",[t._v("TCP可以进行流量控制，防止较快主机致使较慢主机的缓冲区溢出")])])])}],v=s(0),_=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);e.default=_.exports}}]);