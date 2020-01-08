import Vue from 'vue'
import VueRouter from 'vue-router'
import BeforEach from '../components/beforEach.vue'

Vue.use(VueRouter)
//routes数组的形式存在
// name的存在是为了params传参
const routes = [
  {
    path: '/',
    // name:'home',
    component: BeforEach
  },
  {
    path: '/b1',
    component: () => import('../components/b1.vue'),
    beforeEnter: (to, from, next) => {
      if(from.fullPath === '/b2' && to.fullPath === '/b1'){
        //局部的优先级次于全局的优先级
        alert('ggg')
        next('/')
      }else{
        next()
      }
    }
  },
  {
    path:'/b2',
    component:()=>import('../components/b2.vue')
  },
  {
    path:'/foo/:id',
    component:()=>import('../components/foo.vue'),
  },
  {
    path:'*',
    component:()=>import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});




// router.beforeEach((to,from,next)=>{
//   if(from.fullPath === '/b2' && to.fullPath === '/b1'){
//     next('/foo')
//   }else{
//     next()
//   }
//   next()
// })

export default router
