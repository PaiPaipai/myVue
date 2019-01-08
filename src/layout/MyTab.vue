<template lang="html">
    <div class="MyTab">
        <!-- ... -->
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" @click="goHome()">首页</van-tabbar-item>
            <van-tabbar-item icon="search"  @click="goCard()" >信用卡</van-tabbar-item>
            <van-tabbar-item icon="friends-o"  @click="goNews()" >资讯</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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
      userId: 123
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
  components: { TestTab },
  // 方法
  methods: {
    goHome: function () {
      const userId = this.userId
      this.$router.replace({ name: 'index', params: { userId } })
    },
    goCard: function () {
      const userId = this.userId
      this.$router.replace({ name: 'CardList', params: { userId } })
    },
    goNews: function () {
      const userId = this.userId
      this.$router.replace({ name: 'NewsList', params: { userId } })
    },
    setActive: function (path) {
      if (path === 'index' || path === '/') {
        store.commit('setActive', 0)
      } else if (path === 'CardList' || path === 'CardItemDetail') {
        store.commit('setActive', 1)
      } else if (path === 'NewsList' || path === 'NewsDetail') {
        store.commit('setActive', 2)
      }
      console.log(store.state.active)
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
        this.getHomeMsg()
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
</style>
