import HomeHeader from './home-header'
import HomeStores from './home-stores'
import HomeServices from './home-services'
import HomeReviews from './home-reviews'
import HomeContact from './home-contact'

export default {
  name: 'HomePage',
  components: {
    HomeHeader,
    HomeStores,
    HomeServices,
    HomeReviews,
    HomeContact
  },
  created () {
    if (!this.$router.hash) {
      window.scrollTo(0, 0)
    }
  }
}
