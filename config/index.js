export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxc8a62ef46d0d9d51",

  // 公众号APP_SECRET
  APP_SECRET: "71a865ff5110eaa72dc0f769b626e4eb",

  USERS: ["o6Jhv5y4AR1gbsIhYR2THnpCdj9g"]
      // 想要发送的人的名字
      name: "程砚霸总",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "o6Jhv5y4AR1gbsIhYR2THnpCdj9g",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "3lWuoHNRW7-AxeI9Sv0gK1HRblZ1JIDszEngkeJldkQ",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://bkpp.cn"
  ],

    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 所在省份
  PROVINCE: "安徽",
  // 所在城市
  CITY: "合肥",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "程砚霸总", "year": "2002", "date": "07-27"},
    {"type": "节日", "name": "认识天数", "year": "2017", "date": "09-13"},
    {"type": "节日", "name": "元旦", "year": "2023", "date": "01-01"},
    {"type": "节日", "name": "春节", "year": "2023", "date": "01-22"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "happy_date" ，在测试号中就是 {{ happy_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "happy_day", date: "2017-09-13"},
    // 快乐日

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "happy_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
