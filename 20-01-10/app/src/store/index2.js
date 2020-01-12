import Vue from 'vue';
import Vuex from 'vuex';
Vue.use('Vuex');

export default new Vuex.Store({
    state:{
        val:'坚持胜利!'
    },
    mutations:{
        changeval:(state,val)=>{
            state.val=val
        }
    }
})