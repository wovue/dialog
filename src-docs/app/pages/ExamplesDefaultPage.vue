<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Varius</h3>
    <div class="c-item u-gutter">
      <h4 class="c-item__heading">Disable close on esc</h4>
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.v01"></div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <button v-dialog:toggle="dialog" type="button">Open dialog</button>
        <wv-dialog ref="dialog" :close-on-esc="false">
          <h1>Hello</h1>
          <button v-dialog:toggle="dialog" type="button">Close dialog</button>
        </wv-dialog>
      </div>
      <h4 class="c-item__heading">Disable close on click outside</h4>
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.v02"></div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <button v-dialog:toggle="dialog2" type="button">Open dialog</button>
        <wv-dialog ref="dialog2" :close-on-outside-click="false">
          <h1>Hello</h1>
          <button v-dialog:toggle="dialog2" type="button">Close dialog</button>
        </wv-dialog>
      </div>
    </div>
  </section>
</template>

<script>
  import v01 from 'src-docs/app/snippets/example-v01.md'
  import v02 from 'src-docs/app/snippets/example-v02.md'

  export default {
    name: 'ExamplesRealWorldPage',
    data () {
      return {
        snippets: {
          v01,
          v02
        }
      }
    }
  }
</script>
