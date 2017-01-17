var CONFIG = require('../../utils/config.js')
var WxParse = require('../../utils/wxParse/wxParse.js');

var app = getApp();
Page({
  data:{
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: CONFIG.API_URL.GET_ARTICLE + options.id,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res);

        if (res.statusCode == 200 && res.data.status == 'ok') {        
          var data = res.data;

          that.setData({
            news: data.post,
          })
          WxParse.wxParse('content', 'html', data.post.content, that, 25)
        } else {
          
        }
      }
    })
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
