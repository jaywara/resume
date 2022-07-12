import Vue from 'vue'
import App from './App.vue'
import Vuesax from './plugins/vuesax'

Vue.config.productionTip = false

new Vue({
  Vuesax,
  render: h => h(App),
}).$mount('#app')
