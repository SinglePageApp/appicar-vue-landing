export default {
  name: 'Flags',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  methods: {
    changeLang: function (language, e) {
      e.preventDefault()
      this.$i18n.locale = language
    }
  }
}
