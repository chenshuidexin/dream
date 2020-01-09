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
    path: '/about',
    name: 'about',
    //权限登陆   reg名称可以随意写
    meta:{reg:true},
    //懒加载-->只需要调用的时候在加载
    component: () => import('../views/About.vue')
  },
  {
    path:'/public',
    name:'public',
    component:()=>import('../views/public.vue')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login.vue')
  }
]
//请求api接口
import {islogin} from '../api/api'



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//每次切换路由时触发事件
//异步事件同步化
router.beforeEach(async (to,from,next)=>{
  //每次切换路由的时候，判断切换过去的路由是不是需要权限验证
  //直接遍历to.matched数组，该数组中保存着匹配到的所有路由信息。
  const b=to.matched.some(item=>item.meta.reg);
  if(b){
    //需要验证请求接口
    let flg=await islogin();
    if(flg){
      //验证成功
      next();
    }else{
      next('/login')
    }
  }else{
    //没有权限的直接执行下一步即可
    next();
  }
})

export default router
