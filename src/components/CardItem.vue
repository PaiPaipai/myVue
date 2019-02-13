<template lang="html">
  <div class="CardItem">
    <!-- ... -->
    <ul class="cardItemUl">
      <li v-for="(item, index) in itemList" :key="index">
         <dl class="cardDl clearfix">
           <dt>
             <img :src="item.imgUrl" alt="">
           </dt>
           <dd>
             <h3>{{item.name}}</h3>
             <p class="ed">额度：{{item.minMoney}}-{{item.maxMoney}}万({{item.tips}})</p>
             <p classs="special">{{item.special}}</p>
           </dd>
         </dl>
         <div class="aplyBox">
           申请人数：{{item.total}} <span @click="goCardDetails(item)">立即办理>></span>
         </div>
         <i class="iconfont icon-tuijian1" v-show="item.hot"></i>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
export default {
  // 不要忘记了 name 属性
  name: 'CardItem',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['itemList'],
  // 变量
  data () {
    return {
      itemListClone: this.itemList
    }
  },
  computed: {},
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  methods: {
    goCardDetails: function (item) {
      // path: `/index/${userId}/${'456'}`
      if (item.tag == 'xy') {
        this.setLocalStorage('bankItem', JSON.stringify(item))
        this.routerTo(item.path)
      } else if (item) {
        this.routerTo(item.path, { id: item.id, title: item.name })
      }
    }
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
    console.log('cardItem')
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.CardItem {
  /* ... */
}

.cardItemUl {
  overflow: hidden;
  li {
    width: 100%;
    padding: 0.48rem 0 0 0;
    border: 1px solid $cbbb;
    box-sizing: border-box;
    border-radius: 0.1333rem;
    margin-bottom: 0.3333rem;
    color: $c101;
    position: relative;
  }
  img {
    width: 2.4667rem;
    height: 1.5467rem;
    border-radius: 0.1067rem;
  }
  p {
  }
  .ed {
    font-size: $fz28;
    line-height: 0.8667rem;
  }
  .special {
    font-size: $fz24;
  }
  h3 {
    font-size: $fz30;
  }
  dl {
    padding: 0 0.2667rem;
    margin-bottom: 0.4267rem;
  }
  dd {
    float: left;
  }
  dt {
    float: left;
    margin-right: 0.2133rem;
  }
  .aplyBox {
    border-top: 1px solid $cbbb;
    line-height: 1rem;
    padding: 0 0.2667rem;
    font-size: 0.4rem;
    overflow: hidden;
    span {
      float: right;
    }
  }
  .icon-tuijian1 {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.0667rem;
    width: 1.0667rem;
    height: 1.0667rem;
    color: $themeColor;
  }
}
</style>
