import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import $store from '../../../services/store'
import SearchBox from '../../searchbox'

export default {
  name: 'HomeHeader',
  components: {
    SearchBox,
    PulseLoader
  },
  props: [],
  data () {
    return {
      featuredStores: null,
      loading: true
    }
  },
  created () {
    this.$apollo.addSmartQuery('featuredStores',
      $store.state.storeService.getAllFeatured()
    ).observer.subscribe((response) => {
      this.loading = false
      this.featuredStores = response.data.featuredStores
    })
  }
}
