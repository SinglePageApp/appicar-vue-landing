import Vue from 'vue'
import Vuex from 'vuex'
import StoreService from './StoreService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeService: StoreService.getInstance()
  }
})
