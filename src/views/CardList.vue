<template lang="html">
  <div class="CardList">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 上拉刷新 -->
        <div class="card-item-box">
           <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
                <card-item :itemList="itemList" ></card-item>
            </van-list>
            <!-- 下拉加载 -->
          <!-- <card-item :itemList="itemList" ></card-item> -->
        </div>
    </van-pull-refresh>

  </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import CardItem from '@/components/CardItem'

import { Button, PullRefresh } from 'vant'
import store from '@/store/index'
Vue.use(Button).use(PullRefresh)
export default {
  // 不要忘记了 name 属性
  name: 'CardList',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: {
  },
  // 变量
  data () {
    return {
      msg: '默认1212',
      count: 0,
      isLoading: false,
      itemList: [
        { imgUrl: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png', title: '测试标题', id: 1 },
        { imgUrl: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png', title: '测试标题1', id: 3 }
      ],
      active: 0,
      loading: false,
      finished: false
    }
  },

  computed: {},
  // 使用其它组件
  components: { MyHeader, CardItem },
  // 方法
  methods: {
    parent: function (msg) {
      this.msg = msg
      console.log(msg)
    },
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
        if (this.itemList.length >= 40) { // 父元素的数组大于40 就停止
          this.finished = true
        } else {
          this.itemList.push({ imgUrl: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png', title: '测试标题' + this.count, id: 3 })
        }
      }, 500)
    },
    onLoad: function () {
      // 异步更新数据
      var _this = this
      setTimeout(() => {
        // 加载状态结束
        _this.loading = false
        // 数据全部加载完成
        if (_this.itemList.length >= 40) { // 父元素的数组大于40 就停止
          _this.finished = true
        } else {
          _this.itemList.push({ imgUrl: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png', title: '测试标题' + this.count, id: 3 })
        }
      }, 1000)
    }
  },
  // 生命周期函数
  beforeCreate () {
  },
  mounted () {
    console.log('cardList')
  },
  watch: {
  },
  store
}
</script>

<style scoped>
.CardList {
  /* ... */
}
.card-item-box {
  margin: 0.2667rem 0 0 0;
}
</style>
