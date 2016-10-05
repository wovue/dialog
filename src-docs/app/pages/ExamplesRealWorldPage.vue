<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Real world example</h3>
    <div class="c-item u-gutter">
      <div class="c-item__description">
        <ul>
          <li>Custom width</li>
          <li>Custom styles</li>
          <li>Aria attributes</li>
          <li>Scrollable</li>
          <li>Listening to <code>closed</code> event</li>
        </ul>
      </div>
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.rw01"></div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <button v-dialog:toggle="dialog" type="button">Open</button>
        <wv-dialog
          class="modal"
          ref="dialog"
          :width="600"
          @closed="onClosed"
          aria-labelledby="title"
          aria-describedby="description"
        >
          <h1 id="title">Hello</h1>
          <p id="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button v-dialog:toggle="dialog" type="button">Close</button>
          <todo></todo>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button v-dialog:toggle="dialog" type="button">Close</button>
        </wv-dialog>
      </div>
      <div class="c-item__description">
        <p><strong>Note:</strong> I recommend have a root element with the following styles to avoid double scroll</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.rw02"></div>
      <div class="c-item__description">
        <p>Click on the <code>button</code> to add these styles, then open the dialog.</p>
      </div>
      <div class="c-play-around">
        <button @click="loadCss" type="button">Fix double scroll</button>
      </div>
    </div>
  </section>
</template>

<script>
  import rw01 from 'src-docs/app/snippets/example-rw-01.md'
  import rw02 from 'src-docs/app/snippets/example-rw-02.md'
  import rw02Css from '!!raw!src-docs/app/snippets/example-rw-02.css'

  export default {
    name: 'ExamplesRealWorldPage',
    data () {
      return {
        snippets: {
          rw01,
          rw02
        }
      }
    },
    methods: {
      onClosed () {
        window.alert('Dialog closed')
      },
      loadCss () {
        let style = document.createElement('style')
        style.appendChild(document.createTextNode(rw02Css))
        let head = document.getElementsByTagName('head')[0]
        head.appendChild(style)
      }
    }
  }
</script>

<style lang="scss">
  .modal {
    background-color: #400255;
    color: #ffffff;
    padding: 2rem;
    text-align: center;
    border-radius: 5px;
  }
</style>
