import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
import Why from '@/components/Why'

=======
/*import HelloWorld from '@/components/HelloWorld'*/
import acceuil from '@/components/acceuil'
>>>>>>> parent of 0398f58... creation du main, supp acceuil.vue

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/why',
      name: 'Why',
      component: Why
=======
      name: 'acceuil',
      component: acceuil
>>>>>>> parent of 0398f58... creation du main, supp acceuil.vue
    }
  ]
})
