import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*
可以直接引用并操作，但是为了更好的管理文件，最好是引用文件即可。

*/ 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
