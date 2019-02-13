<template lang="html">
    <div class="UserMoneyDetail">
        <!-- ... -->
        <my-header class="myHeader" :title="'充值明细'"></my-header>
        <ul class="moneyUl">
          <li class="titleLi">
              <span>充值时间</span><span>通道名称</span><span>充值金额</span><span>充值状态</span>
          </li>
          <li v-for="(item, index) in userMoneyList" :key="index">
             <span>{{item.createTime}}</span><span>{{item.qd}}</span><span>{{item.amount}}</span><span>{{item.status}}</span>
          </li>
        </ul>
        <div class="noData" v-show="!userMoneyList.length">
          暂无数据
        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import MyHeader from '@/layout/MyHeader'
export default {
  // 不要忘记了 name 属性
  name: 'UserMoneyDetail',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      userMoneyList: [

      ]
    }
  },
  computed: {
    userId: {
      get: function () {
        return this.getLocalStorage('userId')
      },
      set: function () { }
    }
  },
  //每次进缓存的路由调用
  activated: {},
  // 使用其它组件
  components: { MyHeader },
  // 方法
  watch: {},
  //每次进没有缓存的路由调用
  methods: {
    getCashOutCb (data) {
      this.userMoneyList = data;
    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () {
    console.log('')
    var that = this;
    var params = {
      userId: this.userId
    }
    this.getCashOut(params, that.getCashOutCb)
  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.UserMoneyDetail {
  /* ... */
  .moneyUl {
    padding: 0 0.4rem;
    li {
      display: flex;
      justify-content: space-between;
      font-size: $fz28;
      line-height: 1.2rem;
      border-bottom: 1px solid $ccc;
      span:first-child {
        width: 200%;
      }
    }
    span {
      width: 100%;
      text-align: center;
    }

    .titleLi {
      font-size: $fz30;
    }
  }
}
</style>
