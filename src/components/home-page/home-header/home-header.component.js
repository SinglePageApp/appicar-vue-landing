import $store from '../../../services/store'
import SearchBox from '../../searchbox'

export default {
  name: 'HomeHeader',
  components: {
    SearchBox
  },
  props: [],
  apollo: {
    featuredStores: $store.state.storeService.getAllFeatured()
  },
  data () {
    return {
      featuredStores: null
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
