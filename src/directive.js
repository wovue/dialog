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

      this.el.addEventListener('click', toggleDialog.bind(undefined, this.expression))
    }
  },
  unbind () {
    if (this.arg === 'toggle') {
      this.el.removeEventListener('click', toggleDialog.bind(undefined, this.expression))
    }
  }
}

function toggleDialog (dialogRef) {
  eventBus.emit('toggle:dialog', dialogRef)
}

export {directive}
export {toggleDialog}
