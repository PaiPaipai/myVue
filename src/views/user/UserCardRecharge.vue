<template lang="html">
    <div class="UserCardRecharge">
        <!-- ... -->
         <my-header :title="'确认支付'"></my-header>
         <div>
            <input-item :itemList="realData" @onConfirm="onConfirm" @clickItem="clickItem" ></input-item> 
        </div>
        <div class="buttonBox">
         <button-item  :buttonItem="buttonItem" @clickButton="clickButton"></button-item>
        </div>
        <pass-word
          :class="['passMe']"
          :value="second?value2:value"
          :show="show"
          @onClose="onClose"
          @onBlur="onBlur"
          @onInput="onInput"
          @onDelete="onDelete"
          :placeholder="placeholder"
          ></pass-word>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import InputItem from '@/components/InputItem'
import ButtonItem from '@/components/ButtonItem'
import PopupFen from '@/components/PopupFen'
import store from "@/store/index";
import PassWord from '@/components/PassWord'
import { config } from '../../assets/js/config' // 引入配置的公共接口url
import { Toast } from 'vant';
import { setTimeout } from 'timers';
Vue.use(Toast)
export default {
  // 不要忘记了 name 属性
  name: 'UserCardRecharge',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      value: '',
      value2: '',
      show: false,
      smsCode: '',
      second: false,
      tianparams: {},
      placeholder: '请输入支付密码',
      realData: [],
      userData: {},
      repayPlanOne: {},
      buttonItem: { txt: '确定', classes: 'buttonItems' },
    }
  },
  computed: {
    userId: {
      get: function () {
        return store.state.userId
      },
      set: function () {

      }
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
    smsCodes: {
      get: function () {
        return this.smsCode
      },
      set: function () { },
    },
  },
  // 使用其它组件
  components: { MyHeader, InputItem, ButtonItem, PopupFen, PassWord },
  // 方法
  watch: {},
  methods: {
    clickButton () {
      var that = this;
      console.log(this.realData)
      var dataArr = this.realData;
      var params = this.tianparams;
      var flag = true
      for (let index = 0; index < dataArr.length; index++) {
        const element = dataArr[index];
        if (element.model == '') {
          flag = false;
          Toast('请填写' + element.name + '!')
          return false
        } else if (element.error) {
          flag = false;
          Toast('请填写正确的' + element.name + '!')
          return false
        } else {
          params[element.tag] = element.model;
        }
      }
      if (flag) {
        params = that.clearParams(params);
        params.repayAmount = params.repayAmount * 100;
        params.sysUserId = that.repayPlanOne.sysUserId
        that.orderPayment(params, tianCallBack)
      }
      function tianCallBack (datas) {
        setTimeout(function () {
          that.value = '';
          that.value2 = '';
          that.$router.replace('UserCardRepay')
        }, 1000)
      }
    },
    clickItem (item) {
      if (item.tag == 'payPass') {
        this.show = true;
      }
    },
    onConfirm: function (value, index) {
      if (index == 3) {
        this.realData[index].model = value.text
        if (value.text != this.searchData.khh) {
          this.realData[1].model = ''
        }
        this.searchData.khh = value.text;
        this.searchData.bankCode = value.code;
      } else {
        this.realData[index].model = value;
      }
    },
    kong (e) {
      e.stopPropagation();
    },
    clickClose () {
      this.iframeShow = false;

    },
    onDelete () {
      if (this.second) {
        this.value2 = this.value2.slice(0, this.value2.length - 1)
        this.realData[3].model = this.value2
      } else {
        this.value = this.value.slice(0, this.value.length - 1)
        this.realData[3].model = this.value
      }
    },
    onBlur () {
      this.show = false;
      this.value = "";
      this.value2 = ""
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
            this.realData[3].model = this.value
            this.addPayPass(this.passparams, passCallBack)
          }

        } else {
          if (this.userData.payPass) {
            this.show = false;
            this.realData[3].model = this.value
            this.value = "";
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
      }
      // if (!that.userData.payPass) {

      // } else {
      //   this.show = false;
      //   this.value = value;
      //   this.realData[3].model = this.value
      // }

    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  destroyed () {
  },
  mounted () {
    console.log('Recharge')
    store.commit('setDetail', true)
    var that = this;
    that.tianparams = JSON.parse(that.getLocalStorage('confirmPlan')) || ''
    that.userData = JSON.parse(that.getLocalStorage('userInfo'))
    that.repayPlanOne = JSON.parse(that.getLocalStorage('repayPlanOne'))
    if (!that.userData.payPass) {
      that.placeholder = '请设置支付密码'
    }
    if (that.tianparams) {
      var tianparams = that.tianparams
      that.realData = [
        { name: '付款卡号', model: that.tianparams.cardId, tag: 'creditNo', type: 'phone', placeholder: '', path: '', length: '11', readonly: true, },
        { name: '付款金额', model: that.tianparams.repayAmount, tag: 'money', type: 'name', placeholder: '', length: '10', error: false, errorMsg: '', readonly: true, },
        { name: '短信验证码', model: '', tag: 'smsCode', type: 'smsCode', placeholder: '请输入短信验证码', length: '6', error: false, errorMsg: '请输入正确的短信验证码', reg: /[0-9]{6}/ },
        { name: '支付密码', model: '', tag: 'payPass', types: 'password', placeholder: '请输入支付密码', length: '6', title: '请输入支付密码', error: false, readonly: true },
      ]
    } else {
      Toast('非法操作！')
      setTimeout(function () {
        that.$router.replace('UserCardRepay')
      }, 1000)
    }
  },
  deactivated () {


  },
  activated () {

  }// 每次进路由会调用这个方法
}
</script>

<style  scoped lang="scss">
.UserCardRecharge {
  /* ... */
  .buttonBox {
    text-align: center;
    margin-top: 0.4rem;
  }
  /deep/ .buttonItems {
    line-height: 0.8rem;
    padding: 0 1.6rem;
    background: $c12;
    color: $white;
    border-radius: 0.0667rem;
    width: 90%;
    font-size: $fz36;
  }
  .passMe {
    z-index: 2001;
  }
}
</style>
