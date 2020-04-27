import { combineReducers } from 'redux'
import notification from './notification'
import counter from './counter'
import menu from './menu'

export default combineReducers({
  notification,
  counter,
  menu,
})