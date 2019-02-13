<template lang="html">
    <div class="MyDialog van-overlay" @click="clickOverlay" v-show="showClone">
        <!-- ... -->
        <div class="dialogBox"  @click="dialogBox">
            <div class="van-dialog__header">{{title}}</div>
            <div class="van-dialog__content">
               <van-field v-for="(item, index) in dialogList" :key="index"
                :class="item.classes"
                v-model="item.money"
                :type="item.type"
                :label="item.label"
                :placeholder="item.placeholder"
              />
            </div>
            <div class="van-dialog__footer van-hairline--top van-dialog__footer--buttons">
              <button class="van-dialog__cancel" @click="cancel">取消</button><button  @click="confirm" class="van-dialog__confirm van-hairline--left">确认</button>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from '@/store/index'
import { Button, Field, Toast } from 'vant'
Vue.use(Field)
export default {
  // 不要忘记了 name 属性
  name: 'MyDialog',
  store,
  // 组合其它组件
  extends: {},
  // 组件属性、变量
  props: ['show', 'dialogList', 'title'],
  // 变量
  data () {
    return {
    }
  },
  computed: {
    showClone: {
      get: function () {
        return this.show
      },
      set: function () {

      }
    }
  },
  //每次进缓存的路由调用
  activated: {},
  // 使用其它组件
  components: {},
  // 方法
  watch: {},
  //每次进没有缓存的路由调用
  methods: {
    dialogBox (e) {
      e.stopPropagation();
    },
    confirm () {
      this.$emit("confirm");
    },
    cancel () {
      this.$emit("cancel");
    },
    clickOverlay () {
      this.$emit("cancel");
    }
    // this.$emit("clickSearch",text);
  },
  // 生命周期函数
  beforeCreate () { },
  created () { },
  mounted () { },
  activated () { }// 每次进路由会调用这个方法

}
</script>

<style  scoped lang="scss">
.van-overlay {
  /* ... */
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.7);
}
.dialogBox {
  position: absolute;
  background: $white;
  border-radius: 0.1333rem;
  top: 40%;
  left: 50%;
  width: 86%;
  min-height: 1.3333rem;
  margin-left: -43%;
  .van-dialog__header {
    padding: 0.2rem 0;
    font-size: 0.4267rem;
  }
  .van-dialog__content {
    padding: 0.2rem 0;
  }
  .van-dialog__footer {
    justify-content: space-between;
    button {
      width: 100%;
      height: 50px;
      font-size: $fz30;
      line-height: 48px;
      background: none;
    }
    .van-dialog__confirm {
      color: $c12;
    }
  }
}
</style>
