<template lang="html">
    <div :class="['PopupHistory',searchDataClone.classes]" >
          <search-item :searchData="searchData" @clickSearch="clickSearch"></search-item>
          <div class="fenUlBox">
            <ul class="fenUl">
                <li  v-for="(item, index) in fenList" :key="index">
                  <div>
                    <h3><span>{{item.name}}</span><em>成功</em></h3>
                    <p><span>查询时间：{{item.time}}</span><em>{{item.type}}</em></p>
                    <p><span>手机号：{{item.phone}}</span><van-button @click="clickFen(item)" plain round>查看报告</van-button></p>
                  </div>
                </li>
            </ul>
            <div class="noData" v-show="!fenList.length ">暂无</div>  
          </div>
          <button class="closeButton" @click="clickButton">关闭</button>
        <!-- ... -->   
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import SearchItem from "@/components/SearchItem"
export default {
  // 不要忘记了 name 属性
  name: 'PopupHistory',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['searchData'],
  // 变量
  data () {
    return {
      fenList: [
        // { name: '中国武汉分行1', phone: 13333333333, name: '王五', type: 'fangchanpinggu', time: '2018-11-11', id: 1 },
        // { name: '中国武汉分行2', phone: 13333333334, name: '王五1', type: 'jichu', time: '2018-11-12', id: 2 },
        // { name: '中国武汉分行3', phone: 13333333335, name: '王五2', type: 'sifa', time: '2018-11-13', id: 3 },
        // { name: '中国武汉分行4', phone: 13333333336, name: '王五3', type: 'xinyong', time: '2018-11-14', id: 4 },
        // { name: '中国武汉分行5', phone: 13333333337, name: '王五4', type: 'qiyexinyong', time: '2018-11-15', id: 5 },
        // { name: '中国武汉分行6', phone: 13333333338, name: '王五5', type: 'fangchanpinggu', time: '2018-11-16', id: 1 },
        // { name: '中国武汉分行7', phone: 13333333339, name: '王五6', type: 'fangchanpinggu', time: '2018-11-17', id: 1 },
        // { name: '中国武汉分行8', phone: 13333333330, name: '王五7', type: 'fangchanpinggu', time: '2018-11-18', id: 1 },
        // { name: '中国武汉分行9', phone: 13333333331, name: '王五8', type: 'fangchanpinggu', time: '2018-11-19', id: 1 },
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
.PopupHistory {
  /* ... */
  position: fixed;
  z-index: 999999;
  width: 100%;
  top: 0;
  width: 100%;
  bottom: 0;
  background: $white;
  z-index: 99999;
  transition: 0.3s all;
  bottom: 0;
  // .myPopups {
  //   width: 100%;
  //   height: 100%;
  //   box-sizing: border-box;
  // }
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
  max-height: 84vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.fenUl {
  font-size: $fz30;
  // padding: 0 0.5333rem;
  // margin-bottom: 1.1333rem;
  li {
    border: 1px solid $ccc;
    padding: 0.2133rem 0.4rem;
    margin-bottom: 19px;
    border-radius: 0.2rem;
  }
  p,
  h3 {
    overflow: hidden;
  }
  h3 {
    line-height: 0.7733rem;
    font-size: $fz32;
    em {
      color: $themeColor;
    }
  }
  p {
    font-size: $fz26;
    line-height: 0.6933rem;
    color: $c666;
  }
  span {
    float: left;
  }
  em {
    float: right;
    color: $c666;
  }
  button {
    height: auto;
    line-height: 0.6rem;
    float: right;
    color: $c666;
    border: 1px solid $c666;
  }
}
</style>
