import Food from './Food'
import Translatable from './Translatable'
import Drink from './Drink'

/**
 * class :: Menu
 *
 * Represents the Store's menu.
*/
export default class Menu {
  /**
   * Constructor.
   *
   * @param {Item[]} items An array of items to add to the menu.
   */
  constructor (items) {
    this.items = items || []
  }

  /**
   * Gets all the items and promotions in the menu.
   *
   *  @returns {Item[]} The items and promotions in the menu.
  */
  getItems () {
    return this.items
  }

  /**
   * Adds items to the store's menu.
   *
   * @param {Item} item The item you want to add to the menu.
   */
  add (item) {
    this.items.push(item)
  }

  /**
   * Sets all the items and promotions in the menu from a JSON object.
   *
   * @param {any} reviews A JSON object containing the items and promotions in the menu.
   */
  setJsonItems (items) {
    // Clear property before start pushing items into it.
    this.items = []
    // Loop over all individual items in JSON format.
    for (const key in items) {
      if (key === 'food' && items.food) {
        let food = null
        items.food.forEach(foodJson => {
          food = Object.assign(new Food(), foodJson)
          food.setName(Object.assign(new Translatable(''), foodJson.name))
          food.setJsonPrice(foodJson.price)
          this.add(food)
        })
      } else if (key === 'drink' && items.drink) {
        let drink = null
        items.drink.forEach(drinkJson => {
          drink = Object.assign(new Drink(), drinkJson)
          drink.setName(Object.assign(new Translatable(''), drinkJson.name))
          drink.setJsonPrice(drinkJson.price)
          this.add(drink)
        })
      }
    }
  }

  /**
   * Adds items to the menu.
   *
   * @param {Item[]} items An array of items to add to the menu.
   */
  addItems (items) {
    Array.prototype.push.apply(this.items, items)
  }
}
