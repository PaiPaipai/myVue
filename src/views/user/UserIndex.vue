<template lang="html">
    <div class="UserCenter">
        <!-- <my-header :title="'用户中心'"></my-header> -->
        <div class="main">
          <div class="userPicBox ">
              <dl class="clearfix">
                <dt>
                   <img :src="userPic">
                </dt>
                <dd>
                  <h3>张三</h3>
                  <van-button :class="['userSetting']" plain round type="primary"><i class="iconfont icon-dengji"></i>普通用户</van-button>
                </dd>
              </dl>
              <i class="iconfont icon-jiantou"></i>
          </div>
          <div class="upgradeBox mb20">
            <ul class="upgradeUl">
              <li v-for="item in upgrade">
                <p>{{item.name}}</p>
                <i :class="['iconfont icon-dengji',item.classes]"></i>
                <span class="spanLine"></span>
              </li>
            </ul>
          </div>
          <div class="myMoneyBox mb20">
             <div>
               <h3>我的收入：</h3>
               <h4><span class="spanMoney">&yen;0.00</span>元</h4>
             </div>
             <div>
               <h3>我的团队：</h3>
               <h4><span class="spanPeople">0</span>人</h4>
             </div>
          </div>
          <div class="appBox myMoneyBox mb20">
             <div>
               <h3 class="getAppTitle">获取更多服务</h3>
               <h4>下载"汉融邦"APP</h4>
             </div>
             <div @click="goAgree">
               <h3 class="memberRead">会员必读</h3>
               <h4>用户协议须知</h4>
             </div>
          </div>
          <div class="iconBox mb20">
              <icon-item class="menuItem"
                     :iconList="menuData"></icon-item>

          </div>
          <div class="iconBox mb20">
              <icon-item class="menuItem"
                     :iconList="kefuData"></icon-item>
                     
          </div>
        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import store from "@/store/index";
import { Button } from 'vant';
import IconItem from "@/components/IconItem";

Vue.use(Button);
export default {
  // 不要忘记了 name 属性
  name: 'UserCenter',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  store,
  // 变量
  data () {
    return {
      upgrade: [
        { name: '普通用户', classes: 'pt' },
        { name: '渠道经理', classes: 'jd' },
        { name: '团队经理', classes: 'td' },
        { name: '门店经理', classes: 'md' }
      ],
      menuData: [
        { name: "实名认证", classes: "iconfont icon-shimingrenzheng" },
        { name: "信用卡管理", classes: "iconfont icon-banqiazhongxin" },
        { name: "我的结算卡", classes: "iconfont icon-wodejiesuanqia" },
        { name: "收钱", classes: " iconfont icon-shouqian" },
      ],
      kefuData: [
        { name: "密码管理", classes: "iconfont icon-mimaguanli" },
        { name: "常见问题", classes: "iconfont icon-changjianwenti1" },
        { name: "在线客服", classes: "iconfont icon-kefu1" },
      ]
    }
  },
  computed: {
    userPic: {
      get: function () {
        return store.state.userPic
      },
      set: function () {

      }
    }
  },
  // 使用其它组件
  components: { MyHeader, IconItem },
  // 方法
  methods: {
    goAgree: function () {
      this.routerTo('userAgree')
    },
    test: function () {

    }
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
    console.log('BankInfo')
  }

}
</script>

