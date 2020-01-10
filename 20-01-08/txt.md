## 路由过渡动效
><router-view> 是基本的动态组件，可以用 <transition> 组件增加过渡效果
```js
<transition>
  <router-view></router-view>
</transition>
```
 以上方式会给所有的路由增加相同的简单的切换过渡效果，如果想个性化给每个路由增加，则需要在组件内使用 <transition> 并设置不同的 name实现页面级的过渡效果
```js
<transition name="fade" mode="out-in">
  <router-view/> <!-- 也可以直接写在某个具体的组件内<template>...</template> -->
</transition>

```
```

.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
```
# 路由切换滚动
  当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。该功能需要浏览器支持history.pushBehaviorAPI
```js
const router = new VueRouter({
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // 滚动到上一个位置
    } else {
      return { x: 0, y: 0 } // 滚动到顶部
    }
  }
})
```
 或者可以模拟滚动到某个锚点
```js
scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
    }
  }
}
```
甚至可以配合路由元信息meta实现更细颗粒度控制滚动，和利用返回一个Promise来得出预期的位置滚动。