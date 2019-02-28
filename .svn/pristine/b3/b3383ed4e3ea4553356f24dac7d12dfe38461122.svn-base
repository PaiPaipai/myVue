<template lang="html">
    <div class="UserCardMsg">
        <my-header :title="'账单及额度查询明细'"></my-header>
        <img :src="biao" alt="">
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'

import MyText from "@/components/MyText"
import MoneyItem from '@/components/MoneyItem'
import MyHeader from '@/layout/MyHeader'
import { Button } from 'vant'
Vue.use(Button)
export default {
  // 不要忘记了 name 属性
  name: 'UserCardMsg',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      biao: process.env.BASE_URL + 'img/zd.jpg'
    }
  },
  computed: {},
  // 使用其它组件
  components: { MyText, MoneyItem, MyHeader },
  // 方法
  watch: {},
  methods: {
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.UserCardMsg {
  /* ... */
  img {
    width: 100%;
  }
}
</style>
