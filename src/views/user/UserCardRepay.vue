<template lang="html">
    <div class="UserCardRepay">
        <!-- ... -->
        <div class="repayTop">
          <div class="repayTop_top">
            <h3>{{topData.month}}月账单 {{topData.month==1?12:topData.month-1}}/{{repayItem.billDate}}-{{topData.month}}/{{repayItem.billDate}} <i @click="showAction" class="iconfont icon-gengduo1"></i></h3>
            <h3>还款日 {{topData.month}}/{{repayItem.dueDate}}</h3>
          </div>
          <div class="repayTop_center">
            <i class="iconfont icon-lingdangzhendong"></i>
            <p>{{topData.day < repayItem.dueDate ? '距离还款日'+topData.month+'月'+repayItem.dueDate+'日，还有'+(repayItem.dueDate - topData.day)+'天':'已超过本月还款日，请制定下月计划'}}</p>
            <van-button @click="goPlan">制定计划</van-button>
          </div>
          <div class="repayTop_bottom">
            <div>
              本期计划金额 
              <em>¥ {{planMoney}}</em>
            </div>
             <div>
               本期已完成金额 
              <em>¥ {{completeMoney}}</em>
             </div>
          </div>
        </div>
        <div class="repayList">
          <ul class="repayUl">
            <li v-for="(item, index) in repayList" :key="index">
              <h3><i class="iconfont icon-jihua1"></i>普通计划 <span v-show="item.status !=1"  @click="deletePlan(item)"><i class="iconfont icon-shanchu"></i>删除</span></h3>
              <div class="repayMoney van-hairline--top-bottom">
                <p>计划金额　<span>¥{{item.repayAmount }}</span></p>
                <p>已完成金额<span>¥{{item.amount}}</span></p>
                <van-button :class="[item.status == 0 || item.status == 5 || item.status == 99 ?'no':(item.status == 2 ?'yes':'active')]">{{item.status == 0 || item.status == 99 ?'未支付':(item.status == 2?'已完成':(item.status == 5?'代还失败':'进行中'))}}</van-button>
              </div>
              <h4><em>{{item.createTime}}</em> <span @click="goDetail(item)">查看详情>></span></h4>
            </li>
          </ul>
          <div class="noData" v-show="!repayList.length">
            <i class="iconfont icon-jilu"></i>
            <div class="myLine van-hairline--bottom"></div>
            <em>暂无任何计划</em>
          </div>
        </div>
        <van-actionsheet
          v-model="show"
          :actions="actions"
          @select="onSelect"
           cancel-text="取消"
        >
        </van-actionsheet>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'

