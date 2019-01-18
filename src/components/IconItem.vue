<template lang="html">
    <div class="IconItem">
        <!-- ... -->
        <div :class="['nav-item']" v-for="(item, index) in iconList"  @click="goToPath(item,index)" :key="index">
              <i :class="[item.classes,index == active?'clickHover':'']"></i>
              <span>{{item.name}}</span>
        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'

export default {
  // 不要忘记了 name 属性
  name: 'IconItem',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['iconList', 'active'],
  // 变量
  data () {
    return {

    }
  },
  computed: {
    userId: {
      get: function () {
        return this.$store.state.userId
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
    // this.$emit("clickSearch",text);
    goToPath: function (item, index) {
      if (item.path) {
        this.routerTo(item.path, { userId: this.$store.state.userId })
      } else {
        this.$emit('clickItem', item, index)
      }
    },
    clickItem: function () {

    }
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.IconItem {
  /* ... */
  display: flex;
  justify-content: space-between;
}
.nav-item {
  text-align: center;
  width: 100%;
  color: $baseColor;
  font-size: $fz30;
  span {
    line-height: 1rem;
  }
  i {
    position: relative;
    display: block;
    line-height: 1em;
    width: 1.0667rem;
    height: 1.0667rem;
    margin: 0 auto;
    font-size: 1.0667rem;
  }
}
</style>
