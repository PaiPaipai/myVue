<template lang="html">
    <div class="JtHr">
        <!-- ... -->
        <h3>{{hritem}} <i class="iconfont shuangjiantou icon-shuangjiantou"></i> </h3>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'

export default {
  // 不要忘记了 name 属性
  name: 'JtHr',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['hritem'],
  // 变量
  data () {
    return {

    }
  },
  computed: {},
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
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
.JtHr {
  /* ... */
  h3 {
    font-size: $fz34;
    line-height: 0.96rem;
    // border-bottom: 1px solid $ccc;
    text-indent: 0.2rem;
    // margin-bottom: 0.5333rem;
  }
}
</style>
