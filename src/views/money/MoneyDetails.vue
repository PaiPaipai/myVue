<template lang="html">
    <div class="MoneyALl">
        <money-detail :moneyData="moneyData" @clicki="clicki" @clickJs="clickJs" @clickMx="clickMx"></money-detail>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'

import MyText from "@/components/MyText"
import MoneyDetail from '@/components/MoneyDetail'
import { Button } from 'vant'
Vue.use(Button)
export default {
  // 不要忘记了 name 属性
  name: 'MoneyALl',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      moneyData: JSON.parse(this.getLocalStorage('moneyMx'))
    }
  },
  computed: {
  },
  // 使用其它组件
  components: { MyText, MoneyDetail },
  // 方法

  methods: {
    clicki () {
      this.routerTo('MoneyBiao')
    },
    clickMx () {
      console.log('mx')
    },
    clickJs () {
      console.log('js')
    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () {
    console.log('moneyDetails')
    console.log(this.moneyData)
  },
  activated () {
    console.log('moneyDetails')
  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.MoneyALl {
  /* ... */
}
</style>
