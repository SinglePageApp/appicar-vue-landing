import gql from 'graphql-tag'

/**
 * class :: MailService
 *
 * Service for Store types.
 */
class MailService {
  /**
   * Constructor.
   */
  constructor () {
    this.hidden = true
    this.sent = false
    this.sentSuccessfully = false
  }

  /**
   * Determines if the form was submitted.
   *
   * @returns boolean True if the form was submitted.
   */
  wasSent () {
    return this.sent
  }

  /**
   * Sets the message's state as sent or not sent depending on the value passed by argument
   *
   * @param {Boolean} value The message state's value.
   */
  setSent (value) {
    this.sent = value
  }

  /**
   * Determines if the e-mail was sent succesfuly.
   *
   * @returns boolean True if the form was submitted.
   */
  wasSuccessful () {
    return this.sentSuccessfully
  }

  /**
   * Sets the sending state.
   *
   * @param {Boolean} value The state's value.
   */
  setSendingState (value) {
    this.sentSuccessfully = value
  }

  /**
   * Determines if the alert box is hidden.
   *
   * @returns boolean True if the alert box is hidden.
   */
  isHidden () {
    return this.hidden
  }

  /**
   * Hides the alert message.
   */
  hideAlert () {
    this.hidden = true
  }

  /**
   * Shows the alert message.
   */
  showAlert () {
    this.hidden = false
  }

  /**
   * Sends an e-mail request to the API server.
   *
   * @param {String} name The sender's name.
   * @param {String} email The sender's e-mail address.
   * @param {String} subject The e-mail's subject.
   * @param {String} message The e-mail's message.
   */
  send (name, email, subject, message) {
    const mutation = gql`
      mutation Mail {
        sendEmail(
          from: "${name} <${email}>"
          subject: "${subject}"
          text: "${message}"
        )
      }
    `

    return mutation
  }
}

/**
 * Singleton implementation.
 */
export default (function () {
  /** MailService instance reference. */
  let instance = null

  return {
    /**
     * Gets a unique instance of MailService.
     *
     * @returns {MailService} A unique instance of MailService.
     */
    getInstance: function () {
      if (!instance) {
        instance = new MailService()
      }
      return instance
    }
  }
})()
