const { params, SEND_HOUR, SEND_MINUTE } = require('./src/config/config')
const getToken = require('./src/getToken/index')
const getAllDataAndSend = require('./src/sendMessage/index')

const schedule = require("node-schedule"); //定时器任务库

async function start(isDrinkWater = false) {
  let access_token

  try {
    access_token = await getToken(params)
  } catch (error) {
    process.exit(0)
  }

  getAllDataAndSend({
    ...params,
    access_token,
    isDrinkWater
  })
    .then((res) => {
      if (res.data && res.data.errcode) {
        console.error('发送失败', res.data)
        return
      }
      console.log('发送成功-请在微信上查看对应消息')
    })
    .catch((err) => console.error('发送失败', err))
}

// node-schedule 定时任务处理
let rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 6)];
rule.hour = SEND_HOUR;
rule.minute = SEND_MINUTE;

console.log("message: 开始等待目标时刻...");
let j = schedule.scheduleJob(rule, function () {
  console.log("执行任务【爱你】");
  start()
});
// start()

const rule2 = new schedule.RecurrenceRule();
schedule.scheduleJob('0 0 8,9,10,11,15,16,18,20,22 * * *', function () {
  console.log("执行任务【喝水】");
  start(true)
});

