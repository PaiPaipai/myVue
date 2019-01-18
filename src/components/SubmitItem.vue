<template lang="html">
    <div class="SubmitItem">
        <!-- ... -->
        <van-submit-bar
          
          :button-text="submititem.text"
          @submit="onSubmit"
        >
          <ul class="submitUl">
            <li @click="goQuestion()">
              <i class="iconfont icon-changjianwenti"></i>
              <span>常见问题</span>
            </li>
            <li @click="goKefu()">
              <i class="iconfont icon-kefu1"></i>
              <span>联系客服</span>
            </li>
          </ul>
        </van-submit-bar>
        <popup-img :imgUrl="imgUrl" :showPopup="showPopup" @closeItem="closeItem"></popup-img>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import PopupImg from '@/components/PopupImg'

import { SubmitBar, Popup } from 'vant';
Vue.use(SubmitBar).use(Popup);
export default {
  // 不要忘记了 name 属性
  name: 'SubmitItem',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['submititem'],
  // 变量
  data () {
    return {
      showPopup: false,
      imgUrl: process.env.BASE_URL + 'img/kefu.png',
    }
  },
  computed: {},
  // 使用其它组件
  components: { PopupImg },
  // 方法
  watch: {},
  methods: {
    closeItem: function () {
      this.showPopup = false
    },
    onSubmit: function () {
      this.$emit("clickSubmit");
    },
    goQuestion: function () {
      this.routerTo('UserQuestion')
    },
    goKefu: function () {
      this.showPopup = true
    },
    // 
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.SubmitItem {
  /* ... */
  /deep/ .van-button {
    width: 50%;
  }
  /deep/ .van-submit-bar__text {
    display: none;
  }
  .submitUl {
    width: 50%;
    display: flex;
    justify-content: space-between;
    li {
      width: 100%;
      text-align: center;
    }
    i {
      font-size: 0.6rem;
      text-align: center;
      display: block;
      position: relative;
      margin-bottom: 5px;
    }
  }
}
</style>
