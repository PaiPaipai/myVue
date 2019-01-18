<template lang="html">
    <div class="SearchItem">
        <!-- ... -->
        <div class="searchBox">
            <input type="text" v-model="searchDataClone.model" :placeholder="searchDataClone.placeholder"> <i class="iconfont icon-guanbi1" @click="clicki" v-show="searchDataClone.model"></i>
        </div>
         <button @click="clickSearch">查询</button>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
export default {
  // 不要忘记了 name 属性
  name: 'SearchItem',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['searchData'],
  // 变量
  data () {
    return {
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
  components: {},
  // 方法
  watch: {},
  methods: {
    clickSearch () {
      this.$emit("clickSearch", this.searchDataClone.model);
    },
    clicki () {
      this.searchDataClone.model = ''
    }

  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.SearchItem {
  /* ... */
  padding: 0.2533rem 0;
  text-align: left;
  .searchBox {
    display: inline-block;
    width: 7.2rem;
    border: 1px solid $cbbb;
    border-radius: 0.4rem;
    margin-left: 0.4rem;
    padding-right: 0.1333rem;
    text-indent: 0.2667rem;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .icon-guanbi1 {
    font-size: 0.2667rem;
    color: $ccc;
  }
  input {
    width: 90%;
    vertical-align: unset;
  }
  button {
    background: $c26;
    width: 1.6rem;
    height: 0.6667rem;
    color: $white;
    font-size: $fz32;
    margin-left: 0.2rem;
    border-radius: 0.1333rem;
  }
}
</style>
