<template lang="html">
    <div class="PopupImg">
        <!-- ... -->
        <van-popup :class="'myPopups'" v-model="show" @click-overlay="clickOverlay">
            <img :src="imgUrl" alt="">
        </van-popup>
        
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import { Popup } from 'vant'
Vue.use(Popup)
export default {
  // 不要忘记了 name 属性
  name: 'PopupImg',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['showPopup', 'imgUrl'],
  // 变量
  data () {
    return {

    }
  },
  computed: {
    show: {
      get: function () {
        return this.showPopup
      },
      set: function () {

      }
    }
  },
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  methods: {
    clickButton: function () {
      this.$emit("clickButton");
    },
    clickOverlay: function () {
      this.show = false
      this.$emit("closeItem");
    }

  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () {
    console.log('popupImg')
  },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.PopupImg {
  /* ... */

  /deep/ .myPopups {
    width: 9.3333rem;
    background: none;
    img {
      width: 100%;
    }
  }
}
</style>
