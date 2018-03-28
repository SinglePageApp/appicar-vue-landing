import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import $store from '../../../services/store'
import StoreBox from './store-box'

export default {
  name: 'HomeStores',
  components: { StoreBox, PulseLoader },
  created () {
    this.$apollo.addSmartQuery('stores',
      $store.state.storeService.getAll()
    ).observer.subscribe((response) => {
      $store.state.loading = false
      $store.state.stores = response.data.stores
    })
  },
  computed: {
    loading: function () {
      return $store.state.loading
    },
    stores: function () {
      return $store.state.stores
    },
    menuItem: function () {
      return $store.state.menuItem
    }
  },
  methods: {
    /**
     * Determines if a row is odd based on the number of the i-th element passed by parameters.
     *
     * @param i int Number of the i-th element.
     */
    isRowOdd: function (i) {
      const row = Math.floor(i / 3)

      return (row % 2 === 0)
    },
    /**
     * Determines if the more button is enabled.
     *
     * @returns boolean True if the more button is enabled.
     */
    isMoreButtonEnabled: function () {
      return false
    }
  }
}
