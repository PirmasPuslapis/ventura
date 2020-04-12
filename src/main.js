import Vue from 'vue';
import Landing from './views/Landing.vue';
import About from './views/About.vue';
import App from './App.vue'
import VueAnalytics from 'vue-analytics'
import VueRouter from 'vue-router'

import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
]

const router = new VueRouter({
  routes
})

Vue.use(VueAnalytics, {
  router,
  id: 'UA-163445824-1'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
