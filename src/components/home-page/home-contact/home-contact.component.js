import $store from '../../../services/store'
import VueFormGenerator from 'vue-form-generator'

let vm = null
let apollo = null

export default {
  name: 'HomeContact',
  created () {
    vm = this
    apollo = this.$apollo
    translateMessages(this.$i18n)
  },
  data () {
    return {
      // Model's initial values.
      model: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      // Schema definition.
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          model: 'name',
          placeholder: this.$i18n.t('home-page.contact.name'),
          maxlength: 30,
          required: true,
          validator: ['string']
        }, {
          type: 'input',
          inputType: 'email',
          model: 'email',
          placeholder: this.$i18n.t('home-page.contact.email'),
          maxlength: 254,
          required: true,
          validator: ['email']
        }, {
          type: 'input',
          inputType: 'text',
          model: 'subject',
          placeholder: this.$i18n.t('home-page.contact.subject'),
          maxlength: 30,
          required: true,
          validator: ['string']
        }, {
          type: 'textArea',
          model: 'message',
          placeholder: this.$i18n.t('home-page.contact.message'),
          min: 50,
          max: 500,
          required: true,
          validator: ['string']
        }, {
          type: 'captcha',
          model: 'captcha',
          required: true,
          validator: [ 'required' ]
        }, {
          id: 'submit',
          type: 'submit',
          buttonText: this.$i18n.t('home-page.contact.send'),
          validateBeforeSubmit: true,
          disabled: true,
          onSubmit: function (data) {
            // Subscribes to the send e-mail's request.
            apollo.mutate({
              mutation: $store.state.mailService.send(data.name, data.email, data.subject, data.message)
            }).then((data) => {
              // Reset form values.
              vm.model = {
                name: '',
                email: '',
                subject: '',
                message: ''
              }
              // Result.
              $store.state.mailService.setSent(true)
              $store.state.mailService.setSendingState(!data.sendEmail)
              // this.form.reset()
              fadeInAndOutAlert()
            }).catch((error) => {
              // Error
              $store.state.mailService.setSent(true)
              $store.state.mailService.setSendingState(false)
              console.error(error)
            })
          }
        }]
      },
      // Form's options.
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    }
  },
  computed: {
    language: function () {
      return this.$i18n.locale
    },
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
  },
  watch: {
    /**
     * Watch language changes.
     */
    language: function () {
      // Contact form's error messages and warnings.
      translateMessages(this.$i18n)
      // Contact form fields labels.
      this.schema.fields[0].placeholder = this.$i18n.t('home-page.contact.name')
      this.schema.fields[1].placeholder = this.$i18n.t('home-page.contact.email')
      this.schema.fields[2].placeholder = this.$i18n.t('home-page.contact.subject')
      this.schema.fields[3].placeholder = this.$i18n.t('home-page.contact.message')
      this.schema.fields[4].buttonText = this.$i18n.t('home-page.contact.send')
    }
  },
  methods: {
    /**
     * Validation's process.
     *
     * @param {Boolean} isValid Indicates if the validation is correct or not.
     * @param {any} errors Contains the errors.
     */
    onValidated (isValid, errors) {
      // If is not valid, deactivate submit. Otherwise, activate it.
      document.getElementById('submit').disabled = !isValid
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

/**
 * Translates contact form's error messages and warnings.
 *
 * @param {i18n} i18n The i18n object's instance.
 */
function translateMessages (i18n) {
  let resources = VueFormGenerator.validators.resources
  resources.fieldIsRequired = i18n.t('vue-form-generator.fieldIsRequired')
  resources.invalidEmail = i18n.t('vue-form-generator.invalidEmail')
  resources.textTooSmall = i18n.t('vue-form-generator.textTooSmall')
  resources.invalidFormat = i18n.t('vue-form-generator.invalidFormat')
}
