import gql from 'graphql-tag'

/** Limit of stores per request. */
const LIMIT = 24

/**
 * class :: StoreService
 *
 * Service for Store types.
 */
class StoreService {
  /**
   * Constructor.
   */
  constructor () {
    this.searchFrom404 = false
    this.skipCounter = 0
  }

  /**
   * Resets the skip counter.
   */
  resetSkipCounter () {
    this.skipCounter = 0
  }

  /**
   * Gets all the stores using pagination.
   *
   * @returns Array An array containing the stores.
   */
  getAll () {
    const query = gql`{
      stores (skip: ${this.skipCounter}, limit: ${LIMIT}) {
        URI
        name
        category
        address
        city
        image
      }
      storesCount
    }`

    this.skipCounter += LIMIT

    return query
  }

  /**
   * Gets all the featured stores.
   *
   * @returns Array An array containing the featured stores.
   */
  getAllFeatured () {
    const query = gql`{
      featuredStores {
        URI
        name
        category
        address
        city
        image
      }
    }`

    return query
  }

  /**
   * Gets an observable of the store retrieve from the API server.
   *
   * @param {String} URI The stores URI parameter.
   * @returns {String} The store from the API server.
   */
  getStore (URI) {
    const query = gql`{
      store (URI: "${URI}") {
        name
        description {
          en
          es
          it
        }
        points
        category
        address
        city
        country
        lat
        lng
        image
        menu {
          items {
            food {
              name {
                en
                es
                it
              }
              category
              paymentMethods
              picture
              price {
                currency
                value
              }
            }
            drink {
              name {
                en
                es
                it
              }
              category
              paymentMethods
              picture
              price {
                currency
                value
              }
            }
          }
        }
        reviews {
          clientId
          clientName
          clientPicture
          date
          points
          text {
            en
            es
            it
          }
        }
      }
    }`

    return query
  }

  /**
   * Gets all the stores from the API server that have the given item in their menues.
   *
   * @param {MenuItem} menuItem The menu's item used to do the search.
   * @param {Boolean} searchFrom404 True if the search was performed from the SearchBox component.
   */
  getAllByMenuItem (menuItem, searchFrom404) {
    this.searchFrom404 = searchFrom404 || false

    const query = gql`{
      stores (menuItemType: "${menuItem}", menuItemCategory: "${menuItem.getCategory()}") {
        URI
        name
        category
        address
        city
        image
      }
    }`

    return query
  }
}

/**
 * Singleton implementation.
 */
export default (function () {
  /** StoreService instance reference. */
  let instance = null

  return {
    /**
     * Gets a unique instance of StoreService.
     *
     * @returns StoreService A unique instance of StoreService.
     */
    getInstance: function () {
      if (!instance) {
        instance = new StoreService()
      }
      return instance
    }
  }
})()
