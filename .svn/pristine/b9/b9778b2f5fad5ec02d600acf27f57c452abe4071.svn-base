<template lang="html">
    <div class="UserQuestion">
      <my-header class="myHeader" :title="'常见问题'"></my-header>
      <div class="questionBox">
          <question-item :itemList="questionData"></question-item>
      </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import QuestionItem from '@/components/QuestionItem'

export default {
  // 不要忘记了 name 属性
  name: 'UserQuestion',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      questionData: [
        { title: '为什么支付不成功？', answer: '信用卡线上收款必须是绑定本人信用卡和本人储蓄卡同名进出才能完整实现支付。' },
        { title: '绑定的是本人信用卡和储蓄卡为何支付失败？', answer: '信用卡绑定进行支付中，如果显示支付失败，请检查属于信用卡的要素是否按要求输入。' },
        { title: '支付成功后钱多久到账?', answer: '一般支付成功会在10分钟内实时到账，如有延迟，有可能受网络和系统繁忙影响，属于正常情况，请勿惊慌，请耐心等待。' },
        { title: '支付后钱迟迟没有到账?', answer: '如果支付页面显示支付成功，却一直迟迟不到账，请检查本人信用卡支付提醒是否扣款，储蓄卡是否到账未提醒。确认支付扣款成功未及时到账' },
        { title: '支付有限额吗?', answer: '有些特殊银行卡会因为支付公司和发卡行的特殊规定不能完成大额交易，请详见通道选择旁边的限额表。请按照额度进行正确支付。' },

      ],
    }
  },
  computed: {
  },
  // 使用其它组件
  components: { MyHeader, QuestionItem },
  // 方法
  methods: {
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('进入常见问题')

    // Vue.set(this, 'params', this.$route.params) // 设置相关data 并更新dom
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
  },

}
</script>

<style scoped lang="scss">
.UserQuestion {
  /* ... */
  background: $cf0;
}
.questionBox {
}
</style>
