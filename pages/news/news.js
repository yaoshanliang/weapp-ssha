var CONFIG = require('../../utils/config.js')

Page({
  data:{
    
    
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: CONFIG.API_URL.GET_CATEGORY + '17',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res);

        if (res.statusCode == 200 && res.data.status == 'ok') {
          var data = res.data;
          var news = [];
          
          console.log(data);
          for (var i = 0; i < data.count; i++) {
            var excerpt_plain = data.posts[i].excerpt.replace(/<[^>].*?>/g, "");
            data.posts[i].excerpt_plain = excerpt_plain.replace(/\[[^\]].*?\]/g, "");
            news.push(data.posts[i]);
          }
          that.setData({news: news});
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
