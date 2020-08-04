import Vue from 'vue'
import App from './App.vue'
import Inview from 'vueinview'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(Inview);
