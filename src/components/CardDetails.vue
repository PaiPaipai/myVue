<template lang="html">
    <div class="CardDetails">
        <div class="cardMsgBox">
          <h3>光大银行白金卡</h3>
          <p>可计积分交易享受双倍积分礼遇</p>
          <em><van-tag plain color="#096ddd" text-color="#096ddd" type="success">白金卡</van-tag><van-tag color="#096ddd" text-color="#096ddd" plain type="success">人民币</van-tag></em>
        </div>
        <div class="cardBottomBox">
           <hr-item :class="['cardHr']" :hritem="{title:'专属特权'}"></hr-item>
           <div class="tqBox">
             <ul class="tqUl">
               <li><i class="iconfont icon-jifen"></i>可计积分交易享受双倍积分礼遇</li>
               <li><i class="iconfont icon-wangguan"></i>机场高铁贵宾厅服务</li>
               <li><i class="iconfont icon-guahao1"></i>专家预约挂号服务3次/年</li>
             </ul>
           </div>
           <hr-item :class="['cardHr']" :hritem="{title:'基本信息'}"></hr-item>
           <div class="jbBox">
             <ul class="tqUl">
               <li><i class="iconfont icon-guibin dj"></i>等级：白金卡</li>
               <li><i class="iconfont icon-guibin rmb"></i>币种：人民币</li>
               <li><i class="iconfont icon-guibin qx"></i>免息期限：最短20天，最长56天</li>
               <li><i class="iconfont icon-guibin gz"></i>积分规则：双倍积分礼遇，生日当月享受三倍积分礼遇。</li>
             </ul>
           </div>
           <hr-item :class="['cardHr']" :hritem="{title:'申请条件',bottom:true}"></hr-item>
           <div class="sqBox">
              <p>客户要求:25-56岁。加购履约险，可以放宽至22岁-60岁单签。</p>
              <p>抵押物要求：鄂A、鄂E、鄂D、鄂F；车龄8年以内，公里数为15万公里以内;当前无抵押状态，仅限9座及以下蓝牌非营运私家车，不接受公司所有车辆及大巴车、卡车、火车等。</p>
           </div>
           <hr-item  :class="['cardHr']" :hritem="{title:'所需材料',bottom:true}"></hr-item>
           <div class="clBox sqBox">
              <p>资料要求：房产证、土地证、购房合同、租赁合同、水电天燃气费单、还建协议、私房证明，网购截图，任选其一，需有姓名有地址；身份证、结婚照或离婚证或户口本、车辆登记证、行驶证、驾照。</p>
           </div>
           <hr-item  :class="['cardHr']" :hritem="{title:'办理流程',bottom:true}"></hr-item>
           <div class="lcBox">
             <icon-item :iconList="navData"></icon-item>
           </div>
        </div>
        <submit-item @clickSubmit="clickSubmit" :submititem="submititem"></submit-item>
        <popup-real :menuText="menuText" :showPopup="showPopup"  @closeItem="closeItem"  @clickButton="clickButton"></popup-real>
        <popup-success :menuText="menuText" :successText="successText" :showPopup="shwoSuccess"  @closeItem="closeItem"  @clickButton="clickButton"></popup-success>
    </div>
    
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import swipe from '@/components/swipe'
import HrItem from '@/components/HrItem'
import SubmitItem from '@/components/SubmitItem'
import PopupReal from '@/components/PopupReal'
import PopupSuccess from '@/components/PopupSuccess'
import IconItem from "@/components/IconItem";
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  // 不要忘记了 name 属性
  name: 'CardDetails',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      params: this.$route.params,
      submititem: { text: '立即申请' },
      menuText: '为全面落实《信用卡暂行管理办法》，在本平台申请信用卡必须实名注册，且不得包装使用虚假信息。',
      showPopup: false,
      shwoSuccess: false,
      successText: '尊敬的XXX用户，您在光大银行的白金信用卡的办理申请已成功提交，请注意保持电话畅通接听银行审核电话，耐心等待银行审核通过。查询详情请联系汉融邦客服。',
      navData: [
        { name: "申请办卡", classes: "iconfont icon-xinyongqia" },
        { classes: "iconfont icon-changjiantou" },
        { name: "资料填写", classes: "iconfont icon-zixun" },
        { classes: "iconfont icon-changjiantou" },
        { name: "查看进度", classes: "iconfont icon-chaxunjindu" },
        { classes: "iconfont icon-changjiantou" },
        { name: "申请完成", classes: "iconfont icon-dui2" }
      ],

    }
  },
  computed: {},
  // 使用其它组件
  components: { MyHeader, swipe, HrItem, SubmitItem, PopupReal, PopupSuccess, IconItem },
  // 方法
  methods: {
    clickButton () {
      if (!this.$store.state.userId) {
        this.showPopup = false;
        this.routerTo('UserReal')
      } else {
        this.shwoSuccess = false;
      }


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
      if (!this.$store.state.userId) {
        this.showPopup = true;
      } else {
        this.shwoSuccess = true;
      }

    }
  },
  activated: function () { // 加载当前路由的时候执行 其余的都是 初始化项目的时候加载
    console.log('进入详情')
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () {
    console.log('CardDetails')
  }

}
</script>

<style scoped lang="scss">
.CardDetails {
  /* ... */
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
  }
}
</style>
