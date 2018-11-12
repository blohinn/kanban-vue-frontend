import Vue from 'vue'
import Router from 'vue-router'

// import Board from '@/components/kanban/Board'
import Home from '@/components/Home'
import ReceiveToken from '@/components/auth/ReceiveToken'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/receive-token',
      name: 'ReceiveToken',
      component: ReceiveToken
    }
  ],
  mode: 'history'
})
