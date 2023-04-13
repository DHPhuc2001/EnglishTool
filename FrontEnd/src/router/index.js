import Vue from 'vue'
import Router from 'vue-router'
import { Message } from 'element-ui'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/View1')
    },
    {
      path :'/view1',
      name :'View1',
      component: () => import('@/views/View1')
    },
    {
      path :'/view2',
      name :'View2',
      component: () => import('@/views/View2')
    },
    {
      path :'/view3',
      name :'View3',
      component: () => import('@/views/View3')
    },
  ]
})

export default router;
