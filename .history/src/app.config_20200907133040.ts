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
  tabbar: [
    { text: '首页', path: 'pages/index/index' },
    { text: '点单', path: 'pages/order/order' },
    { text: '订单', path: 'pages/form/form' },
    { text: '我', path: 'pages/me/me' }
  ]
}
