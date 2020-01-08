## vue-router
>vue-router中经常会操作的两个对象route和router两个

>$route对象:表示当前的路由信息,包含了当前URL解析得到的信息，包括当前的路径，参数，query对象等==>指的是当前激活的路由信息对象，又称路由记录，该对象是只读的，内部属性不可改变，当路由发生重定向或路由参数改变时，该对象会被重新计算。一般我们会通过watch来监听它们
```
$route.path  字符串，对应当前路由的路径，总是解析为绝对路径
$route.params  一个key/value对象，包含了动态片段和全匹配片段,如果没有路由对象，就是一个空对象。
$route.query  一个key/value对象，表示url查询参数。如果没有查询参数，就是个空对象。
$route.hash  当前路由的hash值(不带#)，如果没有hash值，则为空字符串。锚点
$route.fullPath 完成解析后的URL，包括查询参数和hash的完整路径。
$route.matched  数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
$route.name  当前路径名字
$route.meta  路由元信息

出现的场景:
1.组件内的this.$route和route watch 回调(监测变化处理)
2.router.match(location)的返回值
3.scrollBehavior方法的参数
4.导航钩子的参数
```
>$router对象:全局路由的实例,是router构造方法的实例。几个常见的方法。==>指的是router实例，也就是new VueRouter()的执行结果，使用效果与router相同。有这种写法是因为Vue并不想在每个独立需要封装路由的组件中都导入路由，因此在全局创建了该对象。

1.push
```js
//字符串
this.$router.push('home')
//对象
this.$router.push({path:'home'})
//命名的路由
this.$router.push({name:'user',params:{uesrId:123}})
//带查询参数，变成/register?plan=123
this.$router.push({path:'register',query:{plan:'123'}})
//push方法的和<router-link:to="...">是等同的
//注意的点是:push方法的跳转会向history栈添加一个新的记录，当我们点击浏览器的返回按钮时可以看到之前的页面
```
2.go
```js
//页面路由跳转  前进或者后退
this.$router.go(-1)   //后退一步
this.$router.go(1)    //前进一步
this.$router.go(100)  //历史记录没有那么多就会失败
```
3.replace
```
push方法会向history栈添加一个新的记录，而replace方法是替换当前的页面，不会向history栈添加一个新的记录
一般使用replace来做404页面
this.$router.repalce('/')配置路由时path有时候会加'/',有时候不加，以'/'开头的会被当作根路径，就不会一致嵌套之前的路径
```


## import为何能实现路由懒加载
>import('./index.vue')（编译时加载）和const Index = () => import('./index.vue')（懒加载）
  
>简单理解：后者编译时只是声明了函数，只有使用时才运行该内容。
  深入一些：利用Promise 可以将异步组件定义为返回一个Promise 的工厂函数，又因为webpack2中动态import能实现代码分块，从而达到定义一个能被Webpack自动代码分割的异步组件的效果。


## 动态路由
>有一个use组件,对于所有各不相同的用户，都要使用这个组件来渲染，因为用户id未知，不可能在路由表里书写这个路由，这时就需要vue-router中的`动态路径参数`来达到这个效果。

>现在对于/user/:id类型的路由，都会映射到相同的路径上，而/user/后则是本路径的参数，页面初始化时并不关心它是什么内容，认为这是提供给页面内部使用的一个参数，既然是参数，页面就有能力获取，通常我们需要根据这个参数发起请求获取页面更详细的渲染数据，获取参数的方法如下:
```
单个参数:{path:'/user/:id'}   
       -->  url:/user/1
多个参数:{path:'user/:username/post/:post_id'}
       -->  url:/user/zf/post/22
```
## 响应路由参数的变化
>有个很经典的问题：假设在一个 User 列表中，用户切换查看不同账户信息，Url上/user/:id后面的 id 发生了变化实现了用户切换，然而页面本该展示不同用户信息的数据并没有更新。
  原因是Vue在设计初衷，为了最大化高效利用组件，并不会销毁后再创建，也就是说，组件的生命钩子如created将不会再次被触发调用[只能被调用一次]，这就要求我们自己实现触发。笔者提供4种思路
（1）监听路由参数，发生变化则重新获取页面渲染数据
（2）监听路由（Vue推荐)
```js
watch:{
    '$route'(to,from){...}
    //to-from都能监听变化做出响应
}
```
（3）使用组件内导航守卫 beforeRouteUpdate
```
beforeRouteUpdate (to, from, next) { ... } // 别忘记调用next()
```
（4）为<router-view>增加唯一的key。这种方式是逆Vue思路来的，设计Key关键字实现销毁组件重新挂载来保证生命钩子重新触发.
```
<router-view :key="key" />

computed: {
  key() {
    return this.$route.name ? this.$route.name + new Date() : this.$route + new Date()
  }
}
```
## 嵌套路由

