import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profil from '../views/Profil.vue'
import Feed from '../views/Feed.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/register',
    name: 'Registrer',
    component: Register
  },
]

const router = new VueRouter({
  routes
})

export default router
''