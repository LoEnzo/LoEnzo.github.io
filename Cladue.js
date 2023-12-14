import cloud from '@lafjs/cloud'

const aircode = require('aircode');
const {
    generateSign,
    reply,
    handleError,
} = require('./_utils');

const {
  askCluadeAPi
}= require('./slack.js');

const {
    getPandoraResult,
    saveDb,
} = require('./pandora');

// 从环境变量中获取到钉钉的相关配置
const DING_APP_SECRET = process.env.DING_APP_SECRET || '';

// 主方法
module.exports = async function (params, context) {
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

    const { msgtype, text, conversationId, senderStaffId } = params;

    // 示例中，我们只支持文本消息
    if (msgtype !== 'text') {
        return reply(params, '目前仅支持文本格式的消息。');
    }

    // 声明数据库
    const { content } = text;
    const claude = aircode.db.table('claude');

    // 判断是否为新对话
    if (content === 'new') {
        //如果是新对话，则清空历史记录
        await claude.where({ 'cid': conversationId, 'sid': senderStaffId }).delete();
        return reply(params, '好的， 你可以问新的问题了');
    } 

    
    //从数据库中取之前沟通的问题
    const records = await claude
        .where({ 'cid': conversationId, 'sid': senderStaffId })
        .sort({ createdAt: 1 })
        .findOne();
    console.log('Received 之前的问题:', records);
	  let result;
	  if ( null == records){
			// 调用Pandora返回结果
	    result = await askCluadeAPi(content);
		}else{
			 // 调用Pandora返回结果
      result = await askCluadeAPi(content, records.currentquestionid);
		}
    console.log('claude 返回结果:', result);
    // 保存数据库
    // saveDb(result, params);
    // 返回钉钉消息
    return reply(params, result.message.content.parts[0]);

}