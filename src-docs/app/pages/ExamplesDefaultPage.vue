<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Various</h3>
    <div class="c-item u-gutter">
      <h4 class="c-item__heading">Example 1</h4>
      <div class="c-item__description">
        <ul>
          <li>Close on <code>esc</code> disabled</li>
          <li>Close on outside <code>click</code> disabled</li>
        </ul>
      </div>
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.v01"></div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <button v-dialog:toggle="dialog" type="button">Open</button>
        <wv-dialog ref="dialog" :close-on-esc="false" :close-on-outside-click="false">
          <h1>Hello</h1>
          <button v-dialog:toggle="dialog" type="button">Close</button>
        </wv-dialog>
      </div>
      <h4 class="c-item__heading">Example 2</h4>
      <div class="c-item__description">
        <ul>
          <li>Custom styles</li>
          <li>Custom width</li>
        </ul>
      </div>
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.v02"></div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <button v-dialog:toggle="dialog2" type="button">Open</button>
        <wv-dialog ref="dialog2" class="my-modal">
          <h1>Hello</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button v-dialog:toggle="dialog2" type="button">Close</button>
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

<style lang="scss">
  .my-modal {
    background-color: #F1524B;
    border-radius: 5px;
    color: #ffffff;
    padding: 2rem;
    text-align: center;
    max-width: 50rem;

    button {
      font-size: 1.25rem;
      padding: .5em 1em;
    }
  }
</style>
