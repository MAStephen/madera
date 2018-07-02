import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/
import acceuil from '@/components/acceuil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'acceuil',
      component: acceuil
    }
  ]
})
