import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page'
import AboutPage from '@/components/about-page'
import StorePage from '@/components/store-page'
import Error404 from '@/components/error-404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  }, {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  }, {
    path: '/store/:uri',
    name: 'StorePage',
    component: StorePage
  }, {
    path: '**',
    name: 'Error404',
    component: Error404
  }]
})
