/**
 * class :: Price
 *
 * Represents the menu item's price by currency.
*/
export default class Price {
  /** The price's currency code, i.e: 'USD', 'ARS', etc. */
  private currency: string;
  /** The price's value in terms of the current currency. */
  private value: number;

  /**
   * Constructor.
   *
   * @param currency The price's currency code, i.e: 'USD', 'ARS', etc.
   * @param value The price's value in terms of the current currency.
   */
  public constructor(currency?: string, value?: number) {
    this.currency = currency || null;
    this.value = value || 0;
  }

  /**
   * Gets the price's value in terms of the current currency.
   *
   * @returns number
  */
  public getValue() {
    return this.value;
  }

  /**
   * Gets the currency code, i.e: 'USD', 'ARS', etc.
   *
   * @returns string
  */
  public getCurrency() {
    return this.currency;
  }

  /**
   * Sets the price's value in terms of the current currency.
   *
   * @param value The price's value in terms of the current currency.
   */
  public setValue(value: number) {
    this.value = value;
  }

  /**
   * Sets the currency code, i.e: 'USD', 'ARS', etc.
   *
   * @param value The price's value in terms of the current currency.
   */
  public setCurrency(currency: string) {
    this.currency = currency;
  }
}
