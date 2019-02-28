<template lang="html">
    <div class="RechargeDetails">
        <!-- ... -->
         <my-header :title="'充值'"></my-header>
         <div>
            <input-item :itemList="realData" @onConfirm="onConfirm" @clickItem="clickItem" ></input-item> 
        </div>
        <div class="buttonBox">
         <button-item  :buttonItem="buttonItem" @clickButton="clickButton"></button-item>
        </div>
        <pass-word
          :value="value"
          :show="show"
          @onClose="onClose"
          @onBlur="onBlur"
          @onInput="onInput"
          @onDelete="onDelete"
          :placeholder="'请输入支付密码'"
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
  name: 'RechargeDetails',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      value: '',
      show: false,
      smsCode: '',
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
    smsCodes: {
      get: function () {
        return this.smsCode
      },
      set: function () { },
    },
    realData: {
      get: function () {
        return [
          { name: '付款卡号', model: this.tianparams.creditNo, tag: 'creditNo', type: 'phone', placeholder: '', path: '', length: '11', readonly: true, },
          { name: '付款金额', model: this.tianparams.money, tag: 'money', type: 'name', placeholder: '', length: '10', error: false, errorMsg: '', readonly: true, },
          { name: '短信验证码', model: '', tag: 'smsCode', type: 'smsCode', placeholder: '请输入短信验证码', length: '6', error: false, errorMsg: '请输入正确的短信验证码', reg: /[0-9]{6}/ },
          { name: '支付密码', model: '', tag: 'payPass', types: 'password', placeholder: '请输入支付密码', length: '6', title: '请输入支付密码', error: false, readonly: true },
        ]
      },
      set: function () { }
    },
    userData: {
      get: function () {
        return this.getLocalStorage('userData')
      },
      set: function () {

      }
    },
    tianparams: {
      get: function () {
        return JSON.parse(this.getLocalStorage('tianparams'))
      },
      set: function () {

      }
    }
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
      var params = that.tianparams;
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
        console.log(params)
        that.reChargeByTianFuBao(params, tianCallBack)
      }
      function tianCallBack (datas) {
        Toast('支付成功')
        setTimeout(function () {
          that.$router.replace('UserCenter')
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
      this.value = this.value.slice(0, this.value.length - 1)
      this.realData[3].model = this.value
    },
    onBlur () {
      this.show = false;
    },
    onInput (value) {
      if (this.value.length >= 6) {
        return
      } else {
        this.value += value + ''
      }
      this.realData[3].model = this.value

    },
    onClose (value) {//设置密码
      this.show = false;
      this.value = value;
      this.realData[3].model = this.value
    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  destroyed () {
    this.removeLocalStorage('tianparams')
  },
  mounted () {
    console.log('Recharge')
    var that = this;
    if (that.tianparams) {
      var tianparams = that.tianparams
      // that.realData = 
    } else {
      Toast('非法操作！')
      setTimeout(function () {
        that.$router.replace('UserCenter')
      })
    }
  },
  activated () { }// 每次进路由会调用这个方法
}
</script>

<style  scoped lang="scss">
.RechargeDetails {
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
}
</style>
