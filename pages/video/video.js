// pages/video/video.js
function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  data: {
    title: '宣传片',
    src: 'http://www.jsssha.com/wp-content/uploads/2016/11/%E6%8C%82%E7%89%8C.mp4',
    danmuList: [
      {
        text: '盛世华安好棒',
        color: '#ff0000',
        time: 1
      },
      {
        text: '可以发弹幕居然',
        color: '#ff00ff',
        time: 2
      },
      {
        text: '精彩的在后面',
        color: '#ff0000',
        time: 3
      }
    ]
    },
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function() {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front','back'],
      success: function(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  }
})
