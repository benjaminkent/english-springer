import EnglishSpringer from './EnglishSpringer.vue'

const springerPlugin = {
  install(Vue, options) {
    Vue.component('english-springer', EnglishSpringer)
  },
}

export default springerPlugin
