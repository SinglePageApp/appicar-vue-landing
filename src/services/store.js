import Vue from 'vue'
import Vuex from 'vuex'
import StoreService from './StoreService'
import MailService from './MailService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeService: StoreService.getInstance(),
    mailService: MailService.getInstance(),
    menuItem: null,
    loading: true,
    stores: null,
    storesCount: 0
  }
})
