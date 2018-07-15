// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//基础样式的修饰
import 'css/reset.css'
//去除移动端的一像素边框的问题
import 'css/border.css'
//解决移动端300毫秒延迟的问题
import fastClick from 'fastclick';
Vue.config.productionTip = false
fastClick .attach(document.body);
import 'less/varibles.less';
//引入字体图标的css文件
import 'css/iconfont.css';
//引入vue-awesome-swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
//引入Mock.js文件
require('./Mock/index');
//引入axios插件
import axios from 'axios';
//设置axios为全局使用
Vue.prototype.$http = axios;
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
