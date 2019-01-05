<template>
  <div class="MyIndex">
    <swipe :imgList="imgList"></swipe>
    <div class="test"></div>
  </div>
</template>

<script>
// import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import swipe from '@/components/swipe'
import store from '@/store/index'
export default {
  name: 'MyIndex',
  data () {
    return {
      imgList: [
        { imgUrl: 'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg' },
        { imgUrl: 'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg' },
        { imgUrl: 'https://img.yzcdn.cn/public_files/2017/09/05/138c32d4384b5e4a78dc4e1ba58e6a80.jpg' },
        { imgUrl: 'https://img.yzcdn.cn/public_files/2017/09/05/100a7845756a70af2df513bdd1307d0e.jpg' }

      ]
    }
  },
  components: { MyHeader, swipe },

  // 生命周期函数
  created () {
  },
  beforeCreate () {

  },
  mounted () {
    // debugger
    console.log(store.state.test)
    console.log('index')
  },
  store
}
</script>

<style scope>
body {
  min-height: 80vh;
  padding-bottom: 50px;
}
#app {
  height: 100%;
}
</style>
