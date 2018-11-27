// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import BootstrapVue from 'bootstrap-vue'
import VueFormGenerator from 'vue-form-generator'

import App from './app'
import i18n from './i18n'
import router from './router'
import Captcha from './components/captcha'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Absolute URL.
const httpLink = new HttpLink({
  uri: process.env.API_URL
})

// Create the apollo client.
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.component('fieldCaptcha', Captcha)

Vue.use(VueApollo)
Vue.use(BootstrapVue)
Vue.use(VueFormGenerator)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  i18n,
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
