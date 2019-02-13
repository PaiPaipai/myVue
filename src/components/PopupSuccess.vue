<template lang="html">
    <div class="PopupSuccess">
        <!-- ... -->
        <van-popup :class="'myPopups'" v-model="show" @click-overlay="clickOverlay">
            <div class="popupTop">
                <img :src="imgUrl" alt="">
            </div>
            <div class="popupBottom">
              <h2><i class="iconfont icon-feiji"></i>申请成功</h2>
              <div class="textBox">
                  {{successText}}
              </div>
              <h3 class="phone"><i class="iconfont icon-dianhua"></i>客服热线：027-87307688</h3>
              <p>(9:00 - 18:00)</p>
               <h3 class="wx"><i class="iconfont icon-weixin"></i>长按识别二维码关注</h3>
              <p>公众号：汉融邦</p>
              <img :src="codeUrl" alt="">
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
  name: 'PopupSuccess',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['showPopup', 'successText'],
  // 变量
  data () {
    return {
      imgUrl: process.env.BASE_URL + 'img/applySuccess.png',
      codeUrl: store.state.codeImg
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
.PopupSuccess {
  /* ... */

  .myPopups {
    width: 8.9333rem;
    background: none;
    height: 12rem;
    border-radius: 0.2rem;
    font-size: $fz32;
    line-height: 0.64rem;
  }
  .popupTop {
    img {
      width: 100%;
    }
  }
  .popupBottom {
    background: $white;
    height: 8.4533rem;
    padding: 0 0.44rem;
    position: relative;
    margin-top: -2px;
    i {
      margin-right: 0.2rem;
    }
    p {
      margin-bottom: 0.44rem;
      text-indent: 0.5867rem;
    }
    img {
      width: 2.3333rem;
      height: 2.3333rem;
      position: absolute;
      right: 0.5333rem;
      bottom: 0.5333rem;
    }
    h2 {
      color: $ce5;
      font-size: 0.5333rem;
      text-align: center;
      padding: 0.4rem 0;
    }
  }
  .textBox {
    text-indent: 0.8533rem;
    margin-bottom: 0.3333rem;
  }
  .phone {
    i {
      color: $c50;
    }
  }
  .wx {
    i {
      color: $c00c;
    }
  }
}
</style>
