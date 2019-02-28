<template lang="html">
     <div :class="['passBox passBg']" @click="onBlur" v-show="showPass" >
        <!-- 密码输入框 -->
        <div class="passInputBox"   @click.stop="kong">
          <div class="wjBox" v-show="userData.payPass"><span @click="goForget">忘记支付密码</span></div>
          <van-password-input 
            :class="['passInput']"
            :value="value"/>
            
           <van-number-keyboard
            :class="['myKey']"
            :title="placeholder"
            theme="custom"
            close-button-text="确认"
            :hide-on-click-outside = false
            v-show="showPass"
            @close="onClose"
            @input="onInput"
            @delete="onDelete"/>
        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import { NumberKeyboard, PasswordInput } from 'vant'
Vue.use(NumberKeyboard).use(PasswordInput);
export default {
  // 不要忘记了 name 属性
  name: 'PassWord',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['value', 'show', 'placeholder'],
  // 变量
  data () {
    return {
      imgUrl: process.env.BASE_URL + 'img/popup.png',

    }
  },
  computed: {
    showPass: {
      get: function () {
        return this.show
      },
      set: function () {

      }
    },
    userData: {
      get: function () {
        return store.state.userData
      },
      set: function () { }
    }
  },
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  methods: {
    goForget () {
      this.routerTo('UserPassForget')
    },
    kong () { },
    onBlur () {
      this.$emit('onBlur')
    },
    onInput (value) {
      this.$emit('onInput', value)
    },
    onClose () {
      this.$emit('onClose', this.value)
    },
    onDelete () {
      this.$emit('onDelete')
    },
    clickSubmit: function () {
      this.$emit('clickSubmit')
    }
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () {
    console.log('popup')
  },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.passBox {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
}
.passInputBox {
  bottom: 0;
  position: fixed;
  width: 100%;
  background: $white;
}
.passInput {
  padding: 15px 0;
  display: none;
}
.passBg {
  background: rgba(0, 0, 0, 0.2);
  .passInput {
    display: block;
  }
}
.myKey {
  position: relative;
}
.wjBox {
  overflow: hidden;
  span {
    float: right;
    margin-right: 0.2667rem;
    font-size: $fz24;
    margin-top: 0.2667rem;
    color: $c12;
  }
}
</style>
