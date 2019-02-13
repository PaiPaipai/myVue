<template lang="html">
    <div class="CollectMoneyDetail">
      <my-header :title="'收钱'"></my-header>
      <div class="collectTop">
        <van-cell-group :class="'myGroup boxshandow '"> 
          <van-field
            v-model="money"
            clearable
            :maxLength="5"
            :type="'number'"
            :readonly=false
            label="充值金额"
            :placeholder="placeholder"
             @touchstart.native.stop=""
            @click-icon="$toast('question')">
            <span slot="button">元</span></van-field>
            <!-- @touchstart.native.stop="show = true" -->
        </van-cell-group>
      </div>
      <div class="lineDiv"></div>
      <div class="cardList boxshandow ">
        <hr-item :class="'pl30'" :hritem="{title:'选择支付方式'}"></hr-item>
        <ul class="ulList">
          <li :class="[currentIndex==index?'active':'']" @click="changeCard(item,index)" v-for="(item, index) in cardList" :key="index">
            <h3><i class="iconfont icon-xinyongqia"></i><span>{{item.bankName}}({{item.account}})</span><i class="iconfont icon-dui1"></i></h3>
          </li>
        </ul>
      </div>
      <div class="lineDiv"></div>
      <div class="addCard">
        <h3 @click="addCard"><i class="iconfont icon-jiahao"></i>添加信用卡</h3>
      </div>
       <div class="lineDiv"></div>
       <div class="changePass">
          <hr-item :class="'pl30'" :hritem="{title:'选择通道',bottom:true, classes:'zcxe',txt:'支持银行及限额'}" @clicki="clicki"></hr-item>
         <ul class="passUl">
           <li>
             <span>通道名称</span>
             <span>结算方式</span>
             <span>费率</span>
             <span>单笔限额</span>
            </li>
            <li v-for="(item, index) in passList" :class="[index == passIndex ?'active':'']" @click="clickPass(item,index)" :key="index">
              <span>{{item.name}} <em v-show="item.tui">推荐</em></span>
              <span>{{item.day}}</span>
              <span>{{item.lilv}}</span>
              <span>{{item.minmoney}}-{{item.maxmoney}}</span>
            </li>
         </ul>
       </div>
      <submit-item @clickSubmit="clickSubmit" :submititem="submititem" ></submit-item>

      <pass-word
      :value="second?value2:value"
      :show="show"
      @onClose="onClose"
      @onBlur="onBlur"
      @onInput="onInput"
      @onDelete="onDelete"
      :placeholder="placeholder"
      ></pass-word>
      
      <popup-img :showPopup="popupShow" @closeItem="closeItem" :imgUrl="popupImage"></popup-img>
      <iframe-Item ref="iframe" :iframeShow="iframeShow" @clickClose="clickClose" :iframeSrc="iframeSrc"></iframe-Item>
    </div>
    
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import swipe from '@/components/swipe'
import store from '@/store/index'
import HrItem from '@/components/HrItem'
import SubmitItem from '@/components/SubmitItem'
import PopupImg from '@/components/PopupImg'
import IframeItem from '@/components/IframeItem'
import PassWord from '@/components/PassWord'
import { Toast, Field, CellGroup } from 'vant'
Vue.use(Toast).use(Field).use(CellGroup)
export default {
  // 不要忘记了 name 属性
  name: 'CollectMoneyDetail',
  // 组合其它组件
  extends: {},
  store,
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      // 密码为 6 位数字
      currentIndex: 0,
      passIndex: 0,
      placeholder: '建议转入金额200元以上',
      popupImage: process.env.BASE_URL + 'img/xiane.png',
      passList: [],
      selectPass: {},
      selectCard: {},
      value: '',
      show: false,
      value2: '',
      second: false,
      popupShow: false,
      iframeShow: false,
      smsCode: '',
      type: '1',
      spbillno: '',
      iframeBase: process.env.BASE_URL + 'html/yibao.html?v=123',
      money: '',
      userData: {},
      submititem: { text: '立即收钱', second: '充值明细', icon: 'iconfont icon-chongzhimingxi' },
    }
  },
  computed: {
    iframeSrc: {
      get: function () {
        return this.iframeBase
      },
      set: function () {

      }
    },
    cardList: {
      get: function () {
        return store.state.userCardList;
      },
      set: function () { },
    },
    passparams: {
      get: function () {
        return {
          userId: this.userData.id,
          payPass: this.value2,
        }
      },
      set: function () { },
    },
    tianparams: {
      get: function () {
        return {
          type: this.type,
          userId: this.userData.id,
          payPass: this.value,
          money: this.money,
          creditNo: this.cardList[this.currentIndex].account,
          spbillno: this.spbillno,
        }
      },
      set: function () {

      },
    },
    yiparams: {
      get: function () {
        return {
          userId: this.userData.id,
          payPass: this.value,
          account: this.cardList[this.currentIndex].account,
          bankCode: this.cardList[this.currentIndex].bankCode,
          amount: this.money,
          type: 'QTYPE_A'
        }
      },
      set: function () { },
    }
  },
  // 使用其它组件
  components: { MyHeader, swipe, HrItem, SubmitItem, PopupImg, IframeItem, PassWord },
  // 方法
  methods: {
    clickPass (item, index) {
      this.passIndex = index;
      this.selectPass = item;
      this.placeholder = `建议转入金额${item.minmoney}元以上`
    },
    addCard () {
      this.routerTo('UserAddCard')
    },
    clicki () {
      // Toast('question')
      this.popupShow = true;
    },
    kong (e) {
      e.stopPropagation();
    },
    clickClose () {
      this.iframeShow = false;
      this.setLocalStorage('iframeSrc', '')
    },
    closeItem () {
      this.popupShow = false;

    },
    changeCard (item, index) {
      this.currentIndex = index;
    },
    onBlur () {
      this.show = false;
      this.second = false;
      this.value = '';
      this.value2 = '';
    },
    onInput (value) {

      if (this.second) {
        if (this.value2.length >= 6) {
          return
        }
        this.value2 += value + ''
      } else {
        if (this.value.length >= 6) {
          return
        }
        this.value += value + ''
      }

    },
    onClose (value) {//设置密码
      var that = this;
      if (value.length < 6) {
        Toast('请输入6位数密码')
        return
      } else {
        if (this.second) {
          console.log('value:' + this.value)
          console.log('value2:' + this.value2)
          if (this.value2 != this.value) {
            Toast('两次密码不一致，请重新输入')
          } else {
            this.second = false;
            this.show = false;
            this.addPayPass(this.passparams, passCallBack)
          }

        } else {
          if (this.userData.payPass) {
            if (this.passIndex == 0) {
              this.reChargeByTianFuBao(this.tianparams, tianCallBack)
            } else if (this.passIndex == 1) {
              this.reCharge(this.yiparams, yiCallBack)
            }
            this.show = false;
            this.value = ''
          } else {
            this.second = true;
            this.show = true;
            this.placeholder = '请再次输入6位数支付密码'
          }
        }
      }
      function passCallBack () {
        // that.iframeShow = true;
        that.userData = JSON.parse(that.getLocalStorage('userInfo'));
        if (that.passIndex == 0) {
          that.reChargeByTianFuBao(that.tianparams, tianCallBack)
        } else if (that.passIndex == 1) {
          that.reCharge(that.yiparams, yiCallBack)
        }
        that.value = '';
        that.value2 = '';
      }
      function tianCallBack (datas) {
        console.log(datas)
        that.spbillno = datas;
        that.type = 2;
        that.setLocalStorage('tianparams', JSON.stringify(that.tianparams))
        that.$router.replace('RechargeDetails')
      }
      function yiCallBack (datas) {
        that.show = false;
        that.value = '';
        // that.setLocalStorage('iframeSrc', datas)
        let dwSafari
        dwSafari = window
        // .open();
        // dwSafari.document.open();
        let dataObj = datas
        let html = dataObj.replace(/[^\u0000-\u00FF]/g, function ($0) { return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;") });
        dwSafari.document.write(dataObj)
        dwSafari.document.forms[0].submit()
        dwSafari.document.close()

        // that.iframeBase = process.env.BASE_URL + 'html/yibao.html?v=' + new Date().getTime();
        // that.iframeShow = true;
      }

    },
    onDelete () {
      this.value = this.value.slice(0, this.value.length - 1)
    },
    clickSubmit: function () {
      if (!this.cardList.length) {
        Toast('请先添加信用卡!')
        return
      }
      var min = this.selectPass.minmoney;
      var max = this.selectPass.maxmoney
      if (this.money < min || this.money > max) {
        Toast('请输入正确的充值金额' + min + '-' + max)
      } else {
        if (this.userData.payPass) {
          this.show = true;
          this.placeholder = '请输入6位数支付密码'
        } else {
          this.show = true;
          this.placeholder = '请设置6位数支付密码'
        }
      }
    }
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载

  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
    console.log('进入详情')
    var that = this;
    store.commit('setDetail', true)
    this.userData = JSON.parse(this.getLocalStorage('userInfo'));
    this.findUserShareRateList({ userId: this.userData.id }, setList)
    function setList (datas) {
      that.passList = [
        { name: '天下付', day: 'D+0', lilv: datas.rate + '%', minmoney: 200, maxmoney: 50000, tui: true },
        { name: '易沣', day: 'D+0', lilv: datas.rate + '%+0.5元', minmoney: 100, maxmoney: 20000 }
      ]
      that.selectPass = that.passList[0];
      that.$nextTick(function () { })
    }

    this.checkLogin('userData', 'setUserData')
    this.checkLogin('userCardList', 'setUserCardList', that.findAllUserCredits)
  }

}
</script>

<style scoped lang="scss">
.CollectMoneyDetail {
  /* ... */
  margin-bottom: 50px;
}
.boxshandow {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.myGroups {
  /deep/ span {
    font-size: $fz30;
  }
}
.myGroup::after {
  border: none;
}
.lineDiv {
  height: 0.2667rem;
  background: $cf0;
  position: relative;
  z-index: -1;
}
.ulList {
  font-size: $fz30;
  padding: 0 0.4rem;
  li {
    line-height: 1rem;
  }
  i {
    font-size: 0.72rem;
    margin-right: 0.2667rem;
    vertical-align: middle;
  }
  .icon-dui1 {
    float: right;
    display: none;
  }
  .active {
    i {
      color: $c12;
    }
    .icon-dui1 {
      display: block;
    }
  }
}
.addCard {
  text-align: center;
  line-height: 1.2rem;
  font-size: $fz32;
  i {
    margin-right: 0.3333rem;
  }
}
.passUl {
  padding: 0 0.4rem;
  li {
    display: flex;
    justify-content: space-between;
    line-height: 1.12rem;
    border-bottom: 1px solid $cf0;
  }
  li.active {
    background: $cf0;
  }
  span {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: $fz28;
  }
  em {
    color: $ce5;
  }
}

.pl30 {
  padding: 0 0.4rem;
}
</style>