<style scoped lang="scss">
.UserCenter {
  /* ... */
  background: $cf0;
  padding-bottom: 0.2rem;
}
.userPicBox {
  padding: 0.92rem 0;
  position: relative;
  dt {
    float: left;
    border-radius: 50%;
    width: 2.6667rem;
    height: 2.6667rem;
    overflow: hidden;
    margin-right: 1.2rem;
  }
  dd {
    float: left;
  }
  img {
    width: 105%;
    height: 105%;
    margin-left: -2.5%;
    margin-top: -2.5%;
  }
  h3 {
    font-size: $fz36;
    line-height: 1.3333rem;
  }
  .icon-jiantou {
    font-size: 0.6667rem;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.3333rem;
  }
}
.userSetting {
  height: auto;
  line-height: 0.6667rem;
  color: $baseColor;
  border: 1px solid $baseColor;
  i {
    margin-right: 0.2667rem;
  }
}
.userSetting::before {
  background: none;
}
.upgradeBox {
  background: $white;
  padding: 0.4267rem 0.4rem;
  .spanLine {
    height: 2px;
    width: 105%;
    background: $cff9;
    position: absolute;
    left: 50%;
    top: 0.7067rem;
  }
}
.upgradeUl {
  display: flex;
  justify-content: space-between;
  text-align: center;
  li {
    position: relative;
    width: 100%;
  }
  li:last-child {
    span {
      width: 0;
    }
  }
  p {
    font-size: $fz28;
    display: block;
    margin-bottom: 0.1333rem;
  }
  i {
    font-size: 0.5333rem;
    background: $white;
    position: relative;
    z-index: 2;
  }

  //   { name: '普通用户', classes: 'pt' },
  // { name: '渠道经理', classes: 'jd' },
  // { name: '团队经理', classes: 'td' },
  // { name: '门店经理', classes: 'md' }
  .pt {
  }
  .jd {
    color: $ce8;
  }
  .td {
    color: $cbd;
  }
  .md {
    color: $ce5;
  }
}
.myMoneyBox {
  line-height: 0.72rem;
  font-size: $fz28;
  overflow: hidden;
  position: relative;
  > div {
    float: left;
    width: 50%;
    background: $white;
    box-sizing: border-box;
    border-radius: 0.1333rem;
    padding-left: 0.6667rem;
  }
  h3 {
  }
  h4 {
    text-indent: 0.2667rem;
    span {
      font-size: $fz36;
      margin-right: 0.1333rem;
    }
    .spanMoney {
      color: $cc3;
    }
    .spanPeople {
      color: $ce8;
    }
  }
  div:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  div:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
.appBox {
  div {
    font-size: $fz28;
    text-align: center;
    padding-left: 0;
  }
  .getAppTitle {
    color: $cff;
  }
  .memberRead {
    color: $themeColor;
  }
  h4 {
    font-size: $fz30;
  }
}

.myMoneyBox::after {
  width: 0.4rem;
  height: 100%;
  position: absolute;
  content: "";
  background: $cf0;
  left: 50%;
  top: 0;
  margin-left: -0.2rem;
}
.appBox::after {
  width: 1px;
  margin-left: 0;
  top: 0.0667rem;
}
// menuData: [
//         { name: "实名认证", classes: "iconfont icon-shimingrenzheng" },
//         { name: "信用卡管理", classes: "iconfont icon-banqiazhongxin" },
//         { name: "我的结算卡", classes: "iconfont icon-wodejiesuanqia" },
//         { name: "收钱", classes: " iconfont icon-shouqian" },
//       ],
//       kefuData: [
//         { name: "密码管理", classes: "iconfont icon-mimaguanli" },
//         { name: "常见问题", classes: "iconfont icon-changjianwenti1" },
//         { name: "在线客服", classes: "iconfont icon-kefu1" },
//       ]
.iconBox {
  background: $white;
  border-radius: 0.1333rem;
  padding: 0.2667rem 0;
  /deep/ .icon-shimingrenzheng {
    font-size: 0.8533rem;
    line-height: 1.0667rem;
    color: $c12;
  }
  /deep/ .icon-banqiazhongxin {
    color: $cf7;
  }
  /deep/ .icon-wodejiesuanqia {
    color: $c8e;
  }
  /deep/ .icon-shouqian {
    color: $ced;
  }
  /deep/ .icon-mimaguanli {
    color: $cf5;
  }
  /deep/ .icon-changjianwenti1 {
    color: $cd8;
  }
  /deep/ .icon-kefu1 {
    color: $c31;
  }
}
</style>
