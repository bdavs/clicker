import { combineReducers } from 'redux'
import notification from './notification'
import counter from './counter'

export default combineReducers({
  notification,
  counter
})