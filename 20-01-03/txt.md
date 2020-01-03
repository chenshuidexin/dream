## 组件
>课件2

>父传子数据传递课件3

>>子传父数据传递课件4  -->  两者是互相传递
```
@child="父组件的方法"
this.$emit('child[自定义属性]');
```
>子组件拿到数据后就是自己的   课件5


## 自定义指令
>directives
```
全局注册自定义指令
Vue.directive('名字',{
    //把绑定的元素插入到DOM中
    inserted:function(el){
        事件聚焦   操作属性
        el.focus()
    }
})
```
```
局部注册自定义指令
在new Vue里面
directive:{
    focus:{
        //指令的定义
        inserted:function (el){
            el.focus()
        }
    }
}
可以在模板中任何元素上使用新的 v-focus 属性
```
```
一个指令定义对象可以提供如下几个钩子函数[可选]
bind:只能调用一次，指令第一次绑定元素时调用，在这里可以进行一次性的初始化设置
inserted:被绑定元素插入父节点时调用(仅能保证父节点存在，但不一定被插入文档中)
update:所在组件的VNode更新时调用,但是可能发生在其子VNode更新之前
componentUpdated:指令所在组件的VNode及其子VNode全部更新后调用
unbind:只调用一次，指令与元素解绑时调用
```



### Vue.nextTick 类似开定时器来渲染页面
>在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM
```
Vue.nextTick(function(){
    //DOM更新
})
课件6
```

## .emit('名字',[...arr])触发当前实例上的事件。附加参数都会传给监听器回调。


## :key="item.id"
>key 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

>有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。`最常见的用例是结合 v-for`