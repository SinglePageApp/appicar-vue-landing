import MenuItem from './MenuItem'

/**
 * class :: Drink
 *
 * Represents a drink type menu's item.
*/
export default class Drink extends MenuItem {
  toString () {
    return 'drink'
  }

  getAction () {
    return 'drink'
  }
}
