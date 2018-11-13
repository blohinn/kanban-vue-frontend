import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import ReceiveToken from '@/components/auth/ReceiveToken'
import Board from '@/components/kanban/Board'

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
    },
    {
      path: '/board/:id',
      name: 'Board',
      component: Board
    }
  ],
  mode: 'history'
})
