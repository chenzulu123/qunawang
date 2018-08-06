<template>
  <div class="icons">
    <!-- 轮播图的相关设置 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.inside">
          <div class="icon-img">
            <img class="icon-content" :src="item.url" :alt="item.title">
          </div>
          <p class="icon-desc">{{item.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    data() {
      return {
        //轮播图组件的初始化
        swiperOption: {
          pagination: ".swiper-pagination"
        },
        //导航按钮的数据定义
        navDatas: [
          // {
          //   id: "0001",
          //   url:
          //     "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          //   title: "热门景点"
          // },
          // {
          //   id: "0002",
          //   url:
          //     "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          //   title: "必游榜单"
          // },
          // {
          //   id: "003",
          //   url:
          //     "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
          //   title: "夏日玩水"
          // },
          // {
          //   id: "0004",
          //   url:
          //     "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          //   title: "主题乐园"
          // },
          // {
          //   id: "0005",
          //   url:
          //     "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          //   title: "动植物园"
          // },
          // {
          //   id: "0006",
          //   url:
          //     "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          //   title: "故宫"
          // },
          // {
          //   id: "0007",
          //   url:
          //     "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          //   title: "一日游"
          // },
          // {
          //   id: "0008",
          //   url:
          //     "http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
          //   title: "公园"
          // },
          // {
          //   id: "0009",
          //   url:
          //     "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          //   title: "游乐场"
          // },
          // {
          //   id: "00010",
          //   url:
          //     "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
          //   title: "全部玩乐"
          // }
        ]
      };
    },
    //初始化调用的方法
    mounted() {
      //调用获取导航栏按钮以及图片的相关信息
      this.getNavList();
    },
    computed: {
      //通过计算属性来计算轮播图页码数
      pages() {
        const pages = [];
        this.navDatas.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    },
    methods: {
      getNavList() {
        const _this = this;
        this.$http
          .get("getNavList")
          .then(res => {
            _this.navDatas = res.data.navList;
          })
          .catch(err => {
            console.log("getNavList()---" + err);
          });
      }
    }
  };
</script>

<style lang="less">
  .swiper-pagination-bullet {
    background: rgba(144, 144, 144, 0.8);
  }
  
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: rgba(0, 175, 190, 0.8);
  }
</style>

<style lang="less" scoped>
  .icons {
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
    .icon {
      position: relative;
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      .icon-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        padding: 0.1rem;
        box-sizing: border-box;
        .icon-content {
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }
      .icon-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.44rem;
        line-height: 0.44rem;
        color: #333;
        text-align: center;
      }
    }
  }
</style>