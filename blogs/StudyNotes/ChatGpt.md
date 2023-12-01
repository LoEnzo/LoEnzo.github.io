---
title: ChatGpt
tags:
 - ChatGpt
 - AirCode
 - Pandora
 - Vercel
categories:
 - StudyNotes
date: 2023-07-11
---
::: tip

​		将ChatGtp接入钉钉，直接以会话聊天的方式进行问答，有 `api key`的可以直接接入使用，只有账号且 `api key`试用额度过期的，可以参考教程，修改js达到只用账号 `access_token`接入钉钉正常使用，各有优缺点；
​		Pandora像项目更加适合使用，只不过不知钉钉接入而已，Web，客户端都有

:::

## 初始

​		ChatGpt最开始出现那段时间，没怎么在意，主要是当时没怎么用，后来发现这玩意儿越来越火，找了一些体验的网站，发现问一些问题（就小白直接问，像百度那种，不是啥预设角色，prompt关键词高级用法），直接给出答案发现还不错，至少比某度搜索，开篇几行都是广告（虽然自己使用油猴插件，过滤了大部分），需要自己去辨别，搜索；且出现最前面的CSDN（虽然大家很诟病，觉得这里面都是贴来贴去的答案，但是不妨碍小白能从中搜索到答案，没github stackoverflow专业，但是好用）、知乎、掘金等这些网站，广告也多，啥复制展开这些还要登陆账号，繁琐。
​		那么，既然这玩意这么好用，那自己也得来用用，于是呼，在网上达搜特搜相关白嫖网站（镜像网站），有些是提供给大家免费使用的，有些是可以自己登陆账号，输入`api key`的，有些界面官方的，有些是魔改的，简直五花八门；平时用得不多，可能是公司业务涉及到的问题不多（自己琢磨不深），哈哈，没怎么用，不过后面偶尔想用用的时候，发现某些地址就不能访问了，又要去找新的（主要是不想花钱），就很麻烦，用起来不舒服。
​		熟话说，别人再好，不如自己有，就准备自己也去搞个官方账号。

正巧了解到朋友，她自己已经注册了一个账号，就用它的账号登陆了下`openai`官网（需要科学上网，也是用她的账号），发现她一直都是在官网在线使用的，尝试创建了 `api key`，在外面一些提供的免费平台，输入这个 `api key`，使用两个良好，然后搭建 `AirCode`接入钉钉，完美使用，那么剩下的就是自己注册一个自己的账号了，毕竟，老用别人的不好，哈哈。

## 注册OpenAi账号

工具：

邮箱：最好是国外邮箱，google邮箱 或者 微软 outlook 邮箱；

