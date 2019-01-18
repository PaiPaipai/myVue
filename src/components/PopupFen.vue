<template lang="html">
    <div :class="['PopupFen',searchDataClone.classes]">
        <!-- ... -->
         <search-item :searchData="searchData" @clickSearch="clickSearch"></search-item>
         <div class="fenUlBox">
           <ul class="fenUl">
              <li @click="clickFen(item)" v-for="(item, index) in fenList" :key="index"><span>{{item.name}}</span> <i class="iconfont icon-jiantou"></i></li>
           </ul>  
         </div>
          <button class="closeButton" @click="clickButton">关闭</button>
          
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import SearchItem from "@/components/SearchItem"
export default {
  // 不要忘记了 name 属性
  name: 'PopupFen',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['searchData'],
  // 变量
  data () {
    return {
      fenList: [
        { name: '中国武汉分行1', id: 1 },
        { name: '中国武汉分行2', id: 2 },
        { name: '中国武汉分行3', id: 3 },
        { name: '中国武汉分行4', id: 4 },
        { name: '中国武汉分行5', id: 5 },
        { name: '中国武汉分行1', id: 1 },
        { name: '中国武汉分行2', id: 2 },
        { name: '中国武汉分行3', id: 3 },
        { name: '中国武汉分行4', id: 4 },
        { name: '中国武汉分行5', id: 5 },
        { name: '中国武汉分行1', id: 1 },
        { name: '中国武汉分行2', id: 2 },
        { name: '中国武汉分行3', id: 3 },
        { name: '中国武汉分行4', id: 4 },
        { name: '中国武汉分行5', id: 5 },
        { name: '中国武汉分行1', id: 1 },
        { name: '中国武汉分行2', id: 2 },
        { name: '中国武汉分行3', id: 3 },
        { name: '中国武汉分行4', id: 4 },
        { name: '中国武汉分行5', id: 5 },
        { name: '中国武汉分行1', id: 1 },
        { name: '中国武汉分行2', id: 2 },
        { name: '中国武汉分行3', id: 3 },
        { name: '中国武汉分行4', id: 4 },
        { name: '中国武汉分行5', id: 5 },
      ]
    }
  },
  computed: {
    searchDataClone: {
      get: function () {
        return this.searchData
      },
      set: function () { }
    }
  },
  // 使用其它组件
  components: { SearchItem },
  // 方法
  watch: {},
  methods: {
    clickSearch () {
      this.$emit("clickSearch", this.searchDataClone.model);
      // 
    },
    clickFen (item) {
      this.$emit("clickFen", item);
    },
    clickButton () {
      this.$emit("clickFen");
    },
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { console.log('1213') },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.PopupFen {
  /* ... */
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 1.1333rem;
  background: $white;
  z-index: 99999;
  transition: 0.3s all;
  bottom: 0;
}

.closeButton {
  position: absolute;
  bottom: 0.1333rem;
  background: $white;
  left: 10%;
  color: $white;
  border-radius: 0.1067rem;
  background: $themeColor;
  font-size: $fz32;
  height: 1rem;
  width: 80%;
  line-height: 1rem;
}
.fenUlBox {
  max-height: 84%;
  overflow-x: hidden;
  overflow-y: auto;
}

.fenUl {
  font-size: $fz30;
  padding: 0 0.5333rem;
  margin-bottom: 1.1333rem;

  li {
    border-bottom: 1px solid $ccc;
  }
  span {
    width: 80%;
    overflow: hidden;
    display: inline-block;
    line-height: 1rem;
    vertical-align: middle;
  }
  i {
    float: right;
    line-height: 1rem;
  }
}
</style>
