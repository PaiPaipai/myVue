<template lang="html">
    <div class="TestTab">
        <!-- ... -->
          <div :class="['tabbar-item',index==active?'tabbar-item--active':'']" @click="clickBar(index)" v-for="(item, index) in tabData" :key="index">
            <i :class="['iconfont',item.classes]"></i><span>{{item.name}}</span></div>

    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
export default {
  // 不要忘记了 name 属性
  name: 'TestTab',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      tabData: [
        { name: '首页', classes: 'icon-gongyingshangshouye' },
        { name: '信用卡', classes: 'icon-gengduo' },
        { name: '新闻', classes: 'iconfont icon-wode' },
        { name: '我的', classes: 'icon-wode' }
      ]
    }
  },
  computed: {
    active: {
      get: function () {
        return this.$store.state.active
      },
      set: function () {
      }
    }
  },
  // 使用其它组件
  components: {

  },
  // 方法
  watch: {},
  methods: {
    clickBar: function (index) {

    }
  },
  // 生命周期函数
  beforeCreate () { },
  created () {
    console.log(this.$store.state.active)
  },
  mounted () { },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style scoped lang="scss">
.TestTab {
  display: flex;
  justify-content: space-between;
}
.tabbar-item {
  text-align: center;
  width: 100%;
  height: 50px;
  color: $c999;
  i {
    position: relative;
    display: block;
    line-height: 1em;
    font-size: 32px;
  }
}
.tabbar-item--active {
  color: $themeColor;
}
.tab-bar-box {
  display: inline;
}
</style>
