var CONFIG = require('../../utils/config.js')

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swipers: [],
    news: [],
    cat: '17',
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: CONFIG.API_URL.GET_INDEX,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res);

        if (res.statusCode == 200 && res.data.status == 'ok') {
          var data = res.data;
          var swipers = [];
          var news = [];
          
          console.log(data);
          for (var i = 0; i < data.count; i++) {
            if (i < 3) {
              swipers.push(data.posts[i]);
            }
            else {
              var excerpt_plain = data.posts[i].excerpt.replace(/<[^>].*?>/g, "");
              data.posts[i].excerpt_plain = excerpt_plain.replace(/\[[^\]].*?\]/g, "");
              news.push(data.posts[i]);
            }
          }
          that.setData({swipers: swipers});
          that.setData({news: news});
        } else {
          
        }
      }
    })
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
   console.log('onShareAppMessage')
   return {
      title: '盛世华安',
      desc: '小程序',
      path: '/pages/index/index'
    }
  },
});
