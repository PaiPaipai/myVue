import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {active: 0, newsList: [], test: [], platform: false} // 声明常量
checkApp()
function checkApp () {
  if (navigator.userAgent.match(/android/i)) {
    // android非微信
    if (navigator.userAgent.match(/MicroMessenger/i) !== 'MicroMessenger') {
    } else {
      // android微信
      state.platform = true
    }
    // 判断为IOS
  } else if (navigator.userAgent.match(/iPhone|iPod|iPad/i)) {
    // 微信
    if (navigator.userAgent.match(/MicroMessenger/i) === 'MicroMessenger') {
      state.platform = true

      // QQ内置浏览器
    } else if (navigator.userAgent.indexOf(' QQ') > -1) {
      state.platform = true
    } else {
    }
  } else {
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
  }
} // 定义方法，mutations固定写法

export default new Vuex.Store({state, mutations}) // 向外部跑抛出数据，及方法
