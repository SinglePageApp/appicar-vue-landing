import { abstractField } from 'vue-form-generator'
import myCaptcha from 'vue-captcha'

export default {
  name: 'Captcha',
  components: {
    'my-captcha': myCaptcha
  },
  mixins: [ abstractField ],
  methods: {
    onSuccess () {
      this.value = 'holas'
    }
  }
}
