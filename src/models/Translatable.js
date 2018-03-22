/**
 * class :: Translatable
 *
 * Represents a translatable field.
*/
export default class Translatable {
  /**
   * Constructor.
   *
   * @param {String} en The text description in Engish.
   * @param {String} es The text description in Spanish.
   * @param {String} it The text description in Italian.
   */
  constructor (en, es, it) {
    this.en = en
    this.es = es || ''
    this.it = it || ''
  }

  /**
   * Gets the text translated into the given language.
   *
   * @param {String} language The language's code string, i.e: 'en', 'es' or 'it'.
   * @returns {String} string The translated text.
   */
  getText (language) {
    return this[language]
  }

  /**
   * Sets the translated text.
   *
   * @param {String} language The language's code string, i.e: 'en', 'es' or 'it'.
   * @param {String} text The translated text.
   */
  setText (language, text) {
    this[language] = text
  }
}
