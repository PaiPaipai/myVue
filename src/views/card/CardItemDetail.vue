<template lang="html">
    <div class="CardItemDetail  ">
        <my-header :title="params.title"></my-header>
        <div class="swipeBox">
          <swipe :imgList="imgList"
              :swipeClass="'topSwiper'"></swipe>
        </div>
        <div class="cardItemTitle">
              <card-details></card-details>
        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import swipe from '@/components/swipe'
import CardDetails from '@/components/CardDetails'
export default {
  // 不要忘记了 name 属性
  name: 'CardItemDetail',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      params: this.$route.params,
      imgList: [
        { imgUrl: process.env.BASE_URL + '/img/1.jpg' },
        { imgUrl: process.env.BASE_URL + 'img/2.jpg' },
        { imgUrl: process.env.BASE_URL + 'img/3.jpg' }
      ],
    }
  },
  computed: {},
  // 使用其它组件
  components: { MyHeader, swipe, CardDetails },
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
  background: $cf0;
}
.topSwiper {
  height: 3.8667rem;
  // width: 6.2rem;
  margin: 0 auto;
}
.swipeBox {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  // padding: 0.4rem;
  background: $cf6;
}
.cardItemTitle {
  padding: 0.2667rem 0 0.1333rem 0;
}
</style>
