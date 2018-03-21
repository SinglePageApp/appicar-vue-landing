import $store from '../../../services/store'
import StoreBox from './store-box'

export default {
  name: 'HomeStores',
  components: { StoreBox },
  apollo: {
    stores: $store.state.storeService.getAll()
  },
  data () {
    return {
      currentRowNum: 0,
      isLoading: false,
      stores: null
    }
  },
  methods: {
    /**
     * Determines if a row is odd based on the number of the i-th element passed by parameters.
     *
     * @param i int Number of the i-th element.
     */
    isRowOdd: function (i) {
      this.currentRowNum += (i % 3 === 0 ? 1 : 0)

      return (this.currentRowNum % 2 !== 0)
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
