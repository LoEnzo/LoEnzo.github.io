// @see https://docs.aircode.io/guide/functions/

const cloud = require('@lafjs/cloud');
const axios = require('axios');

async function askCluadeAPi(question, conversationId) {
  const token =
    'xoxp-5165758547328-5139127346565-5578929248613-9d0cc5a13eb650c3a6ac01c1c209b2f1';
  const bot = 'U054TPGP6P5';
  const chatId = 'develop';

  // 初始化claude
	  const { Authenticator } = await import('claude-api-slack');

	
  // 通过缓存保存客户端，可以避免每次提问都是在新会话
  let claudeClient = cloud.shared.get('claudeClient');

  if (!claudeClient) {
    claudeClient = new Authenticator(token, bot);
    cloud.shared.set('claudeClient', claudeClient);
  }
  // 创建频道并返回房间ID：channel
  const channel = await claudeClient.newChannel(chatId);

	
  let result;
  if (conversationId) {
    result = await claudeClient.sendMessage({
      text: question,
      channel,
      conversationId,
      onMessage: (originalMessage) => {
        console.log('loading', originalMessage);
      },
    });
  } else {
    result = await claudeClient.sendMessage({
      text: question,
      channel,
      onMessage: (originalMessage) => {
        // console.log("loading", originalMessage)
        console.log('loading', originalMessage);
      },
    });
  }
  console.log('success', result);
  return {
    code: 0,
    msg: result.text,
    conversationId: result.conversationId,
  };
}

module.exports = {
  askCluadeAPi
}

