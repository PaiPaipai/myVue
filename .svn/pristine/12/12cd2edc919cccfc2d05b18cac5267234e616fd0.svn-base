<template lang="html">
    <div class="CreditApply">
      <my-header :title="'新增信用卡'"></my-header>
      <div>
            <van-cell-group :class="['myGroup']">
               <van-field v-for="(item, index) in ApplyData" :key="index"
                    v-model="item.model"
                    @keyup="keyUpItem(item)"
                    :label="item.name"
                    :readonly=item.readonly
                    :placeholder="item.placeholder"
                    :error-message="item.error && item.model != '' ?item.errorMsg:''"
                    :icon="item.icon"
                    @click="clickSelect(item,index)"
                    :maxLength="item.length"
                  >
                  </van-field>
             
              
          </van-cell-group>
      </div>
        
      <div class="buttonBox">
        <button-item  :buttonItem="buttonItem" @clickButton="clickButton"></button-item>
      </div>
         <van-popup v-model="show" :class="['myPopup myPopup-up']">
          <van-picker show-toolbar v-show="!currentItem.dataPicker"
            :title="title"
            :columns="columns"
            @change="onChange"
            @cancel="onCancel"
            @confirm="onConfirm" />

            <van-datetime-picker v-show="currentItem.dataPicker"
              v-model="currentDate"
              type="year-month"
              :title="title"
              :min-date="minDate"
              :formatter="formatter"
              @cancel="onCancel"
              @confirm="onConfirm" />
        </van-popup> 
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import InputItem from '@/components/InputItem'
import ButtonItem from '@/components/ButtonItem'
import store from '@/store/index'
import { Field, CellGroup, Icon, Toast, Popup, Picker, DatetimePicker } from 'vant';
import { setTimeout } from 'timers';
Vue.use(Field).use(CellGroup).use(Icon).use(Toast).use(Popup).use(Picker).use(DatetimePicker)
export default {
  // 不要忘记了 name 属性
  name: 'CreditApply',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      show: false,
      currentDate: new Date(),
      minDate: new Date(),
      columns: [],
      title: '',
      currentIndex: -1,
      currentItem: {},
      buttonItem: { txt: '提交', classes: 'buttonItem' },
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
    ApplyData: {
      get: function () {
        return [
          {
            name: '有效期', model: '', tag: 'expDate', type: '5678', placeholder: '选择年月',
            columns: [], dataPicker: true,
            icon: 'arrow',
            error: false, readonly: true, itemShow: false          },
          { name: '安全码', model: '', tag: 'cvn2', type: '5678', placeholder: '信用卡背面独立三位数字', length: '3', error: true, errorMsg: '请输入正确的数字', reg: /[0-9]{3}/ },
          {
            name: '选择银行', model: '', tag: 'bankName', code: '', type: '5678', placeholder: '选择信用卡所属银行',
            columns: this.bankInfo,
            icon: 'arrow', path: '123', error: false, readonly: true          },
          { name: '银行账户', model: '', tag: 'account', types: 'yhkh', type: '5678', error: true, errorMsg: '请输入正确的信用卡号', placeholder: '信用卡卡号', length: '19' },
        ]
      },
      set: function () { },
    },
  },
  // 使用其它组件
  components: { MyHeader, InputItem, ButtonItem },
  // 方法
  methods: {
    formatter (type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }
      return value;
    },
    clickSelect (item, index) {
      console.log(item)
      this.currentItem = item;
      if (item.icon == 'arrow') {
        this.show = true;
        this.title = item.placeholder
        this.columns = item.columns;
        this.currentIndex = index;
      }
    },
    onChange (picker, values) {

    },
    onCancel () {
      this.show = false;
    },
    onConfirm (value, index) {
      this.show = false;
      if (this.currentItem.dataPicker) {
        var year = (value.getFullYear() + '').slice(2, 4);
        var month = value.getMonth() + 1
        month = month < 9 ? '0' + month : month
        this.ApplyData[this.currentIndex].model = value.getFullYear() + '/' + month;
      } else {
        this.ApplyData[this.currentIndex].model = value.text;
        this.ApplyData[this.currentIndex].code = value.code;
      }

    },
    agreeClick (item, indexs) {
      item.checkList.forEach(function (currentValue, index) {
        if (indexs == index && currentValue.agree) {
          currentValue.agree = false;
        } else if (indexs == index && !currentValue.agree) {
          currentValue.agree = true
        } else {
          currentValue.agree = false;
        }
      })
    },
    sendMsg: function (params) {
      console.log(params)
    },
    keyUpItem: function (item) {
      if (item.reg) {
        if (!item.reg.test(item.model) && item.model != "") {//验证正则
          item.error = true
        } else {
          item.error = false
        }
      }
      if (item.types == 'yhkh') {
        var v = item.model;
        var cloneV = item.model;
        if (/\S{5}/.test(v)) {
          item.model = v.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
        }
        if (item.model.length == 19) {
          if (!isNaN(cloneV.replace(/\s+/g, ""))) {
            item.error = false
          } else {
            item.error = true
          }
        } else {
          item.error = true
        }
      }
    },
    clickButton: function () {
      var that = this;
      console.log(this.ApplyData)
      var dataArr = this.ApplyData;
      var params = {
        userId: that.getLocalStorage('userId')
      };
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
          if (element.code) {
            params['bankCode'] = element.code;
          }
          params[element.tag] = element.model;
        }
      }
      if (flag) {
        params = this.clearParams(params);
        Toast('填写正确！')
        store.commit('setAddCardList', params)
        this.saveOrUpdateUserCredit()
        //
      }
      // console.log(params)


    }
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('新增信用卡')

    // Vue.set(this, 'params', this.$route.params) // 设置相关data 并更新dom
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
    this.checkLogin('userData', 'setUserData')
  },
  store

}
</script>

<style scoped lang="scss">
.CreditApply {
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
.cellBox {
  position: relative;
}
.cellBox::after {
  content: " ";
  position: absolute;
  pointer-events: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  left: 15px;
  right: 0;
  bottom: 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  border-bottom: 1px solid #ebedf0;
}
.checkBox {
  display: flex;
  padding: 10px 15px;
  line-height: 24px;
  position: relative;
  .checkBoxLeft {
    max-width: 90px;
    flex: 1;
    font-size: 14px;
  }
  .checkBoxRight {
    flex: 1;
    font-size: 14px;
    text-align: right;
    span {
      margin-left: 0.2667rem;
    }
    i.icon-gouxuan1 {
      color: $c12;
    }
  }
}
.myGroup::after {
  border: none;
}
</style>
