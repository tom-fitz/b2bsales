import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

let VueScrollTo = require('vue-scrollto')

Vue.use(VueRouter, Vuelidate, VueScrollTo)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
