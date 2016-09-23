<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Usage</h3>
    <div class="c-item u-gutter">
      <h4 class="c-item__heading">Dialog</h4>
      <div class="c-item__description">
        <p>First you have to create the dialog, here's an example:</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.usage01"></div>
      <div class="c-item__description">
        <p>So, now you can call the dialog, there are three ways to handle it:</p>
      </div>
      <h5 class="c-item__sub-heading">Using the directive</h5>
      <div class="c-item__code-wrapper" v-html="snippets.usage02"></div>
      <h5 class="c-item__sub-heading">Using the <code>$wv</code> instance</h5>
      <div class="c-item__description">
        <p>Only available if you installed it as a Plugin.</p>
      </div>
      <div class="c-item__code-wrapper" v-html="snippets.usage03"></div>
      <h5 class="c-item__sub-heading">Importing the functions from src</h5>
      <div class="c-item__code-wrapper" v-html="snippets.usage04"></div>
    </div>
  </section>
</template>

<script>
  import usage01 from 'src-docs/app/snippets/usage-01.md'
  import usage02 from 'src-docs/app/snippets/usage-02.md'
  import usage03 from 'src-docs/app/snippets/usage-03.md'
  import usage04 from 'src-docs/app/snippets/usage-04.md'

  export default {
    name: 'HomeUsagePage',
    data () {
      return {
        snippets: {
          usage01,
          usage02,
          usage03,
          usage04
        }
      }
    }
  }
</script>
