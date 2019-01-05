<template>
  <div id="app">
    <keep-alive>
      <!--缓存部分页面-->
      <router-view class="child-view"></router-view>
    </keep-alive>
    <my-tab></my-tab>
  </div>
</template>

<script>
import MyTab from '@/layout/MyTab'
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      transitionName: 'slide-left'
    }
  },
  mounted () {
    console.log('123')
  },
  components: { MyTab },
  watch: {
    '$route' (to, from) {
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
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
