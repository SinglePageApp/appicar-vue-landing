import $store from '../../../services/store'
import SearchBox from '../../searchbox'

export default {
  name: 'HomeHeader',
  components: {
    SearchBox
  },
  props: [],
  apollo: {
    featuredStores: $store.state.storeService.getAll()
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
