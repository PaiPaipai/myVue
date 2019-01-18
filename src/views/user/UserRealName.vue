<template lang="html">
    <div class="UserRealName">
      <my-header :title="'实名认证'"></my-header>
      <div>
          <input-item :searchData="searchData" @clickFh="clickFh" :itemList="realData" @onConfirm="onConfirm" @clickButton="sendMsg"></input-item> 
      </div>
      <div class="buttonBox">
       <button-item  :buttonItem="buttonItem" @clickButton="clickButton"></button-item>
      </div>
      <popup-fen :searchData="searchData" @clickSearch="clickSearch" @clickFen="clickFen"></popup-fen>
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
import { Toast } from 'vant';
Vue.use(Toast)
export default {
  // 不要忘记了 name 属性
  name: 'UserRealName',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      realData: [
        { name: '手机号', model: '', type: 'phone', placeholder: '请输入手机号码', path: '', length: '11', disabled: false, time: 60, txt: '发送验证码', error: true, errorMsg: '请输入正确的手机号码', reg: /^1[0-9]{10}$/ },
        { name: '姓名', model: '', type: 'name', placeholder: '请输入姓名', length: '10', error: true, errorMsg: '请输入正确的姓名', reg: /[\u4e00-\u9fa5]/ },
        { name: '身份证', model: '', type: 'ident', placeholder: '请输入身份证', length: '18', error: true, errorMsg: '请输入正确的身份证号', reg: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/ },
        { name: '开户行', model: '', type: 'khh', placeholder: '', icon: 'arrow', title: '选择开户行', error: false, readonly: true },
        { name: '分行', model: '', type: 'fh', placeholder: '', icon: 'arrow', title: '选择分行', error: false, readonly: true },
        { name: '银行账户', model: '', type: 'yhkh', placeholder: '请输入银行卡号', length: '23' },
        { name: '短信验证码', model: '', type: 'yzm', placeholder: '请输入短信验证码', error: true, length: '6' },
      ],
      buttonItem: { txt: '下一步', classes: 'buttonItem' },
      searchData: {
        placeholder: '请输入分行关键字进行搜索',
        model: '',
        khh: '',
        classes: 'fenUnActive',
      }
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
  components: { MyHeader, InputItem, ButtonItem, PopupFen },
  // 方法
  methods: {
    clickFh () {
      this.searchData.classes = 'fenActive'
    },
    clickFen (item) {
      this.searchData.classes = 'fenUnActive'
      this.realData[4].model = item.name;
    },
    clickSearch (value) {
      console.log(value)

    },
    onConfirm: function (value, index) {
      this.realData[index].model = value;
      if (index == 3) {
        this.searchData.khh = value;
      }
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
      if (flag) {
        Toast('填写正确！')
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
  },
  store

}
</script>

<style scoped lang="scss">
.UserRealName {
  /* ... */
  /deep/ .buttonItem {
    line-height: 0.8rem;
    padding: 0 1.6rem;
    background: $c12;
    color: $white;
  }
}

.buttonBox {
  text-align: center;
  padding: 0.9333rem;
}
</style>
