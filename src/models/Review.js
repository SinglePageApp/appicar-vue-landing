import Scorable from './Scorable'

/**
 * class :: Review
 *
 * Represents a client's review about a store.
 */
export default class Review extends Scorable {
  /**
   * Constructor.
   *
   * @param {String} clientId The reviewer's id.
   * @param {String} clientName The reviewer's name.
   * @param {String} clientPicture The reviewer's CDN URL of his picture.
   * @param {Translatable} description The store's description text.
   * @param {Integer} points The review's number of points (from 0 to 5).
   */
  constructor (clientId, clientName, clientPicture, description, points) {
    super(points || null, description || null)
    /** @property {String} clientId The reviewer's id. */
    this.clientId = clientId || null
    /** @property {String} clientName The reviewer's name. */
    this.clientName = clientName || null
    /** @property {String} clientPicture The reviewer's CDN URL of his picture. */
    this.clientPicture = clientPicture || null
  }

  /**
   * Gets the reviewer's ID.
   *
   * @returns {String} The reviewer's ID.
   */
  getClientId () {
    return this.clientId
  }

  /**
   * Sets the reviewer's ID.
   *
   * @param {String} id The reviewer's ID.
   */
  setClientId (id) {
    this.clientId = id
  }

  /**
   * Gets the reviewer's name.
   *
   * @returns {String} The reviewer's name.
   */
  getClientName () {
    return this.clientName
  }

  /**
   * Sets the reviewer's name.
   *
   * @param {String} name The reviewer's name.
   */
  setClientName (name) {
    this.clientName = name
  }

  /**
   * Gets the reviewer's CDN URL of his picture.
   *
   * @returns {String} The reviewer's CDN URL of his picture.
   */
  getClientPicture () {
    return this.clientPicture
  }

  /**
   * Sets the reviewer's CDN URL of his picture.
   *
   * @param {String} picture An string containing the reviewer's CDN URL of his picture.
   */
  setClientPicture (picture) {
    this.clientPicture = picture
  }
}
