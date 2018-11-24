import MenuItem from './MenuItem'

/**
 * class :: Food
 *
 * Represents a food type menu's item.
*/
export default class Food extends MenuItem {
  toString () {
    return 'food'
  }

  getAction () {
    return 'eat'
  }
}
