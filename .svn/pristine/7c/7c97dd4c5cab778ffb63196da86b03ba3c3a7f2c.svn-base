<template lang="html">
  <div class="BankItem">
    <!-- ... -->
    <ul class="BankItemUl">
      <li v-for="(item, index) in itemList" :key="index" @click="goCardDetails(item)">
        <div class="bankBox">
          <img :src="item.imgUrl" alt="">
          <em class="spanBox"><span v-for="(items,index) in item.tips" :key="index">{{items}}</span></em>
          <h3>{{item.name}}</h3>
          <p>{{item.special}}</p>
          <h4>已申请：{{item.total}}</h4>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from "@/store/index";
import { Dialog, Toast } from 'vant';
Vue.use(Dialog).use(Toast)
export default {
  // 不要忘记了 name 属性
  name: 'BankItem',
  // 组合其它组件
  extends: {},
  store,
  // 组件属性、变量
  props: ['itemList'],
  // 变量
  data () {
    return {
      itemListClone: this.itemList
    }
  },
  computed: {
    userData: {
      get: function () {
        return store.state.userInfo || store.state.userData
      },
      set: function () { },

    },
  },
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  methods: {
    goCardDetails: function (item) {
      // path: `/index/${userId}/${'456'}`
      // this.routerTo(item.path, { id: item.id, title: item.name })
      this.setLocalStorage('bankItem', JSON.stringify(item))
      this.routerTo('UserReal')
      // if (this.userData.certification == 1) {
      //   Toast('已实名')
      // } else {
      //   Dialog.confirm({
      //     title: '提示',
      //     message: '您还未填写资料，请先填写资料！',
      //     confirmButtonText: '去填写',
      //   }).then(() => {
      //     // on confirm
      //     this.routerTo('UserReal')
      //   }).catch(() => {
      //     // on cancel
      //   });
      // }

    }
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {

  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.BankItem {
  /* ... */
}

.BankItemUl {
  overflow: hidden;
  li {
    float: left;
    width: 33.33%;
    text-align: center;
  }
  img {
    width: 3.6667rem;
    margin-bottom: 0.1867rem;
  }
  h3 {
    font-size: 0.4rem;
    color: $c101;
    line-height: 0.8133rem;
  }
  p {
    font-size: 0.2667rem;
    line-height: 0.5867rem;
    height: 1.1733rem;
    @include text-ovh(2);
  }
  em.spanBox {
    position: relative;
    display: block;
    span {
      line-height: 0.48rem;
      background: $e75;
      padding: 0 0.1333rem;
      display: inline-block;
      height: 0.48rem;
      font-size: 0.24rem;
      margin-right: 0.0667rem;
      color: $white;
      border-radius: 0.08rem;
    }
  }
  h4 {
    font-size: 0.3467rem;
    line-height: 0.5067rem;
  }
  .bankBox {
    margin: 0 0.1333rem;
    margin-bottom: 0.2667rem;
    border: 1px solid $cbbb;
    border-radius: 0.1067rem;
    padding: 0.1333rem 0;
    img {
      width: 1.0667rem;
      height: 1.0667rem;
    }
  }
}
</style>
