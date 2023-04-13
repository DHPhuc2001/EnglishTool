import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import bootstrap js 5
import 'bootstrap'
import 'video.js/dist/video-js.css'
import 'animate.css';

window.Swal = require('sweetalert2')

require('@/assets/fonts/font-awesome-4.7/css/font-awesome.min.css')
require('@/assets/css/ntn.css')
import Request from '@/utils/request'
Vue.prototype.$http = Request;

import Element from 'element-ui'
import enLang from 'element-ui/lib/locale/lang/vi'
import 'element-theme-dark';

Vue.use(Element, {
  locale: enLang
})


import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
