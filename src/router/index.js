import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/manager-system/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/entry/login',
      name: 'Login',
      component: Login
    }
  ]
})
