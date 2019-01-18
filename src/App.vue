<template>
  <div id="app"
       :class="['app']">

    <keep-alive>
      <!--缓存部分页面-->
      <router-view class="child-view"
                   :style="{'min-height':minHeight+'px'}"
                   v-if="!$route.meta.keepAlive"></router-view>
      <!-- 默认都缓存 -->
    </keep-alive>
    <!-- 将不缓存的设置为true -->
    <router-view class="child-view"
                 :style="{'min-height':minHeight+'px'}"
                 v-if="$route.meta.keepAlive"></router-view>

    <my-tab v-show="!detail"></my-tab>
  </div>
</template>

<script>
import MyTab from '@/layout/MyTab'
import store from '@/store/index'
export default {
  name: 'App',
  store,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      transitionName: 'slide-left',
      minHeight: '',
    }
  },
  computed: {
    detail: {
      get: function () {
        return store.state.detail
      },
      set: function () {

      }
    }
  },
  mounted () {
    console.log('app')
    this.minHeight = window.outerHeight - 50;
  },
  components: { MyTab },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('路由切换')
    // Vue.set(this, 'params', this.$route.params) // 设置相关data 并更新dom
  },
  watch: {
    '$route' (to, from) {
      // const toDepth = to.path;

      // const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style scope>
.app {
  /* height: 100vh;
  overflow-y: auto; */
  /* box-sizing: border-box; */
  padding-bottom: 50px;
  overflow-x: hidden;
}

.child-view {
  box-sizing: border-box;
  min-height: 100%;
}

/* .child-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(-80px, 0);
  transform: translate(-500px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
} */
/* .slide-fade-enter-active {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
}
.slide-fade-enter {
  transform: translateX(0px);
  -webkit-transform: translateX(0px);
  opacity: 0;
}
.slide-fade-leave-active {
  opacity: 0;
} */
</style>
