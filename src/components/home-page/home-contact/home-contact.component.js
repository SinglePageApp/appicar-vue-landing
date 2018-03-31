import $store from '../../../services/store'

let apollo = null

export default {
  name: 'HomeContact',
  created () {
    apollo = this.$apollo
  },
  data () {
    return {
      model: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          model: 'name',
          placeholder: this.$i18n.t('home-page.contact.name'),
          maxlength: 30,
          validator: ['string', 'required']
        }, {
          type: 'input',
          inputType: 'email',
          model: 'email',
          placeholder: this.$i18n.t('home-page.contact.email'),
          maxlength: 254,
          validator: ['email', 'required']
        }, {
          type: 'input',
          inputType: 'text',
          model: 'subject',
          placeholder: this.$i18n.t('home-page.contact.subject'),
          maxlength: 30,
          validator: ['string', 'required']
        }, {
          type: 'textArea',
          model: 'message',
          placeholder: this.$i18n.t('home-page.contact.message'),
          min: 50,
          max: 500,
          validator: ['string', 'required'],
          featured: true,
          required: true
        }, {
          type: 'submit',
          buttonText: this.$i18n.t('home-page.contact.send'),
          validateBeforeSubmit: true,
          onSubmit: function (data) {
            // Subscribes to the send e-mail's request.
            apollo.mutate({
              mutation: $store.state.mailService.send(data.name, data.email, data.subject, data.message)
            }).then((data) => {
              // Result
              $store.state.mailService.setSent(true)
              $store.state.mailService.setSendingState(data.sendEmail)
              // this.form.reset()
              fadeInAndOutAlert()
            }).catch((error) => {
              // Error
              console.error(error)
            })
          }
        }]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    }
  },
  computed: {
    /**
     * Determines if the form was submitted.
     *
     * @returns {Boolean} True if the form was submitted.
     */
    wasSent: function () {
      return $store.state.mailService.wasSent()
    },
    /**
     * Determines if the e-mail was sent succesfully.
     *
     * @returns {Boolean} True if the form was submitted.
     */
    wasSuccessful: function () {
      return $store.state.mailService.wasSuccessful()
    },
    /**
     * Determines if the alert box is hidden.
     *
     * @returns {Boolean} True if the alert box is hidden.
     */
    isHidden: function () {
      return $store.state.mailService.isHidden()
    }
  }
}

/**
 * Shows an alert message for a duration of 5'.
 */
function fadeInAndOutAlert () {
  if ($store.state.mailService.wasSuccessful()) {
    setTimeout(() => {
      $store.state.mailService.hideAlert()
      setTimeout(() => {
        $store.state.mailService.setSent(false)
        $store.state.mailService.showAlert()
      }, 2000)
    }, 5000)
  }
}
