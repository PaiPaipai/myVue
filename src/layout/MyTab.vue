<template lang="html">
    <div class="MyTab">
        <!-- ... -->
        <van-tabbar :class="['myTabbar']" v-model="active" :z-index=999>
            <van-tabbar-item  @click="goHome()"><i class="iconfont icon-shouye"></i> 首页</van-tabbar-item>
            <van-tabbar-item   @click="goNews()" ><i class="iconfont icon-zixun"></i>资讯</van-tabbar-item>
            <van-tabbar-item   @click="" ><i class="iconfont icon-shangcheng"></i>商城</van-tabbar-item>
            <van-tabbar-item  @click="goUser()" ><i class="iconfont icon-yonghuzhongxin"></i>用户中心</van-tabbar-item>
        </van-tabbar>
        <!-- <test-tab class="test"></test-tab> -->
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
  name: 'RangeSlider',
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
    active: {
      get: function () {
        return this.$store.state.active
      },
      set: function () {

      }
    },
    userId: {
      get: function () {
        return this.$store.state.userId
      },
      set: function () {

      }
    }
  },

  // 使用其它组件
  components: { TestTab },
  // 方法
  methods: {
    goHome: function () {
      this.routerTo('index')
    },
    goCard: function () {
      this.routerTo('CardList', { userId: this.userId })
    },
    goNews: function () {
      this.routerTo('NewsList', { userId: this.userId })
    },
    goUser: function () {
      this.routerTo('UserCenter', { userId: this.userId })
    },
    setActive: function (path) {
      if (path === 'index' || path === '/') {
        store.commit('setActive', 0)
      }
      //  else if (path === 'CardList' || path === 'CardItemDetail') {
      //   store.commit('setActive', 2)
      // } 
      else if (path === 'NewsList' || path === 'NewsDetail') {
        store.commit('setActive', 1)
      }
      else if (path.indexOf('UserCenter') == 0) {
        store.commit('setActive', 3)
      } else {
        store.commit('setActive', -1)
      }
      // console.log(path.indexOf('User'))
      // console.log(store.state.active)
    },
    getHomeMsg: function () {
      this._ajax({ // 在api.js后面合并的axios属性名_ajax一致,名字随意
        url: this._api, // 基地址加上后面不同的url地址
        // method: 'GET',
        // timeout: 6000,
        params: {}
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  // 生命周期函数
  beforeCreate () {
    var test = [
      { name: 123, img: '45515', address: '6625' },
      { name: 456, img: '45515', address: '6625' },
      { name: 789, img: '45515', address: '6625' }
    ]
    store.commit('setAny', test)
  },
  mounted () {
    // debugger
    var name = this.$route.name
    this.setActive(name)
  },
  store,
  // eslint-disable-next-line no-dupe-keys
  watch: {
    $route (to, from) {
      this.setActive(to.name)
      if (to.name === 'index') {
        // this.getHomeMsg()
      } else if (to.name === 'CardItemDetail') {

      }
    }
  }
}
</script>

<style scope  lang="scss">
.van-tabbar-item__icon {
  font-size: 24px;
}
.myTabbar {
  .iconfont {
    display: block;
    min-width: 1em;
    text-align: center;
    position: relative;
    font-size: 22px;
    text-rendering: auto;
    margin-bottom: 5px;
  }
}
.van-tabbar-item--active {
  color: $c26;
}
</style>
