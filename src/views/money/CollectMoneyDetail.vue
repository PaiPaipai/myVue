<template lang="html">
    <div class="CollectMoneyDetail">
      <my-header :title="'收钱'"></my-header>
      <div class="collectTop">
        <van-cell-group :class="'myGroup boxshandow '"> 
          <van-field
            v-model="money"
            clearable
            :maxLength="5"
            :readonly=true
            label="充值金额"
            placeholder="建议转入金额10元以上"
            @touchstart.native.stop="show = true"
            @click-icon="$toast('question')">
            <span slot="button">元</span></van-field>
        </van-cell-group>
      </div>
      <div class="lineDiv"></div>
      <div class="cardList boxshandow ">
        <hr-item :class="'pl30'" :hritem="{title:'选择支付方式'}"></hr-item>
        <ul class="ulList">
          <li :class="[currentIndex==index?'active':'']" @click="changeCard(item,index)" v-for="(item, index) in cardList" :key="index">
            <h3><i class="iconfont icon-xinyongqia"></i><span>{{item.name}}({{item.num}})</span><i class="iconfont icon-dui1"></i></h3>
          </li>
        </ul>
      </div>
      <div class="lineDiv"></div>
      <div class="addCard">
        <h3 @click="addCard"><i class="iconfont icon-jiahao"></i>添加信用卡</h3>
      </div>
       <div class="lineDiv"></div>
       <div class="changePass">
          <hr-item :class="'pl30'" :hritem="{title:'选择通道',bottom:true,classes:'iconfont icon-changjianwenti'}" @clicki="clicki"></hr-item>
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
              <span>{{item.money}}</span>
            </li>
         </ul>
       </div>
      <submit-item @clickSubmit="clickSubmit" :submititem="submititem" ></submit-item>
      <van-number-keyboard
        title="建议转入金额10元以上"
        :show="show"
        theme="custom"
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
      />
      <popup-img :showPopup="popupShow" @closeItem="closeItem" :imgUrl="popupImage"></popup-img>
    </div>
    
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import swipe from '@/components/swipe'
import HrItem from '@/components/HrItem'
import SubmitItem from '@/components/SubmitItem'
import PopupImg from '@/components/PopupImg'
import { Toast, Field, CellGroup, NumberKeyboard } from 'vant'
Vue.use(Toast).use(Field).use(CellGroup).use(NumberKeyboard)
export default {
  // 不要忘记了 name 属性
  name: 'CollectMoneyDetail',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      params: this.$route.params,
      currentIndex: 0,
      passIndex: 0,
      popupImage: process.env.BASE_URL + 'img/xiane.png',
      cardList: [
        { name: '民生银行信用卡', num: '1234' },
        { name: '民生银行信用卡1', num: '1234' },
        { name: '民生银行信用卡2', num: '1234' },
        { name: '民生银行信用卡3', num: '1234' },
      ],
      // <span>天下付</span>
      //         <span>D+0</span>
      //         <span>费率</span>
      //         <span>200-500000</span>
      passList: [
        { name: '天下付', day: 'D+0', lilv: '0.55%', money: '200-50000', tui: true },
        { name: '易沣', day: 'D+0', lilv: '0.55%+0.5元', money: '100-20000' }
      ],
      show: false,
      popupShow: false,
      money: '',
      submititem: { text: '立即收钱' },
    }
  },
  computed: {},
  // 使用其它组件
  components: { MyHeader, swipe, HrItem, SubmitItem, PopupImg },
  // 方法
  methods: {
    clickPass (item, index) {
      this.passIndex = index;
    },
    addCard () {
      this.routerTo('UserAddCard')
    },
    clicki () {
      // Toast('question')
      this.popupShow = true;
    },
    closeItem () {
      this.popupShow = false;
    },
    changeCard (item, index) {
      this.currentIndex = index;
    },
    onInput (value) {
      // Toast(value);
      if (this.money.length > 4) {
        return
      }
      this.money += value + ''
    },
    onDelete () {
      this.money = this.money.slice(0, this.money.length - 1)
    },
    clickSubmit: function () {
      Toast('提交申请')
    }
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('进入详情')
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
    console.log('CollectMoneyDetail')
  }

}
</script>

<style scoped lang="scss">
.CollectMoneyDetail {
  /* ... */
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
