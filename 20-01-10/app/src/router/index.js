import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/about',
    name:'about',
    component:()=>import('../views/About.vue'),
    children:[
      {
        path:'vuex1',
        component:()=>import('../views/vue_1state.vue')
      },
      {
        path:'vuex2',
        component:()=>import('../views/vue_2actions.vue')
      },
      {
        path:'vuex3',
        component:()=>import('../views/vue_3getters.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  // 在项目根目录创建一个 vue.config.js文件，可进行baseUrl配置，接口代理以及其他配置。
  base: process.env.BASE_URL,
  routes
})

export default router
