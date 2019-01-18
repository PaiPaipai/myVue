<template lang="html">
    <div class="CreditApply">
      <my-header :title="params.title"></my-header>
      <div>
            <van-cell-group :class="['myGroup']">
              <div class="cellBox"  v-show="item.itemShow" v-for="(item, index) in ApplyData" :key="index">
         
                <van-field v-if="!item.types"
                    v-model="item.model"
                   
                    @keyup="keyUpItem(item)"
                    :label="item.name"
                    :readonly=item.readonly
                    :placeholder="item.placeholder"
                    :error-message="item.error && item.model != '' ?item.errorMsg:''"
                    :icon="item.icon"
                    @click="clickSelect(item,index)"
                    @click-icon="clickSelect(item,index)"
                    :maxLength="item.length"
                  >
                  </van-field>
                  <div class="checkBox" v-if="item.types == 'checkbox'">
                      <div class="checkBoxLeft">
                        {{item.name}}
                      </div>
                      <div class="checkBoxRight">
                          <span v-for="(items, indexs) in item.checkList" :key="indexs">
                            <i :class="['iconfont',!items.agree?'icon-fangkuang':'icon-gouxuan1']" @click="agreeClick(item,indexs)"></i>
                            <em>{{items.name}}</em>
                          </span>
                      </div>
                  </div>
                  <div class="checkBox camereBox"  @click="clickSelect(item,index)" v-if="item.types == 'camere'">
                      <div class="checkBoxLeft">
                        {{item.name}} <i @click="popupImg(item)" class="iconfont icon-changjianwenti"></i>
                      </div>
                      <div class="checkBoxRight">
                          <van-uploader :class="'camereItem'" :after-read="onRead" accept="image/gif, image/jpeg, image/png, image/jpg" multiple>
                            <div v-if="!item.model">
                              <img class="carmereImg" :src="carmereImg" alt="">
                              <span>{{item.placeholder}}</span>
                            </div>
                            <div v-else>
                              <img class="modelImg" :src="item.model" alt="">
                            </div>
                          </van-uploader>
                      </div>
                  </div>
              </div>
             
              
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
       <popup-img :imgUrl="imgUrl" :showPopup="showPopup" @closeItem="closeItem"></popup-img> 
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import InputItem from '@/components/InputItem'
import ButtonItem from '@/components/ButtonItem'
import PopupImg from '@/components/PopupImg'
import store from '@/store/index'
import { Field, CellGroup, Icon, Toast, Popup, Picker, Uploader } from 'vant';
Vue.use(Field).use(CellGroup).use(Icon).use(Toast).use(Popup).use(Picker).use(Uploader)
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
      params: {},
      ApplyData: [
        {
          name: '贷款金额需求', model: '', type: '567', placeholder: '选择金额',
          columns: [
            { id: 1, text: '1万以内' },
            { id: 2, text: '5万以内' },
            { id: 3, text: '10万以内' },
            { id: 4, text: '20万以内' },
            { id: 5, text: '100万以内' }],
          icon: 'arrow',
          error: false, readonly: true, itemShow: false        },
        {
          name: '贷款金额需求', model: '', type: '8', placeholder: '选择金额',
          columns: [
            { id: 1, text: '10-100万' },
            { id: 2, text: '100-200万' },
            { id: 3, text: '200-500万' },
            { id: 4, text: '500万以上' }],
          icon: 'arrow',
          error: false, readonly: true, itemShow: false        },
        {
          name: '预计还款期限', model: '', type: '56', placeholder: '选择期限',
          columns: [
            { id: 1, text: '6个月' },
            { id: 2, text: '12个月' },
            { id: 3, text: '24个月' },
            { id: 4, text: '36个月' },
            { id: 5, text: '48个月' }],
          icon: 'arrow', path: '123', error: false, readonly: true        },
        {
          name: '预计还款期限', model: '', type: '7', placeholder: '选择期限',
          columns: [
            { id: 1, text: '1-6个月' },
            { id: 2, text: '12个月' },
            { id: 3, text: '24个月' },
            { id: 4, text: '36个月' }],
          icon: 'arrow', path: '123', error: false, readonly: true        },
        {
          name: '预计还款期限', model: '', type: '8', placeholder: '选择期限',
          columns: [
            { id: 1, text: '先息后本1年' },
            { id: 2, text: '等额本息5年' },
            { id: 3, text: '等额本息10年' },
            { id: 4, text: '等额本息20年' },
            { id: 5, text: '等额本息30年' }],
          icon: 'arrow', path: '123', error: false, readonly: true        },
        { name: '真实姓名', model: '', type: '5678', placeholder: '请输入姓名', length: '10', error: true, errorMsg: '请输入正确的姓名', reg: /[\u4e00-\u9fa5]/ },
        { name: '身份证号', model: '', type: '5678', placeholder: '请输入身份证', length: '18', error: true, errorMsg: '请输入正确的身份证号', reg: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/ },
        { name: '手机号码', model: '', type: '5678', placeholder: '请输入手机号码', path: '', length: '11', disabled: false, time: 60, txt: '发送验证码', error: true, errorMsg: '请输入正确的手机号码', reg: /^1[0-9]{10}$/ },
        {
          name: '职业身份', model: '', type: '5678', placeholder: '选择职业身份',
          columns: [
            { id: 1, text: '上班族' },
            { id: 2, text: '个体户' },
            { id: 3, text: '企业主' },
            { id: 4, text: '无固定职业' }],
          icon: 'arrow', path: '234', error: false, readonly: true        },
        {
          name: '所在城市', model: '', type: '5678', placeholder: '选择所在城市',
          columns: [
            { id: 1, text: '武汉市' },
            { id: 2, text: '随州市' }
          ],
          icon: 'arrow', path: '123', error: false, readonly: true        },
        {
          name: '信用卡', model: '', types: 'checkbox',
          checkList: [{ name: '有', agree: false }, { name: '无', agree: false }], type: '56',        },
        {
          name: '本地公积金', model: '', types: 'checkbox',
          checkList: [{ name: '有', agree: false }, { name: '无', agree: false }], type: '56',        },
        {
          name: '婚姻状况', model: '', types: 'checkbox',
          checkList: [{ name: '已婚', agree: false }, { name: '未婚', agree: false }, { name: '其他', agree: false }],
          type: '7',        },
        {
          name: '营业执照', model: '', types: 'checkbox', checkList: [{ name: '有', agree: false }, { name: '无', agree: false }],
          type: '8',        },
        {
          name: '名下房产状态', model: '', type: '8', placeholder: '选择房产状态',
          columns: [
            { id: 1, text: '红本在手' },
            { id: 2, text: '抵押在银行' },
            { id: 3, text: '抵押在机构' },
            { id: 4, text: '抵押在私人' }],
          icon: 'arrow', path: '234', error: false, readonly: true        },
        {
          name: '名下房产类型', model: '', type: '8', placeholder: '选择房产类型',
          columns: [
            { id: 1, text: '自购商品房' },
            { id: 2, text: '还建房/福利房/经济适用房' },
            { id: 3, text: '商住两用房' },
            { id: 4, text: '商户写字楼' },
            { id: 5, text: '私房' }],
          icon: 'arrow', path: '234', error: false, readonly: true        },
        {
          name: '名下房产类型', model: '', type: '567', placeholder: '选择房产类型',
          columns: [
            { id: 1, text: '自购商品房' },
            { id: 2, text: '亲属房/租房' },
            { id: 3, text: '还建房/福利房' },
            { id: 4, text: '私房' }],
          icon: 'arrow', path: '234', error: false, readonly: true        },
        {
          name: '名下车辆类型', model: '', type: '567', placeholder: '选择车辆类型',
          columns: [
            { id: 1, text: '全款车' },
            { id: 2, text: '按揭车' },
            { id: 3, text: '单位名下车' }],
          icon: 'arrow', path: '123', error: false, readonly: true        },
        {
          name: '寿险保单', model: '', types: 'checkbox',
          checkList: [{ name: '有', agree: false }, { name: '无', agree: false }], type: '56',
        },
        {
          name: '车辆行驶证', model: '', type: '7', placeholder: '上传车辆行驶证', types: 'camere', imgUrl: process.env.BASE_URL + 'img/xsz.jpg'
        },
        {
          name: '上传房产证', placeholder: '上传房产证', model: '', type: '8', placeholder: '点击上传房产证', types: 'camere', imgUrl: process.env.BASE_URL + 'img/fcz.jpg'
        },
        {
          name: '上传土地证', placeholder: '上传土地证', model: '', type: '8', placeholder: '点击上传土地证', types: 'camere', imgUrl: process.env.BASE_URL + 'img/tdz.jpg'
        },

        // { name: '银行账户', model: '', type: 'yhkh', placeholder: '请输入银行卡号', length: '23' },
        // { name: '短信验证码', model: '', type: 'yzm', placeholder: '请输入短信验证码', error: true, length: '6' },
      ],
      columns: [],
      test: [1, 2, 3, 4, 5, 6, 7],
      title: '',
      currentIndex: -1,
      buttonItem: { txt: '提交申请', classes: 'buttonItem' },
      carmereImg: process.env.BASE_URL + 'img/camere.png',
      imgUrl: '',
      showPopup: false,
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
  components: { MyHeader, InputItem, ButtonItem, PopupImg },
  // 方法
  methods: {
    closeItem: function () {
      this.showPopup = false
    },
    popupImg (item) {
      console.log(item)
      this.showPopup = true;
      this.imgUrl = item.imgUrl;
    },
    onRead (file) {
      console.log(file)
      this.ApplyData[this.currentIndex].model = file.content;
    },
    clickSelect (item, index) {
      console.log(item)
      if (item.icon == 'arrow') {
        this.show = true;
        this.title = item.placeholder
        this.columns = item.columns;
      }
      this.currentIndex = index;
    },
    onChange (picker, values) {

    },
    onCancel () {
      this.show = false;
    },
    onConfirm (value, index) {
      this.show = false;
      this.ApplyData[this.currentIndex].model = value.text;
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
    },
    clickButton: function () {
      console.log(this.applyData)
      var dataArr = this.applyData;
      // var params = {
      //   userId: this.userId
      // }
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
      }
      // console.log(params)


    }
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('进入实名认证')
    // Vue.set(this, 'params', this.$route.params) // 设置相关data 并更新dom
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
    console.log('creditApply')
    var CreditItem = JSON.parse(this.getLocalStorage('CreditItem'));
    Vue.set(this, 'params', this.$route.params) // 设置相关data 并更新dom
    this.ApplyData.forEach(function (item, index) {
      if (item.type.indexOf(CreditItem.type) > -1) {
        item.itemShow = true;
      } else {

      }
    })
    console.log(this.ApplyData)
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
.camereBox {
  display: block;

  .checkBoxLeft {
    width: 100%;
    overflow: hidden;
    max-width: 100%;
    margin-bottom: 0.2667rem;
  }
  i {
    float: right;
    color: $themeColor;
  }
  .camereItem {
    height: 5.5333rem;
    background: $cf1f;
    width: 100%;
    text-align: center;
    border: 1px solid $c4f;
    border-radius: 0.2rem;
    overflow: hidden;
    img.carmereImg {
      width: 4rem;
      margin-left: 2.6667rem;
      margin-top: 1.0667rem;
      display: block;
    }
    img.modelImg {
      width: 100%;
      height: 100%;
    }
    span {
      margin-top: 0.5333rem;
      display: block;
      color: $c4f;
    }
  }
}
.myGroup::after {
  border: none;
}
</style>
