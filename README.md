# 去哪网Vue移动端项目

## 作者:陈祖路

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
### 设置文件路径别名
修改build文件夹下的webpack.base.conf.js文件
```js
resolve: {
    //支持引入的文件扩展名
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
       //设置src的路径别名   
      '@': resolve('src'),
      //设置css文件路径的别名
      'css':resolve('src/assets/styles/css'),
      // 设置less文件夹的路径别名
      'less':resolve('src/assets/styles/less'),
      //设置文件的路径别名
      'styles':resolve('src/assets/styles')
    }
  },
```
### 项目初始化
* 引入css样式初始化文件reset.css
main.js
```js
//css是reset.css文件所在的./src/assets/css文件夹路径的别名
import 'css/reset.css'
```
* 引入border.css文件
main.js
```js
import 'css/border.css'
//引入boeder.css文件的目的是为了解决移动端边框一像素的问题
```
* 安装及使用fastclick插件
```bash
npm install fastclick --save
```
main.js
```js
import fastClick from 'fastclick';
fastClick .attach(document.body);
//fastclick插件是为了解决移动端点击事件300毫秒延迟的问题
```

