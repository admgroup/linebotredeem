// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
    channelId: '1660823983',
    channelSecret: 'c0d48277e8d574f6a4e83c589e0c674c',
    channelAccessToken: 'vNi2i5Fs83eLXgQUj0obTXI9uc334Grt2ReB8W+KJygN2YjKALIexsRYLJkXpE4Kp6ThKOW4q9Wjff9dm5D1HgVngixJH276UfxRY5kxufScVfrj/j31Itv2NCiCX90STHWHh4JHrztQnRB69/nUlgdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息
    // 準備要回傳的內容
    var replyMsg = `Hello你剛才說的是:${event.message.text}`;
    event.reply(replyMsg).then(function (data) {
        // 當訊息成功回傳後的處理
    }).catch(function (error) {
        // 當訊息回傳失敗後的處理
    });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});