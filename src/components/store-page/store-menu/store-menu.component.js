export default {
  name: 'StoreMenu',
  components: {},
  props: ['menu'],
  data () {
    return {
      currency: 'ARS',
      language: this.$i18n.locale,
      items: this.menu.getItems()
    }
  }
}
