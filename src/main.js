import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify'
import router from './router'



Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'fa',
  icons: {
    'right_arrow': 'fas fa-chevron-right',
    'export': 'fas fa-upload',
    'import': 'fas fa-download',
    'return': 'fas fa-undo-alt',
    'defects': 'fas fa-dharmachakra',
    'clients': 'fas fa-hand-holding-usd',
    'goods': 'fab fa-intercom'
  },
  theme: {
    nav_drawer: '#293242',
    white: '#ffffff'
  }
 })



new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
