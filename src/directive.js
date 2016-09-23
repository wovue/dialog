import {eventBus} from './helpers'

const directive = {
  bind () {
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

    if (this.arg === 'toggle') {
      this.$wv.toggleDialog = toggleDialog.bind(undefined, this.expression)

      this.el.addEventListener('click', this.$wv.toggleDialog)
    }

    if (this.arg === 'close') {
      this.$wv.closeDialog = closeDialog.bind(undefined, this.expression)

      this.el.addEventListener('click', this.$wv.closeDialog)
    }

    if (this.arg === 'open') {
      this.$wv.openDialog = openDialog.bind(undefined, this.expression)

      this.el.addEventListener('click', this.$wv.openDialog)
    }
  },
  unbind () {
    if (this.arg === 'toggle') {
      this.el.removeEventListener('click', this.$wv.toggleDialog)
    }

    if (this.arg === 'close') {
      this.el.removeEventListener('click', this.$wv.closeDialog)
    }

    if (this.arg === 'open') {
      this.el.removeEventListener('click', this.$wv.openDialog)
    }
  }
}

function toggleDialog (dialogRef) {
  eventBus.emit('toggle:dialog', dialogRef, 'toggle')
}

function closeDialog (dialogRef) {
  eventBus.emit('toggle:dialog', dialogRef, 'close')
}

function openDialog (dialogRef) {
  eventBus.emit('toggle:dialog', dialogRef, 'open')
}

export {directive, toggleDialog, closeDialog, openDialog}
