import Header from '../header'
import StoreMenu from './store-menu'
import StoreReviews from './store-reviews'
import Store from '../../models/Store'
import Menu from '../../models/Menu'
import Translatable from '../../models/Translatable'
import $store from '../../services/store'

const MAPS = {
  URL: 'https://www.google.com/maps/embed/v1/search',
  key: 'AIzaSyDqpxYbmMQKzjaVZNlvgReQ-Yq7m24Vkds'
}

export default {
  name: 'StorePage',
  components: {
    Header,
    StoreMenu,
    StoreReviews
  },
  props: [],
  data () {
    return {
      store: null,
      mapsURL: null
    }
  },
  computed: {
    language: function () {
      return this.$i18n.locale
    }
  },
  created () {
    // Scroll to top on component creation.
    window.scrollTo(0, 0)
    // Apollo request.
    this.$apollo.addSmartQuery('store',
      $store.state.storeService.getStore(this.$route.params.URI)
    ).observer.subscribe((response) => {
      const s = response.data.store
      this.store = new Store(
        s.name,
        s.category,
        s.description,
        s.address,
        s.city,
        s.country,
        s.lat,
        s.lng,
        s.image,
        s.points,
        s.featured,
        s.URI
      )
      this.store.setDescription(Object.assign(new Translatable(''), s.description))
      this.store.setJsonReviews(s.reviews)
      const menu = new Menu()
      menu.setJsonItems(s.menu.items)
      this.store.setMenu(menu)
      this.mapsURL = MAPS.URL + '?key=' + MAPS.key + '&q=' + this.store.getCoords() + '&language=' + this.$i18n.locale
    })
  }
}
