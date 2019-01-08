<template lang="html">
    <div class="MyTabs">
        <!-- ... -->
      <van-tabs v-model="active" sticky animated @click="clickTab">
        <van-tab v-for="(item, index) in tabListClone" :key="index" :title="item.name" >
          <div v-if="item.type == 'list'">
            <!-- 有列表显示列表 -->
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                    <van-list
                      v-model="loading"
                      :finished="finished"
                      finished-text="没有更多了"
                      @load="onLoad">
                        <!-- <van-cell
                          v-for="(items,index) in item.content"
                          :key="index"
                          :title="items.title+index"
                        /> -->
                        <!-- 重写新闻列表 -->
                        <news-item :itemList="item.content" :key="index"></news-item>
                    </van-list>
                </van-pull-refresh>
          </div>
          <div  v-else>
              {{item.content}}
          </div>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import { Tab, Tabs, List, Cell, Toast } from 'vant'
import store from '@/store/index'
import NewsItem from '@/components/NewsItem'
Vue.use(Tab).use(Tabs).use(List).use(Cell).use(Toast)
export default {
  // 不要忘记了 name 属性
  name: 'MyTabs',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [
    'tabList'
  ],
  // 变量
  data () {
    return {
      active: 0,
      loading: false,
      finished: false,
      isLoading: false,
      count: 0
    }
  },
  computed: {
    tabListClone: {
      get: function () {
        return this.$store.state.newsList
      },
      set: function () {

      }
    }
  },
  // 使用其它组件
  components: { NewsItem },
  // 方法
  watch: {
    // tabList: function (val) {
    //   this.tabListClone = val
    // }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
        this.count++
        if (this.tabList[this.active].content.length >= 40) { // 父元素的数组大于40 就停止
          this.$toast('已经给不了最多了~')
        } else {
          this.$toast('刷新成功')
          this.addNews()
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
        if (_this.tabList[_this.active].content.length >= 40) { // 父元素的数组大于40 就停止
          _this.finished = true
        } else {
          _this.addNews()
        }
      }, 1000)
    },
    clickTab: function (index, title) {
      if (this.loding) {
        return
      }
      this.initialization()
      this.onLoad()
    },
    initialization: function () {
      this.loading = false
      this.finished = false
    },
    addNews: function () {
      // 父组件的方法必须是用 @child 方式来绑定子元素的方法的
      this.$emit('child', this.active)
    }

  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () {

  },
  store,
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.MyTabs {
  // height: 100%;
  // position: relative;
}
.MyTabs /deep/ .van-tab__pane {
  /* ... */
  > div {
    // overflow-y: scroll;
    // overflow-x: hidden;
  }
}
.van-tabs {
  // padding-bottom: 50px;
  // box-sizing: border-box;
  // height: 100%;
}
.van-tabs__content {
  // height: 100%;
}
</style>
