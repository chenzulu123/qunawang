<template>
<!--主页的头部组件-->
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            {{name}}
            <span class="iconfont arror-icon">&#xe64a;</span>
        </div>
    </div>
</template>
<script>
export default {
  name: "HomeHeader",
  props:{
    //传递的属性名称为name，类型为String(字符串)类型的首字母需要大写
    name:String
  }
};
</script>
<style lang='less' scoped>
@import "../../../assets/styles/less/varibles.less";
.header {
  display: flex;
  line-height: 0.86rem;
  //   background: #00bcd4;
  background: @bgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;
    .back-icon {
      font-size: 0.4rem;
      text-align: center;
    }
  }
  .header-input {
    flex: 1;
    background: #fff;
    margin-top: 0.12rem;
    border-radius: 0.1rem;
    height: 0.64rem;
    margin-left: 0.2rem;
    color: #ccc;
    line-height: 0.64rem;
    padding-left: 0.2rem;
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    .arror-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>