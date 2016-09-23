```html
<button @click="openDialog">Open</button>
<button @click="closeDialog">Open</button>
<button @click="toggleDialog">Open</button>
```

```js
export default {
  // ...
  methods: {
    openDialog () {
      this.$wv.dialog.open('my-dialog')
    },
    closeDialog () {
      this.$wv.dialog.close('my-dialog')
    },
    toggleDialog () {
      this.$wv.dialog.toggle('my-dialog')
    }
  }
}
```
