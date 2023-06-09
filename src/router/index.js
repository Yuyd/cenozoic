import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Games from '../views/Games/index.vue'
import About from '../views/About/index.vue'
import PrivacyPolicy from '../views/Privacy/index.vue'
import Trademark from '../views/Trademark/index.vue'
import Compounder from '../views/Compounder/index.vue'
import Account from '../views/Account/accoutn.vue'
import Integral from '../views/Integral/index.vue'
// import Game

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'home',
    component: Home
  },
  {
    path: '/Games',
    name: 'games',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Games
  },
  {
    path: '/About',
    name: 'about',
    component: About
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/trademark',
    name: 'Trademark',
    component: Trademark
  },
  {
    path: '/compounder',
    name: 'Compounder',
    component: Compounder
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/integral',
    name: 'Integral',
    component: Integral
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
