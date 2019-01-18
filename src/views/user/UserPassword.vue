<template lang="html">
    <div class="UserPassword">
      <my-header class="myHeader" :title="'密码管理'"></my-header>
      <div class="passwordBox">
          <img :src="imgUrl">
          <input-item class="userList" :itemList="realData"></input-item> 
      </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import InputItem from '@/components/InputItem'

import store from "@/store/index";
import { Toast } from 'vant';
Vue.use(Toast)
export default {
  // 不要忘记了 name 属性
  name: 'UserPassword',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      imgUrl: process.env.BASE_URL + 'img/password.png',
      realData: [
        { name: '支付密码', model: '', type: 'zfmm', placeholder: '', icon: 'arrow', path: 'ChangePassword', error: false, readonly: true },
      ],
    }
  },
  computed: {
  },
  // 使用其它组件
  components: { MyHeader, InputItem },
  // 方法
  methods: {
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
.UserPassword {
  /* ... */
}
.passwordBox {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
