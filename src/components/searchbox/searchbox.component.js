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
      this.menuItem.setCategory(this.menuItemCategory)
      // If the input isn't empty perform the search
      if (this.menuItemCategory) {
        $store.state.loading = true
        $store.state.menuItem = this.menuItem
        const isSearchFrom404 = this.$route.path === '/404'
        // Apollo query.
        this.$apollo.addSmartQuery('stores',
          $store.state.storeService.getAllByMenuItem(this.menuItem, isSearchFrom404)
        ).observer.subscribe((response) => {
          $store.state.loading = false
          $store.state.storesCount = response.data.stores.length
          $store.state.stores = response.data.stores
        })
        // Redirect to HomePage component from Error404 component.
        if (isSearchFrom404) {
          this.$route.navigateByUrl('/#stores')
        }
      }
    },
    /**
     * Resets the search's input and brings all the stores that appeared in the initial load.
     */
    reset () {
      $store.state.loading = true
      this.menuItemCategory = ''
      this.menuItem.setCategory('')
      $store.state.storeService.resetSkipCounter()
      // Make a new request to the API server.
      this.$apollo.addSmartQuery('stores',
        $store.state.storeService.getAll()
      ).observer.subscribe((response) => {
        $store.state.loading = false
        $store.state.menuItem = null
        $store.state.storesCount = response.data.storesCount
        $store.state.stores = response.data.stores
      })
    }
  }
}
