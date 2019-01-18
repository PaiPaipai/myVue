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
      realData: [
        { name: '开户行', model: '', type: 'khh', placeholder: '', title: '选择开户行', icon: '', path: '', error: false, readonly: true },
        { name: '分行', model: '', type: 'fh', placeholder: '', title: '选择分行', icon: '', path: '', error: false, readonly: true },
        { name: '银行账户', model: '', type: 'yhkh', placeholder: '', readonly: true, length: '23' },
        { name: '所在省份', model: '', type: 'previce', show: false, placeholder: '', title: '选择省份', icon: 'arrow', error: false, readonly: true },
        { name: '所在城市', model: '', type: 'city', show: false, placeholder: '', title: '选择城市', icon: 'arrow', error: false, readonly: true },
        { name: '所在地区', model: '', type: 'town', show: false, placeholder: '', title: '选择地区', icon: 'arrow', error: false, readonly: true },

      ],
      buttonItem: { txt: '修改', classes: 'buttonItem' },
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
      if (item) {
        this.realData[1].model = item.name;
      }

    },
    clickSearch (value) {
      console.log(value)
    },
    onConfirm: function (value, index) {
      this.realData[index].model = value;
      if (index == 0) {
        this.searchData.khh = value;
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
        this.realData.forEach(function (item, index) {
          if (item.type == 'khh' || item.type == 'fh') {
            item.icon = ""
          } else if (item.type == 'yhkh') {
            item.readonly = true
          } else if (item.hasOwnProperty('show')) {
            item.show = false;
          }
        });
        this.buttonItem.txt = '修改'

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



    }
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    // Vue.set(this, 'params', this.$route.params) // 设置相关data 并更新dom
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
    console.log('进入我的结算卡 ')
    console.log(this.searchData)
  },
  store

}
</script>

<style scoped lang="scss">
.UserMyCard {
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
