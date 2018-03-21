import Flags from './flags'

const TIMEOUT = 1

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
      this.scrollTo(this.$route.hash)
    }
  },
  methods: {
    scrollTo: function (hashtag) {
      setTimeout(() => { location.href = hashtag }, TIMEOUT)
    }
  }
}
