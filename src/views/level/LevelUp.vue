<template lang="html">
    <div class="LevelUp">
        <!-- ... -->
        <img :src="leveupImg" alt="">
        <div class="btnBox">
          <van-button :class="'levelButton'" @click="levelUp">我要升级</van-button>
          <br/>
          <span class="clickBiao" @click="goBiao">产品分润表</span>
        </div>
         <div class="text-box">
          <my-text></my-text>
        </div>

        <van-popup v-model="show" :class="['myPopup myPopup-up']">
          <van-picker show-toolbar
            :title="'我要升级'"
            :columns="columns"
            @change="onChange"
            @cancel="onCancel"
            @confirm="onConfirm" />
        </van-popup> 
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import MyText from "@/components/MyText"
import { Field, CellGroup, Icon, Toast, Popup, Picker } from 'vant';
Vue.use(Field).use(CellGroup).use(Icon).use(Toast).use(Popup).use(Picker)
export default {
  // 不要忘记了 name 属性
  name: 'LevelUp',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      columns: [
        { id: 1, text: '渠道经理', money: 298, level: 2 }, { id: 2, text: '团队经理', money: 2980, level: 3 }, { id: 3, text: '门店经理', money: 8800, level: 4 }],
      show: false,
      leveupImg: process.env.BASE_URL + 'img/levelup.jpg'
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
  // 使用其它组件
  components: { MyText },
  // 方法
  watch: {},
  methods: {
    goBiao () {
      this.routerTo('MoneyBiao')
    },
    onChange (picker, values) {

    },
    onCancel () {
      this.show = false;
    },
    onConfirm (value, index) {
      var that = this;
      that.show = false;
      var params = {
        userId: that.userId,
        type: 'huiyuan',
        level: value.level
      }
      that.wxPay(params, that.levelUpCallBack)

    },
    levelUpCallBack (datas) {
      var that = this;
      var params = datas
      // params.appId = datas.appid;
      // params.timeStamp = datas.timestamp + "";
      // params.nonceStr = datas.noncestr;
      // params.package = datas.package;
      // params.signType = 'MD5';
      // params.paySign = datas.sign;
      this.wxZf(params, that.wxZfCb)
    },
    wxZfCb () {
      var that = this;
      that.removeLocalStorage('userInfo');
      setTimeout(function () {
        that.routerTo('UserCenter')
      }, 1000)
    },
    levelUp () {
      this.show = true;
      console.log('sdf')
    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.LevelUp {
  /* ... */
  background: $cf0;
  img {
    width: 100%;
  }
  text-align: center;
  .btnBox {
    padding-bottom: 0.4667rem;
    background: $white;
  }
  .levelButton {
    background: $c09;
    color: $white;
    height: auto;
    line-height: 0.8rem;
    border-radius: 0.4rem;
    width: 4.9333rem;
  }
  .clickBiao {
    display: block;
    margin-top: 0.2667rem;
    color: $themeColor;
    font-size: $fz30;
    text-decoration: underline;
  }
  .text-box {
    padding: 0.2667rem 0;
    background: $cf0;
  }
}
</style>
