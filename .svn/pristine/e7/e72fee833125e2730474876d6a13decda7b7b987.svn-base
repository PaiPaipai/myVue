<template>
 <div>
    <my-header class="myHeader" :title="'司法报告-开庭记录'"></my-header>
        <div class="userJudiciary">
         <b></b>开庭记录<b></b>
    </div>
    <div class="title">记录1</div>
    <ul class="usertitle">
      <li class="judiciaryInfo"><span>开庭日期</span>{{userInfo.sortTimeString}}</li>
      <li class="judiciaryInfo"><span>案号：</span>{{userInfo.caseNo}}</li>
      <li class="judiciaryInfo"><span>法院名称：</span>{{userInfo.court}}</li>
      <li class="judiciaryInfo"><span>原告：</span>{{userInfo.plaintiff}}</li>
      <li class="judiciaryInfo"><span>被告：</span>{{userInfo.defendant}}</li>
      <li class="judiciaryInfo"><span>案由：</span>{{userInfo.caseCause}}</li>
      <li class="judiciaryInfo"><span>匹配度：</span><span id="red">{{userInfo.matchRatio}}</span></li>
    </ul>

    
    
  <div class="vanButton">
    <van-button class="Jbuttons" @click="judiciary" round type="info">上一页</van-button>
    <van-button class="Jbutton" @click="Process" round type="info">继续查看案件记录</van-button>
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
           sortTimeString:'1990-01-01',
           caseNo:'00',
           court:12,
           plaintiff:'zaa',
           defendant:'1222',
           caseCause: 212,
           matchRatio:'80%',
           body:'匹配度未被查询人与该案件的关系程度，取值0%到100%之间，值越大表示本人薪资与案件当事人信息重复度越高，被查询人的风险就越高。其中0%到180%为疑似为被查询人的案件，建议结合详情复审；81%到100%则表示很大的概率就是被查询人的案件。'
         }
     
     }
   },
   methods:{
      judiciary(){
        this.routerTo('Judiciary')
      },
      Process(){
         this.routerTo('Process')
      }
   },
   created(){
      let data = JSON.parse(sessionStorage.getItem('MoneyBigDataReport'));
      if(data.busiData.code == 0) {
          if(data.busiData.data.list.ktgg != ''){
            this.userInfo = data.busiData.data.list.ktgg
          }
          
      }
   },
   components: {
      MyHeader
   }
 }
</script>

<style scoped>

  .judiciaryInfo{
     line-height: .7rem;
     height: .7rem;
   }

  .usertitle {
     height: 5.2rem;
    
   }
</style>
