import $store from '../../../services/store'
import StoreBox from './store-box'

export default {
  name: 'HomeStores',
  components: { StoreBox },
  props: [],
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
  computed: {

  },
  mounted () {

  },
  methods: {
    isRowOdd: function (i) {
      this.currentRowNum += (i % 3 === 0 ? 1 : 0)

      return this.currentRowNum % 2 !== 0
    },
    isMoreButtonEnabled: function () {
      return true
    }
  }
}
