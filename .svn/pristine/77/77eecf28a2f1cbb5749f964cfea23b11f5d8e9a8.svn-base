// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import '../static/css/rest.css'
import '../static/css/border.css'
import './assets/font/iconfont.css'
// eslint-disable-next-line no-unused-vars
import api from './assets/js/api'
import common from './assets/js/common.js'
import ajax from './assets/js/ajax.js'

import {
  Button,
  List,
  Swipe,
  SwipeItem,
  Toast
} from 'vant'
Vue.config.productionTip = false
Vue.config.debug = true
// console.log(store)
/* eslint-disable no-new */
Vue.use(Button).use(List).use(Swipe).use(SwipeItem).use(Toast).use(common).use(ajax)
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
