import Flags from './flags'

const TIMEOUT = 1

export default {
  name: 'NavLinks',
  components: { Flags },
  props: ['isHeader'],
  mounted () {
    if (this.$route.hash) {
      this.scrollTo(this.$route.hash)
    }
  },
  methods: {
    scrollTop: function () {
      window.scrollTo(0, 0)
    },
    scrollTo: function (hashtag) {
      setTimeout(() => { location.href = hashtag }, TIMEOUT)
    }
  }
}
