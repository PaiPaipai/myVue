<template lang="html">
    <div class="HrItem">
        <!-- ... -->
        <h3 :class="[hritem.bottom?'h3border':'']">{{hritem.title}} <i @click="clicki" :class="hritem.classes">{{hritem.txt}}</i></h3>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'

export default {
  // 不要忘记了 name 属性
  name: 'HrItem',
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
    clicki () {
      this.$emit("clicki");
    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () {
  },
  mounted () { },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.HrItem {
  /* ... */
  h3 {
    font-size: $fz34;
    line-height: 0.96rem;
    // border-bottom: 1px solid $ccc;
    text-indent: 0.3333rem;
    padding-right: 0.4rem;
    // margin-bottom: 0.5333rem;
    overflow: hidden;
    i {
      float: right;
    }
    .zcxe {
      font-size: 0.32rem;
      color: #1296db;
    }
  }
  .h3border {
    border-bottom: 1px solid $ccc;
  }
}
</style>
