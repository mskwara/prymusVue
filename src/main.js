import Vue from 'vue'
import Participants from './Participants.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(Participants),
}).$mount('#app')
