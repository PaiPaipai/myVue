<template lang="html">
    <div class="UserCardPlanSecond">
      <div class="panelBox">
        <div class="panelTop">
          <h3><i class="iconfont icon-jihua1 c12"></i>计划详情</h3>
        </div>
        <div class="panelContent">
          <ul>
            <li><span>计划金额</span> <span class="spanC666">{{secondPlan.planAmount}}元</span></li>
            <li><span>计划类型</span> <span class="spanC666">普通计划</span></li>
            <li><span>计划日期</span> <span class="spanC666">{{secondPlan.planDate}}</span></li>
          </ul>
        </div>
      </div>
      <div class="panelBox">
        <div class="panelTop bdnone">
          <h3 @click="watchDetail"><i class="iconfont icon-yulan c31"></i>计划详情 <i class="iconfont icon-jiantou iconRight"></i></h3>
        </div>
      </div>
      <div class="panelBox">
        <div class="panelTop">
          <h3><i class="iconfont icon-feiyong cee4"></i>费用详情</h3>
        </div>
        <div class="panelContent">
          <ul class="panelUl">
            <li><span class="span300">次数费 <em>{{secondPlan.cishufee}}元</em></span> <span class="spanC999">1元/次，共{{secondPlan.cishu}}次</span></li>
            <li><span class="span300">计划手续费 <em>{{secondPlan.fee}}</em></span><span class="spanC999">85元/万元</span></li>
            <li><span class="span300">周转金手续费 <em>{{secondPlan.sxf}}</em></span> </span><span class="spanC999">计划手续费*0.01</span></li>
            <li><span class="span300">优惠红包 <em>-{{secondPlan.reduction || 0}}</em></span><span class="spanC999"> </span></li>
          </ul>
        </div>
        <div class="panelBottom panelContent">
           <ul class="panelUl">
            <li><span class="span300 spanCfc">手续费合计 <em>{{secondPlan.fee}}元</em></span> <span class="spanC999"></span></li>
            <li><span class="span300 spanCfc">周转金 <em>{{secondPlan.marginAmount}}元</em></span><span class="spanC999">结束退至信用卡</span></li>
          </ul>
        </div>
      </div>
      <div class="payMoney">
        <h3>实付款<span>{{secondPlan.fee+secondPlan.marginAmount}}元</span></h3>
        <p>支付总额=支付金额+周转金</p>
        <van-button @click="confirmMoney">确认支付</van-button>
      </div>
      <van-popup :class="['popupMe']" v-model="show">
        <div class="popupBox">
           <div class="popupTop flex">
             <span>计划金额
               <em>{{secondPlan.planAmount}}</em>
             </span>
              <span>计划次数
                <em>{{secondPlan.cishu}}次</em>
              </span>
           </div>
           <ul class="popupCenter">
              <li class="flex lh35">
                <span>日期</span><span>计划金额(元)</span>
              </li>
              <li class="flex lh76" v-for="(item, index) in secondPlan.planList" :key="index">
                <span>{{item.createTime}}</span><span>{{item.amount}}</span>
              </li>
          </ul>
          <div class="popupClose">
            <i @click="closePopup" class="iconfont icon-guanbi"></i>
          </div>
        </div>
      </van-popup>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import { Popup, Toast } from "vant";
Vue.use(Popup).use(Toast);
export default {
  // 不要忘记了 name 属性
  name: 'UserCardPlanSecond',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      show: false,
      secondPlan: {},
      mobile: '',
      huanCard: {},
    }
  },
  computed: {},
  //每次进缓存的路由调用
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  //每次进没有缓存的路由调用
  methods: {
    confirmMoney () {
      var that = this;
      var params = {
        userId: that.getLocalStorage('txUserId'),//120000004204 ||
        cardId: that.huanCard.cardId,
        orderId: that.secondPlan.planList[0].orderId,
        mobile: that.mobile,//'18120551688' ||
        repayAmount: that.secondPlan.fee + that.secondPlan.marginAmount,
        cvv: that.huanCard.cvv,
        billDate: that.huanCard.billDate,
        dueDate: that.huanCard.dueDate,
        validDate: that.huanCard.validDate,//'0719' ||
      }
      // this.routerTo('UserCardRecharge')
      this.confirmGenerationInfo(params, that.confirmMoneyCb)
    },
    closePopup () {
      this.show = false;
    },
    watchDetail () {
      this.show = true;
    },
    changeTab (index) {
      this.tabIndex = index;
    },
    confirmMoneyCb (datas, params) {
      if (datas.needConfirm == 0) {
        let dwSafari
        dwSafari = window
        let dataObj = datas.signHtml;
        // let html = dataObj.replace(/[^\u0000-\u00FF]/g, function ($0) { return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;") });
        dwSafari.document.write(dataObj)
        dwSafari.document.forms[0].submit()
        dwSafari.document.close()
      } else {
        this.setLocalStorage('confirmPlan', JSON.stringify(params))
        this.routerTo('UserCardRecharge')
      }
    },
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () {
    console.log('UserCardPlanSecond')
    store.commit('setDetail', true)
    this.secondPlan = JSON.parse(this.getLocalStorage('secondPlan'))
    this.huanCard = JSON.parse(this.getLocalStorage('huanCard'))
    this.mobile = JSON.parse(this.getLocalStorage('userInfo')).mobile;
    if (!this.secondPlan) {
      this.routerTo('UserCenter')
    }
  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.UserCardPlanSecond {
  /* ... */
  height: 100vh;
  background: $ceee;
  padding: 0 0.4rem;
  position: relative;
  padding-top: 0.2667rem;
  /deep/ .van-overlay {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .payMoney {
    position: absolute;
    padding: 0.2667rem 0.4rem;
    bottom: 0;
    left: 0;
    right: 0;
    background: $cf8;
    h3 {
      line-height: 0.6533rem;
      font-size: $fz32;
      color: $cffc;
      span {
        margin-left: 0.64rem;
      }
    }
    p {
      line-height: 0.5867rem;
      font-size: $fz26;
    }
    button {
      position: absolute;
      right: 0.4rem;
      bottom: 0.2667rem;
      background: $c12;
      color: $white;
      border-radius: 0.1333rem;
    }
  }
  .popupMe {
    width: 90%;
    background: none;
    border-radius: 0.2rem;
    overflow: hidden;
  }
  .popupBox {
    .popupTop {
      background: $c0a;
      // border-radius: 0.2rem;

      span {
        width: 100%;
        text-align: center;
        line-height: 0.64rem;
        font-size: $fz28;
        color: $white;
        padding: 0.2933rem 0 0.16rem 0;
        border-right: 1px solid $white;
      }
      span:last-child {
        border: none;
      }
      em {
        display: block;
        font-size: $fz32;
        color: $cfec;
        font-weight: bold;
      }
    }
    .popupCenter {
      background: $white;
      height: 10rem;
      overflow-y: auto;
      background: $white;
      border-bottom-left-radius: 0.2rem;
      border-bottom-right-radius: 0.2rem;
      padding-top: 0.4rem;
      font-size: $fz28;
      .lh35 {
        line-height: 0.4667rem;
        color: $cc6;
      }
      .lh76 {
        line-height: 1.0133rem;
        span:last-child {
          color: $car;
        }
      }
      li {
      }
      span {
        text-align: center;
        width: 100%;
      }
    }
    .popupClose {
      text-align: center;
      margin-top: 0.6rem;
      i {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
