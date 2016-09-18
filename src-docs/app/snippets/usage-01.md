```html
<div>
  <button v-dialog:toggle="dialog" type="button">Open dialog</button>
  <wv-dialog ref="dialog">
    <h1>Hello</h1>
    <button v-dialog:toggle="dialog" type="button">Close dialog</button>
  </wv-dialog>
</div>
```
