## v-model
>v-model指令的本质是:它负责监听用户的输入事件，从而更新数据，并对一些极端场景进行一些特殊处理。同时，v-model会忽略所有表单元素的value、checked、selected特性的初始值，它总是将vue实例中的数据作为数据来源。 然后当输入事件发生时，实时更新vue实例中的数据。

>可以使用于：`input`, `select`, 和 `textarea`。

>        v-cloak 加载的时候不显示小胡子
```
<style>
[v-cloak]{
    display: none;
}
</style>
==================================
    <div id="app">
       <div v-cloak>
            {{ msg }}
       </div>
    </div>
====================================
<script src="./vv/vue.js"></script>
<script>
    new Vue({
        el:'#app',
        data:{
            msg:'haha'
        },
        methods:{
            
        }
    });
```

>ref:为了让你快速定位一个元素或者组件
```
定义:元素或者组件上添加一个ref的属性即可
                <div ref="box">
获取:this.$refs.box
```
## 组件
```
定义子组件:
            Vue.component('组件的名字',{
                template:`<div></div>`,

            })
组件的名字如果是直接引vue.js，那么尽量不要使用驼峰命名,因为命名之后，使用子组件的时候会报错，如果非要使用把子组件改成烤串命名
```
**注册组件必须在new Vue上方 ***
**模板中顶层只能有一个元素**
```
父子组件的传递:
1.子组件上写一个v-bind:自定义*行间属性*="父级中的数据"
2.子组件（对象）上定义一个props的属性，属性的值可以为数组也可以为对象,如果是数组['第一步自定义行间属性名字']
        props:['fnum']
3.直接用{{}} + props中的名字就可以使用了
        {{ fnum }}

简单总结:
    (1)往子组件的行间属性上传值
    (2)子组件通过props去接收
第一种注册组件方式:
Vue.component('btn',btn);
在new Vue的上面
第二种注册组件方式:components
在new Vue的里面
```