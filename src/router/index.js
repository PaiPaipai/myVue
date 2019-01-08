import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/views/index'
import CardList from '@/views/CardList'
import CardItemDetail from '@/views/CardItemDetail'
import NewsList from '@/views/NewsList'
Vue.use(Router)

const router = new Router({
  // mode: 'history', // 去除# 默认是hash
  routes: [
    {
      path: '/index', // 后面带的参数规范
      name: 'index', // 默认页面 helloword
      component: index,
      meta: {title: '首页', keepAlive: false} // 需要缓存
    },
    {
      path: '/CardList/:userId',
      name: 'CardList', // 默认页面 helloword
      component: CardList,
      meta: {title: '列表页', keepAlive: false}, // 不需要缓存
      children: []
    },
    {
      path: '/NewsList/:userId',
      name: 'NewsList', // 默认页面 helloword
      component: NewsList,
      meta: {title: '新闻列表', keepAlive: false}, // 不需要缓存
      children: []
    },
    {
      path: '/CardItemDetail/:id/:title',
      name: 'CardItemDetail', // 默认页面 helloword
      component: CardItemDetail,
      meta: {title: '', keepAlive: false}, // 不需要缓存
      children: [],
      beforeEnter: (to, from, next) => {
        // 路由守卫进入这个页面之前做的事情，修改路由的title值
        // console.log(to.params.title)
        document.title = to.params.title
        // to.params = from.params
        next()
      }
    },
    {
      path: '/',
      redirect: '/index' // 默认页面 helloword定向到 index
    }
  ]
})
router.beforeEach((to, from, next) => {
  // beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
    // 判断是否有标题
    document.title = to.meta.title
  }
  next() // 执行进入路由，如果不写就不会进入目标页
})
// eslint-disable-next-line eol-last
export default router
