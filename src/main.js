require('./styles/main.scss')

import Dialog from './Dialog'
import {directive, toggleDialog, closeDialog, openDialog} from './directive'

let Vue

const dialogPlugin = {
  install (_Vue) {
    Vue = _Vue

    // register plugin options
    if (!Vue.prototype.$wv) {
      Vue.prototype.$wv = {}
    }
    Vue.prototype.$wv.dialog = {
      toggle: toggleDialog,
      close: closeDialog,
      open: openDialog
    }

    Vue.component('wv-dialog', Dialog)
    Vue.directive('dialog', directive)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('wv-dialog', Dialog)
  window.Vue.directive('dialog', directive)
}
export default dialogPlugin
export {Dialog as component, toggleDialog, closeDialog, openDialog, directive}
