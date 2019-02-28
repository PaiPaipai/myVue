<template lang="html">
    <div class="PopupLogin van-overlay" @click="clickOverlay" v-show="showClone">
        <!-- ... -->
        <div class="dialogBox"  @click="dialogBox">
            <div class="van-dialog__header"><img :src="title"/></div>
            <div class="van-dialog__content van-hairline--bottom">
               <van-field v-for="(item, index) in dialogList" :key="index"
                :class="item.classes"
                v-model="item.model"
                :maxLength="item.length"
                :type="item.type"
                :label="item.label"
                :placeholder="item.placeholder"
              >
               <van-button :class="['sendMsg']" v-show="item.types == 'yzm'" :disabled="dialogList[0].disabled" @click="clickSendMsg(dialogList[0])" slot="button" size="small" type="primary">{{dialogList[0].txt}}</van-button>
            </van-field>
            </div>
            <div class="van-dialog__footer  van-dialog__footer--buttons">
             <button  @click="confirm" class="van-dialog__confirm van-hairline--left">登录</button>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import { config } from '../assets/js/config' // 引入配置的公共接口url
import { Button, Field, Toast } from 'vant'
Vue.use(Field)
export default {
  // 不要忘记了 name 属性
  name: 'PopupLogin',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['showLogin'],
  // 变量
  data () {
    return {
      title: process.env.BASE_URL + "img/hrb-login.png",
      dialogList: [
        { model: '', type: '', tag: 'mobile', types: '', label: '手机号码', time: 60, length: '11', placeholder: '请输入手机号码', disabled: false, classes: '', icon: '', txt: '发送验证码', reg: config.reg.phone },
        { model: '', type: '', tag: 'authCode', types: 'yzm', label: '短信验证码', placeholder: '请输入验证码', classes: '', icon: '' }
      ]
    }
  },
  computed: {
    showClone: {
      get: function () {
        return this.showLogin
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
  },
  //每次进缓存的路由调用
  activated: {},
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  //每次进没有缓存的路由调用
  methods: {
    dialogBox (e) {
      e.stopPropagation();
    },
    clickSendMsg: function (item) {
      console.log('sendmsm')
      if (item.model == '') {
        Toast('请填写手机号码!')
        return
      } else if (!item.reg.test(item.model)) {//验证正则
        item.error = true
        Toast('请填写正确的手机号码!')
      } else {
        item.error = false
        item.disabled = true;
        this.countDown(item)

        this.sendSms(item.model);
      }
    },
    confirm () {
      var that = this;
      var flag = true;
      var array = this.dialogList;
      var params = {
        userId: this.userData.id
      };
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.reg) {
          if (!element.reg.test(element.model)) {//验证正则
            element.error = true
            Toast('请填写正确的' + element.label)
            flag = false;
            break
          }
        } else if (!element.model) {
          Toast('请填写' + element.label)
          flag = false;
          break
        }
        params[element.tag] = element.model
      }
      if (flag) {
        this.realNameFake(params, that.realNameFakeCb)

      }
    },
    realNameFakeCb () {
      var that = this;
      this.$emit("closeItem");
      this.getMyInfo(that)
    },
    cancel () {
      this.$emit("closeItem");
    },
    clickOverlay () {
      this.$emit("closeItem");
    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.van-overlay {
  /* ... */
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.7);
}
.dialogBox {
  position: absolute;
  background: $white;
  border-radius: 0.1333rem;
  top: 30%;
  left: 50%;
  width: 86%;
  min-height: 1.3333rem;
  margin-left: -43%;
  .van-dialog__header {
    padding: 0.2rem 0;
    font-size: 0.4267rem;
    img {
      width: 2rem;
    }
  }
  .van-dialog__content {
    padding: 0.2rem 0;
  }
  .van-dialog__footer {
    display: block;
    text-align: center;
    margin: 0.4rem 0;
    button {
      // width: 100%;
      width: 4rem;
      background: $c12 !important;
      border-color: $c12;
      height: 0.8rem;
      font-size: $fz30;
      line-height: 0.7733rem;
      background: none;
      border-radius: 0.4rem;
    }
    .van-dialog__confirm {
      color: $white;
    }
  }
  .sendMsg {
    background: $c12;
    border-color: $c12;
  }
}
</style>
