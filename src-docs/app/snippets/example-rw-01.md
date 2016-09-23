```html
<button v-dialog:toggle="dialog">Open</button>

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
  <button v-dialog:toggle="dialog">Close</button>
  <!-- lorem content -->
  <button v-dialog:toggle="dialog">Close</button>
</wv-dialog>
```

```js
export default {
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
