<template>
  <div class="MyIndex">
    <div class="header">
      <swipe :imgList="imgList"
             :swipeClass="'topSwiper'"></swipe>
    </div>
    <div class="main">
      <div class="notice">
        <span><i class="iconfont icon-laba"></i>公告:</span><span></span>
        <van-notice-bar :text="text"
                        left-icon
                        :speed="25" />
      </div>
      <hr-item :hritem="{title:'金融服务'}"></hr-item>
      <div class="centerNav bd-radius15">
        <icon-item :iconList="navData[0]"
                   @clickTop="clickTop"></icon-item>
        <icon-item :iconList="navData[1]"
                   @clickTop="clickTop"></icon-item>
      </div>
      <div class="centerHandle ">
        <!-- <handle-item :handleList="handleData"></handle-item> -->
        <swipe :imgList="imgList"
               :swipeClass="'centerSwiper'"></swipe>
        <hr-item :hritem="{title:'资金服务'}"></hr-item>
        <handle-item :handleList="handleData[0]"
                     @handle="handle"></handle-item>
        <handle-item :handleList="handleData[1]"
                     @handle="handle"></handle-item>
      </div>
      <div class="menuList">
        <hr-item :hritem="{title:'大数据信用查询'}"></hr-item>
        <div class="menuWai">
          <icon-item class="menuItem"
                     @clickItem="clickItem"
                     :iconList="menuData"></icon-item>
        </div>
      </div>
      <div class="checkMyhistory"><span @click="showHistory"
              class="text-underline">查看我的历史查询</span></div>
    </div>
    <div class="text-box">
      <my-text></my-text>
    </div>
    <popup :showPopup="showPopup"
           :menuText="menuText"
           @clickButton="clickButton"
           @clickShili="clickShili"
           @closeItem="closeItem">
    </popup>
    <popup-history :searchData="searchData"
                   @clickSearch="clickSearch"
                   @clickFen="clickFen">
    </popup-history>

    <popup-Login @closeItem="closeItem"
                 @confirm="confirm"
                 :showLogin="showLogin">
    </popup-Login>

  </div>
</template>

<script>
import Vue from "vue";
import MyHeader from "@/layout/MyHeader";
import swipe from "@/components/swipe";
import IconItem from "@/components/IconItem";
import HandleItem from "@/components/HandleItem";
import HrItem from "@/components/HrItem";
import MyText from "@/components/MyText"
import Popup from "@/components/Popup"
import store from "@/store/index";
import PopupHistory from '@/components/PopupHistory'
import PopupLogin from '@/components/PopupLogin'
import { NoticeBar, Toast } from "vant";

Vue.use(NoticeBar).use(Toast);
export default {
  name: "MyIndex",
  data () {
    return {
      text: "",
      imgList: [
        { imgUrl: process.env.BASE_URL + "img/1.jpg" },
        { imgUrl: process.env.BASE_URL + "img/2.jpg" },
        { imgUrl: process.env.BASE_URL + "img/3.jpg" }
      ],
      navData: [
        [{ name: "办信用卡", classes: "iconfont icon-xinyongqia", path: 'CardList' },
        { name: "贷款申请", classes: "iconfont icon-daikuan", path: 'CreditList' },
        { name: "保险", classes: "iconfont icon-baoxian1" },
        { name: "理财", classes: "iconfont icon-licai" }],
        [{ name: "我的分润", classes: "iconfont icon-wodefenrun", path: 'MoneyAll' },
        { name: "我要升级", classes: "iconfont icon-shengji1", path: 'LevelUp' },
        { name: "区域代理", classes: "iconfont icon-quyudaili" },
        { name: "用户中心", classes: "iconfont icon-yonghuzhongxindianjipx_", path: 'UserCenter' }]
      ],
      handleData: [[
        { name: "过桥垫资", tips: "(1.5‰/天)", classes: "goGjj", iclass: 'iconfont icon-dianzi ', path: '' },
        { name: "买卖赎楼", tips: "(赎楼)", classes: "goSb", iclass: ' iconfont icon-maimaishulou', path: '' },
      ], [
        { name: "大额存款/短借", tips: "(银行存款/工程验资/企业摆账)", classes: "goPhone", iclass: " iconfont icon-daecunkuan", path: '' },
        { name: "承兑汇票", tips: "(汇票)", classes: "goCard", iclass: " icon-huipiao", path: '' },
      ]],
      menuData: [
        { name: "房产评估", classes: "iconfont icon-fangchanpinggu", text: '包含单价、楼栋均价、楼盘均价、可贷款金额等信息', paths: 'houseApply', shiliPath: 'houseData' },
        { name: "大数据信用", classes: "iconfont icon-dashujuxinyong", text: '包含信用评估报告、黑灰名单、司法记录、被查询记录等信息', paths: 'dashuju' },
        { name: "个人司法", classes: "justicePg", text: '包含开庭记录、案件流程、裁判文书、被执行、曝光台等信息', paths: 'dashuju' },
        { name: "个人工商", classes: "businessPg", text: '包含董监高、法人信息、被执行人、行政处罚等信息', paths: 'dashuju' },
        { name: "企业信用", classes: " creditPg", text: '包含企业风险、法人状况、企业投资状况等信息', paths: 'dashuju' },
        // { name: "车产评估", classes: " carPg" }
      ],
      menuText: '',
      menuSelect: null,
      hrData: ['大数据查询'],
      showPopup: false,
      showLogin: false,
      searchData: {
        placeholder: '输入姓名、手机号或企业名称',
        model: '',
        khh: '',
        classes: 'fenUnActive',
        showHistory: false,
      },
    };
  },
  computed: {
  },
  components: { MyHeader, swipe, IconItem, HandleItem, HrItem, MyText, Popup, PopupHistory, PopupLogin },
  methods: {
    handle (item) {
      if (item.path) {
        this.routerTo(item.path)
      } else {
        Toast('敬请期待!')
      }
    },
    showHistory () {
      this.searchData.classes = 'fenActive';
    },
    clickFh () {
      this.searchData.classes = 'fenActive';
    },
    clickFen (item) {
      this.searchData.classes = 'fenUnActive';
      if (item) {
        console.log(item)
      }

    },
    clickSearch (value) {
      console.log(value)
    },
    clickButton: function () {
      this.showPopup = false;
      this.routerTo(this.menuSelect.paths)
    },
    clickShili: function () {
      this.showPopup = false;
      this.routerTo(this.menuSelect.shiliPath)
    },
    clickTop () {
      var that = this;
      this.userData = JSON.parse(this.getLocalStorage('userInfo'))
      if (store.state.active == 0 && !this.userData.mobile) {
        this.showLogin = true;
        return
      }
    },
    clickItem: function (item) {
      var that = this;
      this.userData = JSON.parse(this.getLocalStorage('userInfo'))
      if (store.state.active == 0 && !this.userData.mobile) {
        this.showLogin = true;
        return
      }
      if (item.text) {
        Toast('敬请期待!')
        return
      }
      this.showPopup = true;
      this.menuText = item.text;
      this.menuSelect = item;
    },
    closeItem: function () {
      this.showPopup = false;
      this.showLogin = false;
    },
    confirm () {
      this.showLogin = false;
    },
    getNoticed (text) {
      this.text = text;
    },
  },
  // 生命周期函数
  created () {
    var that = this;
    that.getNoticeModelListByPage(that.getNoticed);
    console.log("index");
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('123')
    // if (!that.getLocalStorage('wxShare')) {
    //   that.$store.commit('setPath', that.$router.currentRoute)
    //   var url = location.href.split('#')[0];
    //   that.wxShare(url, that)
    // }
  },
  beforeCreate () { },
  mounted () {
    var that = this;
    // if (!that.getLocalStorage('wxShare')) {
    //   that.$store.commit('setPath', that.$router.currentRoute)
    //   var url = location.href.split('#')[0];
    //   that.wxShare(url, that)
    // }
  },
  store
};
</script>

