import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import callback from '@/components/Callback'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/callback',
      component: callback,
      responseType: 'code'
    }
  ]
})
