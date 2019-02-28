<template lang="html">
    <div class="UserPassChange">
      <my-header class="myHeader" :title="'密码管理'"></my-header>
      <div class="passwordBox">
          <img :src="imgUrl">
          <div class="fogetBox"><span @click="goForget">忘记支付密码</span></div>
          <input-item class="userList" :itemList="realData"></input-item> 
          
      </div>
      <div class="buttonBox">
       <button-item  :buttonItem="buttonItem" @clickButton="clickButton"></button-item>
      </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import InputItem from '@/components/InputItem'
import ButtonItem from '@/components/ButtonItem'

import store from "@/store/index";
import { Toast } from 'vant';
import { setTimeout } from 'timers';
Vue.use(Toast)
export default {
  // 不要忘记了 name 属性
  name: 'UserPassChange',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      imgUrl: process.env.BASE_URL + 'img/password.png',
      buttonItem: { txt: '修改', classes: 'buttonItem' },
      realData: [
        { name: '原支付密码', model: '', tag: 'oldPayPass', type: 'password', types: 'password', length: 6, placeholder: '请输入原支付密码', icon: '', path: '', error: false, readonly: false },
        { name: '新支付密码', model: '', tag: 'newPayPass1', type: 'password', types: 'password', length: 6, placeholder: '请输入新支付密码', icon: '', path: '', error: false, readonly: false },
        { name: '确认新密码', model: '', tag: 'newPayPass', type: 'password', types: 'password', length: 6, placeholder: '请输入确认新密码', icon: '', path: '', error: false, readonly: false },

      ],
    }
  },
  computed: {
  },
  // 使用其它组件
  components: { MyHeader, InputItem, ButtonItem },
  // 方法
  methods: {
    clickButton () {
      var realData = this.realData;
      var that = this;
      var params = {
        userId: this.getLocalStorage('userId')
      }
      var flag = true;
      for (let index = 0; index < realData.length; index++) {
        const element = realData[index];
        if (!element.model) {
          Toast(element.placeholder)
          flag = false
          break
        } else {
          if (element.model.length < 6) {
            Toast('请输入6位' + element.name)
            flag = false
            break
          } else {
            params[element.tag] = element.model;
            if (element.tag == 'newPayPass') {
              if (element.model == realData[index - 2].model) {
                Toast('新密码不能和旧密码一致')
                flag = false
                break
              } else if (element.model != realData[index - 1].model) {
                Toast('新支付密码两次输入不一致')
                flag = false
                break
              } else {
                flag = true
              }
            }
          }
        }
      }
      if (flag) {
        console.log(params)
        this.upPayPass(params, upPayPassCallBack)
      }
      function upPayPassCallBack () {
        setTimeout(function () {
          that.routerTo('UserCenter')
        }, 1000)

      }
      // if (element.tag == 'newPayPass' && element.tag == 'newPayPass1' &&  element.tag) {
      //         Toast('两次密码输入不一致')
      //         break
      //       } else {
      //         params[element.tag] = element.model
      //         console.log(params);
      //       }
    },
    goForget () {
      this.routerTo('UserPassForget')
    }
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('进入密码管理')
    // Vue.set(this, 'params', this.$route.params) // 设置相关data 并更新dom
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
  },
  store

}
</script>

<style scoped lang="scss">
.UserPassChange {
  /* ... */
  .buttonBox {
    margin-top: 0.2667rem;
    text-align: center;
  }
  /deep/ .buttonItem {
    line-height: 0.8rem;
    padding: 0 1.6rem;
    background: $c12;
    color: $white;
  }
}
.passwordBox {
  img {
    width: 100%;
    height: auto;
  }
}
.fogetBox {
  overflow: hidden;
  span {
    float: right;
    margin-right: 0.2667rem;
    font-size: 0.32rem;
    margin-top: 0.2667rem;
    color: #1296db;
  }
}
</style>