<style lang="scss">
// body {
//   -webkit-overflow-scrolling: touch;
// }
.MyIndex {
  width: 100%;
  overflow: hidden;
}
.header {
}
.notice {
  overflow: hidden;
  border-radius: $brd;
  // margin-bottom: .32rem;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
  padding-left: 1.6rem;
  position: relative;
  > span {
    font-size: $fz32;
    position: absolute;
    left: 0;
    top: 0.2667rem;
    left: 0.2933rem;
    i {
      margin-right: 0.1333rem;
    }
  }
  .van-notice-bar {
    background: none;
  }
}

.centerNav {
  margin-bottom: 0.32rem;
  padding-top: 0.3rem;
  border-radius: $brd;
  background: $white;
  .icon-xinyongqia {
    color: $c12;
  }
  .icon-daikuan {
    color: $cf7;
  }
  .icon-baoxian1 {
    color: $c8e;
  }
  .icon-licai {
    color: $ced;
  }
  .icon-wodefenrun {
    color: $cf5;
  }
  .icon-shengji1 {
    color: $cd8;
  }
  .icon-quyudaili {
    color: $c31;
  }
  .icon-yonghuzhongxindianjipx_ {
    color: $c12;
  }
  .menuItem {
    margin-bottom: 0.2667rem;
  }
}
.centerHandle {
  // handleData: [[
  //     { name: "公积金查询", tips: "查余额查明细", classes: "goGjj"},
  //     { name: "社保查询", tips: "查社保查明细", classes: "goSb"},
  //   ],[
  //     { name: "话费账单查询", tips: "查余额查明细", classes: "goPhone"},
  //     { name: "信用卡账单查询", tips: "查信用余额查明细", classes: "goCard"},
  //   ]],

  $c87: #87fff6;
  $cff: #ffe4bb;
  $cfe: #fe9193;
  $c9a: #9ab2f9;
  .goGjj {
    background: $c87;
  }
  .goSb {
    background: $cff;
  }
  .goPhone {
    background: $cfe;
  }
  .goCard {
    background: $c9a;
  }
}
.menuList {
  // height: 6.9867rem;
  padding-top: 22px;
  padding: 0 0.1333rem;
  border-radius: $brd;
  background: $white;
  width: 100%;
  height: 3rem;
  overflow: auto;
  overflow-y: hidden;
  .icon-fangchanpinggu {
    color: $fangchan;
  }
  .icon-dashujuxinyong {
    color: $car;
  }
  .justicePg {
    background: url("../../static/icon/icon2.1.png") no-repeat center center;
    background-size: auto 100%;
  }
  .businessPg {
    background: url("../../static/icon/icon2.2.png") no-repeat center center;
    background-size: auto 100%;
  }
  .creditPg {
    background: url("../../static/icon/icon2.4.png") no-repeat center center;
    background-size: auto 100%;
  }
  .carPg {
    background: url("../../static/icon/icon2.6.png") no-repeat center center;
    background-size: auto 100%;
  }
  .menuWai {
    height: 100%;
    overflow-x: auto;
  }
  .menuItem {
    margin-bottom: 0.2667rem;
    width: 10.6667rem;
  }
}
.checkMyhistory {
  text-align: center;
  font-size: $fz32;
  padding-bottom: 0.2667rem;
  span {
    position: relative;
    color: $ff3;
  }
  span::after {
    background: $ff3;
  }
}
</style>
