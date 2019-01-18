<template lang="html">
    <div class="PopupReal">
        <!-- ... -->
        <van-popup :class="'myPopups'" v-model="show" @click-overlay="clickOverlay">
            <div class="popupTop">
               <div>
                  <i class="iconfont icon-shimingrenzheng"></i>
               </div>
            </div>
            <div class="popupBottom">
                <p>{{menuText}}</p>
                <div class="btn_box">
                  <van-button round type="danger" @click="clickButton">立即实名申请</van-button>
                </div>
            </div>
        </van-popup>
        
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import { Popup, Button } from 'vant'
Vue.use(Popup).use(Button);
export default {
  // 不要忘记了 name 属性
  name: 'PopupReal',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['showPopup', 'menuText'],
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
    console.log('popup')
  },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.PopupReal {
  /* ... */

  /deep/ .myPopups {
    width: 7.4667rem;
    background: none;
    img {
      width: 100%;
    }
  }
  .popupTop {
    font-size: 0;
    height: 2.6667rem;
    background: linear-gradient(left, #4f92ed, #54ccf4);
    border-top-right-radius: 0.2rem;
    border-top-left-radius: 0.2rem;
    padding-top: 0.2rem;
    div {
      width: 2.4rem;
      height: 2.4rem;
      background: $white;
      border-radius: 50%;
      margin: 0 auto;
      text-align: center;
      line-height: 2.4rem;
    }
    i {
      font-size: 1.1333rem;
      color: $c12;
    }
  }
  .popupBottom {
    padding-top: 0.5333rem;
    margin-top: -2px;
    background: $white;
    font-size: $fz30;
    line-height: 0.64rem;
    border-bottom-right-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;

    p {
      text-indent: 0.8rem;
      padding: 0 0.2rem;
    }
    h3 {
      text-align: center;
      line-height: 1.3067rem;
      i {
        font-size: 0.7333rem;
        vertical-align: middle;
        line-height: 0;
        color: $e75;
      }
    }
    .btn_box {
      text-align: center;
      padding: 0.4rem 0;
    }
    button {
      margin: 0 auto;
      line-height: 0.9333rem;
      height: 0.9333rem;
      width: 4.8rem;
      font-size: $fz36;
      // border-radius: 0.1067rem;
    }
  }
}
</style>
