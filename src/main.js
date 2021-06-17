import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VueCurrencyFilter from 'vue-currency-filter'
import VueSweetalert2 from 'vue-sweetalert2'
import moment from 'moment'

Vue.config.productionTip = false


Vue.component('pagination', require('laravel-vue-pagination'));
Vue.use(Vuelidate)
Vue.use(VueSweetalert2)
Vue.use(VueCurrencyFilter,
  {
    symbol : 'Rp.',
    thousandsSeparator: '.',
    fractionCount: 0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })

  Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
  });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
