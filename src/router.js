import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SingleApartment from './views/SingleApartment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/apartment/:id',
      name: 'apartment',
      component: SingleApartment
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
