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
}

/**
 * Singleton implementation.
 */
export default (function () {
  /** StoreService instance reference. */
  let instance

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
