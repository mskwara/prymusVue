import Vue from 'vue'
import MyApp from './MyApp.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(MyApp),
}).$mount('#app')
