<template>
 <div>  
       <my-header class="myHeader" :title="'司法报告-网贷黑名单'"></my-header>
         <div class="userJudiciary">
         <b></b>网贷黑名单  <b></b>
         </div>

     <div class="title">记录1</div>
    <ul class="usertitle">
      <li class="judiciaryInfo"><span>信息更新时间：</span>{{userInfo.updateTime}}</li>
      <li class="judiciaryInfo"><span>贷款时间：</span>{{userInfo.sortTimeString}}</li>
      <li class="judiciaryInfo"><span>案号：</span>{{userInfo.caseCode}}</li>
      <li class="judiciaryInfo"><span>执行法院：</span>{{userInfo.execCourt}}</li>
      <li class="judiciaryInfo"><span>来源单位名称：</span>{{userInfo.sourceName}}</li>
      <li class="judiciaryInfo"><span>姓名：</span>{{userInfo.pname}}</li>
       <li class="judiciaryInfo"><span>未还/罚息：</span>{{userInfo.whfx}}</li>
        <li class="judiciaryInfo"><span>本金/本息：</span>{{userInfo.bjbx}}</li>
      <li class="judiciaryInfo"><span>匹配度：</span><span id="red">{{userInfo.matchRatio}}</span></li>
    </ul>

        <div class="vanButton">
         <van-button class="Jbuttons" @click="Exposure" round type="info">上一页</van-button>
         <van-button class="Jbutton" @click="Judiciary" round type="info">返回报告总述</van-button>
       </div>
          <div class="title">匹配度说明</div>
       <div class="pp_text">{{userInfo.body}}</div>
 </div>
</template>

<script>
 import MyHeader from '@/layout/MyHeader'
 export default {
   data () {
     return {
         userInfo:{
             updateTime:'2018-01-01',
             sortTimeString:'2018-01-01',
             caseCode:'4566',
             execCourt:'46885',
             sourceName:'456585',
             pname:'张三',
             whfx:'100',
             bjbx:'100',
             matchRatio:'50%',
             body:'匹配度未被查询人与该案件的关系程度，取值0%到100%之间，值越大表示本人薪资与案件当事人信息重复度越高，被查询人的风险就越高。其中0%到180%为疑似为被查询人的案件，建议结合详情复审；81%到100%则表示很大的概率就是被查询人的案件。'         
        }
     }
   },
    created(){
      let data = JSON.parse(sessionStorage.getItem('MoneyBigDataReport'));
      if(data.busiData.code == 0) {
        if(data.busiData.data.list.wdhmd != ''){
          this.userInfo = data.busiData.data.list.wdhmd
        }
          
      }
   },
   methods:{
       Exposure(){
         this.routerTo('Exposure');
       },
      Judiciary(){
         this.routerTo('Judiciary');
      } 
   },
   components: {
       MyHeader
   }
 }
</script>

<style scoped>

    .usertitle {
     height: 5.98rem;
   }
    .judiciaryInfo{
     height: .66rem;
   }
 
</style>
