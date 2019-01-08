<template lang="html">
    <div class="NewsList">
        <!-- ... -->
        <my-tabs :tabList="tabList" @child="addNews"></my-tabs>

    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import MyTabs from '@/layout/MyTabs'

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
      tabList: [
        { name: '标题0', type: 'list', category: 0, content: [] },
        { name: '标题1', type: 'list', category: 1, content: [] },
        { name: '标题2', type: 'list', category: 2, content: [] },
        { name: '标题3', type: 'list', category: 3, content: [] },
        { name: '标题4', type: 'list', category: 4, content: [] },
        { name: '标题5', type: 'list', category: 5, content: [] }
      ]
    }
  },
  computed: {},
  // 使用其它组件
  components: { MyTabs },
  // 方法
  watch: {},
  methods: {
    addNews: function (category) {
      this.getNews(category)
      // this.$emit("clickSearch",text);
    },
    getNews: function (category) {
      var obj = {
        0: [{ title: '新闻标题0', id: 4 }, { title: '新闻标题0', id: 5 }, { title: '新闻标题0', id: 6 }, { title: '新闻标题0', id: 7 }],
        1: [{ title: '新闻标题1', id: 4 }, { title: '新闻标题1', id: 5 }, { title: '新闻标题1', id: 6 }, { title: '新闻标题1', id: 7 }],
        2: [{ title: '新闻标题2', id: 4 }, { title: '新闻标题2', id: 5 }, { title: '新闻标题2', id: 6 }, { title: '新闻标题2', id: 7 }],
        3: [{ title: '新闻标题3', id: 4 }, { title: '新闻标题3', id: 5 }, { title: '新闻标题3', id: 6 }, { title: '新闻标题3', id: 7 }],
        4: [{ title: '新闻标题4', id: 4 }, { title: '新闻标题4', id: 5 }, { title: '新闻标题4', id: 6 }, { title: '新闻标题4', id: 7 }],
        5: [{ title: '新闻标题5', id: 4 }, { title: '新闻标题5', id: 5 }, { title: '新闻标题5', id: 6 }, { title: '新闻标题5', id: 7 }]
      }
      var array = this.tabList
      for (let index = 0; index < array.length; index++) {
        var element = array[index]
        if (category === element.category) {
          array[index].content = element.content.concat(obj[category]) // 一个数组添加另外一个数组
          store.commit('setNewsList', array)
          // console.log(this.$store.state.newsList[category].content)
          return
        }
      }
    }
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () {
    console.log('12313')
  },
  activated () {
    store.commit('setNewsList', this.tabList)
  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.NewsList {
  /* ... */
  // height: 100%;
}
</style>
