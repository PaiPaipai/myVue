<template lang="html">
    <div class="UserCardHuan">
        <!-- ... -->
        <my-header :title="tabArr[tabIndex]+'管理'"></my-header>
        <div class="main">
            <div class="cardTab">
                <span  v-for="(item, index) in tabArr" :key="index"  
                @click="clickTab(index)"
                 :class="[index == tabIndex?'active':'']">{{item}}</span>
            </div>
            <div v-show="tabIndex == 0">
                <ul class="cardListChu cardListXin">
                  <li v-for="(item, index) in xykList" :key="index" @click="goDetails(item)">
                    <div class="chuTop">
                      <div class="imgBox"><i :class="['iconfont',item.icon]" :style="{color:item.color?item.color:''}"></i></div>
                      <div class="textBox">
                        <h3>{{item.cardId}}</h3>
                        <div class="myLine van-hairline--bottom"></div>
                         <div class="chuBottom xinBottom">
                            <div class="xinText">
                              <span>{{item.quota}}</span>
                              <p>额度</p>
                            </div>
                            <div class="xinText">
                              <span>{{item.billDate}}日</span>
                              <p>账单日</p>
                            </div>
                            <van-button @click.stop="goHuan(item)" :class="['changeCard']">立即还款</van-button>
                          </div>
                      </div>
                    </div>
                   
                  </li>
                </ul>
            </div>
            <div class="chuBox" v-show="tabIndex == 1">
              <ul class="cardListChu">
                <li v-for="(item, index) in cxkList" :key="index">
                  <div class="chuTop">
                    <div class="imgBox"><i :class="['iconfont',item.icon]" :style="{color:item.color?item.color:''}"></i></div>
                    <div class="textBox">
                      <h3>{{item.bank}}</h3>
                      <p>借记卡</p>
                      <div class="myLine van-hairline--bottom"></div>
                    </div>
                  </div>
                  <div class="chuBottom">
                    <span>{{item.cardId}}</span>
                    <van-button  @click="goChange(item)" :class="['changeCard']">修改银行卡</van-button>
                  </div>
                </li>
              </ul>
              <h4 class="ts_h4">温馨提示</h4>
              <p class="ts_p">
               系统只支持添加一张储蓄卡，如需更换储蓄卡，请点击“修改”更换新储蓄卡。
              </p>
            </div>
            <van-button v-show="!cxkList.length || tabIndex == 0" :class="['myButton']" @click="clickAdd"><i class="iconfont icon-jiahao"></i> 添加{{tabArr[tabIndex]}}</van-button>
        </div>
        
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import MyHeader from '@/layout/MyHeader'
import MyText from "@/components/MyText"

