import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//globaly filter
Vue.filter('pcs', val => {
  if (!val || typeof (val) != 'string') return ''
  val = val.slice(0, 40)
  return val
})
new Vue({
  render: h => h(App),
}).$mount('#app')
