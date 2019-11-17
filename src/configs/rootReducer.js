import {combineReducers} from 'redux'
import {registrationReducer} from '../reducers/registrationReducer'
import {createAccountReducer} from '../reducers/createAccountReducer'

export const rootReducer = combineReducers({
  registrationReducer,
  createAccountReducer,
})