import { Button, Toast, SwipeCell, Dialog } from 'vant';
Vue.use(Button).use(Toast).use(SwipeCell).use(Dialog);
export default {
  // 不要忘记了 name 属性
  name: 'UserCardHuan',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      colorList: [],
      tabArr: ['信用卡', '储蓄卡'],
      xykList: [],
      cxkList: [],
      tabIndex: 0,
      timeOutEvent: null
    }
  },
  computed: {
  },
  // 使用其它组件
  components: { MyHeader },
  // 方法
  watch: {},
  methods: {
    goChange (item) {
      console.log(item)
      this.setLocalStorage('cxkItem', JSON.stringify(item))
      this.routerTo('UserCardAddcxk')
    },
    goHuan (item) {
      if (!this.getLocalStorage('txUserId')) {
        Toast('您还未绑定储蓄卡，暂不能还款！')
      } else {
        this.setLocalStorage('huanCard', JSON.stringify(item))
        this.routerTo('UserCardRepay')
        console.log(item)
      }

    },
    goDetails (item) {
      this.setLocalStorage('huanCard', JSON.stringify(item))
      this.routerTo('UserCardDetails')
    },
    clickTab (index) {
      this.tabIndex = index;
      if (index == 0) {
        if (!this.getLocalStorage('dkXyk')) {
          this.getCardList(2)
        }
      } else if (index == 1) {
        if (!this.getLocalStorage('dkCxk')) {
          this.getCardList(1)
        }
      }

    },
    ontouchstart (item, index) {
      var that = this;
      this.timeOutEvent = setTimeout(function () {
        Dialog.confirm({
          title: '提示',
          message: '是否删除' + item.bankName
        }).then(() => {
          // on confirm
          that.delUserCredit(item.account)
        }).catch(() => {
          // on cancel

          console.log(that.userCardList)
        });
      }, 500)
    },
    ontouchmove () {
      clearTimeout(this.timeOutEvent);
    },
    ontouchend () {
      clearTimeout(this.timeOutEvent);
    },
    // this.$emit("clickSearch",text);
    clickAdd () {
      if (this.tabIndex == 0) {
        this.routerTo('UserAddHuan')
      } else {
        this.routerTo('UserCardAddcxk')
      }

    },
    getCardList (type) {
      var that = this;
      var params = {
        type: type,
        sysUserId: that.getLocalStorage('userId')
      }
      that.getCreditCardList(params, that.setCardList)
    },
    setCardList (type, data) {
      if (type == 2) {
        this.xykList = data
      } else if (type == 1) {
        this.cxkList = data
      }
    }
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () {
  },
  activated () {
    this.getCardList(1)
    this.getCardList(2)
  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.UserCardHuan {
  /* ... */
  background: $cf0;
  .main {
    padding: 0.4rem 0.4rem;
  }
  .cardTab {
    display: flex;
    justify-content: space-between;
    height: 1.0667rem;
    line-height: 1.0667rem;
    font-size: 0.4267rem;
    font-weight: bold;
    border-radius: 0.1333rem;
    overflow: hidden;
    margin-bottom: 0.4rem;
    span {
      width: 100%;
      text-align: center;
      background: $cd0;
    }
    span.active {
      background: $c39;
      color: $white;
    }
  }
  .cardListChu {
    li {
      padding: 0.3333rem;
      background: $white;
      border-radius: 0.1067rem;
      margin-bottom: 0.2667rem;
    }
    .chuTop {
      overflow: hidden;
      .imgBox {
        width: 1.4667rem;
        height: 1.4667rem;
        float: left;
        i {
          font-size: 1.4667rem;
        }
      }
      .textBox {
        margin-left: 1.8rem;
      }
      h3 {
        line-height: 0.5733rem;
        font-size: 0.4267rem;
        font-weight: bold;
      }
      p {
        font-size: 0.3467rem;
        line-height: 0.4rem;
      }
      .myLine {
        margin: 0.2267rem 0;
        height: 1px;
      }
    }
    .chuBottom {
      overflow: hidden;
      line-height: 0.8rem;
      span {
        font-size: $fz30;
        font-weight: bold;
      }

      .changeCard {
        float: right;
        line-height: 0.7733rem;
        height: 0.8rem;
        background: $cf6;
        color: $white;
        font-size: 0.3467rem;
        border-radius: 0.1067rem;
        border-color: $cf6;
      }
    }
  }
  .chuBox {
    .ts_h4 {
      color: $cf8a;
      font-size: 0.3733rem;
      line-height: 0.92rem;
    }
    .ts_p {
      font-size: 0.3467rem;
      line-height: 0.4933rem;
    }
    margin-bottom: 0.2667rem;
  }
  .cardListXin {
    .xinBottom {
      display: flex;
      justify-content: space-between;
    }
    .xinText {
      span {
        color: $cfa;
        font-size: $fz32;
        line-height: 0.4rem;
      }
      p {
        font-size: $fz28;
        line-height: 0.4667rem;
      }
    }
    .changeCard {
      vertical-align: middle;
      margin-top: 0.2667rem;
    }
  }
  .myButton {
    font-size: $fz32;
    width: 100%;
    border-radius: 0.1333rem;
    border: 1px dashed $baseColor;
  }
}
</style>
