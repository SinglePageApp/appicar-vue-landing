import Header from '../header'
import StoreMenu from './store-menu'
import StoreReviews from './store-reviews'
import Store from '../../models/Store'
import $store from '../../services/store'
import Translatable from '../../models/Translatable';

const MAPS = {
  URL: 'https://www.google.com/maps/embed/v1/search',
  key: 'AIzaSyDqpxYbmMQKzjaVZNlvgReQ-Yq7m24Vkds'
}

export default {
  name: 'StorePage',
  components: {
    Header,
    StoreMenu,
    StoreReviews
  },
  props: [],
  data () {
    return {
      store: null,
      language: this.$i18n.locale,
      mapsURL: null
    }
  },
  created () {
    this.$apollo.addSmartQuery('store',
      $store.state.storeService.getStore(this.$route.params.URI)
    ).observer.subscribe((response) => {
      const s = response.data.store
      this.store = new Store(
        s.name,
        s.category,
        s.description,
        s.address,
        s.city,
        s.country,
        s.lat,
        s.lng,
        s.image,
        s.points,
        s.featured,
        s.URI
      )
      this.store.setDescription(Object.assign(new Translatable(''), s.description))
      this.mapsURL = MAPS.URL + '?key=' + MAPS.key + '&q=' + this.store.getCoords() + '&language=' + this.$i18n.locale
    })
    window.scrollTo(0, 0)
  },
  methods: {
    hasStars: function () {
      return true
    },
    getStars: function () {
      return new Array(3)
    },
    getLackingStars: function () {
      return new Array(2)
    },
    hasReviews: function () {
      return true
    },
    getReviews: function () {
      return [
        new Review(
          'Matías J. Magni',
          'http://cdn.appicar.com/users/TGTbYMoThGpZWveKa.png',
          {
            en: 'Description Matías J. Magni (en).',
            es: 'Description Matías J. Magni (es).',
            it: 'Description Matías J. Magni (it).'
          },
          4
        ),
        new Review(
          'Edgardo Marti',
          'http://cdn.appicar.com/users/GnLdeKy6kmDhAkAkF.jpg',
          {
            en: 'Description Edgardo Marti (en).',
            es: 'Description Edgardo Marti (es).',
            it: 'Description Edgardo Marti (it).'
          },
          3
        )
      ]
    },
    hasMenu: function () {
      return true
    },
    getMenu: function () {
      return new Menu()
    }
  }
}

const MAX_POINTS = 5

class Review {
  constructor (clientName, clientPicture, description, points) {
    this.date = new Date()
    this.clientName = clientName
    this.clientPicture = clientPicture
    this.description = description
    this.points = points
  }

  getDate () {
    return this.date
  }

  getClientName () {
    return this.name
  }

  getClientPicture () {
    return this.clientPicture
  }

  getDescription (language) {
    return this.description[language]
  }

  getStars () {
    return new Array(this.points)
  }

  getLackingStars () {
    return new Array(MAX_POINTS - this.points)
  }
}

class Menu {
  getItems () {
    return [
      new Item(
        {
          en: 'Mozzarella pizza',
          es: 'Pizza Mozzarella',
          it: 'Pizza alla Mozzarella'
        },
        'http://cdn.appicar.com/stores/menu/ZPoYEMmanZgmFvYpC/5aa06d7784b554537f888858.jpg',
        150
      ),
      new Item(
        {
          en: 'Provolone Sandwich',
          es: 'Provolomo',
          it: 'Panino al Provolone'
        },
        'http://cdn.appicar.com/stores/menu/ZPoYEMmanZgmFvYpC/5aa06d7784b554537f888859.png',
        180
      )
    ]
  }
}

class Item {

  constructor (name, picture, price) {
    this.name = name
    this.picture = picture
    this.price = price
  }

  getPicture () {
    return this.picture
  }

  getName (language) {
    return this.name[language]
  }

  getPrice (currency) {
    return this.price
  }
}
