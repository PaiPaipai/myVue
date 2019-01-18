export default {
  install(Vue, options) {
    Vue.prototype.url = "http://www.baidu.com/" //可以自定义变量
    Vue.prototype.API = {
      APPID: 'wx70278d7dc8f6b6cb',
      APPSECRET: '8d4c520a921cc391fd01ef82218227b0'
    }
    Vue.prototype.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
        var r = window.location.search.substr(1).match(reg); //匹配目标参数  
        if (r != null) {
          return unescape(r[2]); //返回参数值 
        } else {
          return null;
        }
      },
      Vue.prototype.routerTo = function (name, params) { // 通用跳转方式，想转换成push 或者 replace
        this.$router.push({
          name: name,
          params: params
        })
      },
      Vue.prototype.getLocalStorage = function (key) { 
        return  window.localStorage.getItem(key)
      },
       Vue.prototype.setLocalStorage = function (key,value) { 
         window.localStorage.setItem(key,value)
      },
      Vue.prototype.countDown = function (item) {
        var countdown = 60;
        settime()

        function settime() {
          if (countdown == 0) {
            item.disabled = false;
            item.txt = '发送验证码'
            countdown = 60;
            return;
          } else {
            item.disabled = true;
            item.txt = countdown + 's' + '后重发'
            countdown--;
          }
          setTimeout(function () {
            settime()
          }, 1000)
        }
      }

  }
}
