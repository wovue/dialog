```html
<button v-dialog:toggle="dialog2" type="button">Open dialog</button>
<wv-dialog ref="dialog2" :close-on-outside-click="false">
  <h1>Hello</h1>
  <button v-dialog:toggle="dialog2" type="button">Close dialog</button>
</wv-dialog>
```
