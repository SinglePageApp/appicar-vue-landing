import Header from '../header'
import AboutTeam from './about-team'

export default {
  name: 'AboutPage',
  components: {
    Header,
    AboutTeam
  },
  created () {
    window.scrollTo(0, 0)
  }
}
