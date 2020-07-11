import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
// import VueRouter from 'vue-router'
import  router from './router'


Vue.config.productionTip = false
console.log(router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
