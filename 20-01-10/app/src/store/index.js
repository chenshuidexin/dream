import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const config={
  //定义状态
  states:{
    islogin:false
  },
  //getters 二次操作
  getters:{
    // islogin:(state)=>{
    //   return state.islogin;
    // },
    //另一种写法
    islogin:state=>state.islogin
  },
  //修改state里面的变量
  mutations:{
    //status指上面的status，payload是调用mutation时传过来的参数
    updateLogin(state,payload){
      state.islogin=payload;
    }
  },
  //action行为 配合mutation函数
  actions:{

  },
  //modules行为 模块化行为
  modules:{

  }
}

export default new Vuex.Store(config)
