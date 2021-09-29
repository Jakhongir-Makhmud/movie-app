import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkAsync from 'redux-thunk'
import { dataReducer } from './reducers'
import  {createLogger} from 'redux-logger'

const logger = createLogger()

export const store = createStore(dataReducer,applyMiddleware(thunkAsync))