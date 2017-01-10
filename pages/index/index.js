Page({
  data: {
    title: '江苏盛世华安智能科技有限公司',
    list: [
      {
        id: 'introduction',
        name: '公司介绍',
        open: false,
        // pages: ['view', 'scroll-view', 'swiper']
      }
    ]
  },
  widgetsToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    console.log(id);
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    });
  }
});
