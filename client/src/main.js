import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import List from '@/components/List.vue'
import Detail from '@/components/Detail.vue'
import Create from '@/components/Create.vue'
import Modify from '@/components/Modify.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    path: '',
    redirect: '/list',
  },

  {
    path: '/list',
    name: 'list',
    component: List
  },

  {
    path: '/detailt',
    name: 'detail',
    component: Detail
  },

  {
    path: '/create',
    name: 'create',
    component: Create
  },

  {
    path: '/modify',
    name: 'modify',
    component: Modify
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

