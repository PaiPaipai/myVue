<template lang="html">
    <div class="Popup">
        <!-- ... -->
        <van-popup :class="'myPopups'" v-model="show" @click-overlay="clickOverlay">
            <div class="popupTop">
              <img :src="imgUrl" alt="">
            </div>
            <div class="popupBottom">
                <p>{{menuText}}</p>
                <h3><i class="iconfont icon-zhishi"></i>查看报告示例</h3>
                <div class="btn_box">
                  <van-button type="danger" @click="clickButton">查询</van-button>
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
  name: 'Popup',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['showPopup', 'menuText'],
  // 变量
  data () {
    return {
      imgUrl: process.env.BASE_URL + 'img/popup.png'
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
.Popup {
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
      line-height: 0.8rem;
      height: 0.8rem;
      width: 4.8rem;
      border-radius: 0.1067rem;
    }
  }
}
</style>
