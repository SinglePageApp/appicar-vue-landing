import Price from './Price'
import Translatable from './Translatable'

/**
 * class :: Item
 *
 * Represents a menu's item.
*/
export default class Item {
  /**
   * Constructor.
   *
   * @param {Translatable} name The item's title in translatable form.
   * @param {String[]} paymentMethods Accepted payment methods, i.e: ['cash', 'credit card'].
   * @param {String} picture The item picture's CDN URL.
   * @param {Price[]} price The item's price in many currency's values.
   */
  constructor (name, paymentMethods, picture, price) {
    this.date = new Date()
    this.name = name || new Translatable('')
    this.paymentMethods = paymentMethods || []
    this.picture = picture || ''
    this.price = price || []
  }

  /**
   * Gets the menu item's title translated into the given language.
   *
   * @param {String} language The current landing's page language.
   * @returns {String} The translated item's name.
   */
  getName (language) {
    return this.name.getText(language)
  }

  /**
   * Sets the item's title.
   *
   * @param {Translatable} name The item's title in translatable form.
   */
  setName (name) {
    this.name = name
  }

  /**
   * Gets the menu item's price in the given currency's value.
   *
   * @param {String} currency The currency code, i.e: 'USD', 'ARS', etc.
   * @returns {Float} The item's price value in the given currency's value.
   */
  getPrice (currency) {
    return this.price.find(i => i.getCurrency() === currency).getValue()
  }

  /**
   * Sets an entire list of prices.
   *
   * @param {Price[]} price An array containing all the prices to set.
   */
  setPrice (price) {
    this.price = price
  }

  /**
   * Sets an entire list of prices from an array of JSON objects.
   *
   * @param {any[]} price An array of prices in JSON format.
   */
  setJsonPrice (price) {
    this.price = []
    // Loop over the array of JSON objects.
    price.forEach(priceJson => {
      this.addPrice(priceJson.currency, priceJson.value)
    })
  }

  /**
   * Adds a new price to the list.
   *
   * @param {String} currency The currency code, i.e: 'USD', 'ARS', etc.
   * @param {Float} value The price's value in terms of the current currency.
   */
  addPrice (currency, value) {
    this.price.push(new Price(currency, value))
  }

  /**
   * Gets all the accepted payment methods, i.e: ['cash', 'credit card'].
   *
   * @returns {String[]} An array containing all the accepted payment methods.
   */
  getPaymentMethods () {
    return this.paymentMethods
  }

  /**
   * Gets The item picture's CDN URL.
   *
   * @returns {String} The item picture's CDN URL.
   */
  getPicture () {
    return this.picture
  }

  /**
   * Gets the item's creation date.
   *
   * @returns {Date} The item's creation date.
   */
  getDate () {
    return this.date
  }
}
