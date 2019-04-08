import { combineReducers } from 'redux'

import samples from './SampleReducer'
import notify from './NotifyReducer'

const rootReducer = combineReducers({
  notify
})

export default rootReducer
