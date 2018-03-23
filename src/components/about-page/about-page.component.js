import Header from '../header'
import AboutOffers from './about-offers'
import AboutTeam from './about-team'

export default {
  name: 'AboutPage',
  components: {
    Header,
    AboutOffers,
    AboutTeam
  },
  created () {
    window.scrollTo(0, 0)
  }
}
