<template lang="html">
    <div class="MoneyALl">
        <money-item :showDilog="showDilog" :title="'提现'"  @confirm="confirm" @cancel="cancel" :moneyData="userMoney" @clicki="clicki" @clickJs="clickJs" @clickMx="clickMx"></money-item>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'

import MyText from "@/components/MyText"
import MoneyItem from '@/components/MoneyItem'
import { Button, Toast } from 'vant'
Vue.use(Button).use(Toast)
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
      showDilog: false
    }
  },
  computed: {

    userMoneys: {
      get: function () {
        return store.state.userMoney
      },
      set: function () { }
    },
    moneyMx: {
      get: function () {
        return {
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
        }
      },
      set: function () { }
    },
    userMoney: {
      get: function () {
        return {
          title: '我的收入',
          name: ['账户余额', '历史已提现金额', '可提现金额', '收入明细', '提现'],
          icon: false,
          top: false,
          money: [this.userMoneys.yue, this.userMoneys.yueHistory || 0, this.userMoneys.yue || 0],
        }
      },
      set: function () { }
    },
    userData: {
      get: function () {
        return JSON.parse(this.getLocalStorage('userInfo'))
      },
      set: function () { }
    },
  },
  // 使用其它组件
  components: { MyText, MoneyItem },
  // 方法
  watch: {},
  methods: {
    confirm (money) {
      var that = this;
      this.showDilog = false;
      var params = {
        userId: this.userData.id,
        amount: money,
        type: 2
      }
      that.amount(params, amoutCallBack)
      function amoutCallBack () {
        that.queryTx(that.jsCallBack)
        that.removeLocalStorage('userInfo')
      }
      console.log(money)
    },
    jsCallBack (datas) {
      var that = this;
      this.userMoneys = JSON.parse(this.getLocalStorage('userMoney'))
    },
    cancel () {
      this.showDilog = false;
    },
    clicki () {
      this.routerTo('MoneyBiao')
    },
    clickMx () {
      var that = this;
      this.queryMyTixian((function () { that.routerTo('MoneyDetails') }), that.moneyMx);
    },
    clickJs () {
      if (this.userMoney.money[0] < 100) {
        Toast('结算金额小于100，无法结算')
      } else { this.showDilog = true; }
    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () {
    var that = this;
    that.checkLogin('userData', 'setUserData')
    that.queryTx()


    console.log('userMoney')
  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.MoneyALl {
  /* ... */
}
</style>
