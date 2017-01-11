// pages/news/news.js
var WxParse = require('../../utils/wxParse/wxParse.js');
Page({
  data:{
    'news': [
      {
        'id': 0,
        'pic': 'http://www.jsssha.com/wp-content/uploads/2016/12/4-300x250.jpg',
        'title': '“创新发展 再创辉煌”盛世华安2016年度圣诞主题年会圆满落幕',
        'content': '2016年，对于盛世华安而言是一个机遇与挑战并存的一年，更是收获的一年。这一年在公司领导层的正确领导和支持下，全体员工齐心协力，顽强进取，各方面的工作都取得了一定的成绩。'
      },
      {
        'id': 1,
        'pic': '',
        'title': '',
        'content': ''
      },
    ]
  },
  onLoad:function(options){
var article = '<div>我是HTML代码</div>';
var that = this;
WxParse.wxParse('article', 'html', article, that,5);
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  go: function(event) {
    wx.navigateTo({
      url: '/pages/news/news-details?id=' + event.currentTarget.dataset.type
    })
  }
})
