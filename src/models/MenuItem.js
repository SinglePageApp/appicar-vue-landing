import Item from './Item'

/**
 * class :: MenuItem
 *
 * Represents an individual item from the store's menu.
*/
export default class MenuItem extends Item {
  /**
   * Constructor.
   *
   * @param {Translatable} name The item's title in translatable form.
   * @param {String} category The item's category, i.e: "Pizza", "Snack", "Salad", etc.
   * @param {String[]} paymentMethods Accepted payment methods, i.e: ['cash', 'credit card'].
   * @param {String} picture The item picture's CDN URL.
   * @param {Price[]} price The item's price in many currency's values.
   */
  constructor (name, category, paymentMethods, picture, price) {
    super(name, paymentMethods, picture, price)
    this.category = category || null
  }

  /**
   * Gets the menu item's type action, i.e: food -> "eat", drink -> "drink".
   *
   * @returns {String} The item's type, i.e: food -> "eat", drink -> "drink".
   * */
  getAction () {}

  /**
   * Gets the item's category, i.e: "Pizza", "With alcohol", "Snack", "Salad", etc.
   *
   * @returns {String} The item's category, i.e: "Pizza", "With alcohol", "Snack", "Salad", etc.
  */
  getCategory () {
    return this.category
  }

  /**
   * Sets the item's category, i.e: "Pizza", "With alcohol", "Snack", "Salad", etc.
   *
   * @returns {String} The item's category, i.e: "Pizza", "With alcohol", "Snack", "Salad", etc.
  */
  setCategory (category) {
    this.category = category
  }

}
