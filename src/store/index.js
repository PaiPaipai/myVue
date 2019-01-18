import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  active: 0,
  newsList: [],
  test: [],
  platform: false,
  userId: 123,
  detail: false,
  userPic: process.env.BASE_URL + 'img/user.png',
  codeImg:process.env.BASE_URL + 'img/erweima.png',
} // 声明常量
checkApp()

function checkApp() {
  console.log('vuex')
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    state.platform = true
  } else {
    // android微信
    state.platform = false;
  }
}

// const getters = {getActive: function () { return state.active }}
const mutations = {
  setActive: function (state, active) {
    state.active = active
  },
  setAny: function (state, test) {
    state.test = test
  },
  setNewsList: function (state, newsList) {
    state.newsList = newsList
  },
  setDetail: function (state, detail) {
    state.detail = detail
  },
} // 定义方法，mutations固定写法

export default new Vuex.Store({
  state,
  mutations
}) // 向外部跑抛出数据，及方法
