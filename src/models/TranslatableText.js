/**
 * class :: TranslatableText
 *
 * Inherite by classes that a translatable description field.
 */
export default class TranslatableText {
  /**
   * Constructor.
   *
   * @param {Translatable} description The description in translatable form.
   */
  constructor (description) {
    this.description = description
  }

  /**
   * Gets the description in the given language.
   *
   * @param {String} language The language's code string, i.e: 'en', 'es' or 'it'.
   * @returns {String} The description in the given language.
   */
  getDescription (language) {
    return this.description[language]
  }

  /**
   * Sets the description in translatable form.
   *
   * @param description The description in translatable form.
   */
  setDescription (description) {
    this.description = description
  }
}
