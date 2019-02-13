<template lang="html">
    <div class="Mall">
        <!-- ... -->
        <div class="noMall">
          敬请期待
        </div>
        <div class="text-box">
          <my-text></my-text>
        </div>
        <!-- <iframe id="myFrame" class="mallFrame"  ref="myFrame"  frameborder=0 name="showHere" scrolling=auto  :src="iframeSrc"></iframe> -->
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import MyHeader from '@/layout/MyHeader'
import MyText from "@/components/MyText"

export default {
  // 不要忘记了 name 属性
  name: 'Mall',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      iframeShow: true,
      iframeSrc: process.env.BASE_URL + 'html/mall.html'
    }
  },
  computed: {},
  //每次进缓存的路由调用
  activated: {},
  // 使用其它组件
  components: { MyHeader, MyText },
  // 方法
  watch: {},
  //每次进没有缓存的路由调用
  methods: {
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
.Mall {
  /* ... */
}
.mallFrame {
  position: fixed;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 50px;
}
.noMall {
  text-align: center;
  line-height: 2rem;
  font-size: $fz32;
}
</style>
