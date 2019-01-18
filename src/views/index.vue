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
      <hr-item :hritem="{title:'财富优选'}"></hr-item>
      <div class="centerNav bd-radius15">
        <icon-item :iconList="navData[0]"></icon-item>
        <icon-item :iconList="navData[1]"></icon-item>
      </div>
      <div class="centerHandle ">
        <!-- <handle-item :handleList="handleData"></handle-item> -->
        <swipe :imgList="imgList"
               :swipeClass="'centerSwiper'"></swipe>
        <hr-item :hritem="{title:'信用查询'}"></hr-item>
        <handle-item :handleList="handleData[0]"></handle-item>
        <handle-item :handleList="handleData[1]"></handle-item>
      </div>
      <div class="menuList">
        <hr-item :hritem="{title:'大数据信用查询'}"></hr-item>
        <div class="menuWai">
          <icon-item class="menuItem"
                     @clickItem="clickItem"
                     :iconList="menuData"></icon-item>
        </div>
      </div>
      <div class="checkMyhistory"><span class="text-underline">查看我的历史查询</span></div>
    </div>
    <div class="text-box">
      <my-text></my-text>
    </div>
    <popup :showPopup="showPopup"
           :menuText="menuText"
           @clickButton="clickButton"
           @closeItem="closeItem"></popup>
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
import { NoticeBar } from "vant";

Vue.use(NoticeBar);
export default {
  name: "MyIndex",
  data () {
    return {
      text:
        "足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。",
      imgList: [
        { imgUrl: process.env.BASE_URL + "img/1.jpg" },
        { imgUrl: process.env.BASE_URL + "img/2.jpg" },
        { imgUrl: process.env.BASE_URL + "img/3.jpg" }
      ],
      navData: [
        [{ name: "信用卡", classes: "iconfont icon-xinyongqia", path: 'CardList' },
        { name: "贷款", classes: "iconfont icon-daikuan", path: 'CreditList' },
        { name: "保险", classes: "iconfont icon-baoxian1" },
        { name: "理财", classes: "iconfont icon-licai" }],
        [{ name: "我要分润", classes: "iconfont icon-wodefenrun", path: 'MoneyAll' },
        { name: "我要升级", classes: "iconfont icon-woyaoshengji1", path: 'LevelUp' },
        { name: "查询进度", classes: "iconfont icon-chaxunjindu" },
        { name: "用户中心", classes: "iconfont icon-yonghuzhongxindianjipx_", path: 'UserCenter' }]
      ],
      handleData: [[
        { name: "过桥垫资", tips: "(1.5‰/天)", classes: "goGjj", iclass: 'iconfont icon-dianzi ' },
        { name: "买卖赎楼", tips: "(赎楼)", classes: "goSb", iclass: ' iconfont icon-maimaishulou' },
      ], [
        { name: "大额存款", tips: "(银行摆账、验资)", classes: "goPhone", iclass: " iconfont icon-daecunkuan" },
        { name: "曾兑汇票", tips: "(汇票)", classes: "goCard iconfont", iclass: " icon-huipiao" },
      ]],
      menuData: [
        { name: "房产评估", classes: "iconfont icon-fangchanpinggu", text: '包含单价、楼栋均价、楼盘均价、可贷款金额等信息', paths: 'dashuju' },
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
      baseUrl: process.env.BASE_URL
    };
  },
  components: { MyHeader, swipe, IconItem, HandleItem, HrItem, MyText, Popup },
  methods: {
    clickButton: function () {
      this.routerTo(this.menuSelect.paths)
    },
    clickItem: function (item, index) {
      this.showPopup = true;
      this.menuText = item.text;
      this.menuSelect = item;
    },
    closeItem: function () {
      this.showPopup = false;
    },
    start: function (params) {
      const code = this.getUrlParam('code')
      // const local = window.location.href;
      var local = window.location.href
        .replace(/[/]/g, "%2f")
        .replace(/[:]/g, "%3a")
        .replace(/[#]/g, "%23")
        .replace(/[&]/g, "%26")
        .replace(/[=]/g, "%3d");
      const REDIRECT_URI = 'http://47.107.80.60/h5/index.html';

      if (code == '' || code == null) {
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.API.APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`
      } else {
        this.getOpenId(code)
      }
    },
    getOpenId: function (code) {
      const APPID = 'wx70278d7dc8f6b6cb';
      const APPSECRET = '8d4c520a921cc391fd01ef82218227b0';
      const codeUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.API.APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`
      const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx70278d7dc8f6b6cb&secret=8d4c520a921cc391fd01ef82218227b0`
      this._ajax({ // 在api.js后面合并的axios属性名_ajax一致,名字随意
        url: url, // 基地址加上后面不同的url地址
        method: 'GET',
        // timeout: 6000,
        params: code
      }).then((res) => {
        console.log(res)
        if (res.access_token) {

        }
      }).catch((err) => {
        console.log(err)
      })
    },
    test: function () {
      const url = 'http://47.107.80.60/abapp/interface/testInterface/test'
      this._ajax({ // 在api.js后面合并的axios属性名_ajax一致,名字随意
        url: url, // 基地址加上后面不同的url地址
        method: 'POST',
        // timeout: 6000,
      }).then((res) => {
        console.log(res)

      }).catch((err) => {
        console.log(err)
      })
    }
  },
  // 生命周期函数
  created () {
    this.test()
    if (store.state.platform) {
      this.start()
    }
    console.log(process.env)
  },
  beforeCreate () { },
  mounted () {
    // debugger 
    console.log("index");
  },
  store
};
</script>

<style lang="scss">
body {
  -webkit-overflow-scrolling: touch;
}
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
  .icon-woyaoshengji1 {
    color: $cd8;
  }
  .icon-chaxunjindu {
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
