import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/views/index'
import CardList from '@/views/card/CardList'
import CardItemDetail from '@/views/card/CardItemDetail'
import BankInfo from '@/views/BankInfo'
import NewsList from '@/views/news/NewsList'
import NewsDetails from '@/views/news/NewsDetails'


import CreditList from '@/views/credit/CreditList'
import CreditApply from '@/views/credit/CreditApply'

import UserAgree from '@/views/user/UserAgree'
import UserCenter from '@/views/user/UserCenter'

import UserRealName from '@/views/user/UserRealName'
import UserAccount from '@/views/user/UserAccount'
import UserPassword from '@/views/user/UserPassword'
import UserPassChange from '@/views/user/UserPassChange'
import UserPassForget from '@/views/user/UserPassForget'

import UserQuestion from '@/views/user/UserQuestion'
import UserMoney from '@/views/user/UserMoney'
import UserMyCard from '@/views/user/UserMyCard'
import UserMyTeam from '@/views/user/UserMyTeam'

import CreditItemDetail from '@/views/credit/CreditItemDetail'
import LevelUp from '@/views/level/LevelUp'
import MoneyAll from '@/views/money/MoneyAll'
import MoneyBiao from '@/views/money/MoneyBiao'
import MoneyDetails from '@/views/money/MoneyDetails'
import RechargeDetails from '@/views/money/RechargeDetails'


import CollectMoneyDetail from '@/views/money/CollectMoneyDetail'
import UserReal from '@/views/user/UserReal'
import UserCardList from '@/views/user/UserCardList'
import UserAddCard from '@/views/user/UserAddCard'
import UserMoneyDetail from '@/views/user/UserMoneyDetail'

import houseApply from '@/views/bigdata/house/houseApply'
import houseData from '@/views/bigdata/house/houseData'

import Mall from '@/views/mall/Mall'


Vue.use(Router)

const router = new Router({
  // mode: 'history', // 去除# 默认是hash
  routes: [{
      path: '/index', // 后面带的参数规范
      name: 'index',
      component: index,
      meta: {
        title: '首页',
      } // 需要缓存
    },
    {
      path: '/Mall', // 后面带的参数规范
      name: 'Mall',
      component: Mall,
      meta: {
        title: '商城',
      } // 需要缓存
    },

    {
      path: '/houseApply', // 后面带的参数规范
      name: 'houseApply', // 
      component: houseApply,
      meta: {
        title: '房产评估',
      } // 需要缓存
    },
    {
      path: '/houseData', // 
      name: 'houseData', // 
      component: houseData,
      meta: {
        title: '房产评估',
      } // 需要缓存
    },

    {
      path: '/CardList',
      name: 'CardList',
      component: CardList,
      meta: {
        title: '办信用卡',
      }, // 不需要缓存
      children: []
    },
    {
      path: '/CreditList',
      name: 'CreditList',
      component: CreditList,
      meta: {
        title: '贷款申请',

      }, // 不需要缓存
      children: []
    },
    {
      path: '/CreditApply/:id/:title',
      name: 'CreditApply',
      component: CreditApply,
      meta: {
        title: '',
        keepAlive: true, // 不需要缓存
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
      path: '/LevelUp',
      name: 'LevelUp',
      component: LevelUp,
      meta: {
        title: '我要升级',
      }, // 不需要缓存
    },
    {
      path: '/MoneyAll',
      name: 'MoneyAll',
      component: MoneyAll,
      meta: {
        title: '我的分润',
      }, // 不需要缓存
    },
    {
      path: '/MoneyDetails',
      name: 'MoneyDetails',
      component: MoneyDetails,
      meta: {
        title: '收益明细',
        keepAlive: true,
      }, // 不需要缓存
    },

    {
      path: '/MoneyBiao',
      name: 'MoneyBiao',
      component: MoneyBiao,
      meta: {
        title: '产品分润表',
      }, // 不需要缓存
    },
    {
      path: '/CollectMoneyDetail',
      name: 'CollectMoneyDetail',
      component: CollectMoneyDetail,
      meta: {
        title: '我要收款',
        keepAlive: true,
      }, // 不需要缓存
    },
    {
      path: '/UserMoneyDetail',
      name: 'UserMoneyDetail',
      component: UserMoneyDetail,
      meta: {
        title: '充值明细',
      }, // 不需要缓存
    },
    {
      path: '/RechargeDetails',
      name: 'RechargeDetails',
      component: RechargeDetails,
      meta: {
        title: '充值',
        keepAlive: true,
      }, // 不需要缓存
    },
    {
      path: '/BankInfo',
      name: 'BankInfo',
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
      name: 'NewsList',
      component: NewsList,
      meta: {
        title: '资讯',
      }, // 不需要缓存
      children: []
    },
    {
      path: '/NewsDetails',
      name: 'NewsDetails',
      component: NewsDetails,
      meta: {
        title: '资讯详情',
      }, // 不需要缓存
      children: []
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: UserCenter,
      meta: {
        title: '用户中心',
      }, // 不需要缓存
    },
    {
      path: '/UserMoney',
      name: 'UserMoney',
      component: UserMoney,
      meta: {
        title: '我的收入',
      },
    },

    {
      path: '/UserMyTeam',
      name: 'UserMyTeam',
      component: UserMyTeam,
      meta: {
        title: '我的团队',
        keepAlive: true,
      },
    },
    {
      path: '/UserMyCard',
      name: 'UserMyCard',
      component: UserMyCard,
      meta: {
        title: '我的结算卡',
        keepAlive: true,
      },
    },

    {
      path: '/UserAgree',
      name: 'UserAgree',
      component: UserAgree,
      meta: {
        title: '用户协议',
      }, // 不需要缓存
    },
    {
      path: '/UserCardList',
      name: 'UserCardList',
      component: UserCardList,
      meta: {
        title: '信用卡列表',
      }, // 不需要缓存
    },
    {
      path: '/UserAddCard',
      name: 'UserAddCard',
      component: UserAddCard,
      meta: {
        title: '新增信用卡',
        keepAlive: true, // 不需要缓存
      }, // 不需要缓存
    },

    {
      path: '/UserRealName',
      name: 'UserRealName',
      component: UserRealName,
      meta: {
        title: '实名认证',
        keepAlive: true,
      }, // 不需要缓存
    },
    {
      path: '/UserReal',
      name: 'UserReal',
      component: UserReal,
      meta: {
        title: '申请人信息',
        // keepAlive: true,
      }, // 不需要缓存
    },

    {
      path: '/UserAccount',
      name: 'UserAccount',
      component: UserAccount,
      meta: {
        title: '账户信息',
      }, // 不需要缓存
    },

    {
      path: '/UserPassword',
      name: 'UserPassword',
      component: UserPassword,
      meta: {
        title: '密码管理',
      }, // 不需要缓存
    },
    {
      path: '/UserPassChange',
      name: 'UserPassChange',
      component: UserPassChange,
      meta: {
        title: '修改密码',
        keepAlive: true,
      }, // 不需要缓存
    },
    {
      path: '/UserPassForget',
      name: 'UserPassForget',
      component: UserPassForget,
      meta: {
        title: '修改密码',
        keepAlive: true,
      }, // 不需要缓存
    },


    {
      path: '/UserQuestion',
      name: 'UserQuestion',
      component: UserQuestion,
      meta: {
        title: '常见问题',
      }, // 不需要缓存
    },
    {
      path: '/CreditItemDetail/:id/:title',
      name: 'CreditItemDetail',
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
      name: 'CardItemDetail',
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
      redirect: '/index'
    },
  ]
})
console.log('router')

// eslint-disable-next-line eol-last
export default router
