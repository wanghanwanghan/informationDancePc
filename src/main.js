import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import http from '@/utils/myRequest'

import jquery from 'jquery'
Vue.prototype.$ = jquery

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
// d3js
// import * as d3 from 'd3/d3'
//
// Vue.prototype.$d3 = d3
// window.d3 = d3 // 暂时设置为全局变量
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$http = http
import AmapVue from '@amap/amap-vue'
// import AmapMap from '@amap/amap-vue';
AmapVue.config.version = '2.0' // 默认2.0，这里可以不修改
AmapVue.config.key = '4d746ec320a322b5f7f141c0e6179a00'
AmapVue.config.plugins = [
  'AMap.ToolBar',
  'AMap.MoveAnimation',
  'AMap.Autocomplete'
]
Vue.use(AmapVue)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
