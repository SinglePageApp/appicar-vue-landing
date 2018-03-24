import TranslatableText from './TranslatableText'
import Translatable from './Translatable'

/** @constant {Integer} MAX_POINTS number of points constant. */
const MAX_POINTS = 5

/**
 * class :: Scorable
 *
 * Represents an object which can be scored.
 */
export default class Scorable extends TranslatableText {
  /**
   * Constructor.
   *
   * @param {Integer} points The average score among all the reviews points (from 0 to 5).
   * @param {Translatable} description The store's description text.
   */
  constructor (points, description) {
    super(description || new Translatable(''))
    this.setPoints(points || 0)
    /** @property {Date} date The creation's date. */
    this.date = new Date()
  }

  /**
   * Gets the date when the review was performed.
   *
   * @param {String} language The language's code string, i.e: 'en', 'es' or 'it'.
   * @returns {String} The date when the review was performed.
   */
  getDate (language) {
    return this.date.toLocaleString(language)
  }

  /**
   * Sets the date when the review was performed.
   *
   * @param {Date} language The date when the review was performed.
   */
  setDate (date) {
    this.date = date
  }

  /**
   * Gets the review's number of points (from 0 to 5).
   *
   * @returns {Integer} The review's number of points (from 0 to 5).
   */
  getPoints () {
    return this.points
  }

  /**
   * Sets the review's number of points (from 0 to 5).
   *
   * @param {Integer} value The review's number of points (an integer from 0 to 5).
   */
  setPoints (value) {
    // Points must be in the range 0-5.
    if (value >= 0 && value < 6) {
      this.points = value
    } else {
      // tslint:disable-next-line:quotemark
      throw new OutOfRangeError("Review's points must be an integer between 0 and 5.")
    }
  }

  /**
   * Determines if a store was rated.
   *
   * @returns {Boolean} True is it was rated before.
   */
  hasStars () {
    return (this.points > 0)
  }

  /**
   * Gets an array of length equals to number of points.
   *
   * @returns {Integer[]} An array of number of points length.
   */
  getStars () {
    return (this.points > 0 ? new Array(this.points) : null)
  }

  /**
   * Gets an array of length equals to number of lacking points to max puntuation.
   *
   * @returns {Integer[]} An array of number of lacking points to max puntuation.
   */
  getLackingStars () {
    return new Array(MAX_POINTS - this.points)
  }
}

/**
 * class :: OutOfRangeError
 *
 * Represents and error caused by an integer that it's out of the specified range.
 */
class OutOfRangeError extends Error {}
