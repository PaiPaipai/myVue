<template lang="html">
  <div class="NewsItem">
    <!-- ... -->
    <ul class="cardItemUl">
      <li v-for="(item, index) in itemList" class="van-hairline--bottom clearfix " :key="index" @click="goNewsDetails(item)">
        <p><em class="text-overflow">{{item.title}}</em> <span>{{item.time||'2019-1-7 18:16:54'}}</span></p>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
export default {
  // 不要忘记了 name 属性
  name: 'NewsItem',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['itemList'],
  // 变量
  data () {
    return {
      itemListClone: this.itemList
    }
  },
  computed: {},
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  methods: {
    goNewsDetails: function (item) {
      // path: `/index/${userId}/${'456'}`
      this.$router.replace({ name: 'CardItemDetail', params: { id: item.id, title: item.title } })
    }
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () { }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.NewsItem {
  /* ... */
}

.cardItemUl {
  overflow: hidden;
  padding: 0 0.2rem 15px 0.2rem;
  li {
    width: 100%;
    padding: 0.2rem 0;
    // overflow: hidden;
  }
  span {
    position: absolute;
    top: 0.1rem;
    right: 0;
  }
  em {
    display: block;
    margin-right: 120px;
  }
  p {
    position: relative;
    padding: 0.1067rem 0.2133rem;
  }
}
</style>
