<template lang="html">
    <div class="HandleItem">
        <!-- ... -->
        <div :class="['nav-item']" v-for="(item, index) in handleList" :key="index">
          <div :class="['flexBox',item.classes]" @click="handle(item)">
            <div class="h3">{{item.name}}</div>
            <p>{{item.tips}}</p>
            <i :class="['flexi',item.iclass]"></i>
          </div>

        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from "vue";
import store from "@/store/index";

export default {
  // 不要忘记了 name 属性
  name: "HandleItem",
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ["handleList"],
  // 变量
  data () {
    return {};
  },
  computed: {},
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  methods: {
    handle (item) {
      this.$emit("handle", item);
    },
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () { } // 每次进路由会调用这个方法
};
</script>

<style  scoped lang="scss">
.HandleItem {
  /* ... */
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2667rem;
}
.nav-item {
  width: 100%;
  flex: 50%;
  .flexBox {
    margin-right: 0.12rem;
    border-radius: $brd;
    padding: 0.3733rem 0;
    text-align: center;
    position: relative;
  }
  .h3 {
    font-size: 0.5067rem;
    // line-height: 0.6rem;
    // font-weight: 600;
    position: relative;
    z-index: 2;
  }
  p {
    font-size: $fz24;
    color: $c666;
    line-height: 0.48rem;
    position: relative;
    z-index: 2;
    min-height: 0.48rem;
  }
  .flexi {
    position: absolute;
    right: 0.1333rem;
    bottom: 0.1333rem;
    font-size: 0.9333rem;
    color: $white;
  }
  span {
    line-height: 1rem;
  }
}
.nav-item:last-child {
  .flexBox {
    margin-right: 0;
    margin-left: 0.1067rem;
  }
}
</style>
