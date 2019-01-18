<template lang="html">
    <div class="UserReal">
      <my-header :title="'实名注册'"></my-header>
      <div class="realTop">
          <hr-item :hritem="{title:'填写申请人信息'}"></hr-item>
          <p>以下信息将直接关系您在平台的所有操作，请如实填写您的相关信息，一旦提交，不予修改</p>
          <!-- <input-item  :itemList="realData" @clickButton="sendMsg"></input-item>  -->
      </div>
      <div class="realCenter">
         <van-cell-group :class="['myCellGroup']">
          <van-field
            v-for="(item,index) in realData" :key="index" :class="['myCell']"
            v-model="item.model"
            @keyup="keyUpItem(item)"
            :label="item.name"
            :readonly=item.readonly
            :placeholder="item.placeholder"
            :error-message="item.error && item.model != '' ?item.errorMsg:''"
            :icon="item.icon"
            @click-icon="goToPath(item)"
            :maxLength="item.length"
          >
           <van-button v-show="item.type == 'yzm'" :disabled="realData[0].disabled" @click="clickSendMsg(realData[0])" slot="button" size="small" type="primary">{{realData[0].txt}}</van-button>
          </van-field>
        </van-cell-group>
         <div class="agreeBox">
          <i :class="['iconfont',!agree?'icon-fangkuang':'icon-gouxuan1']" @click="agreeClick"></i> 我已同意：<span @click="goToPath">《用户服务协议》</span>的所有条款
          </div>
      </div>
      <div class="buttonBox">
          <button-item  :buttonItem="buttonItem" @clickButton="clickButton"></button-item>
      </div>
      <div class="textBox">
        <h3>注意事项</h3>
        <p>1、必须填写真实个人信息，否则无法在平台办理任何业务；<br>
          2、在汉融邦平台申请信用卡不收取任何费用，凡是索取均为欺诈，请不要相信；<br>
          3、会员资料与银行无关，汉融邦对此资料提供隐私保护。<br>
          平台监督举报电话：027-87307688<br>
          举报属实者均有奖励。
                                  
        </p>
      </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import InputItem from '@/components/InputItem'
import ButtonItem from '@/components/ButtonItem'
import HrItem from '@/components/HrItem'
import store from "@/store/index";
import { Field, CellGroup, Icon, Toast } from 'vant';
import { setTimeout } from 'timers';
Vue.use(Field).use(CellGroup).use(Icon).use(Toast)
export default {
  // 不要忘记了 name 属性
  name: 'UserReal',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      realData: [
        { name: '姓名', model: '', type: 'name', placeholder: '请输入姓名', length: '10', error: true, errorMsg: '请输入正确的姓名', reg: /[\u4e00-\u9fa5]/ },
        { name: '身份证', model: '', type: 'ident', placeholder: '请输入身份证', length: '18', error: true, errorMsg: '请输入正确的身份证号', reg: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/ },
        { name: '手机号', model: '', type: 'phone', placeholder: '请输入手机号码', path: '', length: '11', disabled: false, time: 60, txt: '发送验证码', error: true, errorMsg: '请输入正确的手机号码', reg: /^1[0-9]{10}$/ },
        // { name: '分行', model: '', type: 'fh', placeholder: '', icon: 'arrow', path: '123', error: false, readonly: true },
        // { name: '银行账户', model: '', type: 'yhkh', placeholder: '请输入银行卡号', length: '23' },
        // { name: '短信验证码', model: '', type: 'yzm', placeholder: '请输入短信验证码', error: true, length: '6' },
      ],
      buttonItem: { txt: '提交资料', classes: 'buttonItem' },
      agree: false,
    }
  },
  computed: {
    userId: {
      get: function () {
        return store.state.userId
      },
      set: function () {

      }
    }
  },
  // 使用其它组件
  components: { MyHeader, InputItem, ButtonItem, HrItem },
  // 方法
  methods: {
    keyUpItem: function (item) {
      if (item.reg) {
        if (!item.reg.test(item.model) && item.model != "") {//验证正则
          item.error = true
        } else {
          item.error = false
        }
      }
      if (item.type == 'yhkh') {
        var v = item.model;
        if (/\S{5}/.test(v)) {
          item.model = v.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
        }
      }
    },
    goToPath () {
      this.routerTo('UserAgree')
    },
    agreeClick () {
      this.agree = !this.agree;
    },
    sendMsg: function (params) {
      console.log(params)
    },
    clickButton: function () {
      console.log(this.realData)
      var dataArr = this.realData;
      var params = {
        userId: this.userId
      }

      var flag = true
      for (let index = 0; index < dataArr.length; index++) {
        const element = dataArr[index];
        if (element.error) {
          flag = false;
          Toast('请填写正确的' + element.name + '!')
          return false
        } else {
          params[element.type] = element.model;
        }
      }
      if (!this.agree) {
        Toast('请勾选用户服务协议！')
      }
      var that = this;
      if (flag) {
        Toast.success('填写正确！')
        setTimeout(function () {
          that.$router.back(-1)
        }, 500)
      }
      console.log(params)
    }
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('进入实名认证')
    // Vue.set(this, 'params', this.$route.params) // 设置相关data 并更新dom
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
    console.log('UserReal')
  },
  store

}
</script>

<style scoped lang="scss">
.UserReal {
  background: $cf0;
  /* ... */
  /deep/ .buttonItem {
    line-height: 0.8rem;
    padding: 0 1.0667rem;
    background: $cf02;
    color: $white;
  }
}
.realTop {
  padding: 0 0.7733rem;
  background: linear-gradient(top, $ce8, $cf0);
  font-size: $fz28;
  p {
    line-height: 0.64rem;
  }
  padding-bottom: 0.72rem;
}
.realCenter {
  padding: 0 0.4rem;
}
.myCellGroup {
  background: none;
}
.myCell {
  background: none;
  border-bottom: 1px solid $baseColor;
  font-size: $fz34;
  /deep/ .van-cell__title {
    width: 10px;
  }
  /deep/ .van-cell__value {
    font-size: $fz28;
  }
  /deep/ .van-field__body {
    // height: 100%;
  }
  /deep/ .van-field__control {
    vertical-align: bottom;
    height: 100%;
  }
  span {
  }
}
.agreeBox {
  font-size: $fz28;
  padding: 0.2933rem 0;

  span {
    color: $themeColor;
  }
  i {
    font-size: 0.4533rem;
  }
  .icon-gouxuan1 {
    color: $c12;
  }
}
.buttonBox {
  text-align: center;
  padding: 0.3rem 0.9333rem;
}
.textBox {
  padding: 0.3rem 0.4rem;
  h3 {
    font-size: $fz32;
    font-weight: bold;
    line-height: 0.9333rem;
  }
  p {
    padding: 0 0.5867rem;
    font-size: $fz28;
    line-height: 0.6rem;
  }
}
</style>
