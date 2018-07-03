import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Why from '@/components/Why'
import Rdv from '@/components/Rdv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/why',
      name: 'Why',
      component: Why
    },

    {
      path: '/rdv',
      name: 'Rfv',
      component: Rdv
    }
  ]
})
