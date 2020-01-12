import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  //存储数据
  state:{
    num:0
  },
  //放同步函数事件
  mutations:{
    increment(state){
      state.num++
    }
  },
  getters:{
    toDou(state){
      return state.num<10?'0'+state.num:''+state.num
    }
  },
  //放异步函数事件
  actions:{
    // 第一种写法
    // asyncIcrement(context){
    //   setTimeout(() => {
    //     context.commit('increment')
    //   }, 2000);
    // }
    // 第二种写法 对象解构
    asyncIcrement({commit}){
      setTimeout(() => {
        commit('increment')
      }, 2000);
    }
  }
  
});
//导出
export default store;