<template lang="html">
    <div class="MoneyALl">
        <money-item :moneyData="userMoney" @clicki="clicki" @clickJs="clickJs" @clickMx="clickMx"></money-item>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'

import MyText from "@/components/MyText"
import MoneyItem from '@/components/MoneyItem'
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
      userMoney: {
        title: '我的收入',
        name: ['账户余额', '历史已提现金额', '可提现金额', '收入明细', '提现'],
        icon: false,
        top: false,
        money: ['1.00', '2.00', '3.00'],
      },
      moneyMx: {
        top: false,
        title: '收入明细',
        moneyDetails: {
          top: [
            { name: '我的推广员', icon: 'icon-tuandui', tag: 'tuig' },
            { name: '我的分润记录', icon: 'icon-wodefenrunjilu', tag: 'fenr' }
          ],
          tuig: {
            title: [
              '时间', '提现金额（元）', '状态'
            ],
            list: [
              { name: '张三', phone: '15727050672', level: { name: '普通会员', color: '#ff0' } },
              { name: '李四', phone: '15727050672', level: { name: '普通会员', color: '#ff0' } },
              { name: '王五', phone: '15727050672', level: { name: '普通会员', color: '#ff0' } },
            ],
          },
          fenr: {
            title: [
              '时间', '分润金额(元)', '推广员'
            ],
            list: [
              { name: '2019-1-17 11:43:45', phone: '11.00', level: { name: '张三', color: '#ff0' } },
              { name: '2019-1-17 11:43:45', phone: '11.00', level: { name: '李四', color: '#ff0' } },
              { name: '2019-1-17 11:43:45', phone: '11.00', level: { name: '王五', color: '#ff0' } },
            ],
          },
        }

      },
    }
  },
  computed: {},
  // 使用其它组件
  components: { MyText, MoneyItem },
  // 方法
  watch: {},
  methods: {
    clicki () {
      this.routerTo('MoneyBiao')
    },
    clickMx () {
      this.setLocalStorage('moneyMx', JSON.stringify(this.moneyMx))
      this.routerTo('MoneyDetails')
    },
    clickJs () {
      console.log('js')
    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () {
    console.log('userMoney')
  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.MoneyALl {
  /* ... */
}
</style>
