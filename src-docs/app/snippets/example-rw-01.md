```html
<div>
  <button v-dialog:toggle="dialog" type="button">Open dialog</button>
  <wv-dialog
    class="modal"
    ref="dialog"
    :width="600"
    @closed="onClosed"
    aria-labelledby="title"
    aria-describedby="description"
  >
    <h1 id="title">Hello</h1>
    <p id="description">...</p>
    <button v-dialog:toggle="dialog" type="button">Close dialog</button>
    <!-- lorem content -->
    <button v-dialog:toggle="dialog" type="button">Close dialog</button>
  </wv-dialog>
</div>
```

```js
export default {
  // ...
  methods: {
    onClosed () {
      window.alert('Dialog closed')
    }
  }
}
```

```scss
.modal {
  background-color: #400255;
  color: #ffffff;
  padding: 2rem;
  text-align: center;
  border-radius: 5px;
}
```
