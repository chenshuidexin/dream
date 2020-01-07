## vue的生命周期
1.beforeCreate(实例创建前)
实力组件刚开始创建，元素dom和数据都还没有初始化  
应用场景:可以在这里加上loading事件

2.created(实例创建后)
数据data可以初始化完成，方法也已经可以调用，但是dom为渲染,在这个周期里面如果进行请求是可以改变数据并渲染，由于dom未挂载，请求过多或者占用时间过长会导致页面线上空白
应用场景:在这里结束loading，还做一些初始化，实现函数自执行

---------------------不需要关联el:"#app"或this.$mount('#app')


-------触发beforeMoute之前，此时的$el为虚拟的dom节点

3.beforeMounte(元素挂载前)
dom未完成挂载，数据初始化完成,但是数据的双向绑定还是{{}}，这是Vue采用了虚拟dom技术。


-----mouted触发之前，创建真实的dom替换虚拟的dom

4.mounted(元素挂载后)
数据和dom都完成挂载，在上一个周期占位的数据把值渲染进去，一般请求会在这个地方，因为这边请求改变数据之后刚好能渲染。


5.beforeUpdate(实例更新前)
只要是页面数据改变了都会触发，数据更新之前，页面数据还是原来的数据，当你请求赋值一个数据的时候就会执行这个周期，如果没有数据改变不执行。

6.updated(实例更新后)
只要是页面数据改变了都会触发，数据更新完毕，页面的数据是更新完成的，beforeUpdate要谨慎使用，因为页面更新数据的数据的时候都会触发，在这里操作数据很影响性能和死循环。

7.beforeDestory(实例销毁前)
实例销毁之前调用，在这一步，实例仍然完全可用

8.destory(实例销毁后)
vue实例销毁后调用，调用后，vue实例指示的所有内容都会解除绑定，所偶的事件监听器都会移除，所有的子实例也会被销毁




```
小小总结:
1.beforeCreate():此时的$el,data的值都为undefined,即el和data并未初始化
2.create():此时可以拿到data的值，但是$el依旧为undefined，即data完成了数据的初始化，$el没有
3.beforeMounte():$el的值为"虚拟"的元素节点，dom未完成挂载，数据初始化完成，但是数据的双向绑定还是{{}}，这是因为vue采用了虚拟的dom技术
4.mounted():数据和dom都完成挂载，再上一个周期占位的数据把值渲染进去，一般请求放在这个地方，因为这边请求数据之后刚好能渲染
```

### vue实例的手动挂载和调用事件
```
***创建并挂载到#app上,代替#app***

vm.$mount( [elementOrSelector] ) 如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例
vm.$el：类型（HTMLElement）挂载元素，Vue实例的DOM根元素；即vm.$el===document.getElementById('节点')，注意：相等的情况必须是实例创建之后才行，也就是created之后。
vm.$data：类型（Object），Vue实例观察的数据对象。
vm.$props：类型（Object），当前组件接收到的 props 对象。Vue 实例代理了- 对其 props 对象属性的访问。
vm.$options：类型（Object），用于当前 Vue 实例的初始化选项。需要在选项中包含自定义属性时会有用处。
vm.$parent：类型（Vue实例），父实例，如果当前实例有的话。
vm.$root：类型（Vue实例），当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。
vm.$children：类型（Array(Vue实例)），当前实例的直接子组件。需要注意 children 来进行数据绑定，考虑使用一个数组配合 v-for 来生成子组件，并且使用 Array 作为真正的来源。
vm.$destroy() 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。
```

## 单页面应用(SPA)的优点
>只有一个主页面的应用，浏览器一开始要加载所有必须的html，js，css。所有的页面内容都包含在这个所谓的主页面中。

>多页面(MPA):指一个应用中有多个页面，页面跳转时是整页刷新。

1.不刷新页面，在当前页切换多页的操作方式，能够提高用户体验[用户体验好且快速，内容的改变不需要重新加载整个页面，对服务器压力较小]

2.一些后端逻辑工作就可以给前端来做，减少后端人员的压力，提高前端开发的业务能力

3.能共用一些公共静态资源，减少http请求实现真正的前后端分离

[完全的前端组件化,前端开发不再以页面为单位，更多地采用组件化的思想，代码结构和组织方式更加规范化，便于修改和调整]

### 单页面的缺点:
1.首次加载页面的时候需要加载大量的静态资源，这个加载时间相对比较长。

2.不利于SEO优化，单页页面，数据在前端渲染，就意味着没有SEO

3.页面导航不可用，如果一定要导航需要自行实现前进后退。[由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理]


## vue中的路由--->vue-router
```
1.安装路由
npm install vue-router
或者
yarn add vue-router
2.找到main.js
   1.引包
     import  VueRouter from 'vue-router'
   2.安装路由的功能
     Vue.use(VueRouter)
   3.实例化VueRouter
    const router=new VueRouter({
        routes:[
            {
                path:'指定路径',
                component:'指定路径响应的组件你'
            }
        ]
    })
    4.挂路由
    默认配置是hash路由
    new Vue({
        mode:'history'
        router
    })
    5.(*)设置路由页面渲染的位置
    <router-view></router-view>
```

### hash和history

>对于 Vue 这类渐进式前端开发框架，为了构建 SPA（单页面应用），需要引入前端路由系统，这也就是 Vue-Router 存在的意义。前端路由的核心，就在于 => 改变视图的同时不会向后端发出请求。
```
为了达到这一目的，浏览器当前提供了以下两种支持：
1.hash —— 即地址栏 URL 中的 # 符号（此 hash 不是密码学里的散列运算）。
比如这个 URL：http://www.abc.com/#/hello，hash 的值为 #/hello。它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
2.history —— 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）
这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。
因此可以说，hash 模式和 history 模式都属于浏览器自身的特性，Vue-Router 只是利用了这两个特性（通过调用浏览器提供的接口）来实现前端路由。
```
>hash

hash路由模式是这样的：http://xxx.abc.com/#/xx。 有带#号，后面就是hash值的变化。改变后面的hash值，它不会向服务器发出请求，因此也就不会刷新页面。hash的url中会夹杂#，会让请求变得不是那么优雅。

>history

浏览器地址没有#， 比如(http://localhost:3001/a); 它也一样不会刷新页面的。但是url地址会改变。history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.abc.com/book/id。如果后端缺少对 /book/id 的路由处理，将返回 404 错误。

对于一般的 Vue + Vue-Router + Webpack + XXX 形式的 Web 开发场景，用 history 模式比较多，只需在后端（Apache 或 Nginx）进行简单的路由配置，同时搭配前端路由的 404 页面支持。