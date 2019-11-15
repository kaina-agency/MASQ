// import something here
import Avatar from 'components/Avatar'
import Badge from 'components/Badge'
import Button from 'components/Button'
import Card from 'components/Card'
import Column from 'components/Column'
import Container from 'components/Container'
import Dialog from 'components/Dialog'
import DisplayHelper from 'components/DisplayHelper'
import ExpansionItem from 'components/ExpansionItem'
import Form from 'components/Form'
import GoogleMap from 'components/GoogleMap'
import Icon from 'components/Icon'
import List from 'components/List'
import ListItem from 'components/ListItem'
import Markdown from 'components/Markdown'
import Masonry from 'components/Masonry'
import Menu from 'components/Menu'
import Pic from 'components/Pic'
import PortalVue from 'portal-vue'
import Ribbon from 'components/Ribbon'
import Row from 'components/Row'
import Space from 'components/Space'
import Toolbar from 'components/Toolbar'
import Video from 'components/Video'

// "async" is optional
export default async ({ Vue }) => {
  // something to do
  Vue.component('Avatar', Avatar)
  Vue.component('Badge', Badge)
  Vue.component('Button', Button)
  Vue.component('Card', Card)
  Vue.component('Column', Column)
  Vue.component('Container', Container)
  Vue.component('Dialog', Dialog)
  Vue.component('DisplayHelper', DisplayHelper)
  Vue.component('ExpansionItem', ExpansionItem)
  Vue.component('Form', Form)
  Vue.component('GoogleMap', GoogleMap)
  Vue.component('Icon', Icon)
  Vue.component('List', List)
  Vue.component('ListItem', ListItem)
  Vue.component('Markdown', Markdown)
  Vue.component('Masonry', Masonry)
  Vue.component('Menu', Menu)
  Vue.component('Pic', Pic)
  Vue.component('Ribbon', Ribbon)
  Vue.component('Row', Row)
  Vue.component('Space', Space)
  Vue.component('Toolbar', Toolbar)
  Vue.component('Video', Video)
  Vue.use(PortalVue)
}
