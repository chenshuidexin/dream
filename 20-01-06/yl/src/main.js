import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),//App根组件
}).$mount('#app')//#app是跟节点
