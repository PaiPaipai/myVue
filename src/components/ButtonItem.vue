<template lang="html">
    <div class="ButtonItem">
        <!-- ... -->
        <van-button round @click="clickButton" :class="[buttonItem.classes]">{{buttonItem.txt}}</van-button>

    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'

export default {
  // 不要忘记了 name 属性
  name: 'ButtonItem',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['buttonItem', 'item'],
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
    clickButton: function () {
      this.$emit("clickButton", this.item);
    }
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
.HrItem {
  /* ... */
  h3 {
  }
}
</style>
