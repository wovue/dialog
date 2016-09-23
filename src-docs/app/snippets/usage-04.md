```html
<button @click="openDialog">Open</button>
<button @click="closeDialog">Open</button>
<button @click="toggleDialog">Open</button>
```

```js
import {toggleDialog, closeDialog, openDialog} from 'wovue-dialog'

export default {
  // ...
  methods: {
    openDialog () {
      openDialog('my-dialog')
    },
    closeDialog () {
      closeDialog('my-dialog')
    },
    toggleDialog () {
      toggleDialog('my-dialog')
    }
  }
}
```
