import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import {store} from './store'

Vue.use(VueRouter);

import headerComponent from './components/Header.vue'

const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  router,
  store,
  components: {headerComponent}
})
