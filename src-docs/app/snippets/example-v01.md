```html
<button v-dialog:toggle="dialog">Open</button>

<wv-dialog ref="dialog" :close-on-esc="false" :close-on-outside-click="false">
  <h1>Hello</h1>
  <button v-dialog:toggle="dialog">Close</button>
</wv-dialog>
```
