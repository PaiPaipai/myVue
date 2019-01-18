<template lang="html">
    <div >
        <van-swipe :class="['swipe',swipeClass]" :autoplay="3000"  indicator-color="white">
          <van-swipe-item v-for="(item, index) in imgListClone" :key="index"><img :src="item.imgUrl" /></van-swipe-item>
        </van-swipe>

    </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'
Vue.use(Swipe).use(SwipeItem).use(Lazyload, {
  // preLoad:1,
  // error: '@/static/img/error.jpg',
  // loading: '@/static/img/loading.gif',
})
export default {
  // 不要忘记了 name 属性
  name: 'swipe',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['imgList', 'swipeClass'],
  // 变量
  data () {
    return {
      imgListClone: this.imgList
    }
  },
  computed: {},
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  methods: {
    onChange (index) {
      // Toast('当前 Swipe 索引：' + index)

    }
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () { }

}
</script>

<style scoped lang="scss">
.swipe {
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
.swipe .van-swipe-item {
  background: #ffc;
}
</style>
