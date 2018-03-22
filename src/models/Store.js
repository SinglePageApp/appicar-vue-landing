import Translatable from './Translatable'
import Scorable from './Scorable'

/**
 * class :: Store
 *
 * Represents a commercial store.
 */
export default class Store extends Scorable {
  /**
   * Constructor.
   *
   * @param {String} name The store's name.
   * @param {String} category The store's category, i.e: 'DB.bar', 'DB.restaurant', 'DB.bar-restaurant', etc.
   * @param {String} description
   * @param {String} address The store's physical address.
   * @param {String} city The city where the store is located.
   * @param {String} country The country where the store is located.
   * @param {Double} lat The latitude coordenate where the store is located.
   * @param {Double} lng The longitude coordenate where the store is located.
   * @param {String} image The store picture's CDN URL.
   * @param {Integer} points
   * @param {Boolean} featured
   * @param {String} URI The store's URI for its invidual page.
   * @param {Menu} menu The store's menu.
   * @param {Review[]} reviews The clients reviews about the store.
   */
  constructor (name, category, description, address, city, country, lat, lng, image, points, featured, URI, menu, reviews) {
    super(points || 0, description || new Translatable(''))
    this.name = name || ''
    this.category = category || ''
    this.address = address || ''
    this.city = city || ''
    this.country = country || ''
    this.lat = lat || 0
    this.lng = lng || 0
    this.image = image || image
    this.featured = featured || false
    this.URI = URI || (this.name ? this.name.toLowerCase().replace(' ', '-') : '')
    this.menu = menu || null
    this.reviews = reviews || []
  }

  getURI () {
    return this.URI
  }

  getName () {
    return this.name
  }

  setName (name) {
    this.name = name
  }

  getCategory () {
    return this.category
  }

  setCategory (category) {
    this.category = category
  }

  getAddress () {
    return this.address
  }

  setAddress (address) {
    this.address = address
  }

  getCity () {
    return this.city
  }

  getDate () {
    return this.date
  }

  isFeatured () {
    return this.featured
  }

  setFeatured (value) {
    this.featured = value
  }

  getCoords () {
    return this.lat + ',' + this.lng
  }

  getLat () {
    return this.lat
  }

  setLat (value) {
    this.lat = value
  }

  getLng () {
    return this.lng
  }

  setLng (value) {
    this.lng = value
  }

  getCountry () {
    return this.country
  }

  setCountry (country) {
    this.country = country
  }

  getLocation () {
    return this.city + ', ' + this.country
  }

  getImage () {
    return this.image
  }

  setImage (URL) {
    this.image = URL
  }

  /**
   * Checks if the store has a menu loaded.
   *
   * @returns boolean Is true if the store has a menu loaded.
   */
  hasMenu () {
    return this.menu != null
  }

  getMenu () {
    return this.menu
  }

  setMenu (menu) {
    this.menu = menu
  }

  /**
   * Gets all the clients reviews about the store.
   *
   * @returns Review[] An array containing all the clients reviews about the store.
   */
  getReviews () {
    return this.reviews
  }

  /**
   * Sets the clients reviews about the store.
   *
   * @param value An array containing the clients reviews about the store.
   */
  setReviews (reviews) {
    this.reviews = reviews
  }

  /**
   * Checks if a store has reviews loaded.
   *
   * @returns boolean Is true if the store has at least 1 review loaded.
   */
  hasReviews () {
    return (this.reviews.length > 0)
  }

  /**
   * Adds an individual review about the store.
   *
   * @param review The client review about the store.
   */
  addReview (review) {
    this.reviews.push(review)
  }
}
