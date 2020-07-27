//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595870499427&di=a4bdde7fb0f5e8cb143b4fa56738bdf6&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D1179872664%2C290201490%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595870499427&di=a4bdde7fb0f5e8cb143b4fa56738bdf6&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D1179872664%2C290201490%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595870499427&di=a4bdde7fb0f5e8cb143b4fa56738bdf6&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D1179872664%2C290201490%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name:'堂食',
        url:'dishes'
      },
      {
        name:'外卖',
        url:'take',
        isSplot:true
      },
      {
        name:'外带',
        url:'out'
      },
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
    
})
