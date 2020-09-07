export default {
  pages: [
    'pages/index/index',
    'pages/order/order',
    'pages/form/form',
    'pages/me/me'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      { text: '首页', pagePath: 'pages/index/index' },
      { text: '点单', pagePath: 'pages/order/order' },
      { text: '订单', pagePath: 'pages/form/form' },
      { text: '我', pagePath: 'pages/me/me' }
    ]
  }
}
