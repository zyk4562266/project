import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: resolve => require(['@/components/page/login'], resolve)
    },
    {
      path: "/home",
      name: 'nav',
      component: resolve => require(['@/components/public/home'], resolve),
      children: [{
          path: '/homePage',
          component: resolve => require(['@/components/page/home-page'], resolve),
        },
      ]
    },
  ]
})