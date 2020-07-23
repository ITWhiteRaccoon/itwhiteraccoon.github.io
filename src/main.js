import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuesax)

new Vue({
  render: h => h(App),
}).$mount('#app')
