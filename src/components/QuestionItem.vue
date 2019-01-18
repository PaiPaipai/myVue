<template lang="html">
    <div class="QuestionItem">
        <!-- ... -->
        <ul class="questionUl">
            <li v-for="(item, index) in itemList" :key="index">
              <h3><i class="iconfont icon-wentikuang"></i><span>{{index+1}}</span> {{item.title}}</h3>
              <p>{{item.answer}}</p>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'

export default {
  // 不要忘记了 name 属性
  name: 'QuestionItem',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['itemList'],
  // 变量
  data () {
    return {

    }
  },
  computed: {},
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  methods: {
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () {
    console.log('U')
  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.QuestionItem {
  /* ... */
}
.questionUl {
  li {
    background: $white;
    padding: 0.2933rem 0.3333rem;
    margin-bottom: 0.2933rem;
  }
  h3 {
    font-size: $fz32;
    color: $c1b;
    line-height: 0.8rem;
    position: relative;
    span {
      color: $white;
      position: absolute;
      left: 0;
      width: 0.6667rem;
      z-index: 2;
      text-align: center;
      font-weight: bold;
      font-family: "Impact";
    }
    i {
      font-size: 0.6667rem;
      vertical-align: middle;
      color: $cee5;
    }
  }
  p {
    font-size: 0.4rem;
    line-height: 0.8rem;
    text-indent: 0.8667rem;
  }
}
</style>
