import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en.json'
import es from './es.json'
import it from './it.json'

const messages = {
  en: en,
  es: es,
  it: it
}

Vue.use(VueI18n)

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})
