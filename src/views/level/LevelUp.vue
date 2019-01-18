<template lang="html">
    <div class="LevelUp">
        <!-- ... -->
        <img src="/static/img/levelup.jpg" alt="">
        <div class="btnBox">
          <van-button :class="'levelButton'" @click="levelUp">我要升级</van-button>
        </div>
         <div class="text-box">
          <my-text></my-text>
        </div>

        <van-popup v-model="show" :class="['myPopup myPopup-up']">
          <van-picker show-toolbar
            :title="'我要升级'"
            :columns="columns"
            @change="onChange"
            @cancel="onCancel"
            @confirm="onConfirm" />
        </van-popup> 
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import MyText from "@/components/MyText"
import { Field, CellGroup, Icon, Toast, Popup, Picker } from 'vant';
Vue.use(Field).use(CellGroup).use(Icon).use(Toast).use(Popup).use(Picker)
export default {
  // 不要忘记了 name 属性
  name: 'LevelUp',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      columns: [
        { id: 1, text: '渠道经理' }, { id: 2, text: '团队经理' }, { id: 3, text: '门店经理' }],
      show: false,
    }
  },
  computed: {},
  // 使用其它组件
  components: { MyText },
  // 方法
  watch: {},
  methods: {
    onChange (picker, values) {

    },
    onCancel () {
      this.show = false;
    },
    onConfirm (value, index) {
      this.show = false;
      console.log(value.id)
    },
    levelUp () {
      this.show = true;
      console.log('sdf')
    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.LevelUp {
  /* ... */
  img {
    width: 100%;
  }
  text-align: center;
  .btnBox {
    padding-bottom: 0.4667rem;
  }
  .levelButton {
    background: $c09;
    color: $white;
    height: auto;
    line-height: 0.8rem;
    border-radius: 0.4rem;
    width: 4.9333rem;
  }
  .text-box {
    padding: 0.2667rem 0;
    background: $cf0;
  }
}
</style>
