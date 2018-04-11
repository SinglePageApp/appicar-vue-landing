import SearchBox from '../searchbox'

export default {
  name: 'Error404',
  components: { SearchBox },
  props: [],
  data () {
    return {
      NUM_FLAMES: new Array(5)
    }
  },
  created () {
    window.scrollTo(0, 0)
  }
}
