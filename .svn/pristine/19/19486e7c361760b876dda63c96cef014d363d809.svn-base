<template lang="html">
    <div class="UserCardPlan">
        <!-- ... -->
        <div class="notice">
          <span><i class="iconfont icon-laba"></i></span>
          <van-notice-bar :text="text"
                          left-icon
                          :speed="25" />
        </div>
        <div class="tiao"></div>
        <div class="bankDetails">
          <div class="bankTop">
            <div class="imgBox">
              <i :class="['iconfont', repayItem.icon]" :style="{color: repayItem.color}"></i>
            </div>
            <div class="textBox">
              <h3>{{repayItem.bank}}</h3>
              <p>信用卡 ({{repayItem.bank?repayItem.cardId.slice(repayItem.cardId.length-4,repayItem.cardId.length):''}})</p>
            </div>
          </div>
          <div class="bankText">
            <div>
              额度
              <span>¥ {{repayItem.quota}} </span>
            </div>
            <div>
              账单日
              <span>{{repayItem.billDate}}日</span>
            </div>
            <div>
              还款日
              <span>{{repayItem.dueDate}}日</span>
            </div>
          </div>
        </div>
          <div class="tiao"></div>
        <div class="planBox">
          <div class="planTab">
            <div :class="[index == tabIndex?'active':'']" @click="changeTab(index)" v-for="(item, index) in tabList" :key="index">{{item}}</div>
          </div>
          <div class="planContent">
             <div class="inputBox">
               <p>请输入还款金额</p>
               <input type="text" id="repayMoney" v-model="repayMoney" placeholder="还款金额需大于500">
             </div>
             <div class="inputBox">
                <p>请选择还款日期</p>
                <div class="dateBox">
                  <van-button>{{dateObj.startTime}}</van-button>            
                  <calendar :class="['vux-calendaris']" @on-change="onChange" v-model="dateObj.endTime" :title="titlea"
                  disable-past></calendar>
                  <!-- <van-button>{{dateObj.endTime}}</van-button> -->
                </div>
               
             </div>
          </div>
          <van-button @click="goSecond">下一步</van-button>
        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import { NoticeBar, Toast } from "vant";
