import Vue from 'vue'
import Participants from './Participants.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Participants),
}).$mount('#app')
