<template>
 <div>
      <my-header class="myHeader" :title="'司法报告-法院公告'"></my-header>
          <div class="userJudiciary">
         <b></b>法院公告  <b></b>
         </div>

         <div class="title">记录1</div>
            <ul class="usertitle">
            <li class="judiciaryInfo"><span>发布时间：</span>{{userInfo.sortTimeString}}</li>
            <li class="judiciaryInfo"><span>法院名称：</span>{{userInfo.court}}</li>
            <li class="judiciaryInfo"><span>姓名：</span>{{userInfo.pname}}</li>
            <li class="judiciaryInfo"><span>公告类型：</span>{{userInfo.ggType}}</li>
            <li class="judiciaryInfo"><span>匹配度：</span><span id="red">{{userInfo.matchRatio}}</span></li>
            </ul>
            

               <div class="vanButton">
         <van-button class="Jbuttons" @click="Breakfaith" round type="info">上一页</van-button>
         <van-button class="Jbutton" @click="Exposure" round type="info">继续查看曝光台</van-button>
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
             sortTimeString:'2018-1-1',
             court:'B21',
             pname:'张三',
             ggType:'22',
             matchRatio:'50%',
             body:'匹配度未被查询人与该案件的关系程度，取值0%到100%之间，值越大表示本人薪资与案件当事人信息重复度越高，被查询人的风险就越高。其中0%到180%为疑似为被查询人的案件，建议结合详情复审；81%到100%则表示很大的概率就是被查询人的案件。'
         }
     }
   },
   methods:{
       Breakfaith(){
           this.routerTo('Breakfaith');
       },
       Exposure(){
           this.routerTo('Exposure');
       }
   },
    created(){
      let data = JSON.parse(sessionStorage.getItem('MoneyBigDataReport'));
      if(data.busiData.code == 0) {
          if(data.busiData.data.list.fygg != ""){
              this.userInfo = data.busiData.data.list.fygg
          }
          
      }
   },
   components: {
       MyHeader
   }
 }
</script>

<style scoped>

    .usertitle {
     height: 3.57rem;
   }
    .judiciaryInfo{
     height: .7rem;
   }
 
 
</style>
