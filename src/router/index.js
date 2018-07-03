import Vue from 'vue'
import Router from 'vue-router'
import Why from '@/components/Why'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },

    {
      path: '/why',
      name: 'Why',
      component: Why
    }
  ]
})
