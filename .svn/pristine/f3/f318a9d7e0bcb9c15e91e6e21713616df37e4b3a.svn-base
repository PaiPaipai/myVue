<template lang="html">
    <div class="NewsList">
      
        <!-- ... -->
          <van-pull-refresh :class="['van-pull-refresh-me']" v-model="isLoading" @refresh="onRefresh" :disabled="disabled">
              <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                error-text="请求失败，点击重新加载"
                :offset = 50
                :immediate-check=false
                @check="check"
                @load="onLoad">
                  <news-item :itemList="newsList"></news-item>
              </van-list>
          </van-pull-refresh>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import MyTabs from '@/layout/MyTabs'
import { Tab, Tabs, List, Cell, Toast } from 'vant'
import NewsItem from '@/components/NewsItem'

Vue.use(Tab).use(Tabs).use(List).use(Cell).use(Toast)

export default {
  // 不要忘记了 name 属性
  name: 'NewsList',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      active: 0,
      loading: false,
      finished: false,
      isLoading: false,
      disabled: false,
      pageNo: 1,
      pageSize: 10,
      total: 0,
      count: 0,
      newsList: []
    }
  },
  computed: {},
  // 使用其它组件
  components: { MyTabs, NewsItem },
  // 方法
  watch: {},
  methods: {
    onRefresh () {
      var that = this;
      setTimeout(() => {
        that.pageNo = 1;
        that.pageSize = 10;
        that.newsList = [];
        var params = {
          pageNo: that.pageNo,
          pageSize: that.pageSize,
        }
        that.addNews(params)
        that.finished = false
        that.loading = false
        that.isLoading = false
      }, 1000)
    },
    check: function () {
      console.log('sdf')
    },
    onLoad: function () {
      // 异步更新数据
      var that = this
      setTimeout(() => {
        // 加载状态结束

        // 数据全部加载完成
        if (that.newsList.length >= that.total) { // 父元素的数组大于40 就停止
          that.finished = true
          that.loading = false;
        } else {
          var params = {
            pageNo: that.pageNo,
            pageSize: that.pageSize,
          }
          // that.loading = false;
          that.addNews(params)

        }

      }, 1000)

    },
    addNews: function (params) {
      var that = this;
      this.getContent(params, that.getNews)
      // this.$emit("clickSearch",text);
    },
    getNews: function (datas) {
      var that = this;
      that.total = datas.totalCount
      that.pageNo++;
      var array = [];
      var resultList = datas.resultList;
      for (let index = 0; index < resultList.length; index++) {
        var element = resultList[index]
        array.push(element)
      }
      that.newsList = that.newsList.concat(array)
      this.loading = false;
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop > 10) {
        this.disabled = true;
      } else if (scrollTop < 10) {
        this.disabled = false;
      }

    },
  },
  // 生命周期函数
  beforeCreate () { },
  created () {
    var that = this;
    that.addNews({ pageNo: this.pageNo, pageSize: this.pageSize })
  },
  mounted () {
    console.log('12313')
  },
  activated () {


    window.addEventListener('scroll', this.handleScroll)
  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.NewsList {
  /* ... */
  height: 100%;
}
.van-pull-refresh-me {
  height: 100%;
}
</style>
