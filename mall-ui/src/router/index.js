import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

// import homeIndex from '../views/home/index.vue';  // 实盘直播
// 公共路由
export const constantRoutes = [

  /*{
    path: '/home/index', component: homeIndex,
    //children: [{path: '/home/index', component: (resolve) => require(['@/views/home/index'], resolve), name: '首页'}]
    children: [{path: '', component: Layout, name: 'home-index'}]
  },*/

  { path: '/', redirect: '/home/index'},

  {
    path: '/home/index', component: (resolve) => require(['@/views/home/index'], resolve),
    children: [{path: '', component: Layout, name: 'home-index'}]
  },
  {
    path: '/type/index', component: (resolve) => require(['@/views/type/index'], resolve),
    children: [{path: '', component: Layout, name: 'type-index'}]
  },
  {
    path: '/user/index', component: (resolve) => require(['@/views/user/index'], resolve),
    children: [{path: '', component: Layout, name: 'user-index'}]
  },
]

export default new Router({
  /*mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),*/
  routes: constantRoutes
})
