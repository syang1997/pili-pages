import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Test.vue'
import Login from '../components/Login.vue'
import Header from '../components/NavBar.vue'
import Register from '../components/Register.vue'
import video from '../components/Video.vue'
import videot from '../components/VideoTwo.vue'
import Person from '../components/Person.vue'
import Test from '../components/Test.vue'
import Tops from '../components/Tops'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/header',
    component: Header
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/video',
    component: video
  }, {
    path: '/videot',
    component: videot
  },
  {
    path: '/person',
    component: Person
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/top',
    component: Tops
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
