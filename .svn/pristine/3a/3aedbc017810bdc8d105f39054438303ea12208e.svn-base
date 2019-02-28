<template lang="html">
    <div class="CardItemDetail">
        <my-header :title="params.title"></my-header>
        <div class="card-item-box">
          {{params.id}}
        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'

export default {
  // 不要忘记了 name 属性
  name: 'RangeSlider',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      params: this.$route.params
    }
  },
  computed: {},
  // 使用其它组件
  components: { MyHeader },
  // 方法
  methods: {
    test: function () {

    }
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('进入详情')
    Vue.set(this, 'params', this.$route.params) // 设置相关data 并更新dom
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
    console.log('carditemDetail')
  }

}
</script>

<style scoped lang="scss">
.CardItemDetail {
  /* ... */
}
.card-item-box {
  margin: 46px 0 50px 0;
}
</style>
