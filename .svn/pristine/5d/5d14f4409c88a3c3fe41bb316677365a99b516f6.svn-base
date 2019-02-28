<template lang="html">
    <div class="InviteMoney">
        <!-- ... -->
        <div class="codeBg" >
          <!-- :style="{'background':'url('+ process.env.BASE_URL + "img/zq.jpg"+') no-repeat'}" -->
          <!-- <img :src="codeBg"> -->
        </div>
        <div class="codeBox">
          <img :src="codeImg">
        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'

export default {
  // 不要忘记了 name 属性
  name: 'InviteMoney',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      codeBg: process.env.BASE_URL + "img/zq.jpg",
      codeImg: '',

    }
  },
  computed: {
    userData: {
      get: function () {
        return JSON.parse(this.getLocalStorage('userInfo'))
      },
      set: function () { },
    },
  },
  //每次进缓存的路由调用
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  //每次进没有缓存的路由调用
  methods: {
    // this.$emit("clickSearch",text);
    setCodeImg (data) {
      this.codeImg = data;
    }
  },
  // 生命周期函数
  beforeCreate () {
    store.commit('setDetail', true)
  },
  created () { },
  mounted () { },
  activated () {
    console.log('invitemoney')
    var that = this;
    if (!that.userData.shareImageUrl) {
      var params = {
        userId: that.userData.id
      }
      that.getShareUrl(params, that.setCodeImg)
    } else {
      that.codeImg = that.userData.shareImageUrl
    }
  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.InviteMoney {
  /* ... */
  padding-bottom: 0;
  height: 100vh;
  position: relative;
  .codeBg {
    height: 100%;
    background: url("../../../static/img/zq.jpg") no-repeat 0 0;
    background-size: 100% 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .codeBox {
    position: absolute;
    z-index: 10;
    width: 2.4rem;
    height: 2.4rem;
    background: $white;
    bottom: 0.5333rem;
    right: 5%;
    margin-left: -1.6667rem;
  }
}
</style>
