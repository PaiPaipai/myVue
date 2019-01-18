<template lang="html">
  <div class="CreditList">
     <div class="header">
       <div class="creditNav">
          <icon-item @clickItem="changeSelect" :active="active1" class="creditNavItem" :iconList="navData[0]"></icon-item>
          <icon-item @clickItem="changeSelect" :active="active2" class="creditNavItem" :iconList="navData[1]"></icon-item>
       </div>
       <div class="buttonBox">
         <button-item  :buttonItem="buttonItem" @clickButton="clickButton"></button-item>
       </div>
    </div>
    <hr-item :hritem="{title:'贷款列表'}"></hr-item>
    <div class=" mainBox">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="disabled">
      
        <div class="credit-item-box">
           <van-list
              v-model="loading"
              :finished="finished"
              :offset=10
              finished-text="没有更多了"
              @load="onLoad">
                <credit-item :itemList="creditList" ></credit-item>
            </van-list>
        
        </div>
      </van-pull-refresh>
      
    </div>
    
    <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      
        <div class="card-item-box">
           <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
                <card-item :itemList="itemList" ></card-item>
            </van-list>
        
        </div>
    </van-pull-refresh> -->

  </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import MyHeader from '@/layout/MyHeader'
import CardItem from '@/components/CardItem'
import swipe from "@/components/swipe";
import IconItem from "@/components/IconItem";
import HrItem from "@/components/HrItem";
import BankItem from "@/components/BankItem"
import MyText from "@/components/MyText"
import ButtonItem from "@/components/ButtonItem"
import CreditItem from "@/components/CreditItem"

