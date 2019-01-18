<template lang="html">
    <div class="MoneyItem">
       <my-header :title="moneyDataClone.title"></my-header>
        <div class="moneyTop" v-show="moneyDataClone.top" >
          <div :class="[index == currentIndex? 'active':'']" @click="changeTop(item,index)" v-for="(item, index) in moneyDetails.top" :key="index">
              <i :class="['iconfont',item.icon]"></i>
              <p>{{item.name}}</p>
               <i class="iconfont icon-sanjiaoxing1"></i>
          </div>
        </div>
        <div class="moneyBottom" :style="{'margin-top':!moneyDataClone.top?'0':''}">
            <div class="tilte" >
              <span v-for="(item, index) in currentItem.title" :key="index">{{item}}</span>
            </div>
            <ul class="moneyUl">
              <li v-for="(item, index) in currentItem.list" :key="index">
                <span>{{item.name}}</span><span>{{item.phone}}</span><span>{{item.level.name}}</span>
              </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import MyHeader from '@/layout/MyHeader'

import { Button } from 'vant'
Vue.use(Button)
export default {
  // 不要忘记了 name 属性
  name: 'MoneyItem',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['moneyData'],
  // 变量
  data () {
    return {
      currentIndex: 0,
      currentItem: {},
    }
  },
  computed: {
    moneyDataClone: {
      get: function () {
        return this.moneyData
      },
      set: function () { }
    },
    moneyDetails: {
      get: function () {
        return this.moneyData.moneyDetails
      },
      set: function () { }
    }
  },
  // 使用其它组件
  components: { MyHeader },
  // 方法
  methods: {
    changeTop (item, index) {
      this.currentIndex = index;
      this.currentItem = this.moneyDetails[item.tag]
    },
    clicki () {
      this.$emit("clicki");
    },
    clickMx () {
      this.$emit("clickMx");
    },
    clickJs () {
      this.$emit("clickJs");
    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () {
    console.log('23')
    this.currentItem = this.moneyDetails[this.moneyDetails.top[0].tag] //设置默认值
    this.currentIndex = 0;
    console.log(this.moneyDataClone)
  },
  activated () {

  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.MoneyItem {
  /* ... */
  .moneyTop {
    height: 3.8667rem;
    background: $c52;
    display: flex;
    justify-content: space-between;

    > div {
      width: 100%;
      color: $white;
      text-align: center;
      font-size: $fz30;
      padding-top: 0.7333rem;
      position: relative;
      i.icon-sanjiaoxing1 {
        position: absolute;
        bottom: 0.5867rem;
        width: 0.2933rem;
        height: 0.2933rem;
        z-index: 99;
        color: $white;
        left: 40%;
        display: none;
      }
    }
    .active {
      i.icon-sanjiaoxing1 {
        display: block;
      }
    }
    div:first-child::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 1.6rem;
      right: 0;
      top: 0.9333rem;
      background: $white;
    }

    p {
      line-height: 0.8rem;
    }
    i {
      font-size: 1.0667rem;
    }
  }
  .moneyBottom {
    border-radius: 0.1333rem;
    margin-top: -10px;
    background: $white;
    text-align: center;
    .tilte {
      display: flex;
      justify-content: space-between;
      line-height: 1rem;
      font-size: $fz30;
      color: $themeColor;
    }
    span {
      width: 100%;
    }
    .moneyUl {
      // border-bottom: 1px solid $c999;
      border-top: 1px solid $c999;
      li {
        display: flex;
        justify-content: space-between;
        line-height: 1.1467rem;
        font-size: $fz26;
        span {
          border-right: 1px solid $c999;
          border-bottom: 1px solid $c999;
        }
        span:nth-child(3n) {
          border-right: none;
        }
      }
    }
  }
}
</style>
