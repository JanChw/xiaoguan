export default {
  pages: [
    'pages/index/index',
    'pages/order/order',
    'pages/form/form',
    'pages/me/me'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#1296db',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    list: [
      // { text: '首页', pagePath: 'pages/index/index', iconPath: './assets/icons/home.png', selectedIconPath: './assets/icons/_home.png' },
      { text: '点单', pagePath: 'pages/order/order', iconPath: './assets/icons/order.png', selectedIconPath: './assets/icons/_order.png' },
      { text: '订单', pagePath: 'pages/form/form', iconPath: './assets/icons/form.png', selectedIconPath: './assets/icons/_form.png' },
      { text: '我', pagePath: 'pages/me/me', iconPath: './assets/icons/me.png', selectedIconPath: './assets/icons/_me.png' }
    ]
  }
}
