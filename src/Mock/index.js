//引入mockjs插件
//使用mockjs插件之前需要通过npm命令进行安装
// npm install mockjs --save-dev
import Mock from 'mockjs'
//获取去导航按钮icons的文本和图片的方法
Mock.mock("getNavList", {
  "navList": [{
      id: "0001",
      url: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
      title: "热门景点"
    },
    {
      id: "0002",
      url: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
      title: "必游榜单"
    },
    {
      id: "003",
      url: "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
      title: "夏日玩水"
    },
    {
      id: "0004",
      url: "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
      title: "主题乐园"
    },
    {
      id: "0005",
      url: "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      title: "动植物园"
    },
    {
      id: "0006",
      url: "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
      title: "故宫"
    },
    {
      id: "0007",
      url: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
      title: "一日游"
    },
    {
      id: "0008",
      url: "http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
      title: "公园"
    },
    {
      id: "0009",
      url: "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
      title: "游乐场"
    },
    {
      id: "00010",
      url: "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
      title: "全部玩乐"
    }
  ]
});
//获取轮播图图片的方法
Mock.mock('getSwiperImgs', {
  "imagesList": [{
      id: "001",
      imgUrl: require("images/swiper1.jpg")
    },
    {
      id: "002",
      imgUrl: require("images/swiper2.jpg")
    },
    {
      id: "003",
      imgUrl: require("images/swiper3.jpg")
    },
    {
      id: "004",
      imgUrl: require("images/swiper4.jpg")
    }
  ]
});
