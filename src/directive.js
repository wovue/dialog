import {eventBus} from './helpers'

const directive = {
  bind () {
    if (this.arg === 'toggle') {
      // validations
      if (!this.expression) {
        console.error(`[dialog]: Expected a Value, got '${this.expression}'. (found in ${this.vm.constructor.name})`)
      }
      if (typeof this.expression !== 'string') {
        console.error(`[dialog]: Expected String, got ${typeof this.expression}. (found in ${this.vm.constructor.name})`)
      }

      // bindings
      // http://stackoverflow.com/questions/14417890/does-bind-change-the-function-reference-how-to-set-permanently?lq=1
      this.$wv = {}
      this.$wv.toggleDialog = toggleDialog.bind(undefined, this.expression)

      this.el.addEventListener('click', this.$wv.toggleDialog)
    }
  },
  unbind () {
    if (this.arg === 'toggle') {
      this.el.removeEventListener('click', this.$wv.toggleDialog)
    }
  }
}

function toggleDialog (dialogRef) {
  eventBus.emit('toggle:dialog', dialogRef)
}

export {directive}
export {toggleDialog}
