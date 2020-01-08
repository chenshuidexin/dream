import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
//routes数组的形式存在
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about/:uname/id/:id',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path:'/login',
    component:()=>import('../views/login.vue')
  },
  {
    path:'/public/',
    component:()=>import('../views/public.vue'),
    // ----------public下的子目录
    children:[
      {path:'p1',component:()=>import('../views/p1.vue')},
      {path:'p2',component:()=>import('../views/p2.vue')},
      // 进入/public下指定的children，默认添加一个组件，可以在path上写个''
      {
        path:'',component:()=>import('../views/p3.vue')
      }
    ]
  },
  {
    path:'/p4',
    name:'p4',
    props:true,
    component:()=>import('../views/p4.vue')
  },
  {
    path:'/p5',
    name:'p5',
    //钩子函数
    props:(route)=>({
      n:route.params.nn
    }),
    component:()=>import('../views/p5.vue')
  },
  {
    path:'/p6',
    redirect:to=>{
      return '/p4'
    }
  },
  {
    path:'*',
    component:()=>import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
