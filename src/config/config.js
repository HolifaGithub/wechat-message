// 微信测试公众号
const params = {
  appid: 'wx8068887104b5f635',
  secret: 'a48cae84d358c3eb82974bd8c5f1a9aa',
  // touser: 'oRp_p5_GdZCWhUyCwbFSk-dU4zWY', // 我
  touser: 'oRp_p5_0oEqHPs7IsXUPdBEnGssc', // 熹熹
  template_id: 'N4aL6kJ3tu3rysXprMhxIn7yJq-Re4k50J8caE59NB8',
}

// 纪念日
const START_DAY = "2022/04/30";
// 每日发送时间
const SEND_HOUR = 00;
const SEND_MINUTE= 00;
// 获取每日情话链接
const CHP_URL = 'https://api.shadiao.pro/chp';
// 当地拼音,需要在下面的墨迹天气url确认
const LOCAL = "guangdong/meizhou";
// 获取天气链接
const WEATHER_URL = "https://tianqi.moji.com/weather/china/" + LOCAL;

const listConfig = {
  nowDate: {
    value: '',
    color: '#87e8de',
  },
  city: {
    value: '梅州',
    color: '#9CA2A0',
  },
  weather: {
    value: '',
    color: '#7CD47D',
  },
  temperature: {
    value: '',
    color: '#CBA476',
  },
  loveDate: {
    value: '',
    color: '#ff9c6e',
  },

  txt: {
    value: '',
    color: '#3C4244',
  },
}

module.exports = {
  params,
  listConfig,
  START_DAY,
  SEND_HOUR,
  SEND_MINUTE,
  CHP_URL,
  WEATHER_URL
}
