var CONFIG = require('../../utils/config.js')
var WxParse = require('../../utils/wxParse/wxParse.js');

Page({
  data: {
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: CONFIG.API_URL.GET_PAGE + '36',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res);

        if (res.statusCode == 200 && res.data.status == 'ok') {
          var data = res.data;
          
          that.setData({page: data.page});
          WxParse.wxParse('content', 'html', data.page.content, that, 25)
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
  },
  go: function(event) {
    wx.navigateTo({
      url: '/pages/news/news-details?id=' + event.currentTarget.dataset.type
    })
  }
})
