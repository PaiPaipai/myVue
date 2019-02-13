<template lang="html">
    <div class="CreditApply">
      <my-header :title="'房产评估'"></my-header>
      <div>
            <van-cell-group :class="['myGroup']">
               <van-field v-for="(item, index) in ApplyData" :key="index"
                    v-model="item.model"
                    @keyup="keyUpItem(item)"
                    :label="item.name"
                    :required = item.required
                    :readonly=item.readonly
                    :placeholder="item.placeholder"
                    :error-message="item.error && item.model != '' ?item.errorMsg:''"
                    :icon="item.icon"
                    @click="clickSelect(item,index)"
                    @click-icon="clickSelect(item,index)"
                    :maxLength="item.length"
                  >
                  </van-field>
             
              
          </van-cell-group>
      </div>
        
      <div class="buttonBox">
        <button-item  :buttonItem="buttonItem" @clickButton="clickButton"></button-item>
      </div>
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
      ApplyData: [
        {
          name: '省份', model: '', code: '', tag: 'province', type: '', placeholder: '选择所在省份', required: true,
          columns: [],
          icon: 'arrow', path: '123', error: false, readonly: true        },
        {
          name: '城市', model: '', code: '', tag: 'cityId', type: '', placeholder: '选择所在城市', required: true,
          columns: [],
          icon: 'arrow', path: '123', error: false, readonly: true        },
        {
          name: '小区', model: '', code: '', tag: 'projectId', type: '', placeholder: '选择所在小区', required: true,
          columns: [],
          icon: 'arrow', path: '123', error: false, readonly: true        },
        // {
        {
          name: '选择楼栋', model: '', tag: 'buildingId ', placeholder: '选择楼栋',
          columns: [],
          icon: 'arrow', path: '123', error: false, readonly: true        },
        {
          name: '选择楼层', model: '', tag: 'floor', placeholder: '选择房号',
          columns: [],
          icon: 'arrow', path: '123', error: false, readonly: true        },
        {
          name: '选择房号', model: '', tag: 'houseId', placeholder: '选择房号',
          columns: [],
          icon: 'arrow', path: '123', error: false, readonly: true        },
        { name: '建筑面积', model: '', tag: 'buildArea', placeholder: '输入面积', length: '5', error: false, errorMsg: '请输入正确的面积', reg: /^([1-9]+(\.\d+)?|0\.\d+)$/, required: true, },

      ],
      columns: [],
      title: '',
      currentIndex: -1,
      currentItem: {},
      clickSelectData: {
        province: '',
        city: '',
        projectId: '',
        projectName: '',
        buildingId: '',
        buildingName: '',
        floor: '',
        houseId: '',
        houseName: ''
      },
      buttonItem: { txt: '立即估价', classes: 'buttonItem' },
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
      var that = this;
      var beforeItem = that.ApplyData[index - 1];
      if (item.icon == 'arrow') {
        that.title = item.placeholder
        that.columns = item.columns;
        that.title = item.placeholder;
        if (item.tag == 'province') {//选择省
          that.show = true;
          if (!that.getLocalStorage('proviceList')) {
            that.getAreaCodeByType({ type: 1, name: 'provinceName', code: 'provinceCode' }, that.proviceCallback)
          } else {
            that.columns = JSON.parse(that.getLocalStorage('proviceList'))
          }
        } else if (item.tag == 'cityId') {//选择市
          if (!beforeItem.model) {
            Toast('请先选择' + beforeItem.name)
            return
          } else {
            that.getAreaCodeByType({ type: 2, name: 'cityName', provinceCode: beforeItem.code, code: 'cityCode' }, that.proviceCallback)
          }
        } else if (item.tag == 'projectId') {//选择市
          if (!beforeItem.model) {
            Toast('请先选择' + beforeItem.name)
            return
          } else {
            that.getAreaCodeByType({ type: 2, name: 'cityName', provinceCode: beforeItem.code, code: 'cityCode' }, that.proviceCallback)
          }
        } else {
          this.show = true;
        }
      }
      this.currentIndex = index;
    },
    proviceCallback (list) {
      this.show = true;
      this.columns = list;
    },
    onChange (picker, values) {

    },
    onCancel () {
      this.show = false;
    },
    onConfirm (value, index) {
      this.show = false;
      this.ApplyData[this.currentIndex].model = value.text;
      if (this.ApplyData[this.currentIndex].tag == 'province') {
        if (value.id != this.clickSelectData.province) {
          this.ApplyData[this.currentIndex + 1].model = '';
          this.ApplyData[this.currentIndex + 1].code = '';
        }
        this.ApplyData[this.currentIndex].code = value.id
        this.clickSelectData.province = value.id
      } else if (this.ApplyData[this.currentIndex].tag == 'city') {
        this.ApplyData[this.currentIndex].code = value.id
        this.clickSelectData.city = value.id
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
        if (item.types == 'xykh') {
          var v = item.model;
          if (/\S{5}/.test(v)) {
            item.model = v.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
          }
        }
      }
    },
    clickButton: function () {
      var that = this;
      console.log(this.ApplyData)
      var dataArr = this.ApplyData;
      var flag = true
      // for (let index = 0; index < dataArr.length; index++) {
      //   const element = dataArr[index];
      //   if (element.error) {
      //     flag = false;
      //     Toast('请填写正确的' + element.name + '!')
      //     return false
      //   } else {
      //     params[element.type] = element.model;
      //   }
      // }
      if (flag) {
        Toast('填写正确！')
        var that = this;
        setTimeout(function () {
          that.routerTo('houseData')
        }, 1000)

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
// .myGroup::after {
//   border: none;
// }
</style>