import { Button, Toast, Actionsheet, Dialog } from 'vant';
Vue.use(Button).use(Toast).use(Actionsheet).use(Dialog);
export default {
  // 不要忘记了 name 属性
  name: 'UserCardRepay',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      repayList: [],
      completeMoney: 0.00,
      planMoney: 0.00,
      show: false,
      status1: 0,
      status10: 0,
      repayItem: {},
      now: new Date(),
      actions: [
        {
          name: '修改资料',
          type: 1,
          className: 'test'
        },
        {
          name: '本月账单及额度查询',
          type: 2,
          className: 'test'
        },
        {
          name: '解绑信用卡',
          type: 3,
          className: 'test'
        },
      ]
    }
  },
  computed: {
    topData: {
      get: function () {
        return {
          month: this.now.getMonth() + 1,
          day: this.now.getDate(),
        }
      },
      set: function () { }
    }
  },
  //每次进缓存的路由调用
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  //每次进没有缓存的路由调用
  methods: {
    deletePlan (item) {
      var that = this;
      Dialog.confirm({
        title: '删除',
        message: '是否删除该计划?'
      }).then(() => {
        var params = {
          orderId: item.orderId,
        }
        that.deleteOrder(params, that.getOrderList)
      }).catch(() => {
      });
    },
    goDetail (item) {
      this.setLocalStorage('planOrderId', item.orderId)
      this.routerTo('UserCardPlanDetails')
    },
    goPlan () {
      // status1:"1"
      // status2:"0"
      var that = this;
      var flag = true;
      if (that.status2 == 1) {
        flag = false;
        Toast('您已有进行中的订单，无法再次制定计划！')
      }
      if (flag) {
        this.routerTo('UserCardPlan')
      }

    },
    showAction () {
      this.show = true;
    },
    onSelect (item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      var that = this;
      this.show = false;
      if (item.type == 1) {
        this.routerTo('UserCardDetails')
      } else if (item.type == 2) {
        this.routerTo('UserCardMsg')
      } else if (item.type == 3) {
        Dialog.confirm({
          title: '解绑',
          message: '是否解绑该信用卡?'
        }).then(() => {
          var params = {
            cardId: that.repayItem.cardId,
            sysUserId: that.getLocalStorage('userId'),
            userId: that.getLocalStorage('txUserId'),
            status: that.repayItem.status
          }
          that.unbundlCreditCard(params, that.goCardHuan)
        }).catch(() => {
        });

      }
    },
    goCardHuan () {
      var that = this;
      that.removeLocalStorage('huanCard')
      setTimeout(function () {
        that.routerTo('UserCardHuan')
      }, 1000)
    },
    getOrderList () {
      var that = this;
      var params = {
        userId: this.getLocalStorage('txUserId'),
        cardId: this.repayItem.cardId
      }
      that.cardOrderList(params, that.getOrderListCb)
    },
    getOrderListCb (datas) {
      this.completeMoney = datas.completeMoney;
      this.planMoney = datas.planMoney;
      this.repayList = datas.orderList
      this.status1 = datas.status1;
      this.status2 = datas.status2;

    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () {

  },
  deactivated () {
    this.repayList = [];
  },
  activated () {
    console.log('usercardrePay')
    store.commit('setDetail', true)
    this.repayItem = JSON.parse(this.getLocalStorage('huanCard'))
    console.log(this.repayItem.dueDate - this.topData.day)
    this.getOrderList()
  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.UserCardRepay {
  /* ... */
  background: $cf0;
  min-height: 100vh;
  .repayTop {
    background: $c4f;
    padding: 0.2667rem 0.4rem;
    color: $white;
  }
  .repayTop_top {
    margin-bottom: 1.2533rem;
    h3 {
      line-height: 0.7467rem;
      font-size: $fz30;
      i {
        float: right;
        font-size: 0.6667rem;
      }
    }
  }
  .repayTop_center {
    text-align: center;
    position: relative;
    i {
      font-size: 1.6rem;
      position: absolute;
      top: -1.6rem;
      left: 50%;
      margin-left: -0.8rem;
      color: $cff;
    }
    p {
      line-height: 0.8533rem;
      font-size: $fz30;
    }
    button {
      margin: 0.2667rem 0;
      height: 0.8rem;
      line-height: 0.7733rem;
      border-radius: 0.4rem;
      background: $white;
      color: $c4f;
      font-size: 0.4267rem;
    }
  }
  .repayTop_bottom {
    display: flex;
    justify-content: space-between;
    line-height: 0.6rem;
    font-size: $fz30;
    div {
      width: 100%;
      text-align: center;
    }
    em {
      display: block;
      left: 0.52rem;
      color: $cff;
    }
  }
  .repayList {
    font-size: 0.3733rem;
    .repayUl {
      li {
        padding: 0.1333rem 0 0.0667rem 0;
        background: $white;
        border-radius: 0.2667rem;
        margin-top: 0.2667rem;
      }
      h3 {
        padding: 0 0.4rem;
        overflow: hidden;
        line-height: 0.7467rem;
        i {
          font-size: 0.6933rem;
          vertical-align: middle;
          color: $c2e;
        }
        span {
          float: right;
          color: $cd08;
          i {
            color: $cd08;
          }
        }
      }
      .repayMoney {
        padding: 0.1333rem 0.4rem;
        position: relative;

        p {
          line-height: 0.6533rem;
          font-size: 0.3733rem;
          span {
            color: $cc6;
            margin-left: 0.2667rem;
          }
        }
        button {
          position: absolute;
          right: 0.4rem;
          bottom: 0.1333rem;
          height: 0.6533rem;
          line-height: 0.6267rem;
          border-radius: 0.1333rem;
        }
        button.no {
          border-color: $themeColor;
          color: $themeColor;
        }
        button.yes {
          border-color: $c13;
          color: $c13;
        }
        button.active {
          border-color: $cfc;
          color: $cfc;
        }
      }
      .repayMoney::after {
        border-color: $ccc;
      }
      h4 {
        line-height: 0.7333rem;
        padding: 0 0.4rem;
        em {
          color: $c666;
        }
        span {
          float: right;
        }
      }
    }
    .noData {
      position: relative;
      color: $c999;
      margin-top: 1.3333rem;
      i {
        font-size: 1.3333rem;
      }
      em {
        display: block;
        margin-top: 0.8rem;
      }
      .myLine {
        margin: 0.4rem 0;
        height: 1px;
        width: 2.6667rem;
        position: absolute;
        left: 50%;
        margin-left: -1.3333rem;
      }
    }
  }
}
</style>
