# vue
>Vue是一套用于构建用户界面的渐进式框架。
## MVVM框架
>MVVM是`Model-View-ViewModel`的简写。即模型-视图-视图模型。[模型]指的是后端传递的数据。[视图]指的是所看到的页面。[视图模型]mvvm模式的核心，它是连接view和model的桥梁。它有两个方向：一是将[模型]转化成[视图]，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将[视图]转化成[模型]，即将所看到的页面转化成后端的数据。实现的方式是:DOM事件监听。这两个方向都实现的，我们称之为数据的`双向绑定`。总结:在MVVM的框架下视图和模型是不能直接通信的。它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动，这实际上就实现了数据的双向绑定。并且MVVM中的View和ViewModel可以互相通信。
## MVC框架
MVC的全名是`Model View Controller`,是模型(model)－视图(view)－控制器(controller)的缩写,一种软件设计典范,用一种业务逻辑、数据、界面显示分离的方法组织代码，将业务逻辑聚集到一个部件里面，在改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑。MVC被独特的发展起来用于映射传统的输入、处理和输出功能在一个逻辑的图形化用户界面的结构中.
## 渐进式 -->  弱主张，逐渐学习有过程的学习，vue全家桶：vue、vue-router、vuex、vue-cli  -->  javascript框架
## 使用vue
- 引入vue
- 在el里挂一个根元素，不能是在body、html上。
- 实例化vue  -->  new vue
- 配置参数  -->  data methods  computed...`在new Vue下的值都为对象`。
- 输出数据:双花括号{{数据的名称}} ---> 小胡子
## vue指令
- 为了方便开发者开发，vue中使用了指令，这些指令包含了很多元素身上的属性和js的一些内置方法.
- 课件2
```
v-text:innerText
v-html:innerHTML
v-show:display:none 布尔值 不会重新渲染页面提高性能
v-if:布尔值   会重新渲染整个局面,降低性能
v-else:限制[跟着v-if或v-else-if]
v-else-if:限制[跟着v-if或v-else-if]
v-on:[缩写为@]  v-on:click='时间函数||简单语法'
    methods:一般里面放着是事件函数。
    $event:如果不传参，第一个参数就是事件对象
    如果传了参数还要想拿到事件对象，需要在模板中的事件函数内传一个.
    解绑事件的方法：
    @mousemove='onoff &&  move($event)'
    当onoff是真的就会添加事件,假的就要解除事件
    修饰符:
           .stop - 调用 event.stopPropagation()阻止冒泡。
           .prevent - 调用 event.preventDefault()阻止默认行为。
           .capture - 添加事件侦听器时使用 capture 模式。捕获事件源
           .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
           .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
           .native - 监听组件根元素的原生事件。
           .once - 只触发一次回调。
v-for:'(val,key) in obj[数据]'  -> 遍历对象或数组
      数组：val是数组的项,key是索引
      对象:val是键值,key是键名
v-bind:(缩写为:)如果说属性需要动态操作那么就使用这个即可、响应式更新html特性。
        :style="{属性名:属性值(可以为数据)}"
        :style="[{属性名:属性值(可以为数据)},{属性名:属性值(可以为数据)}]"
        :class="{类名:布尔值}"
        v-bind="{data:1}"  没有具体的属性可以使用
        v-bind=对象  批量设置属性
v-model:默认input事件加载输入框中的数据[它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。]
      限制:<input>  <select>  <textarea>  components[组件]
      修饰符:
      .lazy:让其只在change事件中在加载输入框中的数据。只有在输入框失去焦点或直接按回车
      .number:一开始是数字就会转化数值类型,在输入其他 非数字的话不会显示出来。一开始是非数字的话就会转化为字符串类型，如果在输入其他数字或非数字就是字符串拼接
      .trim:过滤掉输入框之间的空格
```
## methods和computed之间的爱恨情仇
>两者之间的差别就是在计算结果不发生改变的情况下，computed 的方法只被调用了一次，即便是多处多次调用，computed 也只被调用一次，这就是 computed 缓存的优势。那么在哪些情况下更适合使用 computed ？一般使用简单的表达式对内容进行简单的转换与使用过滤器对内容进行简单的转换用的比较多。

>用 computed (使用复杂的逻辑运算时最好使用计算属性,提高性能)属性方法编写的逻辑运算，在调用时直接将返回时 areas 视为一个变量值就可使用，无需进行函数调用。computed 具有缓存功能，在系统刚运行的时候调用一次。只有只有当计算结果发生变化才会被调用。比如，我们在长度框与宽度框更改值的时候每次更改 computed 都会被调用一次，很浪费资源。

>用 methods 方法编写的逻辑运算，在调用时 add() 一定要加“()”，methods 里面写的多位方法，调用方法一定要有（）。methods方法页面刚加载时调用一次，以后只有被调用的时候才会被调用。我们在长度框和宽度框的值输入完以后，点击“+” methods 方法调用一次。这里很明显我们采用 methods 会更节省资源。
## getter和setter
>Object.defineProperty(obj,prop,desc)
```
Object.defineProperty(obj,'name',{
    value:2,//内容的值
    writable:false,//属性不可以被修改
    enumerable:false,//属性不可以被枚举
    configurable:false,//属性不可以被删除
    get(){
        //把value和writable给屏蔽掉，否则会出事情儿
        //读取这个属性的时候触发
        //return返回的值就是读操作之后的结果
    }
    set(val){
        //把value和writable给屏蔽掉，否则会出事情儿
        //写操作会触发这个属性，可以没有return值，但是有参数。
        //val是重新赋值之后的内容
    }
})
```
```js
//面试题
let num=0;
Object.defineProperty(obj,'age',{
    get(){
        return num+=2.6
    }
});
console.log(obj.age<3 && obj.age>5)//true
//在课件4
```