虚拟号码：[sms-activate.org/cn](https://link.juejin.cn/?target=https%3A%2F%2Fsms-activate.org%2Fcn)

工具：科学上网工具（往上可以找到那种试用的）

开始注册：

​		注：最好直接使用邮箱注册，而不是点击三方登陆再进行注册，很多封装chatGpt的项目都不支持三方登陆

​		登陆[OpenAi官网](https://openai.com/), 点击最上边导航栏 `API`，然后再 `SIGN UP`，可能会要求你是否是真人，注意没有科学上网会报错 `OpenAI's services are not available in your country`。自己注册账户，然后充值一点点money，上面是dollar结算，左边就有服务，对应就有 openai 的服务，不同国家的虚拟账号是加个不一样的，差不多7-15RMB，也就是说充值的时候差不多2dollar就行。充值完成之后就可以选择这边的服务购买了，这平台好处就在于如果你选择了服务，后面对应生成了号码，结果在openai注册选择了改号码，提示不能使用的报错，那么你可以直接在生成的订单哪里点击叉，或者等到实际时间过了，会退款给你，不过只是退款到该平台哦，可不会退回到你支付宝这些。

​		详细流程可以直接百度，这里就不在重复的详细说明提供一步步实例了，流程就是这样的，可参考：

​		[超详细注册OpenAI接口账号的教程 - 掘金 (juejin.cn)](https://juejin.cn/post/7203009064719400997)

​		注册完成后，你就可以登陆进去了，依次点击**个人头像** -> **API Keys** -> **Create new secret key** ，即可获取 `Secret Key` 。

这个时候你点击在线的`chatGpt`已经可以直接使用了，不过得一直保持科学上网哦，生成的 `Secret Key` 是可以用于个人兴趣项目，开发过程中提供接口调用方式的。

一直保持科学上网我还没这么有钱，下面进行白嫖之旅....

## AirCode 接入钉钉

​		偶然查找文档，发现右边一小块有个广告，就是`AirCode`这玩意儿，看了下，大概就是云函数平台，跟以前腾讯云平台的差不多，不过腾讯云云函数平台开始收费后，之前白嫖部署的一些自动签到的项目就没管了。这个文档进去就能看到主要推广就是各种平台接入 `chatGpt`的，包含：siri、飞书、钉钉、企业微信、slack、discord。正好自己一般使用钉钉就自己看了下文档，发现人家提供一站式js示例，只要有对应的 `api key`其他照着流程来，虽然达不到5分钟部署完成，但是总的来说还是很快的。

详细教程：[钉钉 ChatGPT 机器人 - 用 JavaScript 五分钟开发一个钉钉 ChatGPT 机器人（含全部源码，免费托管，手把手教程） (aircode.cool)](https://aircode.cool/xspb3by9fs)

差不多照着流程就可以，不过有些小点还是可以给大家说明一下，避免弯路：

- 钉钉开发者平台可以自己随便创建一个组织就可以进去
- 使用默认模板建立的时候，Deploy 会报错，记得左下角先添加对应依赖 `openai`
- 想让别的小伙伴也能使用，需要建立群（自己创建的组织内部群，注意看群类型，要不然添加机器人会找不到自己创建的机器人哟）邀请钉钉好友就可以了
- 群里使用每次需要@机器人生效，直接单点开机器人界面可以直接聊天
- 默认示例给的代码不支持上下文，下面的js可以提供参考，交流群里面大佬提供，用魔法打败魔法，直接问的chatgtp怎么支持上下文，然后修改的js

::: details chat.js

```js
// chat.js代码，支持上下文
// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const { Configuration, OpenAIApi } = require('openai');
const {
  generateSign,
  reply,
  handleError,
} = require('./_utils');

// 从环境变量中获取到钉钉和 OpenAI 的相关配置
const DING_APP_SECRET = process.env.DING_APP_SECRET || '';
const OPENAI_KEY = process.env.OPENAI_KEY || '';
// 当前使用的是 OpenAI 开放的最新 GPT-3.5 模型，如果后续 GPT-4 的 API 发布，修改此处参数即可
// OpenAI models 参数列表 https://platform.openai.com/docs/models
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-3.5-turbo';

// 主方法
module.exports = async function(params, context) {
  if (context.method !== 'POST') {
// 钉钉机器人消息是 POST 请求，所以忽略所有非 POST 请求
    return;
  }

  // 如果设置了 SECRET，则进行验证
  if (DING_APP_SECRET) {
//从 Headers 中拿到 timestamp 和 sign 进行验证
    const { timestamp, sign } = context.headers;
    if (generateSign(timestamp) !== sign) {
  return;
}
  }

  // 打印请求参数到日志，方便排查
  console.log('Received params:', params);

  const { msgtype, text, conversationId,senderStaffId } = params;

  // 示例中，我们只支持文本消息
  if (msgtype !== 'text') {
    return reply(params, '目前仅支持文本格式的消息。');
  }

  // 如果没有配置 OPENAI_KEY，则提醒需要配置
  if (!OPENAI_KEY) {
    return reply(params, '恭喜你已经调通了机器人，现在请进入 AirCode 中配置 OPENAI_KEY 环境变量，完成 ChatGPT 连接。');
  }

  // 声明数据库
  const { content } = text;
  const ChatsTable = aircode.db.table('chats');

  // 判断是否为新对话
  let isNewConversation = false;
  if (content === 'new') {
    isNewConversation = true;
  }

  //如果是新对话，则清空历史记录
  if (isNewConversation) {
    await ChatsTable.where({ 'cid': conversationId, 'sid': senderStaffId }).delete();
    return reply(params, '好的， 你可以问新的问题了');
  }

  //从数据库中取之前沟通的问题
  const records = await ChatsTable
.where({ 'cid':conversationId,'sid':senderStaffId })
.find();
//return reply(params, '之前的问题：'+records.question);
  
  // 构建发送给 GPT 的消息体
  const messages = [
{ role: 'system', content: 'You are a helpful assistant.' },
  ];
  //装入上下文
  for (const record of records) {
    messages.push(
{ role: 'user', content: record.question },
{ role: 'assistant', content: record.assistant },
  );
  }
  //装入当前问题
   messages.push(
 { role: 'user', content },
 );

// 将用户的问题存入数据表中，后续方便进行排查，或者支持连续对话
  const personItem = {
'cid':conversationId,
'sid':senderStaffId,
'question':content,
'assistant':' ',
  };
  await ChatsTable.save(personItem);

  
  const openai = new OpenAIApi(new Configuration({ apiKey: OPENAI_KEY }));

  try {
// 请求 GPT 获取回复
    const completion = await openai.createChatCompletion({
  model: OPENAI_MODEL,
  messages,
});

    const responseMessage = completion.data.choices[0].message;

// 将 ChatGPT 的响应也存入数据库
    const record = await ChatsTable
.where({ 'cid':conversationId,'sid':senderStaffId })
.set({
  'assistant':responseMessage.content
})
.save();
  
//await ChatsTable.save({ conversationId, ...responseMessage });

// 回复钉钉用户消息
    return reply(params, responseMessage.content);

  } catch (error) {
// 错误处理，首先打印错误到日志中，方便排查
    console.error(error.response || error);

// 根据不同的情况来生成不同的错误信息
    const errorMessage = handleError(error);
  
// 回复错误信息给用户
    return reply(params, `错误：${errorMessage}`);
  }
}
```

:::

::: details utils.js

```js
// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const crypto = require('crypto');
const axios = require('axios');

// 从环境变量中获取到钉钉的相关配置
const DING_APP_KEY = process.env.DING_APP_KEY || '';
const DING_APP_SECRET = process.env.DING_APP_SECRET || '';

// 辅助方法，用于根据钉钉的规则生成签名，校验消息合法性
function generateSign(timestamp) {
	const stringToSign = timestamp + '\n' + DING_APP_SECRET;
	const hmac = crypto.createHmac('sha256', DING_APP_SECRET);
	hmac.update(stringToSign);
	const sign = hmac.digest().toString('base64');
	return sign;
}

// 辅助方法，获取钉钉机器人的 AccessToken
async function getAccessToken() {
	if (!DING_APP_KEY || !DING_APP_SECRET) {
		throw new Error(
			'没有正确设置 DING_APP_KEY 和 DING_APP_SECRET 环境变量，请进入 AirCode 中完成设置。'
		);
	}

	// 先从数据库中获取 token 看下是否过期，这样不用每次都发起请求
	const TokenTable = aircode.db.table('token');
	const item = await TokenTable.where().sort({ expiredAt: -1 }).findOne();
	const now = Date.now();

	// 如果 token 还在有效期内，则直接返回
	if (item && item.expiredAt > now) {
		return item.token;
	}

	// 否则，请求钉钉获取 token
	const { data } = await axios.post(
		'https://api.dingtalk.com/v1.0/oauth2/accessToken',
		{
			appKey: DING_APP_KEY,
			appSecret: DING_APP_SECRET,
		}
	);

	const token = data.accessToken;
	const expiredAt = now + data.expireIn * 1000;

	// 将 token 存入数据库
	await TokenTable.save({ token, expiredAt });

	// 返回 token
	return token;
}

// 辅助方法，用于钉钉发送单聊消息
async function sendPrivateMessage(userId, content) {
	const token = await getAccessToken();
	return axios.post(
		'https://api.dingtalk.com/v1.0/robot/oToMessages/batchSend',
		{
			robotCode: DING_APP_KEY,
			userIds: [userId],
			msgKey: 'sampleText',
			msgParam: JSON.stringify({ content }),
		},
		{
			headers: {
				'x-acs-dingtalk-access-token': token,
			},
		}
	);
}

// 辅助方法，用于钉钉发送群聊消息
async function sendGroupMessage(conversationId, content) {
	const token = await getAccessToken();
	return axios.post(
		'https://api.dingtalk.com/v1.0/robot/groupMessages/send',
		{
			robotCode: DING_APP_KEY,
			openConversationId: conversationId,
			msgKey: 'sampleText',
			msgParam: JSON.stringify({ content }),
		},
		{
			headers: {
				'x-acs-dingtalk-access-token': token,
			},
		}
	);
}

// 辅助方法，回复用户的消息
async function reply(event, content) {
	// 如果没有配置钉钉的 Key 和 Secret，则通过直接返回的形式回复
	// 注意这种形式虽然简单，但可能因为超时而无法在钉钉中获得响应
	if (!DING_APP_KEY || !DING_APP_SECRET) {
		return {
			msgtype: 'text',
			text: { content },
		};
	}

	// 如果配置了 Key 和 Secret，则通过调用接口回复
	// 根据 conversationType 判断是群聊还是单聊
	if (event.conversationType === '1') {
		// 单聊
		await sendPrivateMessage(event.senderStaffId, content);
	} else {
		// 群聊
		await sendGroupMessage(event.conversationId, content);
	}
	return { ok: 1 };
}

// 辅助方法，处理错误，生成错误消息
function handleError(error) {
	let errorMessage;

	if (error.response) {
		// 如果有 error.response，代表请求发出了，而服务器回复了错误
		const { status, statusText, data } = error.response;

		if (status === 401) {
			// 401 代表 OpenAI 认证失败了
			errorMessage =
				'你没有配置正确的 OpenAI API Key，请进入 AirCode 中配置正确的环境变量。';
		} else if (data.error && data.error.message) {
			// 如果 OpenAI 返回了错误消息，则使用 OpenAI 的
			errorMessage = data.error.message;
		} else {
			// 否则，使用默认的错误消息
			errorMessage = `Request failed with status code ${status}: ${statusText}`;
		}
	} else if (error.request) {
		// 如果有 error.request，代表请求发出了，但没有得到服务器响应
		errorMessage =
			'OpenAI 服务器没有响应，可以前往 https://status.openai.com/ 查看其服务状态。';
	} else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
		// 网络错误，例如 DNS 解析错误或者建连失败
		errorMessage = `Network error: ${error.message}`;
	} else {
		errorMessage = error.message;
	}

	return errorMessage;
}

module.exports = {
	generateSign,
	reply,
	handleError,
};
```

:::

在个人dashboard-usage可以看到自己使用了多少配置，[AirCode](https://aircode.io/dashboard/usage)，毕竟是免费的，有时候可能反应比较慢一点，有条件的小伙伴可以自己给 AirCode，购买他们的plus服务哦。

## Pandora 相关项目

pandora项目作者（大家称始皇）前后换了几个github账户，关注了下，因为前面项目开源的原因，导致被滥用举报封号，之前的pandora相关项目，不在维护

截止当前最新项目 Pandora-Next ：[pandora-next/deploy: Pandora Cloud + Pandora Server + Shared Chat + BackendAPI Proxy + Chat2API = PandoraNext. New GPTs(Gizmo) UI, All in one! (github.com)](https://github.com/pandora-next/deploy)

学习文档：[关于FakeOpen | FakeOpen Doc](https://fakeopen.org/)，如有帮助，可以给大佬点赞加Star

结合Pandora-Next管理tokens相关项目：[Yanyutin753/PandoraNext-TokensTool](https://github.com/Yanyutin753/PandoraNext-TokensTool)

Pandora-Next 大佬更新太频繁了，之前需要借助这个工具的，基本都支持了，也有自己的简单后台，可以查看token，个人就给朋友几个人用，也就没折腾了，感兴趣可以去看看

大佬提供服务相关地址：

* [ChatGPT Auth (fakeopen.com)](https://ai.fakeopen.com/auth1) ：获取账号 access_token
* [ChatGPT Auth (fakeopen.com)](https://ai.fakeopen.com/auth) ：获取账号（三方登陆）access_token，根据提示安装 ChatGPTAuthHelper 浏览器插件，才能调起三方登陆
* [Shared Chat (zhile.io)](https://chat-shared3.zhile.io/shared.html)：大佬及网友共享tokens账号，临时使用可以，建议有号自己搭建
* [Dashboard - Index (pandoranext.com)](https://dash.pandoranext.com/)：获取 license.jwt 和 license.id 地址
* [Share Token (fakeopen.com)](https://ai.fakeopen.com/token)：根据自己账号的access_token 创建 登陆服务的 token，可以相互隔离
* [Pool Token (fakeopen.com)](https://ai.fakeopen.com/pool)：多个 token 组成 token 池

个人部署环境：

* 阿里云 轻量服务器 2G
* 环境 ： K3S，v1.25.5+k3s2 (de654222)
* [个人搭建Pandora-next](https://pandora-next.loenzo.top/)

* [个人搭建Pandora](https://pandora.loenzo.top/auth/login)

* [个人服务状态 ](https://status.loenzo.top/status/loenzo)

::: details pandora-next.yaml

```yaml
# pandora-next
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pandora-next
  namespace: pandora
spec:
  replicas: 1
  selector:
    matchLabels:
  app: pandora-next
  template:
    metadata:
  labels:
    app: pandora-next
    spec:
  containers:
- name: pandora-next
	# （避免不知道当前版本以及网络问题，我是拉去最新的重命名为当前日期推送到自己阿里云仓库了）
  image: registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/pandora-next:20231130
  env:
- name: PANDORA_NEXT_LICENSE
		# (自己根据项目Readme中JWT license)
  value: xxxxx
  ports:
- containerPort: 8181
  volumeMounts:
- name: pandora-next-log
  mountPath: /data
  volumes:
- hostPath:
    path: /data/pandora-next
    type: ""
  name: pandora-next-log
---

apiVersion: v1
kind: Service
metadata:
  name: pandora-next-service
  namespace: pandora
spec:
  selector:
    app: pandora-next
  ports:
- protocol: TCP
  port: 80
  targetPort: 8181

---
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: pandora-next-ingress-https-route
  namespace: pandora
spec:
  entryPoints:
#- web ##  使用 http 方式
- websecure   ## 使用https方式
  routes:
- match: Host(`pandora-next.loenzo.top`) && PathPrefix(`/`)
  kind: Rule
  services:
- name: pandora-next-service
  port: 80
  tls:
    secretName: loenzo-top-tls   ## https 配置证书

---
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: pandora-next-ingress-http-route
  namespace: pandora
spec:
  entryPoints:
- web
# - websecure   ## 使用https方式
  routes:
- match: Host(`pandora-next.loenzo.top`) && PathPrefix(`/`)
  kind: Rule
  services:
- name: pandora-next-service
  port: 80
  # 自动http转https
  middlewares:
- name: redirect-https
  #  - tls:
#  secretName: loenzo-top-tls  ## 配置证书
---
# 创建中间件，自动http转https
apiVersion: traefik.containo.us/v1alpha1
kind: Middleware
metadata:
  name: redirect-https
  namespace: pandora
spec:
  redirectScheme:
    scheme: https
```

旧项目也保留了一份

::: details pandora.yaml

```yaml
# pandora
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pandora
  namespace: pandora
spec:
  replicas: 1
  selector:
    matchLabels:
  app: pandora
  template:
    metadata:
  labels:
    app: pandora
    spec:
  containers:
- name: pandora
  image: registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/pandora:latest
  env:
- name: PANDORA_CLOUD
  value: cloud
- name: PANDORA_SERVER
  value: 0.0.0.0:80
  ports:
- containerPort: 80
  volumeMounts:
- name: data-volume
  mountPath: /data/pandora
  volumes:
- name: data-volume
  emptyDir: {}
---

apiVersion: v1
kind: Service
metadata:
  name: pandora-service
  namespace: pandora
spec:
  selector:
    app: pandora
  ports:
- protocol: TCP
  port: 80
  targetPort: 80

---
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: pandora-ingress-https-route
  namespace: pandora
spec:
  entryPoints:
#- web ##  使用 http 方式
- websecure   ## 使用https方式
  routes:
- match: Host(`pandora.loenzo.top`) && PathPrefix(`/`)
  kind: Rule
  services:
- name: pandora-service
  port: 80
  tls:
    secretName: loenzo-top-tls   ## https 配置证书

---
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: pandora-ingress-http-route
  namespace: pandora
spec:
  entryPoints:
- web
# - websecure   ## 使用https方式
  routes:
- match: Host(`pandora.loenzo.top`) && PathPrefix(`/`)
  kind: Rule
  services:
- name: pandora-service
  port: 80
  # 自动http转https
  middlewares:
- name: redirect-https

  #  - tls:
#  secretName: loenzo-top-tls  ## 配置证书
---
# 创建中间件，自动http转https 一个namespace 创建一个就行了
apiVersion: traefik.containo.us/v1alpha1
kind: Middleware
metadata:
  name: redirect-https
  namespace: pandora
spec:
  redirectScheme:
    scheme: https
```

:::
