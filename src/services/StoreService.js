import gql from 'graphql-tag'

/** Limit of stores per request. */
const LIMIT = 0

/**
 * class :: StoreService
 *
 * Service for Store types.
 */
class StoreService {

  constructor () {
    this.skip = 0
  }
  /**
   * Gets all the stores using pagination.
   *
   * @returns Array An array containing the stores.
   */
  getAll () {
    const query = gql`{
      stores (skip: ${this.skip}, limit: ${LIMIT}) {
        URI
        name
        category
        address
        city
        image
      }
      storesCount
    }`

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
