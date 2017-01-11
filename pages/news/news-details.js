// pages/news/news.js
var WxParse = require('../../utils/wxParse/wxParse.js');
var newsdetails = require('../../utils/news.js');
var app = getApp();
Page({
  data:{
  },
  onLoad:function(options){
    var news = newsdetails.newsdetails;
    var that = this;
    //WxParse.wxParse('title', 'html', newsdetails[options.id].title, that,5)
    WxParse.wxParse('content', 'html', news[options.id].content, that,5)
    that.setData({
        title: news[options.id].title
      })
    ;
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
  }
})
