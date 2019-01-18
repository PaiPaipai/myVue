<template lang="html">
    <div class="MoneyItem">
       <my-header :title="moneyDataClone.title"></my-header>
        <div class="moneyTop">
          <div>
            <p>{{moneyDataClone.name[0]}}</p>
            <h3>¥{{moneyDataClone.money[0]}}<span>元</span></h3>
          </div>
          <div>
            <p>{{moneyDataClone.name[1]}}</p>
            <h3>¥{{moneyDataClone.money[1]}}<span>元</span></h3>
          </div>
        </div>
        <div class="moneyBottom">
          <h3>{{moneyDataClone.name[2]}} <i v-show="moneyDataClone.icon" class="iconfont icon-changjianwenti" @click="clicki"></i></h3>
          <h4>¥{{moneyDataClone.money[2]}}</h4>
          <p>单位(元)</p>
          <van-button :class="['moneyButton']" @click="clickMx">{{moneyDataClone.name[3]}}</van-button>
          <van-button :class="['moneyButton js']" @click="clickJs">{{moneyDataClone.name[4]}}</van-button>
        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import MyHeader from '@/layout/MyHeader'

import { Button } from 'vant'
Vue.use(Button)
export default {
  // 不要忘记了 name 属性
  name: 'MoneyItem',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['moneyData'],
  // 变量
  data () {
    return {

    }
  },
  computed: {
    moneyDataClone: {
      get: function () {
        return this.moneyData
      },
      set: function () { }
    }
  },
  // 使用其它组件
  components: { MyHeader },
  // 方法
  watch: {},
  methods: {
    clicki () {
      this.$emit("clicki");
    },
    clickMx () {
      this.$emit("clickMx");
    },
    clickJs () {
      this.$emit("clickJs");
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
.MoneyItem {
  /* ... */
  .moneyTop {
    height: 3.8667rem;
    background: $c52;
    display: flex;
    justify-content: space-between;
    > div {
      width: 100%;
      padding: 0.3867rem 0 0.12rem 0;
      color: $white;
      position: relative;
    }
    div:first-child::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 2.1333rem;
      right: 0;
      top: 0.9333rem;
      background: $white;
    }
    p {
      line-height: 1.5733rem;
      text-indent: 0.84rem;
      font-size: $fz36;
    }
    h3 {
      line-height: 1.72rem;
      font-size: 0.7467rem;
      text-indent: 1.3333rem;
      span {
        font-size: $fz32;
        margin-left: 0.3333rem;
      }
    }
  }
  .moneyBottom {
    border-radius: 0.1333rem;
    margin-top: -10px;
    background: $white;
    padding: 1.3067rem 0;
    text-align: center;
    h3 {
      font-size: $fz36;
      line-height: 1.32rem;
      i {
        margin-left: 0.2rem;
      }
    }
    h4 {
      font-size: 0.6667rem;
      line-height: 1.2rem;
    }
    p {
      font-size: $fz30;
      line-height: 0.96rem;
      margin-bottom: 0.3733rem;
    }
    .moneyButton {
      display: block;
      margin: 0 auto;
      height: auto;
      font-size: $fz36;
      line-height: 1.0667rem;
      border-radius: 0.5333rem;
      width: 4.8rem;
      margin-top: 0.5333rem;
      background: $c29f;
      color: $white;
      border: none;
    }
    .js {
      background: $cffa;
    }
  }
}
</style>
