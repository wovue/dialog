<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">API</h3>
    <div class="c-item u-gutter">
      <h4 class="c-item__heading">Dialog</h4>
      <h5 class="c-item__sub-heading">Props</h5>
      <app-table class="c-item__table" :data="tables.props"></app-table>
      <h5 class="c-item__sub-heading">Events</h5>
      <app-table class="c-item__table" :data="tables.events"></app-table>
      <h4 class="c-item__heading">Directives</h4>
      <h5 class="c-item__sub-heading">v-dialog</h5>
      <app-table class="c-item__table" :data="tables.directive"></app-table>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomePage',
    data () {
      return {
        tables: {
          directive: [
            {
              expression: 'Dialog identifier. (the `ref` prop from the Dialog)',
              expects: 'String',
              argument: 'toggle',
              description: 'Toggle the Dialog on click.',
              example: '`<button v-dialog:toggle="stuff">Open</button>`'
            }
          ],
          props: [
            {
              name: 'ref',
              type: '`String`',
              required: 'true',
              default: null,
              description: 'Dialog identifier.'
            }, {
              name: 'overlayBackground',
              type: '`String`',
              required: 'false',
              default: '`rgba(0, 0, 0, .5)`',
              description: 'Overlay background color.'
            }, {
              name: 'class',
              type: '`String`',
              required: 'false',
              default: '`false`',
              description: 'Dialog `class` attribute.'
            }, {
              name: 'width',
              type: '`Number`, `String`',
              required: 'false',
              default: '`false`',
              description: 'Dialog `max-width` style rule. (e.g. `300`, `70%`)'
            }, {
              name: 'closeOnEsc',
              type: '`Boolean`',
              required: 'false',
              default: '`true`',
              description: 'This determines if pressing the `esc` key will close the modal.'
            }, {
              name: 'closeOnOutsideClick',
              type: '`Boolean`',
              required: 'false',
              default: '`true`',
              description: 'This determines if clicking on the overlay will close the modal.'
            }, {
              name: 'ariaLabelledby',
              type: '`String`',
              required: 'false',
              default: '`false`',
              description: 'Dialog `aria-labelledby` attribute.'
            }, {
              name: 'ariaDescribedby',
              type: '`String`',
              required: 'false',
              default: '`false`',
              description: 'Dialog `aria-describedby` attribute.'
            }
          ],
          events: [
            {
              name: 'opened',
              type: 'emitted',
              description: 'Fired when the Dialog is opened. The transition starts.'
            }, {
              name: 'closed',
              type: 'emitted',
              description: 'Fired when the Dialog is closed. The transition ends.'
            }
          ]
        }
      }
    }
  }
</script>
