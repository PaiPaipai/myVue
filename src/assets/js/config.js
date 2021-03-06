// export const axiosUrl = 'http://47.107.80.60/abapp/interface/'
export const config = {
  URL: "http://120.79.58.75/abapp/interface/",
  // URL: "http://192.168.0.118:8888/abapp/interface/",
  timeout: 100000,
  LOCAL: 'http://www.anshby.com/h5/index.html',
  key: {
    APP_REAL: 'APP_REAL',
  },
  reg: {
    ident: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
    phone: /^((13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])+\d{8})$/,
    name: /[\u4e00-\u9fa5]/
  },
  bankHref: {
    SPDB: 'https://agent.51xcm.cn/xinchao/index.html?c=3ZeKbY8',
    BCM: 'https://agent.51xcm.cn/xinchao/index.html?c=MyMYsiN',
    CIB: 'https://wm.cib.com.cn/html/webapp/fast-issue/home.html?id=768e68f3fdf442b2b8ac9bf2d80a183b',
    CEB: 'https://agent.51xcm.cn/xinchao/index.html?c=4SVnkTc',
    CGB: 'https://agent.51xcm.cn/xinchao/index.html?c=M43xmky',
    CMBC: 'https://agent.51xcm.cn/xinchao/index.html?c=YREiDtQP',

  },
  page: 1,
  pageSize: 10,
  bankInfo: [{
      text: '工商银行',
      code: 'ICBC',
      icon: 'icon-gongshang1',
      color: '#d62629'
    },
    {
      text: '农业银行',
      code: 'ABC',
      icon: 'icon-nongye',
      color: '#009174'
    },
    {
      text: '中国银行',
      code: 'BOC',
      icon: 'icon-zhongguo',
      color: '#b81c22'
    },
    {
      text: '建设银行',
      code: 'CCB',
      icon: 'icon-jianshe',
      color: '#e60012'
    },
    {
      text: '交通银行',
      code: 'BCM',
      icon: 'icon-jiaotong',
      color: '#1d2087'
    },
    {
      text: '中信银行',
      code: 'CNCB',
      icon: 'icon-zhongxin',
      color: '#d7000f'
    },
    {
      text: '光大银行',
      code: 'CEB',
      icon: 'icon-guangda1',
      color: '#fdd000'
    },
    {
      text: '华夏银行',
      code: 'HXB',
      icon: 'icon-huaxia',
      color: '#e60012'
    },
    {
      text: '广发银行',
      code: 'CMBC',
      icon: 'icon-guangfa',
      color: '#d81e06'
    },
    {
      text: '民生银行',
      code: 'CGB',
      icon: 'icon-minshengyinhang',
      color: '#0055b8'
    },
    {
      text: '平安银行',
      code: 'PAB',
      icon: 'icon-pingan',
      color: '#ea5504'
    },
    {
      text: '招商银行',
      code: 'CMB',
      icon: 'icon-zhaoshang',
      color: '#e41e26'
    },
    {
      text: '兴业银行',
      code: 'CIB',
      icon: 'icon-xingye',
      color: '#ff0000'
    },
    {
      text: '浦发银行',
      code: 'SPDB',
      icon: 'icon-pufa',
      color: '#003473'
    },
    {
      text: '邮政储蓄',
      code: 'PSBC',
      icon: 'icon-youzheng',
      color: '#007e3e'
    },
    {
      text: '北京银行',
      code: 'BOB',
      icon: 'icon-beijing',
      color: '#e8252a'
    },
    {
      text: '上海银行',
      code: 'BOS',
      icon: 'icon-shanghaiyinhang',
      color: '#00449a'
    },
    {
      text: '厦门银行',
      code: 'XMCCB',
      icon: 'icon-shamenyinhang1',
      color: '#2370b6'
    },
  ]
}
