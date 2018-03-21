import gql from 'graphql-tag'

const LIMIT = 24

/**
 * class :: StoreService
 *
 * Service for Store types.
 */
let StoreService = (function () {
  let instance

  return {
    getInstance: function () {
      if (!instance) {
        instance = {
          skip: 0,
          /**
           * Gets all the stores using pagination.
           *
           * @returns Array An array containing the stores.
           */
          getAll: function () {
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

            this.skip += LIMIT

            return query
          },
          /**
           * Gets all the featured stores.
           *
           * @returns Array An array containing the featured stores.
           */
          getAllFeatured: function () {
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
      }
      return instance
    }
  }
})()

export default StoreService
