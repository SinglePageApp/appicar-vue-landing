import $store from '../../services/store'
import Food from '../../models/Food'
import Drink from '../../models/Drink'

export default {
  name: 'SearchBox',
  components: {},
  props: [],
  data () {
    return {
      menuItem: new Food(),
      menuItemCategory: ''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    /**
     * Changes the selected option in the combobox.
     *
     * @param {String} menuItemType "eat" or "drink".
     */
    changeMenuItemType (menuItemType) {
      if (menuItemType === 'eat') {
        this.menuItem = new Food()
      } else {
        this.menuItem = new Drink()
      }
    },
    /**
     * Search stores by the menu item's category they have.
     */
    search () {
      const isSearchFrom404 = this.$route.url === '/404'
      this.menuItem.setCategory(this.menuItemCategory)
      // If the input isn't empty perform the search
      if (this.menuItemCategory) {
        $store.state.storeService.findStoresByMenuItem(this.menuItem, isSearchFrom404)
      }
      // Redirect to HomePageComponent from Error404Component.
      if (isSearchFrom404) {
        this.$route.navigateByUrl('/#stores')
      }
    },
    /**
     * Resets the search's input and brings all the stores that appeared in the initial load.
     */
    reset () {
      this.menuItemCategory = ''
      this.menuItem.setCategory('')
      this.storeService.resetSkipCounter()
      this.$apollo.addSmartQuery('stores',
        $store.state.storeService.getStores()
      )
    }
  }
}
