import AppFooter from 'components/AppFooter'
import AppTable from 'components/AppTable'
import Todo from '../components/Todo'

export default function registerComponents (Vue) {
  Vue.component('app-footer', AppFooter)
  Vue.component('app-table', AppTable)
  Vue.component('todo', Todo)
}
