<template lang="html">
    <div class="MoneysApply">
      <my-header class="myHeader" :title="'垫资过桥'"></my-header>
      <div class="passwordBox">
          <input-item class="userList" :itemList="realData"></input-item>   
      </div>
      <div class="buttonBox">
       <button-item  :buttonItem="buttonItem" @clickButton="clickButton"></button-item>
      </div>
      <popup-success  :successText="successText" :showPopup="shwoSuccess"  @closeItem="closeItem"  @clickButton="clickButton"></popup-success>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import InputItem from '@/components/InputItem'
import ButtonItem from '@/components/ButtonItem'
import PopupSuccess from '@/components/PopupSuccess'
import { config } from '../../../assets/js/config' // 引入配置的公共接口url

import store from "@/store/index";
import { Toast } from 'vant';
import { setTimeout } from 'timers';
Vue.use(Toast)
export default {
  // 不要忘记了 name 属性
  name: 'MoneysApply',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      successText: '',
      shwoSuccess: false,
      buttonItem: { txt: '提交申请', classes: 'buttonItem' },
      realData: [],
      moneyDetails: {},
    }
  },
  computed: {
  },
  // 使用其它组件
  components: { MyHeader, InputItem, ButtonItem, PopupSuccess },
  // 方法
  deactivated () {
    this.realData = [];
    this.shwoSuccess = false;
  },
  methods: {
    closeItem () {
      this.shwoSuccess = false;
      this.routerTo('index')
      this.realData.forEach(item => {
        item.model = ''
      });

    },
    clickButton () {
      var realData = this.realData;
      var that = this;
      var params = {
        userId: that.getLocalStorage('userId'),
        type: that.moneyDetails.type
      }
      var flag = true;
      for (let index = 0; index < realData.length; index++) {
        const element = realData[index];
        if (!element.model) {
          Toast(element.placeholder)
          flag = false
          break
        } else {
          if (element.tag == 'amount') {
            if (isNaN(element.model)) {
              Toast('请输入正确的金额！')
              element.model = ''
              flag = false
              break
            } else if (element.model > that.moneyDetails.maxMoney) {
              Toast('超过最大需求金额！')
              element.model = that.moneyDetails.maxMoney
              flag = false
              break
            }
          } else if (element.tag == 'term') {
            if (isNaN(element.model)) {
              Toast('请输入正确的用款期限！')
              element.model = ''
              flag = false
              break
            } else if (element.model > that.moneyDetails.maxDate) {
              Toast('超过最大用款期限！')
              element.model = that.moneyDetails.maxDate
              flag = false
            }

          } else if (element.tag == 'mobile') {
            if (!config.reg.phone.test(element.model)) {
              Toast('手机号码不正确')
              flag = false
              break
            }

          }
          params[element.tag] = element.model;
        }
      }
      if (flag) {
        console.log(this.realData, 8888)
        that.productApply(params, upPayPassCallBack)

      }
      function upPayPassCallBack () {
        setTimeout(function () {
          that.successText = '尊敬的' + params.name + '用户，您' + that.moneyDetails.title + '的办理申请已成功提交，请注意保持电话畅通接听银行审核电话，耐心等待银行审核通过。查询详情请联系汉融邦客服。'
          that.shwoSuccess = true
          // that.routerTo('UserCenter')
        }, 1000)

      }
    },
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('资金申请')
    this.realData = [
      { name: '金额需求', model: '', tag: 'amount', types: '', length: 6, placeholder: '请输入需求金额 单位：万元', icon: '', path: '', error: false, readonly: false, reg: /[0-9]/ },
      { name: '用款期限', model: '', tag: 'term', types: '', length: 6, placeholder: '请输入预计用款期限 单位：天', icon: '', path: '', error: false, readonly: false, reg: /[0-9]/ },
      { name: '真实姓名', model: '', tag: 'name', type: '', length: 10, placeholder: '请输入真实姓名', icon: '', path: '', error: false, readonly: false },
      { name: '手机号码', model: '', tag: 'mobile', type: '', length: 11, placeholder: '请输入手机号码', icon: '', path: '', error: false, reg: config.reg.phone },

    ]
    var details = this.getLocalStorage('moneysDetails');
    if (details) {
      this.moneyDetails = JSON.parse(this.getLocalStorage('moneysDetails'));
    } else {
      this.routerTo('index')
    }
    // Vue.set(this, 'params', this.$route.params) // 设置相关data 并更新dom
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
  },
  store

}
</script>

<style scoped lang="scss">
.MoneysApply {
  /* ... */
  .buttonBox {
    margin-top: 0.2667rem;
    text-align: center;
  }
  /deep/ .buttonItem {
    line-height: 0.8rem;
    padding: 0 1.6rem;
    background: $c12;
    color: $white;
  }
}
.passwordBox {
  img {
    width: 100%;
    height: auto;
  }
}
.fogetBox {
  overflow: hidden;
  span {
    float: right;
    margin-right: 0.2667rem;
    font-size: 0.32rem;
    margin-top: 0.2667rem;
    color: #1296db;
  }
}
</style>
