import Flags from './flags'

const TIMEOUT = 1;

export default {
  name: 'NavLinks',
  components: { Flags },
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    // From testing, without a brief timeout, it won't work.
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT)
    }
  },
  methods: {
    scrollTo: function (hashtag) {
      setTimeout(() => { location.href = hashtag }, TIMEOUT)
    }
  }
}
