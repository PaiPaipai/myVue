import Vue from 'vue' // 引入vue
import axios from 'axios' // 引入axios
import qs from 'qs';
import EXIF from 'exif-js'
import {
  Toast
} from 'vant'
Vue.use(Toast)
import {
  config
} from './config' // 引入配置的公共接口url

Vue.prototype.$http = axios // 挂载axios到vue原型的$http属性下
Object.assign(Vue.prototype, {
  // vue的原型合并axios和axiosUrl
  _ajax: function (url, data) {
    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      Toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0,
        mask: false,
      });
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });
    return new Promise((resolve, reject) => {
      axios({
        url: config.URL + url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        method: 'post',
        timeout: config.timeout,
        responseType: 'json',
        data: qs.stringify(data)
        // ? JSON.stringify(data) : ''
      }).then((res) => {
        Toast.clear();
        resolve(res.data)
      }).catch((err) => {
        Toast.clear();
        if (url == 'wx/weixinLogin') {
          window.location.href = config.LOCAL;
        }
        reject(err)
      })
    })
  },
  EXIF: EXIF,
  bankInfo: config.bankInfo
})
