<template lang="html">
    <div class="InputItem">
        <!-- ... -->
         <van-cell-group :class="['myGroup']" >
          <van-field
            v-for="(item,index) in itemListClone" :key="index"
            v-model="item.model"
            v-show=" item.show != false"
            @keyup="keyUpItem(item)"
            :label="item.name"
             :type="item.types"
            :readonly=item.readonly
            :placeholder="item.placeholder"
            :error-message="item.error && item.model != '' ?item.errorMsg:''"
            :icon="item.icon"
            @click="goToPath(item,index)"
            @click-icon="goToPath(item,index)"
            :maxLength="item.length"
          >
           <van-button v-show="item.type == 'yzm'" :disabled="itemListClone[0].disabled" @click="clickSendMsg(itemListClone[0])" slot="button" size="small" type="primary">{{itemListClone[0].txt}}</van-button>
          </van-field>
      </van-cell-group>
       <van-popup v-model="show" :class="['myPopup myPopup-up']">
          <van-picker show-toolbar 
            :title="title"
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
import { Field, CellGroup, Icon, Toast, Popup, Picker, DatetimePicker } from 'vant';
Vue.use(Field).use(CellGroup).use(Icon).use(Toast).use(Popup).use(Picker).use(DatetimePicker)
export default {
  // 不要忘记了 name 属性
  name: 'InputItem',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['itemList', 'searchData'],
  // 变量
  data () {
    return {
      show: false,
      columns: [],
      title: '',
      selectItem: {},
      selectIndex: 0,
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
    itemListClone: {
      get: function () {
        return this.itemList
      },
      set: function (value, index) {

      }
    },
    searchDataClone: {
      get: function () {
        return this.searchData
      },
      set: function (value, index) {

      }
    },
  },
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  methods: {
    onChange () { },
    onCancel () {
      this.show = false;
    },
    onConfirm (value, index) {
      this.show = false;
      this.$emit('onConfirm', value, this.selectIndex)
    },
    clickSendMsg: function (item) {

      if (item.model == '') {
        Toast('请填写正确的手机号码!')
        return
      }
      else if (!item.reg.test(item.model)) {//验证正则
        item.error = true
        Toast('请填写手机号码!')
      } else {
        item.error = false
        item.disabled = true;
        this.countDown(item)
        Toast('发送短信成功!')
        this.sendSms(item.model);
      }
    },
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
        var cloneV = item.model;

        if (/\S{5}/.test(v)) {
          item.model = v.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
        }
        if (item.model.length == 19 || item.model.length == 23) {
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
    proviceCallback (proviceList) {
      this.columns = proviceList
    },
    goToPath: function (item, index) {
      console.log('inputItem')
      var that = this;
      that.selectItem = item;
      that.selectIndex = index;
      that.columns = []
      var beforeItem = that.itemListClone[index - 1];
      if (item.path) {
        that.routerTo(item.path, { userId: store.state.userId })
      } else if (item.icon) {

        if (item.type == "fh") {
          if (that.searchDataClone.khh) {
            that.$emit('clickFh')
          } else {
            Toast('请先选择银行')
          }

        } else if (item.type == 'previce') {//选择省
          that.show = true;
          that.title = item.title;
          if (!that.getLocalStorage('proviceList')) {
            that.getAreaCodeByType({ type: 1, name: 'provinceName', code: 'provinceCode' }, that.proviceCallback)
          } else {
            that.columns = JSON.parse(that.getLocalStorage('proviceList'))
          }
        } else if (item.type == 'city') {//选择市
          if (!beforeItem.code) {
            Toast('请先选择' + beforeItem.name)
          } else {
            that.show = true;
            that.title = item.title;
            that.getAreaCodeByType({ type: 2, name: 'cityName', provinceCode: that.searchDataClone.provinceCode, code: 'cityCode' }, that.proviceCallback)

          }
        } else if (item.type == 'town') {
          if (!beforeItem.code) {
            Toast('请先选择' + beforeItem.name)
          } else {
            that.show = true;
            that.title = item.title;
            that.getAreaCodeByType({ type: 3, name: 'areaName', cityCode: that.searchDataClone.cityCode, code: 'areaCode' }, that.proviceCallback)
          }
        } else {
          this.show = true;
          this.title = item.title;
          if (item.type == 'khh') {
            this.columns = this.bankInfo
          }
        }

      } else {
        this.$emit('clickItem', item)
      }
    },
    clickItem: function () {

    }
  },
  // 生命周期函数
  beforeCreate () {

  },
  created () {

  },
  mounted () {

  },
  activated () {

  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.InputItem {
  /* ... */
  // display: flex;
  // justify-content: space-between;
  background: $white;
  /deep/ .van-field__body {
    // margin-top: 0.0667rem;
  }
}
.myGroup::after {
  border: none;
}
</style>
