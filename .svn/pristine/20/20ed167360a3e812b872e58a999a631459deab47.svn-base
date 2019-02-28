<template lang="html">
    <div class="MoneysDetails">
       <my-header :title="moneyDetails.title"></my-header>
        <div class="moneysTitle">{{moneyDetails.title}}</div>
        <div class="cardBottomBox">
           <hr-item :class="['cardHr']" :hritem="{title:'申请条件',bottom:true}"></hr-item>
           <div class="sqBox">
              <p>额度范围：<span>{{moneyDetails.minMoney}}-{{moneyDetails.maxMoney}}万</span> </p>
              <p>期限范围：<span>{{moneyDetails.minDate}}{{moneyDetails.date?moneyDetails.date:'-'}}{{moneyDetails.maxDate}}{{moneyDetails.date?'':'天'}}</span></p>
              <p>费用说明：<span>{{moneyDetails.fee}}</span></p>
           </div>
           <hr-item  :class="['cardHr']" :hritem="{title:'申请说明',bottom:true}"></hr-item>
           <div class="clBox sqBox" v-html="moneyDetails.apply">
           </div>
             <hr-item  :class="['cardHr']" :hritem="{title:'所需材料',bottom:true}"></hr-item>
           <div class="clBox sqBox">
              <p>{{moneyDetails.cailiao}}</p>
           </div>
           <hr-item  :class="['cardHr']" :hritem="{title:'办理流程',bottom:true}"></hr-item>
           <div class="lcBox">
             <icon-item :iconList="navData"></icon-item>
           </div>
        </div>
        <submit-item @clickSubmit="clickSubmit" :submititem="submititem"></submit-item>
        <popup-real :menuText="menuText" :showPopup="showPopup"  @closeItem="closeItem"  @clickButton="clickButton"></popup-real>
    </div>
    
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import HrItem from '@/components/HrItem'
import SubmitItem from '@/components/SubmitItem'
import PopupReal from '@/components/PopupReal'
import PopupSuccess from '@/components/PopupSuccess'
import IconItem from "@/components/IconItem";
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  // 不要忘记了 name 属性
  name: 'MoneysDetails',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      moneyDetails: {},
      submititem: { text: '立即申请' },
      menuText: '为全面落实《信用卡暂行管理办法》，在本平台申请信用卡必须实名注册，且不得包装使用虚假信息。',
      showPopup: false,
      shwoSuccess: false,
      successText: '尊敬的XXX用户，您在光大银行的白金信用卡的办理申请已成功提交，请注意保持电话畅通接听银行审核电话，耐心等待银行审核通过。查询详情请联系汉融邦客服。',
      navData: [
        { name: "业务申请", classes: "iconfont icon-daikuan1", paths: '1' },
        { classes: "iconfont icon-changjiantou", paths: '1' },
        { name: "电话初审", classes: "iconfont icon-zuojikong", paths: '1' },
        { classes: "iconfont icon-changjiantou", paths: '1' },
        { name: "门店办理", classes: "iconfont icon-gongsi", paths: '1' },
      ],

    }
  },
  computed: {
  },
  // 使用其它组件
  components: { MyHeader, HrItem, SubmitItem, PopupReal, PopupSuccess, IconItem },
  // 方法
  methods: {
    clickButton () {
      this.routerTo('UserReal')
    },
    closeItem () {
      if (!this.$store.state.userId) {
        this.showPopup = false;
      } else {
        this.shwoSuccess = false;
      }
    },
    clickSubmit: function () {
      // Toast('提交申请')
      this.setLocalStorage('gd', 'ture')
      this.routerTo('MoneysApply')
    }
  },
  deactivated () {
    this.shwoSuccess = false;
    this.showPopup = false;
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('进入详情')
    var details = this.getLocalStorage('moneysDetails');
    if (details) {
      this.moneyDetails = JSON.parse(this.getLocalStorage('moneysDetails'));
    } else {
      this.routerTo('index')
    }

  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
    console.log('MoneysDetails')
  }

}
</script>

<style scoped lang="scss">
.MoneysDetails {
  /* ... */
  min-height: 100vh;
  background: $cf0;
  .lcBox {
    width: 80%;
    margin: 0.2667rem auto;
  }
  .moneysTitle {
    font-size: $fz36;
    width: 3.4667rem;
    margin: 0 auto;
    text-align: center;
    line-height: 1.1333rem;
    color: $cff9;
    border-bottom: 1px solid $c999;
  }
}
.cardHr {
  text-indent: 0.4rem;
}
.cardMsgBox {
  background: $white;
  padding: 0.2667rem;
  h3 {
    font-size: $fz32;
    line-height: 0.7067rem;
  }
  p {
    font-size: $fz28;
    line-height: 0.6533rem;
    color: $c666;
  }
  em {
    padding-top: 0.1067rem;
    display: block;
  }
  span {
    margin-right: 0.1333rem;
  }
  border: 1px solid $ccc;
}
.cardBottomBox {
  i {
    font-size: 0.3733rem;
    margin-right: 0.2rem;
  }
  .tqUl {
    padding-right: 0.4rem;
    li {
      padding-left: 0.72rem;
      line-height: 0.64rem;
      font-size: 0.3733rem;
    }
    .icon-jifen {
      color: $cef;
    }
    .icon-wangguan {
      color: $c3c;
    }
    .icon-guahao1 {
      color: $c77;
    }
    //  <li><i class="iconfont icon-guibin dj"></i>等级：白金卡</li>
    //          <li><i class="iconfont icon-guibin rmb"></i>币种：人民币</li>
    //          <li><i class="iconfont icon-guibin qx"></i>免息期限：最短20天，最长56天</li>
    //          <li><i class="iconfont icon-guibin gz"></i>积分规则：双倍积分礼遇，生日当月享受三倍积分礼遇。</li>
    .dj {
      color: $cf7;
    }
    .rmb {
      color: $c48;
    }
    .qx {
      color: $cf1;
    }
    .gz {
      color: $c29;
    }
  }
  .sqBox {
    padding: 0 0.4rem;
    font-size: 0.3467rem;
    line-height: 0.6933rem;
    p {
      display: block;
      overflow: hidden;
    }
    span {
      color: $themeColor;
    }
  }
}
</style>
