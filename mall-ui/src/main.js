import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'

// 引入vant样式
import 'vant/lib/index.css';

Vue.config.productionTip = false

import { Button } from 'vant';

Vue.use(Button);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
