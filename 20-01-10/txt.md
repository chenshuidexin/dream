# Vuex
>Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件状态，并以相应的规则保证状态以一种可预测的方式发生变化。
```
状态:本质上就是一个变量，赋予不同的值就是不同的状态，管理状态实际上就是一堆变量

响应式:vuex跟全局变量不同，修改了vuex的某个状态，依赖这个状态的视图都会发生变化。
```
## vuex的操作
```
下载vuex     -->   npm install vuex
引包         -->   import Vuex from 'vuex'
             -->   Vue.use(Vuex);
使用：
const store = new Vuex.Store({配置confing||store})
配置config的内容
      const store = new Vuex.Store({
          //初始化数据
          states:{
              num:0
          },
          //修改数据的指令
          mutations:{
              add(state){
                  state.num++
              }
          }
      })
export default new Vue({store})
```
### vuex的5个核心概念
```
state    定义状态(变量),辅助函数mapState
Getter   获取状态(变量的值),同时对状态进行处理，辅助函数mapGetters
Mutation 修改状态(修改变量的值)
Action   触发mutation函数，从而修改状态，支持异步
Module   当状态很多时，把状态分开来管理 
```
## 获取vuex定义的状态
1.通过this.$store.state.xxx来获取
```
三种写法
import {MapState} from 'vuex';

1.computed:MapState({num:state=>state.num})
2.computed:MapState(['num'])   可以多传参数
3.computed:{
    ...MapState(['num']),
    revers(){
        return this.val.split('').revers().join('')
    }
}

触发mutations -> this.$store.commit('mutations的名字')
```
2.通过辅助函数mapState来获取
```js
  import {mapState} from 'vuex';
  export default{
  data() {
    return {
      add: '广西'
    };
  },
 
 computed: mapState({
    // 取state里count的值
    count: 'count',
 // 取state里count的值,用countAlias变量接收
    countAlias: 'count',
    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    fullName(state) {
      return this.add + state.firstName + state.lastName;
    }
  }),
  
 // 如果需要定义其它的计算属性,就按照下面的写法
 computed: {
     // 其他的计算属性
     total() {
         return 500
     },
     //对象
     ...mapState({
           // 取state里count的值
            count: 'count',
            // 取state里count的值,用countAlias变量接收
            countAlias: 'count',
            // 为了能够使用 `this` 获取局部状态，必须使用常规函数
            fullName(state) {
              return this.add + state.firstName + state.lastName;
            }
      })
    }
}
```
3.通过getters和mapGetters来获取
```js
// 定义一个用来获取fullName的getter
  getters: {
        fullName(state) {
            return state.firstName + state.lastName;
        }
    },

// 通过mapGetters
import {mapGetters} from 'vuex';

computed: {
     fullName() {
         return this.$store.getters.fullName;
     }
}
```

使用getters的好处是:当我们在vuex中的index.js的文件定义好了getters的方法，我们可以在任意的组件中使用getters的方法,非常方便。假如我们有一个组件a.vue,需要使用到getters的方法，直接在该组件的计算属性computed中使用。
```js
computed: {
     fullName() {
         return this.$store.getters.fullName;
     }
}
```
## 修改state中的状态
1.定义state和mutation
在vuex中的数据，只能被mutations修改
```
触发mutations  this.$store.commit('mutations的名字')
还有别的方式触发

 import {MapMutations} from 'vuex';
 methods:{
     ...MapMutations({'increment'})
 }

 this.increment()===this.$store.commit('increment')
```
```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: "没名字",
        count: 1
    },
    getters: {

    },
    // 修改state里的值必须通过mutation来修改
    mutations: {
        /**
         * 定义一个修改name的mutation
         * state是上面的定义的state
         * payload是新的数据
         */
        updateName(state, payload) {
            state.name = payload;
        }
    }
})
```
2.在需要的时候调用mutation进行修改state的name状态
```js
// 第一个参数是mutation的名字,第二参数是要修改成的数据
this.$store.commit('updateName','老胡');
```
## actions 当发生异步请求的时候使用 
- mutations只能单纯修改数据(不能进行异步请求，不然状态无法被捕捉),actions需要提交给mutations修改
```
actions:{
    asyncIncrement(context){
        setTimeout(()=>{
            context.commit('mutations中的方法')
        },2000)
    }
}
component:{this.$store.dispatch('asyncIncrement')}
```
```
别的方式触发
import {MapActions} from 'vuex';
methods:{
    ...MapActions(['asyncIncrement'])
}
this.asyncIncrement()===this.$store.dispatch('asyncIncrement')
```
