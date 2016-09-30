```html
<button v-dialog:toggle="dialog2">Open</button>
<wv-dialog ref="dialog2" class="my-modal">
  <h1>Hello</h1>
  <!-- lorem -->
  <button v-dialog:toggle="dialog2">Close</button>
</wv-dialog>
```

```scss
.my-modal {
  background-color: #F1524B;
  border-radius: 5px;
  color: #ffffff;
  padding: 2rem;
  text-align: center;
  max-width: 50rem;
}
```
