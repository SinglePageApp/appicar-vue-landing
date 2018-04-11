/**
 * class :: Price
 *
 * Represents the menu item's price by currency.
*/
export default class Price {
  /**
   * Constructor.
   *
   * @param {String} currency The price's currency code, i.e: 'USD', 'ARS', etc.
   * @param {Float} value The price's value in terms of the current currency.
   */
  constructor (currency, value) {
    this.currency = currency || null
    this.value = value || 0
  }

  /**
   * Gets the price's value.
   *
   * @returns {Float} The price's value.
  */
  getValue () {
    return this.value
  }

  /**
   * Gets the currency code, i.e: 'USD', 'ARS', etc.
   *
   * @returns {String} The currency code.
  */
  getCurrency () {
    return this.currency
  }

  /**
   * Sets the price's value.
   *
   * @param {Float} value The price's value.
   */
  setValue (value) {
    this.value = value
  }

  /**
   * Sets the currency code, i.e: 'USD', 'ARS', etc.
   *
   * @param value The price's currency.
   */
  setCurrency (currency) {
    this.currency = currency
  }
}