import { Group, Calendar } from 'vux'
Vue.use(NoticeBar).use(Toast);
export default {
  // 不要忘记了 name 属性
  name: 'UserCardPlan',
  store,
  // 组合其它组件
  extends: {},
  components: {
    Calendar,
    Group
  },
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      text: " 系统建议您计划结束日期请早于还款日2日以上  ",
      repayItem: {},
      repayMoney: '',
      dateObj: {
        startTime: '',
        endTime: ''
      },
      tabList: [
        '普通计划', '小额商户计划'
      ],
      tabIndex: 0,
      demo3: 'TODAY',
      titlea:'',
    }
  },
  computed: {},
  //每次进缓存的路由调用
  // 使用其它组件
  // 方法
  //每次进没有缓存的路由调用
  methods: {
    onChange(val){
      if(new Date(this.dateObj.startTime).getTime() + 172800000 > new Date(val).getTime() ){
        Toast('还款日期不可小于2天')
        this.dateObj.endTime = this.formatDate((new Date().getTime() + 172800000) / 1000);
      } else if(new Date(this.dateObj.startTime).getTime() + 2419200000 < new Date(val).getTime()){
        Toast('还款日期不可超过28天')
        this.dateObj.endTime = this.formatDate((new Date().getTime() + 2419200000) / 1000);
      }  
      this.dateObj.endTime = String(this.dateObj.endTime)
    },
    changeTab (index) {
      if (index == 1) {
        Toast('敬请期待')
      } else {
        this.tabIndex = index;
      }

    },
    goSecond () {
      var that = this;
      if (that.repayMoney && !isNaN(this.repayMoney)) {
        // Toast('填写正确')
        if (that.repayMoney < 500) {
          Toast('还款金额需大于500')
          repayMoney.focus()
        } else {
          var params = {
            sysUserId: that.getLocalStorage('userId'),
            userId: that.getLocalStorage('txUserId'), // 120000004204 ||
            cardId: that.repayItem.cardId,
            repayAmount: that.repayMoney * 100,
            repayStartDate: that.dateObj.startTime,
            repayEndDate: that.dateObj.endTime,
          }
          that.addGeneration(params, that.goSecondCb)
        }

      } else if (!this.repayMoney) {
        Toast('请填写还款金额')
        repayMoney.focus()
      } else {
        Toast('请填写正确的金额')
        that.repayMoney = ''
      }
      // this.routerTo('UserCardPlanSecond')
    },
    goSecondCb (params) {
      this.setLocalStorage('repayPlanOne', JSON.stringify(params))
      this.routerTo('UserCardPlanSecond')
    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () {   
   },
  deactivated () {
    this.repayMoney = '';
  },
  activated () {
    store.commit('setDetail', true)
    this.repayItem = JSON.parse(this.getLocalStorage('huanCard'))
    this.dateObj.startTime = this.formatDate(new Date().getTime() / 1000);
    this.dateObj.endTime = this.formatDate((new Date().getTime() + 172800000) / 1000);
    console.log(this.formatDate(new Date().getTime() / 1000))
    if (!this.repayItem) {
      this.routerTo('UserCenter')
    }
  },// 每次进路由会调用这个方法
  watch:{
    repayMoney(val, oldVal){
      if(parseInt(this.repayItem.quota) < this.repayMoney){
        Toast('金额不可大于额度')
        this.repayMoney = this.repayItem.quota
      }    
    },
  }
}
</script>

<style  scoped lang="scss">
.UserCardPlan {
  /* ... */
  height: 100vh;
  .notice {
    overflow: hidden;
    background: $white;
    // margin-bottom: .32rem;
    // box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
    padding-left: 0.6rem;
    position: relative;
    > span {
      font-size: $fz32;
      position: absolute;
      left: 0;
      top: 0.2667rem;
      left: 0.2933rem;
      i {
        margin-right: 0.1333rem;
        line-height: 0.5333rem;
      }
    }
    .van-notice-bar {
      background: none;
    }
  }
  .bankDetails {
    margin-top: 0.1333rem;
    background: $white;
    border-radius: 0.2rem;
  }
  .bankTop {
    padding: 0.24rem 0.4rem;
    border-bottom: 1px solid $c999;
    .imgBox {
      width: 2rem;
      float: left;
      text-align: center;
      i {
        font-size: 1rem;
        line-height: 1.3333rem;
      }
    }
    .textBox {
      margin-left: 2.5333rem;
    }
    h3 {
      line-height: 0.7067rem;
      font-size: $fz36;
    }
    p {
      line-height: 0.6267rem;
      font-size: $fz30;
    }
  }
  .bankText {
    display: flex;
    justify-content: space-between;
    font-size: 0.4rem;
    font-family: "MicrosoftYaHei";
    div {
      width: 100%;
      text-align: center;
      margin: 0.4rem 0;
      border-right: 1px solid #333;
    }
    div:last-child {
      border: none;
    }
    span {
      margin-top: 0.2667rem;
      display: block;
      color: $cffc;
    }
  }
  .tiao {
    background: $ceee;
    height: 0.2667rem;
  }
  .planBox {
    margin-top: 0.2667rem;
    background: $white;
    > button {
      width: 5.3333rem;
      text-align: center;
      display: block;
      margin: 0 auto;
      background: $c12;
      color: $white;
      line-height: 1.1733rem;
      height: 1.1733rem;
      border-radius: 0.6rem;
      margin-top: 1.8667rem;
      border-color: $c12;
    }
  }
  .planTab {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $c999;
    line-height: 1.1867rem;
    margin-bottom: 0.0933rem;
    div {
      width: 100%;
      text-align: center;
      font-size: $fz36;
    }
    div.active {
      background: $cff9;
      color: $white;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    }
  }
  .planContent {
    padding: 0 0.64rem;
  }
  .inputBox {
    p {
      line-height: 1.1867rem;
      font-size: 0.4267rem;
    }
    input {
      font-size: 0.3733rem;
      color: $baseColor;
      border: 1px solid $c999;
      line-height: 0.7733rem;
      background: $cf8;
      padding-left: 0.1333rem;
    }
  }
  .dateBox {
    display: flex;
    justify-content: space-between;
    .weui-cell{
      padding:0px;
    }
    .vux-calendaris{
      width: 45%;
      text-align: center;
      background: $cf8;
      height: 0.7733rem;
      line-height: 0.7467rem;
      border-radius: 0.1333rem;
      border-color: $c999;
      border: 1px solid $c999;
      background:#fff;
      text-align:center;
      /deep/ .weui-cell{
        padding:0;
      }
      /deep/ .vux-calendar:before{
        height:0px;
        border-top: 0px solid #D9D9D9;
      }
      /deep/ .vux-cell-value{
        height: 0.7733rem;
        line-height: 0.7467rem;
        color: $baseColor;
        font-size: 0.3733rem;
      }
      /deep/ .vux-cell-primary {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    button {
      width: 45%;
      text-align: center;
      background: $cf8;
      height: 0.7733rem;
      line-height: 0.7467rem;
      border-radius: 0.1333rem;
      border-color: $c999;
    }
  }
}

</style>
