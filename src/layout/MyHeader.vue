<template lang="html">
    <div class="MyHeader" v-show="!platform">
        <van-nav-bar
        :title="title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
    </div>

</template>

<script type="text/javascript">
import Vue from 'vue'
import { NavBar, Toast } from 'vant'
import store from '@/store/index'

Vue.use(NavBar).use(Toast)
export default {
  // 不要忘记了 name 属性
  name: 'MyHeader',
  // 组合其它组件
  extends: {},
  store,
  // 组件属性、变量
  props: ['title', 'msg'], // 子组件和父组件传值
  // 变量
  data () {
    return {
      zimsg: this.msg

    }
  },
  computed: {
    platform: {
      get: function () {
        return this.$store.state.platform
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
    onClickLeft () {
      this.$router.back(-1)

    },
    onClickRight () {
      Toast('按钮')
    },
    cc: function () {
      // debugger
      // 出发父组件的监方法，并传值  父组件的 写法 是 child="parent" 用parent 方法监听 子组件的 child 方法  然后子组件实现child 方法 并传值
      this.$emit('cc', '测试')
    }
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
  }
}
</script>

<style scoped>
.MyHeader {
  /* ... */
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
}
.MyHeader /deep/ .van-nav-bar__title {
  font-weight: bold;
}
</style>
