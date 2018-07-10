<template>
    <div class="wrapper">
        <!--轮播图的定义和使用-->
    <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="swiper" class="swiper-img">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      //轮播图组件的初始化配置
      swiperOption: {
        //设置自动轮播的间隔时间
        autoplay: 2000,
        //是否可以循环轮播
        loop: true,
        //开启分页组件的显示
        pagination: ".swiper-pagination"
      },
      swiperList: [
        {
          id: "001",
          //imgUrl: "../../../assets/images/swiper1.jpg"
          //采用上面的那种方式引入图片路径然后再动态绑定是无法进行显示的
          imgUrl: require("../../../assets/images/swiper1.jpg")
        },
        {
          id: "002",
          imgUrl: require("../../../assets/images/swiper2.jpg")
        },
        {
          id: "003",
          imgUrl: require("../../../assets/images/swiper3.jpg")
        },
        {
          id: "004",
          imgUrl: require("../../../assets/images/swiper4.jpg")
        }
      ]
    };
  },
  methods: {
    callback() {}
  }
};
</script>

<style lang="less">
//设置全局的样式
.swiper-pagination-bullet {
  background: red;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #fff;
}
</style>

<style lang='less' scoped>
/*这是是为了解决图片还没有加载出来的时候，
轮播图的高度为零，下面的元素占据了位置
然后导致抖动效应的出现
*/
// .wrapper >>> .swiper-pagination-bullet-active {
//   background: #fff;
// }
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  //设置图片的宽高比
  padding-bottom: 26.67%;
  background: #eee;
  //也可以直接设置为width:100%;height:26.67vw;
  .swiper-slide .swiper-img {
    height: 100px;
  }
}
</style>