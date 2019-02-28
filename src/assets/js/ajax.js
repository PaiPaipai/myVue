import Vue from 'vue'
import {
  Toast
} from 'vant'
import {
  config
} from './config' // 引入配置的公共接口url
Vue.use(Toast)
console.log('ajax')
export default {
  install(Vue, options) {
    Vue.prototype.config = {
      // URL: 'http://47.107.80.60/abapp/interface/',
      // URL: 'http://192.168.0.106:8888/abapp/interface/',
      APPID: 'wx70278d7dc8f6b6cb',
      APPSECRET: '8d4c520a921cc391fd01ef82218227b0',

    }
    Vue.prototype.API = {
      getMyInfo: 'member/getMyInfo', //查询获取用户信息
      WXLOGIN: 'member/wxLogin', //微信登录接口
      promoterRank: 'member/promoterRank', //查询我的团队接口
      queryTx: 'amountUrl/queryTx', //查询提现明细
      queryJs: 'amountUrl/queryJs', //查询结算明细
      amount: 'amountUrl/amount', //提现或者结算
      queryMySuperior: 'amountUrl/queryMySuperior', //查询分润明细
      queryMyOfflineNum: 'amountUrl/queryMyOffline', //查询我的推广员
      queryMyTixian: 'amountUrl/queryMyTixian', //查询提现列表
      findAllUserCredits: 'credit/findAllUserCredits', //查询信用卡列表
      saveOrUpdateUserCredit: 'credit/saveOrUpdateUserCredit', //新增或修改信用卡
      delUserCredit: 'credit/delUserCredit', //删除信用卡
      getSubBankList: 'subBank/getSubBankList', //获取支行分类
      realName: 'member/realNameAll', //实名接口
      sendSms: 'sms/sendSms', //发送短信验证码
      getAreaCodeByType: 'areaCode/getAreaCodeByType', //获取省市区
      updateUserInfo: 'member/updateUserInfo', //修改用户个人信息
      getNoticeModelListByPage: 'notice/getNoticeModelListByPage', //查找公告
      realNameFake: 'member/realNameFake', //假实名填写资料
      applyCreditCard: 'creditCard/applyCreditCard', //申请信用卡填写资料
      uploadImg: 'file/uploadImg', //上传图片
      applyBorrowInfo: 'applyBorrow/applyBorrowInfo', //申请贷款
      reCharge: 'reCharge/reCharge', //易宝支付
      findUserShareRateList: 'credit/findUserShareRateList', //易宝获取type
      reChargeByTianFuBao: 'reCharge/reChargeByTianFuBao', //天下付接口
      addPayPass: 'member/addPayPass', //设置用户密码
      wxPay: 'bigDataInfo/wxPay', //微信支付
      wxZf: 'https://api.mch.weixin.qq.com/pay/unifiedorder', //微信接口
      weixinLogin: 'wx/weixinLogin', //微信授权登录
      authorize: 'wx/authorize', //微信授权
      upPayPass: 'member/upPayPass', //修改密码
      resetPayPass: 'member/resetPayPass', //重置密码
      getContent: 'member/getContent', //获取资讯
      updateReadCount: 'member/updateReadCount', //点击阅读资讯
      getCashOut: 'bigDataInfo/getCashOut', //查询用户充值明细
      wxShare: 'bigDataInfo/share', //查询分享接口
      getShareUrl: 'member/getShareUrl', //查询分享二维码
      getLoanInfoList: 'loanInfo/getLoanInfoList', //获取贷款列表
      addCreditCard: 'daiKou/addCreditCard', //新增代扣信用卡
      getCreditCardList: 'daiKou/getCreditCardList', //代扣西用卡列表
      editCreditCard: 'daiKou/editCreditCard', //修改代扣信用卡
      editCashCard: 'daiKou/editCashCard', //修改代扣储蓄卡
      cardOrderList: 'daiKou/cardOrderList', //获取计划列表
      unbundlCreditCard: 'daiKou/unbundlCreditCard', //解绑信用卡
      addGeneration: 'daiKou/addGeneration', //创建订单
      confirmGenerationInfo: 'daiKou/confirmGenerationInfo', // 订单支付
      getGenerationInfo: 'daiKou/getGenerationInfo', //获取订单详情
      deleteOrder: 'daiKou/deleteOrder', //取消订单
      orderPayment: 'daiKou/orderPayment', //支付确认
      productApply: 'daiKou/productApply', //过桥垫资 
      queryCity: 'bigDataInfo/queryCity', //获取省市区
      queryHouse: 'bigDataInfo/queryHouse', //查找房产信息
      queryTung: 'bigDataInfo/queryTung', //查询楼栋
      queryFloor: 'bigDataInfo/queryFloor', //查询楼层
      queryRoom: 'bigDataInfo/queryRoom', //查询房间
      queryHouseMoney: 'bigDataInfo/queryHouseMoney', //查询楼盘价格
      queryPayMoney: 'bigDataInfo/queryPayMoney', //获取支付金额
      payCheck: 'bigDataInfo/payCheck', //支付检查
      getBigDataInfo: 'bigDataInfo/getBigDataInfo', //获取大数据 
      queryReport: 'bigDataInfo/queryReport', //获取报告
      getBigDataInfo: 'bigDataInfo/getBigDataInfo', //过桥垫资,
      getBigDataHistory: 'bigDataInfo/getBigDataHistory', //大数据历史
      getBigDataHistoryOne: 'bigDataInfo/getBigDataHistoryOne', //大数据详情

      judiciary: 'bigDataInfo/getBigDataInfo', // 大数据个人司法

      getBigDataInfo: 'bigDataInfo/getBigDataInfo', //过桥垫资 

      test: 'testInterface/test',
    }
    Vue.prototype.testFunc = function () {
      return this._ajax(Vue.prototype.API.test)
    }

    Vue.prototype.xxx = function (param, callback) {
      var that = this;
      getBigDataHistoryOne
      var data = param
      console.log('getContent')
      return that._ajax(Vue.prototype.API.getContent, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback() : ''
          // that.setLocalStorage('userMoney', JSON.stringify(datas))
          // that.$store.commit('setUserMoney', datas)
        } else {
          Toast(res.message);
        }
      })
    }
    //登录，每次登录token不一样所以，只需要调用一次
    Vue.prototype.wxLogin = function (vm) {
      var that = vm;
      var flag = true
      if (!that.getLocalStorage('wxData') && that.getUrlParam('admin')) { //检测是是微信
        var wxData = {
          // "openId": "o2-ZB5p-AXA5v7nEJNoAUDic6CwA",
          "openId":"o2-ZB5luaKKGtmcU_r7phuFroDKE",  
          "nickName": "Obama001",
          "sex": 1,
          "language": "zh_CN",
          "city": "Wuhan",
          "province": "Hubei",
          "country": "CN",
          "headimgurl": "http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/Q0j4TwGTfTI6peKPzsWiaxOtC0eaP1IpibicvLokBQC61QjIsfL21ycWuCDhGWvAicWtPibTTLfcmZBiaDRs1zKG0bHQ\/132",
          "privilege": [],
          token: 'test'
        }
        that.$store.commit('setWxData', wxData)
        that.setLocalStorage('wxData', JSON.stringify(wxData))
      }
      if (flag) {
        var data = JSON.parse(that.getLocalStorage('wxData')) || {};
        data.wxPhoto = data.headImgUrl;
        data.invitationId = that.getLocalStorage('invitationId') || ''
        Toast(data.invitationId)
        if (data.openId) { //有openid 才能登陆
          return that._ajax(Vue.prototype.API.WXLOGIN, data).then(function (res) {
            if (res.code == 0) {
              var datas = res.data.user;
              datas.levelName = Vue.prototype.checkLevel(datas.level);
              datas.certificationName = datas.certification == 1 ? '已实名' : '未实名';
              datas.createTime = Vue.prototype.formatDateTime(datas.dateCreated / 1000)
              datas.money = res.data.money;
              datas.areaName = res.data.areaName;
              datas.settleAddr = res.data.settleAddr;
              that.setLocalStorage('userData', JSON.stringify(datas))
              that.setLocalStorage('userId', datas.id)
              that.$store.commit('setUserData', datas)
              that.$store.commit('setUserId', datas.id)
              if (!that.getLocalStorage('userInfo')) {
                that.getMyInfo(that, that.getMyInfoCb);

              }
            } else {
              Toast(res.message);
            }
          })
        }
      }

    }
    //获取用户信息
    Vue.prototype.getMyInfo = function (vm, callback) {
      var that = vm;
      if (!that.getLocalStorage('userId')) {
        that.start(that)
        return
      }
      var data = {
        userId: that.getLocalStorage('userId')
      };
      return that._ajax(Vue.prototype.API.getMyInfo, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data.user;
          datas.levelName = Vue.prototype.checkLevel(datas.level);
          datas.certificationName = datas.certification == 1 ? '已实名' : '未实名';
          datas.createTime = Vue.prototype.formatDateTime(datas.dateCreated / 1000)
          datas.money = res.data.money;
          datas.areaName = res.data.areaName;
          datas.settleAddr = res.data.settleAddr;
          that.setLocalStorage('userInfo', JSON.stringify(datas))
          that.$store.commit('setUserInfo', datas)
          that.setLocalStorage('txUserId', JSON.stringify(res.data.userId * 1))
          callback ? callback(vm) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.promoterRank = function (vm) {
      var that = vm;
      var data = {
        userId: that.getLocalStorage('userId'),
      };
      return that._ajax(Vue.prototype.API.promoterRank, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          var arrList = [
            [],
            [],
            [],
            []
          ];
          datas.dataList.forEach(function (item, i) {
            item.type = item.certification == 1 ? 'static/img/yrz.png' : 'static/img/wrz.png'
            switch (item.level) {
              case '门店经理':
                arrList[0].push(item)
                break;
              case '团队经理':
                arrList[1].push(item)
                break;
              case '渠道经理':
                arrList[2].push(item)
                break;
              case '普通用户':
                arrList[3].push(item)
                break;
              default:
                break;
            }
          })
          datas.arrList = arrList;
          that.setLocalStorage('userTeam', JSON.stringify(datas))
          that.$store.commit('setUserTeam', datas)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.queryTx = function () {
      var that = this;
      var data = {
        userId: that.getLocalStorage('userId')
      };
      console.log('查询提现明细')
      return that._ajax(Vue.prototype.API.queryTx, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          that.setLocalStorage('userMoney', JSON.stringify(datas))
          that.$store.commit('setUserMoney', datas)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.queryJs = function (callback) {
      var that = this;
      var data = {
        userId: that.getLocalStorage('userId')
      };
      console.log('查询结算明细')
      return that._ajax(Vue.prototype.API.queryJs, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          that.setLocalStorage('userJs', JSON.stringify(datas))
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.amount = function (params, callback) {
      var that = this;
      var data = params
      console.log('amount')
      return that._ajax(Vue.prototype.API.amount, data).then(function (res) {
        if (res.code == 0) {

          var datas = res.data;
          if (params.type == 1) {
            Toast.success('结算成功!')
          } else {
            Toast.success('提现成功,请耐心等待审核!')
          }

          setTimeout(function () {
            callback ? callback() : ''
          }, 1000)

        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.queryMyTixian = function (callback, obj) {
      var data = {
        userId: this.$store.state.userId,
      };
      var that = this;
      return this._ajax(Vue.prototype.API.queryMyTixian, data).then(function (res) {
        if (res.code == 0) {

          var datas = res.data;
          var arrList = [];
          datas.forEach(function (item, i) {
            var kong = {};
            kong.name = item.create_time
            kong.phone = item.amount
            kong.level = {
              name: item.status,
              color: item.status == '已审核' ? '#FFA929' : '#FE1F00'
            }
            arrList.push(kong)
          })
          obj.moneyDetails.tuig.list = arrList
          that.setLocalStorage('moneyMx', JSON.stringify(obj))
          callback ? callback() : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.queryMySuperior = function (callback, obj) {
      var that = this;
      var data = {
        userId: that.getLocalStorage('userId')
      };
      console.log('xxx')
      return that._ajax(Vue.prototype.API.queryMySuperior, data).then(function (res) {
        if (res.code == 0) {

          var datas = res.data;
          var arrList = [];
          datas.forEach(function (item, i) {
            var kong = {};
            kong.name = item.time
            kong.phone = item.creditCardAmount
            kong.level = {
              name: item.level,
              color: item.level == '普通用户' ? '#FFA929' : '#FE1F00'
            }
            arrList.push(kong)
          })
          obj.moneyDetails.fenr.list = arrList
          that.setLocalStorage('moneyMx', JSON.stringify(obj))
          callback ? callback() : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.queryMyOfflineNum = function (callback, mx) { //直接一下调用两次接口  推广员和 分润记录
      var that = this;
      var data = {
        userId: that.getLocalStorage('userId')
      };
      console.log('queryMyOfflineNum')
      return that._ajax(Vue.prototype.API.queryMyOfflineNum, data).then(function (res) { //  推广员
        if (res.code == 0) {

          var datas = res.data;
          var arr = [];
          datas.forEach(function (item) {
            var kong = {};
            kong.name = item.name || '未实名'
            kong.phone = item.loginName.length > 11 ? '未实名' : item.loginName
            kong.level = {
              name: item.userLevelName,
              color: item.userLevelName == '普通用户' ? '#FFA929' : '#FE1F00'
            }
            arr.push(kong)
          })
          // callback ? callback() : ''
          mx.moneyDetails.tuig.list = arr;
          Vue.prototype.queryMySuperior(callback ? callback : '', mx) //分润记录
          // that.setLocalStorage('moneyMx', JSON.stringify(mx))
          // callback ? callback() : ''


        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.findAllUserCredits = function (vm) {
      var that = vm;
      var data = {
        userId: that.getLocalStorage('userId'),
      };
      console.log('查询信用卡管理列表')
      return that._ajax(Vue.prototype.API.findAllUserCredits, data).then(function (res) {
        if (res.code == 0) {

          var datas = res.data;
          var bankInfo = config.bankInfo;
          datas.forEach(function (item, i) {
            bankInfo.forEach(function (items, k) {
              if (item.bankCode == items.code) {
                item.icon = items.icon
                item.color = items.color
              }
            })
          })
          that.setLocalStorage('userCardList', JSON.stringify(datas))
          that.$store.commit('setUserCardList', datas)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.saveOrUpdateUserCredit = function () {
      var that = this;
      var data = that.$store.state.addCardList;
      console.log('新增信用卡')
      return that._ajax(Vue.prototype.API.saveOrUpdateUserCredit, data).then(function (res) {
        if (res.code == 0) {
          Toast('新增信用卡成功');
          that.removeLocalStorage('userCardList')
          setTimeout(function () {
            that.routerBack(that)
          }, 500)
        } else {
          Toast(res.message);
        }

      })
    }
    Vue.prototype.delUserCredit = function (account) {
      var that = this;
      var data = {
        account: account,
      };
      console.log('delUserCredit')
      return that._ajax(Vue.prototype.API.delUserCredit, data).then(function (res) {
        if (res.code == 0) {
          Toast('删除信用卡成功');
          that.removeLocalStorage('userCardList')
          that.checkLogin('userCardList', 'setUserCardList', that.findAllUserCredits)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.getSubBankList = function (data) {
      var that = this;
      var data = data
      console.log('getSubBankList')
      return that._ajax(Vue.prototype.API.getSubBankList, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          that.$store.commit('setSubBankList', datas)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.realName = function (params) {
      var that = this;
      var data = params;
      console.log('realName')
      return that._ajax(Vue.prototype.API.realName, data).then(function (res) {
        if (res.code == 0) {
          Toast('实名成功');
          that.removeLocalStorage('userInfo')
          setTimeout(function () {
            that.$router.replace('UserCenter')
          }, 500)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.sendSms = function (mobile) {
      var that = this;
      var data = {
        mobile: mobile,
        key: config.key.APP_REAL,
      };
      console.log('sendSms')
      return that._ajax(Vue.prototype.API.sendSms, data).then(function (res) {
        if (res.code == 0) {
          Toast.success('发送短信成功!')

          var datas = res.data;
          // that.setLocalStorage('userMoney', JSON.stringify(datas))
          // that.$store.commit('setUserMoney', datas)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.getAreaCodeByType = function (data, callback) {
      var that = this;
      var data = data
      console.log('getAreaCodeByType')
      return that._ajax(Vue.prototype.API.getAreaCodeByType, data).then(function (res) {
        if (res.code == 0) {
          // areaCode provinceName
          var datas = res.data;
          var proviceList = [];
          datas.forEach(function (item) {
            const objs = {};
            objs.text = item[data.name];
            objs.id = item[data.code];
            proviceList.push(objs)
          })
          if (data.type == 1) {
            that.setLocalStorage('proviceList', JSON.stringify(proviceList))
          } else if (data.type == 2) {
            that.setLocalStorage('cityList', JSON.stringify(proviceList))
          } else if (data.type == 3) {
            that.setLocalStorage('areaList', JSON.stringify(proviceList))
          }
          callback ? callback(proviceList) : ''
          console.log(that.$store.state.proviceList)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.updateUserInfo = function (params, callback) {
      var that = this;
      var data = params
      console.log('updateUserInfo')
      return that._ajax(Vue.prototype.API.updateUserInfo, data).then(function (res) {
        if (res.code == 0) {

          var datas = res.data;
          callback ? callback() : '';
          that.removeLocalStorage('userInfo');
          setTimeout(function () {
            that.$router.replace('UserCenter')
          }, 500)
        } else {
          Toast(res.message);
        }

      })
    }
    Vue.prototype.getNoticeModelListByPage = function (callback) {
      var that = this;
      var data = {
        page: config.page,
        pageSize: config.pageSize,
        userId: that.getLocalStorage('userId') || 1,
      };
      console.log('getNoticeModelListByPage')
      return that._ajax(Vue.prototype.API.getNoticeModelListByPage, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          var str = ''
          if (datas.length) {
            datas.forEach(function (item, i) {
              str += (i + 1) + '.' + item;
            })
            callback ? callback(str) : ''
          }
        }
      })
    }
    Vue.prototype.realNameFake = function (params, callback) {
      var that = this;
      console.log('realNameFake')
      return that._ajax(Vue.prototype.API.realNameFake, params).then(function (res) {
        if (res.code == 0) {
          Toast.success('登录成功!')

          var datas = res.data;
          callback ? callback() : ''
        } else {
          Toast(res.message);
        }

      })
    }
    Vue.prototype.applyCreditCard = function (params, callback) {
      var that = this;
      var data = params
      console.log('applyCreditCard')
      return that._ajax(Vue.prototype.API.applyCreditCard, data).then(function (res) {
        if (res.code == 0) {
          Toast.success('填写正确！')

          var datas = res.data;
          callback ? callback(params) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.uploadImg = function (params, callback) {
      var that = this;
      console.log('uploadImg')
      var data = {
        baseStr: params
      }
      return that._ajax(Vue.prototype.API.uploadImg, data).then(function (res) {
        if (res.code == 0) {
          Toast('图片上传成功!')

          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.applyBorrowInfo = function (params, callback) {
      var that = this;
      var data = params
      console.log('xxx')
      return that._ajax(Vue.prototype.API.applyBorrowInfo, data).then(function (res) {
        if (res.code == 0) {

          var datas = res.data;
          callback ? callback(res, params) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.findUserShareRateList = function (params, callback) { //易宝获取type
      var that = this;
      var data = params
      console.log('findUserShareRateList')
      return that._ajax(Vue.prototype.API.findUserShareRateList, data).then(function (res) {
        if (res.code == 0) {

          var datas = res.data;
          callback ? callback(datas[0]) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.reCharge = function (params, callback) { //易宝支付
      var that = this;
      var data = params
      console.log('reCharge')
      return that._ajax(Vue.prototype.API.reCharge, data).then(function (res) {
        if (res.code == 0) {

          var datas = res.data;
          callback ? callback(datas.html) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.addPayPass = function (params, callback) { //易宝支付
      var that = this;
      var data = params
      console.log('addPayPass')
      return that._ajax(Vue.prototype.API.addPayPass, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          that.setLocalStorage('userInfo', JSON.stringify(datas))
          callback ? callback(res) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.reChargeByTianFuBao = function (params, callback) {
      var that = this;
      var data = params
      console.log('reChargeByTianFuBao')
      return that._ajax(Vue.prototype.API.reChargeByTianFuBao, data).then(function (res) {
        if (res.code == 0) {

          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }

    Vue.prototype.wxPay = function (param, callback) {
      var that = this;
      var data = param
      console.log('xxx')
      return that._ajax(Vue.prototype.API.wxPay, data).then(function (res) {
        if (res.code == 0) {

          var datas = res.data.msg;
          callback ? callback(datas) : ''
          // that.setLocalStorage('userMoney', JSON.stringify(datas))
          // that.$store.commit('setUserMoney', datas)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.wxZf = function (param, callback) {
      var that = this;
      var data = param

      function onBridgeReady() {
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest',
          data,
          function (res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              Toast('支付成功！')
              callback ? callback(param) : ''
            } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
              Toast('支付取消')
            } else if (res.err_msg == "get_brand_wcpay_request:fail") {
              Toast('支付失败')
            }
          });
      }
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
          document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
      } else {
        onBridgeReady();
      }
    }
    Vue.prototype.authorize = function (callback) {
      var that = this;
      console.log('xxx')
      return that._ajax(Vue.prototype.API.authorize, {}).then(function (res) {
        if (res.errCode == 0) {

          var datas = res;
          callback ? callback(datas.msg) : ''

        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.weixinLogin = function (params, callback) {
      var that = this;
      var data = params;
      return that._ajax(Vue.prototype.API.weixinLogin, data).then(function (res) {
        if (res.code == 0) {
          Toast('登录成功')
          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.upPayPass = function (param, callback) {
      var that = this;
      var data = param
      console.log('xxx')
      return that._ajax(Vue.prototype.API.upPayPass, data).then(function (res) {
        if (res.code == 0) {
          Toast('修改支付密码成功')

          var datas = res.data;
          callback ? callback() : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.resetPayPass = function (param, callback) {
      var that = this;
      var data = param
      console.log('resetPayPass')
      return that._ajax(Vue.prototype.API.resetPayPass, data).then(function (res) {
        if (res.code == 0) {
          Toast('重置支付密码成功')
          var datas = res.data;
          callback ? callback() : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.getContent = function (param, callback) {
      var that = this;
      var data = param
      console.log('getContent')
      return that._ajax(Vue.prototype.API.getContent, data).then(function (res) {
        if (res.code == 0) {

          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.updateReadCount = function (param, callback) {
      var that = this;
      console.log('增加阅读量')
      var data = param
      console.log('updateReadCount')
      return that._ajax(Vue.prototype.API.updateReadCount, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback() : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.getCashOut = function (param, callback) {
      var that = this;
      var data = param
      console.log('getCashOut')
      return that._ajax(Vue.prototype.API.getCashOut, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }

    Vue.prototype.ppsow = ((url,vm)=>{

    })

    Vue.prototype.wxShare = function (url, vm) {
      var that = vm;
      console.log('wxShare')
      return that._ajax(Vue.prototype.API.wxShare, {
        url: url
      }).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          that.setLocalStorage('wxShare', JSON.stringify(datas))
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: datas.appid, // 必填，公众号的唯一标识
            timestamp: datas.timestamp, // 必填，生成签名的时间戳
            nonceStr: datas.nonceStr, // 必填，生成签名的随机串
            signature: datas.signature, // 必填，签名
            jsApiList: [
              "onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems"
            ] // 必填，需要使用的JS接口列表
          });
          that.wxShareCallBack(vm.$router.currentRoute, vm)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.getShareUrl = function (param, callback) {
      var that = this;
      var data = param;
      console.log('getShareUrl');
      return that._ajax(Vue.prototype.API.getShareUrl, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : '';
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.getLoanInfoList = function (param, callback) {
      var that = this;
      var data = param
      console.log('getContent')
      return that._ajax(Vue.prototype.API.getLoanInfoList, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          console.log(datas);
          callback ? callback(datas) : ''
          that.setLocalStorage('CreditList', JSON.stringify(datas))
        } else {
          Toast(res.message);
        }
      })
    }

    Vue.prototype.getCreditCardList = function (param, callback) {
      var that = this;
      var data = param
      console.log('getCreditCardList')
      return that._ajax(Vue.prototype.API.getCreditCardList, data).then(function (res) {
        if (res.code == 0) {

          var datas = res.data.resultList;
          var bankInfo = config.bankInfo;
          datas.forEach(function (item, i) {
            bankInfo.forEach(function (items, k) {
              if (item.bank == items.text) {
                item.icon = items.icon
                item.color = items.color
              }
            })
          })

          if (param.type == 2) {
            that.setLocalStorage('dkXyk', JSON.stringify(datas))
          } else if (param.type == 1) {
            that.setLocalStorage('dkCxk', JSON.stringify(datas))
          }
          callback ? callback(param.type, datas) : ''

        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.addCreditCard = function (param, callback) {
      var that = this;
      var data = param
      console.log('addCreditCard')
      return that._ajax(Vue.prototype.API.addCreditCard, data).then(function (res) {
        if (res.code == 0) {
          Toast('新增成功');
          var datas = res.data;
          callback ? callback() : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.editCreditCard = function (param, callback) {
      var that = this;
      var data = param
      console.log('editCreditCard')
      return that._ajax(Vue.prototype.API.editCreditCard, data).then(function (res) {
        if (res.code == 0) {
          Toast('修改成功')
          var datas = res.data;
          var bankInfo = config.bankInfo;
          var arr = []
          arr.push(datas)
          arr.forEach(function (item, i) {
            bankInfo.forEach(function (items, k) {
              if (item.bank == items.text) {
                item.icon = items.icon
                item.color = items.color
              }
            })
          })
          that.setLocalStorage('huanCard', JSON.stringify(datas))
          callback ? callback() : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.editCashCard = function (param, callback) {
      var that = this;
      var data = param
      console.log('editCashCard')
      return that._ajax(Vue.prototype.API.editCashCard, data).then(function (res) {
        if (res.code == 0) {
          Toast('修改成功')
          var datas = res.data;

          callback ? callback() : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.cardOrderList = function (param, callback) {
      var that = this;
      var data = param
      console.log('cardOrderList')
      return that._ajax(Vue.prototype.API.cardOrderList, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.unbundlCreditCard = function (param, callback) {
      var that = this;
      var data = param
      console.log('unbundlCreditCard')
      return that._ajax(Vue.prototype.API.unbundlCreditCard, data).then(function (res) {
        if (res.code == 0) {
          Toast('解绑成功')
          var datas = res.data;
          callback ? callback() : ''
          // that.setLocalStorage('userMoney', JSON.stringify(datas))
          // that.$store.commit('setUserMoney', datas)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.addGeneration = function (param, callback) {
      var that = this;
      var data = param
      console.log('addGeneration')
      return that._ajax(Vue.prototype.API.addGeneration, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          that.setLocalStorage('secondPlan', JSON.stringify(datas))
          callback ? callback(param) : ''
          // that.setLocalStorage('userMoney', JSON.stringify(datas))
          // that.$store.commit('setUserMoney', datas)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.confirmGenerationInfo = function (param, callback) {
      var that = this;
      var data = param
      console.log('confirmGenerationInfo')
      return that._ajax(Vue.prototype.API.confirmGenerationInfo, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas, param) : ''
          // that.setLocalStorage('userMoney', JSON.stringify(datas))
          // that.$store.commit('setUserMoney', datas)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.deleteOrder = function (param, callback) {
      var that = this;
      var data = param
      console.log('deleteOrder')
      return that._ajax(Vue.prototype.API.deleteOrder, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback() : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.getGenerationInfo = function (param, callback) {
      var that = this;
      var data = param
      console.log('getGenerationInfo')
      return that._ajax(Vue.prototype.API.getGenerationInfo, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.orderPayment = function (param, callback) {
      var that = this;
      var data = param
      console.log('orderPayment')
      return that._ajax(Vue.prototype.API.orderPayment, data).then(function (res) {
        if (res.code == 0) {
          Toast('支付成功！')
          var datas = res.data;
          callback ? callback() : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.productApply = function (param, callback) {
      var that = this;
      var data = param
      console.log('getContent')
      return that._ajax(Vue.prototype.API.productApply, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
          // that.setLocalStorage('userMoney', JSON.stringify(datas))
          // that.$store.commit('setUserMoney', datas)
        } else {
          Toast(res.message);
        }
      })
    }

    Vue.prototype.queryCity = function (param, callback) {
      var that = this;
      var data = param
      console.log('queryCity')
      return that._ajax(Vue.prototype.API.queryCity, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
          // that.setLocalStorage('userMoney', JSON.stringify(datas))
          // that.$store.commit('setUserMoney', datas)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.queryHouse = function (param, callback) {
      var that = this;
      var data = param
      console.log('queryHouse')
      return that._ajax(Vue.prototype.API.queryHouse, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          that.$store.commit('setSubBankList', datas)
          callback ? callback(datas) : ''
          // that.setLocalStorage('userMoney', JSON.stringify(datas))
          // that.$store.commit('setUserMoney', datas)
        } else {
          Toast(res.message);
        }
      })
    }

    Vue.prototype.queryTung = function (param, callback) {
      var that = this;
      var data = param
      console.log('queryTung')
      return that._ajax(Vue.prototype.API.queryTung, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.queryFloor = function (param, callback) {
      var that = this;
      var data = param
      console.log('queryFloor')
      return that._ajax(Vue.prototype.API.queryFloor, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.queryRoom = function (param, callback) {
      var that = this;
      var data = param
      console.log('queryRoom')
      return that._ajax(Vue.prototype.API.queryRoom, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.queryHouseMoney = function (param, callback) {
      var that = this;
      var data = param
      console.log('queryHouseMoney')
      return that._ajax(Vue.prototype.API.queryHouseMoney, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas, param) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.queryPayMoney = function (param, callback) {
      var that = this;
      var data = param
      console.log('queryPayMoney')
      return that._ajax(Vue.prototype.API.queryPayMoney, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
          // that.setLocalStorage('userMoney', JSON.stringify(datas))
          // that.$store.commit('setUserMoney', datas)
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.payCheck = function (param, callback) {
      var that = this;
      var data = param
      console.log('payCheck')
      return that._ajax(Vue.prototype.API.payCheck, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }

    Vue.prototype.getBigDataInfo = function (param, callback) {
      var that = this;
      var data = param
      console.log('getBigDataInfo')
      return that._ajax(Vue.prototype.API.getBigDataInfo, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }

    Vue.prototype.queryReport = function (param, callback) {
      var that = this;
      var data = param
      console.log('queryReport')
      return that._ajax(Vue.prototype.API.queryReport, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }
    Vue.prototype.getBigDataHistory = function (param, callback) {
      var that = this;
      var data = param
      return that._ajax(Vue.prototype.API.getBigDataHistory, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }

    Vue.prototype.getBigDataHistoryOne = function (param, callback) {
      var that = this;
      var data = param
      console.log('getBigDataHistoryOne')
      return that._ajax(Vue.prototype.API.getBigDataHistoryOne, data).then(function (res) {
        if (res.code == 0) {
          var datas = res.data;
          callback ? callback(param, datas) : ''
        } else {
          Toast(res.message);
        }
      })
    }

    Vue.prototype.judiciary = ((param, callback)=>{
      var that = this;
      var data = param;
      return that._ajax(Vue.prototype.API.judiciary,data).then((res)=>{
           
      })

    }) 
      
  }
}
