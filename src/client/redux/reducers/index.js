import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userReducers from './user.reducers'
import taskReducers from './task.reducers'

const rootReducer = combineReducers({
  form: formReducer,
  userReducers,
  taskReducers
})

export default rootReducer