import { Button, PullRefresh } from 'vant'
import store from '@/store/index'
Vue.use(Button).use(PullRefresh)
export default {
  // 不要忘记了 name 属性
  name: 'CreditList',
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: {
  },
  // 变量
  data () {
    return {
      disabled: false,
      navData: [
        [{ name: "上班族", classes: "iconfont icon-shangbanzu", select: false, id: 1, },
        { name: "个体户", classes: "iconfont icon-getihu", select: false, id: 2, },
        { name: "企业主", classes: "iconfont icon-qiyezhu", select: false, id: 3, },
        { name: "自由职业者", classes: "iconfont icon-ziyouzhiyezhe", select: false, id: 4, }],
        [{ name: "小额贷款", classes: "iconfont icon-xiaoedaikuan", select: false, id: 5, },
        { name: "信用贷款", classes: "iconfont icon-xinyongdaikuan", select: false, id: 6, },
        { name: "车抵贷", classes: "iconfont icon-chedi", select: false, id: 7, },
        { name: "房抵贷", classes: "iconfont icon-fangdi", select: false, id: 8, }]
      ],
      color: {
        chedai: "#54BCA9"
      },
      creditList: [

      ],
      selectTotal: [],
      creditTotal: [
        { name: "平安车抵贷", imgUrl: process.env.BASE_URL + 'icon/credit/dk-pinganyinhang.png', minMoney: 5, maxMoney: 30, tips: '车抵贷', color: "#54BCA9", special: '不装GPS、不押车、不压钥匙', total: 123, classes: "", path: 'CreditItemDetail', type: 7, id: 1, },
        { name: "拍拍贷", imgUrl: process.env.BASE_URL + 'icon/credit/dk-paipaidai.png ', minMoney: 6, maxMoney: 30, tips: '小额贷款', color: "#EE594E", special: '可享8次免费接机', total: 456, classes: "", path: 'CreditItemDetail', type: 5, id: 2, },
        { name: "宜人贷", imgUrl: process.env.BASE_URL + 'icon/credit/dk-yirendai.png', minMoney: 7, maxMoney: 30, tips: '小额贷款', color: "#EE594E", special: '可享8次免费接机1', total: 789, classes: "", path: 'CreditItemDetail', type: 5, id: 3, },
        { name: "飞贷", imgUrl: process.env.BASE_URL + 'icon/credit/dk-feidai.png', minMoney: 8, maxMoney: 30, tips: '小额贷款', color: "#EE594E", special: '一周放款', total: 111, classes: "", path: 'CreditItemDetail', type: 5, id: 4 },
        { name: "平安新一贷", imgUrl: process.env.BASE_URL + 'icon/credit/dk-pinganyinhang.png', minMoney: 9, maxMoney: 30, tips: '信用贷款', color: "#48A5ED", special: '可享8次免费接机3', total: 222, classes: "", path: 'CreditItemDetail', type: 6, id: 5, },
        { name: "兴业金融", imgUrl: process.env.BASE_URL + 'icon/credit/dk-xingyexiaofei.png', minMoney: 0, maxMoney: 30, tips: '信用贷款', color: "#48A5ED", special: '可享8次免费接机4', total: 333, classes: "", path: 'CreditItemDetail', type: 6, id: 6, },
        { name: "宅速通", imgUrl: process.env.BASE_URL + 'icon/credit/dk-pinganyinhang.png', minMoney: 5, maxMoney: 30, tips: '房抵贷', color: "#F7AC53", special: '一周放款', total: 123, classes: "", path: 'CreditItemDetail', type: 8, id: 7, },
        { name: "平安银行房抵押", imgUrl: process.env.BASE_URL + 'icon/credit/dk-pinganyinhang.png ', minMoney: 6, maxMoney: 30, tips: '房抵贷', color: "#F7AC53", special: '一周放款', total: 456, classes: "", path: 'CreditItemDetail', type: 8, id: 8, },
        { name: "华夏银行房抵押", imgUrl: process.env.BASE_URL + 'icon/credit/dk-huaxia.png', minMoney: 7, maxMoney: 30, tips: '房抵贷', color: "#F7AC53", special: '一周放款', total: 789, classes: "", path: 'CreditItemDetail', type: 8, id: 9, },
        { name: "光大银行房抵押", imgUrl: process.env.BASE_URL + 'icon/credit/dk-guangda.png', minMoney: 8, maxMoney: 30, tips: '房抵贷', color: "#F7AC53", special: '一周放款', total: 111, classes: "", path: 'CreditItemDetail', type: 8, id: 10, },
        { name: "苏宁银行", imgUrl: process.env.BASE_URL + 'icon/credit/dk-suning.png', minMoney: 9, maxMoney: 30, tips: '房抵贷', color: "#F7AC53", special: '一周放款', total: 222, classes: "", path: 'CreditItemDetail', type: 8, id: 11, },
        { name: "邦信资金", imgUrl: process.env.BASE_URL + 'icon/credit/dk-bangxin.png', minMoney: 0, maxMoney: 30, tips: '房抵贷', color: "#F7AC53", special: '一周放款', total: 333, classes: "", path: 'CreditItemDetail', type: 8, id: 12, },
        { name: "卓尔资金", imgUrl: process.env.BASE_URL + 'icon/credit/dk-zhuoer.png', minMoney: 9, maxMoney: 30, tips: '房抵贷', color: "#F7AC53", special: '一周放款', total: 222, classes: "", path: 'CreditItemDetail', type: 8, id: 13, },
        { name: "信托资金", imgUrl: process.env.BASE_URL + 'icon/credit/dk-xintuo.png', minMoney: 0, maxMoney: 30, tips: '房抵贷', color: "#F7AC53", special: '一周放款', total: 333, classes: "", path: 'CreditItemDetail', type: 8, id: 14, },

      ],
      selected: {
        top: -1,
        bottom: -1
      },
      buttonItem: { txt: '搜索查询', classes: 'buttonItem' },
      count: 0,
      rows: 5,
      active1: -1,
      active2: -1,
      isLoading: false,
      loading: false,
      finished: false,
      keyWords: '',
    }
  },

  computed: {},
  // 使用其它组件
  components: { MyHeader, CardItem, swipe, IconItem, HrItem, BankItem, MyText, ButtonItem, CreditItem },
  // 方法
  methods: {
    clickButton: function () {
      console.log()
      this.keyWords = ''
      var selected = this.selected
      for (const key in selected) {
        if (selected[key] > -1) {
          this.keyWords += selected[key] + ','
        }
      }
      this.selectAll(0)

      console.log(this.keyWords)
    },
    selectAll (start) {
      var array = this.creditTotal;
      var maxLength = array.length;
      var arrClone = [];

      for (let index = start; index < maxLength; index++) {
        const element = array[index];
        if (this.keyWords != '') {
          if (this.keyWords.indexOf(element.type) > -1) {
            arrClone.push(element)
          }
        } else {
          arrClone.push(element)
        }

      }
      this.creditList = arrClone
    },
    getSelected: function (arrList, index) {
      if (arrList == this.navData[0]) {
        if (index < 0) {
          this.selected.top = index;
        } else {
          this.selected.top = arrList[index].id
        }
      } else {
        if (index < 0) {
          this.selected.bottom = index;
        } else {
          this.selected.bottom = arrList[index].id
        }
      }
      console.log(this.selected)
    },
    changeSelect: function (item, index) {
      console.log(index)
      if (item) {
        if (item.id < 5) {
          if (this.active1 == index) {
            this.active1 = -1
          } else {
            this.active1 = index
          }
          this.getSelected(this.navData[0], this.active1)
        } else {
          if (this.active2 == index) {
            this.active2 = -1
          } else {
            this.active2 = index
          }
          this.getSelected(this.navData[1], this.active2)
        }
        // if (item.classes.indexOf('clickHover') > 0) {
        //   item.classes = item.classes.replace('clickHover', '')
        // } else {
        //   item.classes = item.classes + ' clickHover'
        // }
        // if (!item.select) {
        //   item.select = true;
        // } else {
        //   item.select = false;
        // }
      }
    },
    onRefresh () {
      console.log('onRefresh')
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false

        this.setCreditList(this.count)
      }, 500)
    },
    onLoad: function () {
      // 异步更新数据
      console.log('onload')
      var _this = this
      setTimeout(() => {
        // 加载状态结束
        _this.loading = false
        // 数据全部加载完成
        this.setCreditList(this.count)
      }, 1000)
    },
    setCreditList: function (count) {
      var start = count * this.rows;
      var array = this.creditTotal;
      var arrClone = [];
      var maxLength = 0;
      var flag = false;
      if (start + this.rows > array.length) {
        maxLength = array.length;
        flag = true;
      } else {
        maxLength = start + this.rows
      }
      for (let index = start; index < maxLength; index++) {
        const element = array[index];
        if (this.keyWords != '') {
          if (this.keyWords.indexOf(element.type) > -1) {
            arrClone.push(element)
          }
        } else {
          arrClone.push(element)
        }

      }
      this.creditList = this.creditList.concat(arrClone)
      if (flag) {
        this.finished = true
      } else {
        this.count++
      }
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 10) {
        this.disabled = true;
      } else if (scrollTop < 10) {
        this.disabled = false;
      }
    },
  },
  // 生命周期函数
  mounted () {
    console.log('进入贷款列表')
    this.active1 = -1;
    this.active2 = -1;
    this.setCreditList(this.count)
    window.addEventListener('scroll', this.handleScroll)
  },
  watch: {
  },
  store
}
</script>

<style lang="scss">
.CreditList {
  /* ... */
  background: $cf0;
}
.creditNav {
  .creditNavItem {
    padding: 0.4rem 0;
    background: $white;
    margin-top: 0.1333rem;
  }
  i {
    opacity: 0.2;
  }
  i.clickHover {
    opacity: 1;
  }
  .icon-shangbanzu {
    color: $c29;
  }
  .icon-getihu {
    color: $cf7;
  }
  .icon-qiyezhu {
    color: $c12;
  }
  .icon-ziyouzhiyezhe {
    color: $cee5;
  }
  .icon-xiaoedaikuan {
    color: $cee5;
  }
  .icon-xinyongdaikuan {
    color: $c12;
  }
  .icon-chedi {
    color: $c29;
  }
  .icon-fangdi {
    color: $cf7;
  }
}
.buttonBox {
  text-align: center;
  margin-top: 0.4rem;
}
.buttonItem {
  line-height: 0.8rem;
  padding: 0 1.6rem;
  background: $c12;
  color: $white;
}
.mainBox {
  // background: $white;
  box-shadow: 0 -4px 0.2rem rgba(0, 0, 0, 0.1);
}
</style>
