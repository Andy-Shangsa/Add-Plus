// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
 * @App:引入app.vue组件，在render渲染
 * @vuex:引入vue模块
 * @ElementUI:引入UI框架element-ui
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from "vue-resource";	//数据请求插件
Vue.use(VueResource);	//数据请求插件
import Vuex from 'vuex'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/common.css'
Vue.use(Vuex)
Vue.use(Element)

import Mock from './mock'
Mock.bootstrap();

const store = new Vuex.Store({
  state: {
    sliderShow: false
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
