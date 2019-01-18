import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/views/index'
import CardList from '@/views/card/CardList'
import CardItemDetail from '@/views/card/CardItemDetail'
import BankInfo from '@/views/BankInfo'
import NewsList from '@/views/news/NewsList'
import CreditList from '@/views/credit/CreditList'
import CreditApply from '@/views/credit/CreditApply'

import UserAgree from '@/views/user/UserAgree'
import UserCenter from '@/views/user/UserCenter'
import UserIndex from '@/views/user/UserIndex'
import UserRealName from '@/views/user/UserRealName'
import UserAccount from '@/views/user/UserAccount'
import UserPassword from '@/views/user/UserPassword'
import UserQuestion from '@/views/user/UserQuestion'
import UserMoney from '@/views/user/UserMoney'
import UserMyCard from '@/views/user/UserMyCard'
import UserMyTeam from '@/views/user/UserMyTeam'

import CreditItemDetail from '@/views/credit/CreditItemDetail'
import LevelUp from '@/views/level/LevelUp'
import MoneyAll from '@/views/money/MoneyAll'
import MoneyBiao from '@/views/money/MoneyBiao'
import MoneyDetails from '@/views/money/MoneyDetails'

import CollectMoneyDetail from '@/views/money/CollectMoneyDetail'
import UserReal from '@/views/user/UserReal'
import UserCardList from '@/views/user/UserCardList'
import UserAddCard from '@/views/user/UserAddCard'

Vue.use(Router)

const router = new Router({
  // mode: 'history', // 去除# 默认是hash
  routes: [{
      path: '/index', // 后面带的参数规范
      name: 'index', // 默认页面 helloword
      component: index,
      meta: {
        title: '首页',
      } // 需要缓存
    },
    {
      path: '/CardList',
      name: 'CardList', // 默认页面 helloword
      component: CardList,
      meta: {
        title: '信用卡',
      }, // 不需要缓存
      children: []
    },
    {
      path: '/CreditList',
      name: 'CreditList', // 默认页面 helloword
      component: CreditList,
      meta: {
        title: '贷款',
         
      }, // 不需要缓存
      children: []
    },
    {
      path: '/CreditApply/:id/:title',
      name: 'CreditApply', // 默认页面 helloword
      component:CreditApply,
      meta: {
        title: '贷款申请',
        keepAlive: true, // 不需要缓存
      }, // 不需要缓存
      children: []
    },
    {
      path: '/LevelUp',
      name: 'LevelUp', // 默认页面 helloword
      component: LevelUp,
      meta: {
        title: '我要升级',
      }, // 不需要缓存
    },
    {
      path: '/MoneyAll',
      name: 'MoneyAll', // 默认页面 helloword
      component: MoneyAll,
      meta: {
        title: '我要分润',
      }, // 不需要缓存
    },
    {
      path: '/MoneyDetails',
      name: 'MoneyDetails', // 默认页面 helloword
      component: MoneyDetails,
      meta: {
        title: '收益明细',
        keepAlive:true,
      }, // 不需要缓存
    },
    
    {
      path: '/MoneyBiao',
      name: 'MoneyBiao', // 默认页面 helloword
      component: MoneyBiao,
      meta: {
        title: '产品分润表',
      }, // 不需要缓存
    },
    
    {
      path: '/CollectMoneyDetail',
      name: 'CollectMoneyDetail', // 默认页面 helloword
      component: CollectMoneyDetail,
      meta: {
        title: '我要分润',
      }, // 不需要缓存
    },
    {
      path: '/BankInfo',
      name: 'BankInfo', // 默认页面 helloword
      component: BankInfo,
      meta: {
        title: '详情页',
      }, // 不需要缓存
      beforeEnter: (to, from, next) => {
        // 路由守卫进入这个页面之前做的事情，修改路由的title值
        // console.log(to.params.title)
        document.title = to.params.title
        // to.params = from.params
        next()
      }
    },
    {
      path: '/NewsList',
      name: 'NewsList', // 默认页面 helloword
      component: NewsList,
      meta: {
        title: '资讯',
      }, // 不需要缓存
      children: []
    },
    {
      path: '/UserCenter',
      name: 'UserCenter', // 默认页面 helloword
      component: UserCenter,
      meta: {
        title: '用户中心',
      }, // 不需要缓存
    },
     {
      path: '/UserMoney',
      name: 'UserMoney', // 默认页面 helloword
      component: UserMoney,
      meta: {
        title: '我的收入',
      },
    },
    
     {
      path: '/UserMyTeam',
      name: 'UserMyTeam', // 默认页面 helloword
      component: UserMyTeam,
      meta: {
        title: '我的团队',
      }, 
    },
    {
      path: '/UserMyCard',
      name: 'UserMyCard', // 默认页面 helloword
      component: UserMyCard,
      meta: {
        title: '我的结算卡',
        keepAlive:true,
      }, 
    },
    
    {
      path: '/UserAgree',
      name: 'UserAgree', // 默认页面 helloword
      component: UserAgree,
      meta: {
        title: '用户协议',
      }, // 不需要缓存
    },
    {
      path: '/UserCardList',
      name: 'UserCardList', // 默认页面 helloword
      component: UserCardList,
      meta: {
        title: '信用卡列表',
      }, // 不需要缓存
    },
    {
      path: '/UserAddCard',
      name: 'UserAddCard', // 默认页面 helloword
      component: UserAddCard,
      meta: {
        title: '新增信用卡',
      }, // 不需要缓存
    },
    
    {
      path: '/UserRealName',
      name: 'UserRealName', // 默认页面 helloword
      component: UserRealName,
      meta: {
        title: '实名认证',
        keepAlive:true,
      }, // 不需要缓存
    },
    {
      path: '/UserReal',
      name: 'UserReal', // 默认页面 helloword
      component: UserReal,
      meta: {
        title: '实名认证',
      }, // 不需要缓存
    },

    {
      path: '/UserAccount',
      name: 'UserAccount', // 默认页面 helloword
      component: UserAccount,
      meta: {
        title: '账户信息',
      }, // 不需要缓存
    },

    {
      path: '/UserPassword',
      name: 'UserPassword', // 默认页面 helloword
      component: UserPassword,
      meta: {
        title: '密码管理',
      }, // 不需要缓存
    },
    {
      path: '/UserQuestion',
      name: 'UserQuestion', // 默认页面 helloword
      component: UserQuestion,
      meta: {
        title: '常见问题',
      }, // 不需要缓存
    },
    {
      path: '/CreditItemDetail/:id/:title',
      name: 'CreditItemDetail', // 默认页面 helloword
      component: CreditItemDetail,
      meta: {
        title: '',
      }, // 不需要缓存
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
      path: '/CardItemDetail/:id/:title',
      name: 'CardItemDetail', // 默认页面 helloword
      component: CardItemDetail,
      meta: {
        title: '',
      }, // 不需要缓存
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
    },
  ]
})
router.beforeEach((to, from, next) => {
  // beforeEach是router的钩子函数，在进入路由前执行
  console.log(to.path)
  const toDepth = to.path;
  if (toDepth.indexOf('Detail') > 0 || toDepth.indexOf('Money')>0) {
    store.commit('setDetail', true)
  } else {
    store.commit('setDetail', false)
  }
  window.scrollTo(0, 0);
  if (to.meta.title) {
    // 判断是否有标题
    document.title = to.meta.title
  }
  next() // 执行进入路由，如果不写就不会进入目标页
})
// eslint-disable-next-line eol-last
export default router
