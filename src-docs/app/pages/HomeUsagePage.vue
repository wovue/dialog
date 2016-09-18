<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Usage</h3>
    <div class="c-item u-gutter">
      <div class="c-item__description">
        <p>Here's an example:</p>
      </div>
      <h4 class="c-item__heading">Dialog</h4>
      <div class="c-item__code-wrapper" v-html="snippets.usage01"></div>
      <div class="c-item__description">
        <p>That's it!</p>
      </div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <button v-dialog:toggle="dialog" type="button">Open dialog</button>
        <wv-dialog ref="dialog">
          <h1>Hello</h1>
          <button v-dialog:toggle="dialog" type="button">Close dialog</button>
        </wv-dialog>
      </div>
    </div>
  </section>
</template>

<script>
  import usage01 from 'src-docs/app/snippets/usage-01.md'

  export default {
    name: 'HomeUsagePage',
    data () {
      return {
        snippets: {
          usage01
        }
      }
    }
  }
</script>
