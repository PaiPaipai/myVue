<template lang="html">
  <div class="CreditItem">
    <!-- ... -->
    <ul class="creditItemUl">
      <li v-for="(item, index) in itemList" :key="index">
         <dl class="creditDl clearfix" @click="clickButton(item)">
           <dd class="d1">
             <img :src="item.imgUrl" alt="">
           </dd>
           <dd class="d2">
              <h3>{{item.name}}<van-tag :class="['myTag']" plain :color="item.color" :text-color="item.color">{{item.tips}}</van-tag></h3>
              <h4 class="creditEd">贷款额度(元) <span> {{item.minMoney}}-{{item.maxMoney}}</span>万 参考月息: <span>0.55%-0.84%</span></h4>
              <p class="special">{{item.special}}</p>
              <p>还款期限：3年</p>
           </dd>
         </dl>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import { Tag } from 'vant'
import ButtonItem from "@/components/ButtonItem"
Vue.use(Tag)
export default {
  // 不要忘记了 name 属性
  name: 'RangeSlider',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['itemList'],
  // 变量
  data () {
    return {
      itemListClone: this.itemList,
      buttonItem: { txt: '一键申请', classes: 'buttonItem goButton' },
    }
  },
  computed: {},
  // 使用其它组件
  components: { ButtonItem },
  // 方法
  watch: {},
  methods: {
    clickButton: function (item) {
      this.setLocalStorage('CreditItem', JSON.stringify(item))
      this.routerTo('CreditItemDetail', { id: item.id, title: item.name })
    }
  },

  // 生命周期函数
  beforeCreate () { },
  mounted () {
    console.log('creditItem')
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.CreditItem {
  /* ... */
}

.creditItemUl {
  /deep/ .goButton {
    line-height: 0.5333rem;
    padding: 0 0.2rem;
    background: $cd8;
    height: auto;
    border: none;
    color: $white;
  }
}
.creditDl {
  margin-bottom: 0.2667rem;
  background: $white;
  h3 {
    font-size: 0.4rem;
    line-height: 0.9067rem;
    position: relative;
  }
  .myTag {
    font-size: 0.32rem;
    margin-left: 0.16rem;
  }
  em {
    float: right;
    font-size: 0.32rem;
    vertical-align: middle;
    color: $c666;
  }
  .d1 {
    float: left;
    width: 1.9467rem;
    padding: 0 0.1467rem;
    line-height: 3.4667rem;
    img {
      width: 100%;
    }
  }
  .d2 {
    width: 100%;
    margin-left: 2.1333rem;
    line-height: 0.7067rem;
    font-size: 0.3733rem;
    h4 {
      span {
        color: $cff6;
      }
    }
  }
  .special {
    color: $c666;
    font-size: $fz24;
  }
}
</style>
