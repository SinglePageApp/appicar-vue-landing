import MenuItem from './MenuItem'

/**
 * class :: Drink
 *
 * Represents a drink type menu's item.
*/
export default class Drink extends MenuItem {
  getAction () {
    return 'drink'
  }
}
