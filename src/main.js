import component from './component'

let Vue = {}

let Dialog = {
  install (_Vue) {
    Vue = _Vue
    Vue.component('dialog', component)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('dialog', Dialog)
}
export default Dialog
