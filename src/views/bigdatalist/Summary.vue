<template lang="html">
  <div class="blacklist">
    <div class="Doublemark">
      <span class="Doublemark_one"></span>
      <div>司法记录</div>
      <span class="Doublemark_two"></span>
    </div>
    <div class="bigdatadetails">概述</div>
    <div class="blacklisttext">
        <p>用户中司法案件<span>{{MoneyBigDataReport.s2.caseNumber}}条</span></p>
        <div>说明：不包含执行人既原告数据</div>
    </div>
    <div class="blfloor"></div>
    <div class="bigdatadetails">部分详情</div>
    <div class="blacklistall" v-for="(item, index) in MoneyBigDataReport.s2.judicialInfoList" :key="index">
        <p>{{index}},<span>{{item.caseType}}</span></p>
        <div>数据时间：<span>{{item.caseTime}}</span>,案件状态：<span>{{item.caseState}}</span>。</div>
        <p>{{item.caseDetail}}</p>
    </div>
     <div class="noData" v-show="!MoneyBigDataReport.s2.judicialInfoList.length">
          暂无记录
        </div>
    <div class="tobak" @click="tobak()">
        上一页
    </div>
    <div class="bigdatalook"  @click="bigdatalook()">继续被查询记录</div>
    <div class="bigdatadeta">司法记录说明</div>
    <div class="bigdatadetatext">通过查询个人在全国司法系统中是否涉及经济类案件，以及对应相关法律公告、判决书及执行情况，识别用户是否为失信被执行人，其失信情况等。
</div>
  </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from "vue";
export default {
  // 不要忘记了 name 属性
  name: "blacklist",
  // 变量
  data () {
    return {
      MoneyBigDataReport: {
        s2: {
          data: {},
          caseNumber: 0,
          summary: '',
          judicialInfoList: []
        },
      },
    }
  },
  computed: {},
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  beforeCreate () { },
  methods: {
    tobak () {
      this.$router.push("/bigdatalist/blacklist");
    },
    bigdatalook () {
      this.$router.push("/bigdatalist/Summaryis");
    }
  },
  // 生命周期函数
  beforeCreate () { },
  mounted () { },
  // 每次进路由会调用这个方法
  activated () {
    var MoneyBigDataReport = this.getLocalStorage('MoneyBigDataReport');
    if (MoneyBigDataReport) {
      MoneyBigDataReport = JSON.parse(MoneyBigDataReport);
      console.log(MoneyBigDataReport)
      var datas = MoneyBigDataReport.data
      var s2 = datas.s2;
      //处理字符串替换
      var reg = /{([^\s]*?)}/g, ret2 = [], arr;
      var cbody = datas.s2.summary
      while (arr = reg.exec(cbody)) {
        ret2.push(arr[1]);
        cbody = cbody.replace(arr[0], s2.data[arr[1]])
      }
      datas.s2.summary = cbody
      this.MoneyBigDataReport = datas;
    } else {
      this.routerTo('index')
    }
  }
};
</script>

<style scoped lang="scss">
.blacklist {
  .Doublemark {
    width: 5.6rem;
    margin: 0 auto;
    height: 0.8533rem;
    font-size: 0.4rem;
    color: #666666;
    text-align: center;
    // border: 1px red solid;
    line-height: 0.8533rem;
    position: relative;
    span {
      position: absolute;
      display: inline-block;
      height: 0.016rem;
      width: 1.3333rem;
      background: #cccccc;
      top: 0.4267rem;
    }
    .Doublemark_one {
      left: 0;
    }
    .Doublemark_two {
      right: 0;
    }
  }
  .bigdatadetails {
    color: #333333;
    font-size: 0.4267rem;
    border-bottom: 0.0133rem #cccccc solid;
    height: 1.0667rem;
    line-height: 1.0667rem;
    padding: 0 0.4rem;
  }
  .blacklisttext {
    // height: 0.96rem;
    text-indent: 0.7733rem;
    color: #666666;
    font-size: 0.4rem;
    line-height: 0.86rem;
    p {
      color: #333333;
    }
    span {
      color: #ff0000;
    }
  }
  .blfloor {
    height: 0.2667rem;
    background: #f0f0f0;
  }
  .blacklistall {
    padding: 0 0.7733rem;
    color: 0.4rem;
    p {
      line-height: 1.1067rem;
    }
    div {
      margin-bottom: 0.3067rem;
    }
    q {
      color: rgba(102, 102, 102, 1);
      line-height: 0.6rem;
      display: inline-block;
    }
    span {
      color: #ff0000;
    }
  }
  .tobak {
    width: 6.6667rem;
    height: 1.0667rem;
    border: 0.0267rem solid rgba(42, 144, 235, 1);
    border-radius: 0.5333rem;
    font-size: 0.48rem;
    font-weight: 500;
    color: rgba(42, 144, 235, 1);
    text-align: center;
    line-height: 1.0667rem;
    margin: 1.0267rem auto 0 auto;
  }
  .bigdatalook {
    width: 6.6667rem;
    height: 1.0667rem;
    background: rgba(9, 109, 221, 1);
    border-radius: 40px;
    color: #ffffff;
    font-size: 0.48rem;
    text-align: center;
    line-height: 1.0667rem;
    margin: 0.4rem auto 0 auto;
  }
  .bigdatadeta {
    color: #666666;
    font-size: 0.4267rem;
    border-bottom: 0.0133rem #cccccc solid;
    height: 1.0667rem;
    line-height: 1.0667rem;
    padding: 0 0.4rem;
  }
  .bigdatadetatext {
    font-size: 0.3467rem;
    color: #666666;
    line-height: 0.6667rem;
    padding: 0.5067rem 0.7733rem;
  }
}
</style>
