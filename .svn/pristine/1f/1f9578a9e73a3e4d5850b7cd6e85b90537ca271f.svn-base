<template lang="html">
    <div class="UserMyTeam">
        <!-- ... -->
        <my-header :title="'我的团队'"></my-header>
        <div class="teamTop">
          <ul>
            <li>
              <div v-for="(item, index) in teamTop.top" :key="index">
                <h3>{{item.total}}</h3>
                <p>{{item.name}}</p>
              </div>
            </li>
            <li>
              <div v-for="(item, index) in teamTop.today" :key="index">
                <h3>{{item.total}}</h3>
                <p>{{item.name}}</p>
              </div>
            </li>
            <li>
              <div v-for="(item, index) in teamTop.detail" :key="index">
                <h3>{{item.total}}</h3>
                <p>{{item.name}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="teamSearch">
           <search-item :searchData="searchData" @clickSearch="clickSearch"></search-item>
        </div>
        <div class="teamChange">
            <div class="tabTop">
              <ul class="tabUl">
                <li v-for="(item, index) in teamData.top" @click="changeTab(item,index)"  ref="li" :key="index">{{item.name}}</li>
              </ul>
              <span class="line" :style="{left:lineLeft+'px'}"  ref="elememt"></span>
            </div>
            <div class="tabBottom">
              <ul class="contentUl">
                <li v-for="(item, index) in (cloumns || teamData.bottom[0])" :key="index">
                  <div class="imgBox"><img :src="item.wxPhoto || item.imgUrl" alt=""></div>
                  <div class="textBox">
                    <h3>{{item.name || item.nickName}} <button v-show="item.mobile" @click="callPhone(item.mobile)"><i class="iconfont icon-dianhua"></i>拨打电话</button></h3>
                    <p>{{item.dateCreated}} 加入</p>
                  </div>
                  <div class="typeBox">
                    <img :src="item.type" alt="">
                  </div>
                </li>
              </ul>
              <div class="noData" v-show=" !teamData.bottom[currentIndex].length" >
                暂无数据
              </div>
              
            </div>
        </div>
        <div class="text-box">
          <my-text></my-text>
        </div>
        
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import MyHeader from '@/layout/MyHeader'
import SearchItem from '@/components/SearchItem'
import MyText from "@/components/MyText"
import { Toast } from 'vant';
Vue.use('Toast')
export default {
  // 不要忘记了 name 属性
  name: 'UserMyTeam',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: [],
  // 变量
  data () {
    return {
      imgUrl: store.state.userPic,
      lineLeft: 0,
      lineStart: 0,
      liw: 0,
      columnsSelect: null,
      changeColums: null,
      currentIndex: 0,
      searchData: {
        placeholder: '请输入用户昵称或手机号码',
        model: '',
      }
    }
  },
  computed: {
    userTeam: {
      get: function () {
        return store.state.userTeam
      },
      set: function () { },
    },
    cloumns: {
      get: function () {
        return this.columnsSelect
      },
      set: function () {

      },
    },
    teamTop: {
      get: function () {
        return {
          top: [{ name: '客户总数', total: this.userTeam.khNum || 0 }],
          today: [{ name: '团队人数', total: this.userTeam.khNum || 0 }, { name: '今日新增', total: this.userTeam.addNum || 0 }],
          detail: [{ name: '门店经理', total: this.userTeam.mdNum || 0 }, { name: '团队经理', total: this.userTeam.tdNum || 0 }, { name: '渠道经理', total: this.userTeam.qdNum || 0 }, { name: '普通用户', total: this.userTeam.ptNum || 0 }],
        }
      },
      set: function () { },
    },
    teamData: {
      get: function () {
        return {
          top: [
            { id: 1, name: '门店经理' }, { id: 2, name: '团队经理' }, { id: 3, name: '渠道经理' }, { id: 4, name: '普通用户' },
          ],
          bottom: this.userTeam.arrList || [[], [], [], [], []]
        }
      },
      set: function () { },
    }
  },
  // 使用其它组件
  components: { MyHeader, SearchItem, MyText },
  // 方法
  watch: {},
  methods: {
    callPhone (mobile) {
      window.location.href = "tel:" + mobile;
    },
    changeTab (item, index) {
      this.lineLeft = this.liw * index + this.lineStart
      this.currentIndex = index;
      if (this.searchData.model) {
        this.getSearchData(this.searchData.model)
      } else {
        this.columnsSelect = this.teamData.bottom[index]
      }

    },
    clickSearch (value) {
      this.searchData.model = value;
      this.getSearchData(value)
      console.log(value)
    },
    getSearchData (value) {
      var columnsSelect = this.teamData.bottom[this.currentIndex]
      var cloneList = []
      columnsSelect.forEach(function (item) {
        if (item.mobile.indexOf(value) > -1 || item.name.indexOf(value) > -1 || item.nickName.indexOf(value) > -1) {
          cloneList.push(item)
        }
      });
      this.columnsSelect = cloneList;
    },
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () {
    console.log('UserMyTeam')
    var width = this.$refs.elememt.offsetWidth;
    this.liw = window.screen.width / 4;
    this.lineLeft = this.lineStart = (this.liw / 2) - (width / 2)
    var that = this;

    // this.checkLogin('userTeam', 'setUserTeam', that.promoterRank)
    that.promoterRank(that)
  },
  activated () {

  }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.UserMyTeam {
  /* ... */
  background: $cf0;
}
.tabTop {
  position: relative;
  .line {
    position: absolute;
    z-index: 1;
    left: 0.5333rem;
    bottom: 0;
    height: 2px;
    position: absolute;
    width: 1.8933rem;
    background-color: #f9904e;
    transition: 0.3s all ease-in-out;
  }
}
.teamTop {
  text-align: center;
  background: $white;
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.2667rem 0;
    border-bottom: 1px solid $ccc;
  }
  li:last-child {
    border: none;
  }
  h3 {
    line-height: 0.72rem;
    font-size: $fz36;
  }
  p {
    line-height: 0.6933rem;
    font-size: $fz30;
  }
  div {
    width: 100%;
    border-right: 1px solid $ccc;
  }
  div:last-child {
    border: none;
  }
}
.teamSearch {
  margin: 0.2667rem 0;
  background: $white;
}
.teamChange {
  background: $white;
  .tabUl {
    display: flex;
    justify-content: space-between;
    li {
      width: 100%;
      text-align: center;
      line-height: 0.92rem;
      font-size: $fz30;
    }
    margin-bottom: 0.2667rem;
  }
  .contentUl {
    li {
      display: flex;
      justify-content: space-between;
      padding: 0.2667rem 0;
      text-align: center;
    }
    .imgBox {
      margin-left: 0.72rem;
      max-width: 1.3333rem;
      img {
        width: 1.3333rem;
        border: 1px solid $ccc;
        border-radius: 50%;
      }
    }
    .textBox {
      max-width: 4.6rem;
      padding-top: 0.1333rem;
    }
    .typeBox {
      max-width: 2.1333rem;
      margin-right: 0.4rem;
      img {
        width: 2.1333rem;
      }
    }

    h3 {
      line-height: 0.5867rem;
      font-size: $fz30;
    }
    button {
      background: none;
      border: 1px solid $c26;
      height: 0.56rem;
      color: $c26;
      font-size: $fz26;
      border-radius: 0.32rem;
      padding: 0 0.2133rem;
    }
    p {
      line-height: 0.7467rem;
      font-size: $fz28;
    }
    i {
      margin-right: 0.1rem;
    }
  }
}
.text-box {
  padding-bottom: 0.2667rem;
}
</style>