嵌套的子路由
  通常，在app中声明的路由为 顶级路由，作为顶层的出口，渲染最高级路由匹配到的组件。
```父组件
<div id="app">
  <router-view></router-view>
</div>

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})
```
```
  如果需要实现子路由，如匹配 /user/:id/posts，则需要设置嵌套的路由，使用children属性定义
const router = new VueRouter({
  routes: [
    { 
      path: '/user/:id',
      component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```
[注意]以/开头的路径会被当做根路径。也就是说允许你充分的使用嵌套组件而无需设置嵌套的路径

  该例中，当遇到访问/user的路径不会渲染任何东西，是因为没有匹配到任何合适的子路由。当然你可以提供一个空的子路由来承接该路径
```js
children: [
  { path: '', component: UserHome }
]
```
## 编程式导航
编程式导航
  我们知道<router-link>实际上是创建了a标签来实现导航链接，我们还可以借助 router 的实例方法通过编写代码来实现。注意，如在开篇描述，组件内部应该使用this.$router访问
## this.$router.push()
声明式---->  <router-link :to="..." />
编程式---->  this.$router.push(...)
使用语法： this.$router.push(location, onComplete回调. onAbort回调)
```
  location接受一个字符串路径，或一个描述地址的对象
this.$router.push('dashboard') // -> /dashboard
this.$router.push({ path: 'dashboard' }) // -> /dashboard
this.$router.push({ name: 'user', parmas: { userId: '123' } }) // -> /user/123
this.$router.push({ path: 'register', query: { plan: 'private' } }) // -> /register?plan=private
```
`注意观察`第三个和第四个，重定向带路径参数的路由时，不能指定 path，因为提供了 path 后 params参数会自动被忽略。如果想要用path则需要修改如下：
```
const userId = '123'
this.$router.push({ path: `/user/${userId}` }) // -> /user/123
// 错误示例
this.$router.push({ path: `/user`, params: { userId: '123' } }) // -> /user
```
同样的规则适用于 <router-link :to=""> 的 to 属性 
## this.$router.replace()
声明式---->  <router-link :to="..." />
编程式---->  this.$router.push(...)
  跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
 
## this.$router.go(n)
  这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。
this.$router.go(1) // 前进一步
this.$router.go(-1) // 后退一步
this.$router.go(-100) // 如果记录不够用，默默失败不阻塞
# 常用路由导航守卫
全局前置守卫 - router.beforeEach
  这是最常使用也是最重要的守卫之一，使用时要调用 next() 方法表示导航 resolved；因为守卫是异步解析执行，没有resolve的导航守卫处在等待中阻断执行进程，路由也不会实现跳转
```
next()允许接收一个参数：（1）false - 中断当前导航，（2）{ path: '/route_name' } - 实现跳转
router.beforeEach((to, from, next) => {
  // `to` 和 `from`都是路由对象
})
```
```
全局后置钩子 - router.afterEach
  与前置导航守卫不同的是，afterEach并不是“守卫”，而是“钩子”，它不会阻塞线程，也不需要调用next()来表达resolve状态。可以认为是线程流水线里的一个作业而已
router.afterEach((to, from) => { ... })
```
私有路由守卫 - router.beforeEnter
  与beforeEach和afterEach不同的是，beforeEnter是针对单个路由进行配置的导航守卫，作用于所在路由内而不影响其他路由路径。该守卫也需要调用next()来表示守卫结束状态
```
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```
 
  另外还有 组件内的守卫 支持在组件内直接定义导航守卫。需注意的是，其中的beforeRouterEnter守卫不能访问this对象，理由是守卫在导航确认前即将登场的新组件并未被创建，需要通过 next(vm) 中的 vm 参数来调用组件实例
```
export default {
  data () {
    ...
  },
  beforeRouteEnter (to, from, next) {
    getPost(to.params.id, (err, post) => {
      next(vm => vm.setData(err, post))
    })
  },
  methods: { ... }
}
```
## 重要的流程呢   ---- 要考的
```
完整的导航解析流程
导航被触发。
在失活的组件里调用离开守卫。
调用全局的 beforeEach 守卫。
在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
在路由配置里调用 beforeEnter。
解析异步路由组件。
在被激活的组件里调用 beforeRouteEnter。
调用全局的 beforeResolve 守卫 (2.5+)。
导航被确认。
调用全局的 afterEach 钩子。
触发 DOM 更新。
用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数
```