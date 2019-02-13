<template lang="html">
    <div class="MoneyALl">
        <money-item :showDilog="showDilog" :title="'结算'"  :moneyData="moneyData"  @cancel="cancel" @clicki="clicki" @clickJs="clickJs" @clickMx="clickMx" @confirm="confirm"></money-item>
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
      showDilog: false,
      moneyData: {
        title: '我的分润',
        name: ['当前分润', '历史分润', '当前可提现分润', '收益明细', '结算'],
        icon: true,
        money: ['0.00', '0.00', '0.00']
      },
      moneyMx: {
        title: '收益明细',
        top: true,
        moneyDetails: {
          top: [
            { name: '我的推广员', icon: 'icon-tuandui', tag: 'tuig' },
            { name: '我的分润记录', icon: 'icon-wodefenrunjilu', tag: 'fenr' }
          ],
          tuig: {
            title: [
              '客户名称', '推广员账号', '推广员等级'
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
        },
      }
    }
  },
  computed: {
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
        type: 1
      }
      that.amount(params, amoutCallBack)
      function amoutCallBack () {
        Toast.clear();
        that.queryJs(that.jsCallBack)

      }
      console.log(money)
    },
    cancel () {
      this.showDilog = false;
    },
    clicki () {
      this.routerTo('MoneyBiao')
    },
    clickMx () {
      var that = this;
      this.queryMyOfflineNum((function () { that.routerTo('MoneyDetails') }), that.moneyMx)
      // this.setLocalStorage('moneyMx', JSON.stringify(this.moneyMx))
      // this.routerTo('MoneyDetails')
    },

    clickJs () {
      if (this.moneyData.money[0] < 100) {
        Toast('结算金额小于100，无法结算')
      } else {
        this.showDilog = true;
      }
    },
    jsCallBack (datas) {
      var that = this;
      that.moneyData.money = [datas.yue, datas.yueHistory, datas.yue]
      that.removeLocalStorage('userInfo')
      that.getMyInfo(that)
    },
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () {

  },
  activated () {
    var that = this;
    this.checkLogin('userData', 'setUserData')
    this.queryJs(that.jsCallBack)

    console.log('moneyall')
    // userTx
  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.MoneyALl {
  /* ... */
}
</style>
