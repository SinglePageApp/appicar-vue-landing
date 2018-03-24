export default {
  name: 'StoreMenu',
  components: {},
  props: ['menu', 'language'],
  data () {
    return {
      currency: 'ARS',
      items: this.menu.getItems()
    }
  }
}
