import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userReducers from './user.reducers'

const rootReducer = combineReducers({
  form: formReducer,
  userReducers
})

export default rootReducer
