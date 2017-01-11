// pages/news/news.js
var WxParse = require('../../utils/wxParse/wxParse.js');
var app = getApp();
Page({
  data:{
  },
  onLoad:function(options){
    var newsdetails = [
      {
        'id': 0,
        'title': '“创新发展 再创辉煌”盛世华安2016年度圣诞主题年会圆满落幕',
        'content': `2016年，对于盛世华安而言是一个机遇与挑战并存的一年，更是收获的一年。这一年在公司领导层的正确领导和支持下，全体员工齐心协力，顽强进取，各方面的工作都取得了一定的成绩。12月24日，“创新发展 再创辉煌”盛世华安2016年度圣诞主题年会在张家港国贸酒店隆重举行，盛世华安全体员工、股东以及董监高欢聚一堂，共度联欢。
此次年会主要分为致辞、表演、游戏、抽奖四个部分，现场气氛热情活跃。首先，公司董事长孙浩元先生发表了重要讲话，他对公司寄予了深深的希望和祝福，希望大家拿出激情和干劲，为公司的2017再创佳绩共同奋斗！会上各部门员工还带来了形式各异、让人目不暇接的表演，有舞蹈、有唱歌、有魔术，更有萨克斯和葫芦丝等乐器演奏，精彩纷呈。中间还穿插了抽奖环节，随着三等奖、二等奖、一等奖、特等奖的抽取不断掀起年会的高潮。年会不仅给大家带来了欢声笑语，同时也通过《你划我猜》等默契游戏让彼此的心更加贴近。公司领导与员工热情互动，歌声、掌声、欢呼声一直在会场上荡漾，呈现出盛世华安这个大家庭的欢乐和谐。

<img class="wp-image-413 size-large aligncenter" src="http://www.jsssha.com/wp-content/uploads/2016/12/3-1024x767.jpg" alt="3" width="1024" height="767" />
<p style="text-align: center;"><strong>现场签到集结了每一位来宾的指纹，创造出独一无二的盛世华安之树</strong></p>
<p style="text-align: left;"><img class="wp-image-414 size-large aligncenter" src="http://www.jsssha.com/wp-content/uploads/2016/12/4-1024x683.jpg" alt="4" width="1024" height="683" /></p>
<p style="text-align: center;"><strong>董事长孙浩元致辞</strong></p>
<p style="text-align: center;"><img class="alignnone wp-image-415 size-large" src="http://www.jsssha.com/wp-content/uploads/2016/12/5-1024x683.jpg" alt="5" width="1024" height="683" /></p>
<p style="text-align: center;"><strong>生产部陈兆明同事为大家带来一首激情昂扬的《祝酒歌》</strong></p>
<p style="text-align: left;"><img class="wp-image-416 size-large aligncenter" src="http://www.jsssha.com/wp-content/uploads/2016/12/6-1024x683.jpg" alt="6" width="1024" height="683" /></p>
<p style="text-align: center;"><strong>采购部包亚明同事使出“绝活”，带来一段魔术表演</strong></p>
<p style="text-align: center;"><img class="alignnone wp-image-417 size-large" src="http://www.jsssha.com/wp-content/uploads/2016/12/7-1024x683.jpg" alt="7" width="1024" height="683" /></p>
<p style="text-align: center;"><strong>采购部刘红艳同事的儿子徐铭洋同学用萨克斯为大家吹奏一曲《康定情歌》</strong></p>
<p style="text-align: center;"><img class="alignnone wp-image-418 size-full" src="http://www.jsssha.com/wp-content/uploads/2016/12/8.jpg" alt="8" width="865" height="577" /></p>
<p style="text-align: center;"><strong>默契游戏——《你划我猜》</strong></p>
<p style="text-align: center;"><img class="alignnone wp-image-419 size-large" src="http://www.jsssha.com/wp-content/uploads/2016/12/9-1024x683.jpg" alt="9" width="1024" height="683" /></p>
<p style="text-align: center;"><strong>孙总千金孙悦宸上台演奏葫芦丝</strong></p>
<p style="text-align: center;"><img class="alignnone wp-image-420 size-large" src="http://www.jsssha.com/wp-content/uploads/2016/12/10-1024x796.jpg" alt="10" width="1024" height="796" /></p>
<p style="text-align: center;"><strong>现场圣诞老人为小朋友们派发礼物</strong></p>
<p style="text-align: center;"><img class="alignnone wp-image-421 size-large" src="http://www.jsssha.com/wp-content/uploads/2016/12/11-1024x683.jpg" alt="11" width="1024" height="683" /></p>
<p style="text-align: center;"><strong>嘉禄讯汇的同事们为大家带来一首《情歌王》</strong></p>
<p style="text-align: center;"><img class="alignnone wp-image-422 size-large" src="http://www.jsssha.com/wp-content/uploads/2016/12/12-1024x739.jpg" alt="12" width="1024" height="739" /></p>
<p style="text-align: center;"><strong>现场赵丽平赵总抽奖环节</strong></p>
<p style="text-align: center;"><img class="alignnone wp-image-423 size-large" src="http://www.jsssha.com/wp-content/uploads/2016/12/13-1024x682.jpg" alt="13" width="1024" height="682" /></p>
<p style="text-align: center;"><strong>财务总监施王红施总为大家带来一支优美的舞蹈《茉莉花》</strong></p>
<p style="text-align: center;"><img class="alignnone wp-image-424 size-large" src="http://www.jsssha.com/wp-content/uploads/2016/12/14-1024x684.jpg" alt="14" width="1024" height="684" /></p>
<p style="text-align: center;"><strong>办公室王黎敏同事为大家带来一首《小幸运》</strong></p>
<p style="text-align: center;"><img class="alignnone wp-image-425 size-large" src="http://www.jsssha.com/wp-content/uploads/2016/12/15-1024x683.jpg" alt="15" width="1024" height="683" /></p>
<p style="text-align: center;"><strong>生产部同事戴卫最终获得1000元特等奖，成为当晚的幸运儿</strong></p>
<p style="text-align: center;"><img class="alignnone wp-image-426 size-large" src="http://www.jsssha.com/wp-content/uploads/2016/12/16-1024x683.jpg" alt="16" width="1024" height="683" /></p>
<p style="text-align: center;"><strong>全体盛世华安员工合影</strong></p>
<p style="text-align: center;"><img class="alignnone wp-image-427 size-large" src="http://www.jsssha.com/wp-content/uploads/2016/12/17-1024x683.jpg" alt="17" width="1024" height="683" /></p>
<p style="text-align: center;"><strong>嘉禄讯汇全体员工合影</strong></p>
<p style="text-align: left;">        光辉灿烂的2016年即将过去，充满希望和挑战的2017悄然来临。在过去的一年里我们有欢笑也有泪水，各项工作都取得了丰硕的收获，面对2017年，我们满怀憧憬，激情澎湃，有更高的目标等着我们去实现，更大的市场等着我们去征服，更壮观的事业等着我们去挥洒智慧和才能，让我们一起用信心和勇气，昂首阔步，去书写一个更加灿烂的未来！祝愿公司的明天更加辉煌！</p>`
        }];
    var that = this;
    WxParse.wxParse('title', 'html', newsdetails[options.id].title, that,5)
    WxParse.wxParse('content', 'html', newsdetails[options.id].content, that,5);
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
