<template lang="html">
    <div class="UserAccount">
      <my-header class="myHeader" :title="'账户信息'"></my-header>
      <div class="accoutBox">
          <div class="userPic">
            <img :src="userData.wxPhoto">
          </div>
          <input-item class="userList" :itemList="realData"></input-item> 
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
Vue.use(Toast)
export default {
  // 不要忘记了 name 属性
  name: 'UserAccount',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      realData: null,
      buttonItem: { txt: '下一步', classes: 'buttonItem' },
    }
  },
  computed: {
    userPic: {
      get: function () {
        return store.state.userPic
      },
      set: function () {

      }
    },
    userData: {
      get: function () {
        return store.state.userInfo
      },
      set: function () { }
    }
  },
  // 使用其它组件
  components: { MyHeader, InputItem, ButtonItem },
  // 方法
  methods: {
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('进入账户信息')
    var that = this;
    if (!that.getLocalStorage('userData')) {
      this.checkLogin('userData', 'setUserData', that.getMyInfo)
    }

    that.realData = [
      { name: '姓名', model: this.userData.name, readonly: true, center: true, type: 'name', },
      { name: '手机号码', model: this.userData.mobile, readonly: true, center: true, type: 'phone', },
      { name: '注册日期', model: this.userData.createTime, readonly: true, center: true, type: 'startTime', },
      { name: '身份证号', model: this.userData.identityNo, readonly: true, center: true, type: 'startTime', },
      { name: '实名状态', model: this.userData.certificationName, readonly: true, center: true, type: 'startTime', },
      { name: '会员等级', model: this.userData.levelName, readonly: true, center: true, type: 'startTime', },
    ]

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
.UserAccount {
  /* ... */
  background: $c74;
  padding-bottom: 50px;
}
.inputBox {
  padding-top: 1.1733rem;
}
.accoutBox {
  padding: 2.2rem 0.6667rem;
  position: relative;
}
.userList {
  padding-top: 1.1733rem;
}
.userPic {
  border-radius: 50%;
  width: 2.6667rem;
  height: 2.6667rem;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  left: 50%;
  margin-left: -1.3333rem;
  top: 0.2rem;
  box-shadow: 0 0.04rem 0.1rem rgba(0, 0, 0, 0.4);

  img {
    width: 105%;
    height: 105%;
  }
}
</style>
