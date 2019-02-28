<template lang="html">
    <div class="IframeItem" v-show="iframeStateClone">
        <!-- ... -->
         <div class="iframeTop"><div class="left" @click="clickClose"><span class="span"><i class="iconfont" ></i>关闭</span></div><div class="center">第三方页面</div></div>
        <iframe id="myFrame"  ref="myFrame"  frameborder=0 name="showHere" scrolling=auto  :src="iframeSrcClone"></iframe>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'

export default {
  // 不要忘记了 name 属性
  name: 'IframeItem',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['iframeShow', 'iframeSrc'],
  // 变量
  data () {
    return {
    }
  },
  computed: {
    iframeStateClone: {
      get: function () {
        return this.iframeShow
      },
      set: function () {

      }
    },
    iframeSrcClone: {
      get: function () {
        return this.iframeSrc
      },
      set: function () {

      }
    }
  },
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  methods: {
    clickClose () {
      console.log(this.$router)
      var href = window.location.href;
      if (href.indexOf('UserReal') > 0) {
        this.$emit("clickClose")
        return
      } else {
        this.routerTo('UserCenter')
        this.$emit("clickClose");
      }

    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () {
    console.log('iframeitem')
  },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.IframeItem {
  /* ... */
  width: 100%;
  height: 100vh;
  padding-bottom: 50px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 999;
  background: $white;
  .iframeTop {
    height: 46px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    line-height: 46px;
    background-color: #fff;
    .left {
      bottom: 0;
      font-size: 14px;
      left: 15px;
      position: absolute;
    }
    .center {
      font-weight: bold;
      margin: 0 auto;
      max-width: 60%;
      font-size: 16px;
      font-weight: 500;
    }
  }
  span {
    color: #1989fa;
    display: inline-block;
    vertical-align: middle;
    margin-left: -20px;
    padding-left: 25px;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
