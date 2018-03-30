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
      $store.state.storesCount = response.data.storesCount
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
    },
    /**
     * Determines if the more button is enabled.
     *
     * @returns boolean True if the more button is enabled.
     */
    moreButtonEnabled: function () {
      return ($store.state.stores.length < $store.state.storesCount)
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
     * On click show more button event, make a new request.
     */
    showMore: function () {
      this.$apollo.addSmartQuery('stores',
        $store.state.storeService.getAll()
      ).observer.subscribe((response) => {
        $store.state.stores = $store.state.stores.concat(response.data.stores)
      })
    }
  }
}
