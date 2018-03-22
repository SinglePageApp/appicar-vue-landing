import NavLinks from '../nav/nav-links'

export default {
  name: 'Copyright',
  components: { NavLinks },
  props: [],
  data () {
    return {
      year: (new Date()).getFullYear()
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
