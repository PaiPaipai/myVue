<template lang="html">
    <div class="UserMyCard">
      <my-header :title="'我的结算卡'"></my-header>
      <div>
          <input-item :searchData="searchData" @clickFh="clickFh"  :itemList="realData" @onConfirm="onConfirm" @clickButton="sendMsg"></input-item> 
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
import store from "@/store/index";
import PopupFen from '@/components/PopupFen'
import { Toast } from 'vant';
Vue.use('Toast')
export default {
  // 不要忘记了 name 属性
  name: 'UserMyCard',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      buttonItem: { txt: '修改', classes: 'buttonItem' },
      realData: [],
      searchData: {}
    }
  },
  computed: {
    userId: {
      get: function () {
        return this.getLocalStorage('userId')
      },
      set: function () {

      }
    },
    userData: {
      get: function () {
        return JSON.parse(this.getLocalStorage('userInfo'))
      },
      set: function () {

      }
    },
    realDataClone: {
      get: function () {
        return this.realData
      },
      set: function () {

      }
    },
    searchDataClone: {
      get: function () {
        return this.searchData
      },
      set: function () {

      }
    },
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

      if (item) {
        this.searchData.model = '';
        this.realData[1].model = item.subBankName;
      } else {
        this.searchData.model = ''
      }
      this.$store.commit('setSubBankList', [])
    },
    clickSearch (value) {
      console.log(value)
      var params = {
        bankCode: this.searchData.bankCode,
        serchKey: value
      }
      if (value) {
        this.getSubBankList(params)
      } else {
        Toast('请至少输入一个字符!')
      }
    },
    onConfirm: function (value, index) {
      if (index == 0) {
        this.realData[index].model = value.text;
        if (value.text != this.searchData.khh) {
          this.realData[1].model = ''
        }
        this.searchData.khh = value.text;
        this.searchData.bankCode = value.code;
      } else if (index == 3 || index == 4 || index == 5) {
        this.realData[index].model = value.text;
        this.realData[index].code = value.id;
        if (index == 3 && this.searchData[this.realData[index].tag] != this.realData[index].code) {
          this.searchData.cityCode = '';
          this.searchData.areaCode = ''
          this.realData[4].model = ''
          this.realData[5].model = ''
        }
        this.searchData[this.realData[index].tag] = value.id;

      } else {
        this.realData[index].model = value;
      }
    },
    sendMsg: function (params) {
      console.log(params)
    },
    clickButton: function () {
      if (this.buttonItem.txt == '修改') {
        this.realData.forEach(function (item, index) {
          if (item.type == 'khh' || item.type == 'fh') {
            item.icon = "arrow"
          } else if (item.type == 'yhkh') {
            item.readonly = false
          } else if (item.hasOwnProperty('show')) {
            item.show = true;
          }
        });
        this.buttonItem.txt = '提交'
      } else {
        // this.realData.forEach(function (item, index) {
        //   if (item.type == 'khh' || item.type == 'fh') {
        //     item.icon = ""
        //   } else if (item.type == 'yhkh') {
        //     item.readonly = true
        //   } else if (item.hasOwnProperty('show')) {
        //     item.show = false;
        //   }
        // });

        var dataArr = this.realData;
        var params = {
          userId: this.userId
        }
        var flag = true
        for (let index = 0; index < dataArr.length; index++) {
          const element = dataArr[index];
          if (!element.model) {
            flag = false;
            Toast(element.name + '不能为空!')
            return false
          } else {
            params[element.tag] = element.model;
          }

        }
        if (flag) {
          Toast('填写正确！')
          params.settleAddr = this.searchData.areaCode;
          params.branchCode = this.searchData.branchCode;
          params = this.clearParams(params);
          var that = this;
          this.updateUserInfo(params, that.userCardBack)
        }
        console.log(params)
      }



    },
    userCardBack () {
      this.buttonItem.txt = '修改';
      this.realData.forEach(function (item, index) {
        if (item.type == 'khh' || item.type == 'fh') {
          item.icon = ""
        } else if (item.type == 'yhkh') {
          item.readonly = true
        } else if (item.hasOwnProperty('show')) {
          item.show = false;
        }
      });
    },
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    // Vue.set(this, 'params', this.$route.params) // 设置相关data 并更新dom
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
    console.log('进入我的结算卡 ')
    var that = this;
    this.checkLogin('userInfo', 'setUserInfo')
    this.realData = [
      { name: '开户行', model: this.userData.bankName, tag: 'bankName', type: 'khh', placeholder: '', title: '选择开户行', icon: '', path: '', error: false, readonly: true },
      { name: '分行', model: this.userData.bankSubName, tag: 'bankSubName', type: 'fh', placeholder: '', title: '选择分行', icon: '', path: '', error: false, readonly: true },
      { name: '银行账户', model: this.userData.account, tag: 'account', type: 'yhkh', placeholder: '', readonly: true, length: '23' },
      { name: '所在省份', model: this.userData.province, code: '', tag: 'provinceCode', type: 'previce', show: false, placeholder: '', title: '选择省份', icon: 'arrow', error: false, readonly: true },
      { name: '所在城市', model: this.userData.city, code: '', tag: 'cityCode', type: 'city', show: false, placeholder: '', title: '选择城市', icon: 'arrow', error: false, readonly: true },
      { name: '所在地区', model: this.userData.areaName, code: '', tag: 'areaCode', type: 'town', show: false, placeholder: '', title: '选择地区', icon: 'arrow', error: false, readonly: true },

    ]
    this.searchData = {
      placeholder: '例：江汉分行，输入 江汉',
      model: '',
      khh: this.userData.bankName,
      bankCode: this.userData.branchCode,
      branchCode: this.userData.branchCode,
      provinceCode: '',
      cityCode: '',
      areaCode: '',
      classes: 'fenUnActive',
    }
  },
  store

}
</script>

<style scoped lang="scss">
.UserMyCard {
  /* ... */
  height: 100vh;
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
