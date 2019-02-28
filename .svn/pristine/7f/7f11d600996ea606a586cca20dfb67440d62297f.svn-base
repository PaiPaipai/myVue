<template lang="html">
    <div class="MyNav">
        <div class="navBox">
          <button><i class="iconfont icon-shouye1" @click="goHome()"></i></button>
           <button><i class="iconfont icon-fanhui"  @click="goBack()"></i></button>
        </div>
    </div>
    
</template>

<script type="text/javascript">
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import store from '@/store/index'
import TestTab from '@/layout/TestTab'
Vue.use(Tabbar).use(TabbarItem)
export default {
  // 不要忘记了 name 属性
  name: 'MyNav',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: {
  },
  // 变量
  data () {
    return {
      //    active: store.state.active
    }
  },
  computed: {
  },

  // 使用其它组件
  components: { TestTab },
  // 方法
  methods: {
    goHome: function () {
      this.routerTo('index')
    },
    goBack: function () {
      this.$router.back(-1)
    },
  },
  // 生命周期函数
  beforeCreate () {

  },
  mounted () {

  },
  store,
  // eslint-disable-next-line no-dupe-keys
  watch: {

  }
}
</script>

<style scope  lang="scss">
.MyNav {
  .navBox {
    position: fixed;
    bottom: 2rem;
    right: 0.6667rem;
    width: 1.0667rem;
    z-index: 2000;
    i {
      font-size: 0.7333rem;
      color: $cffd;
    }
    button {
      width: 100%;
      height: 1.0667rem;
      background: $c666;
      border-radius: 50%;
      margin-top: 0.4rem;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
