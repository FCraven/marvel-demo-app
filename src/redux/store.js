import {combineReducers, createStore, applyMiddleware,} from 'redux'
import { characterReducer } from './ducks'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

const store = createStore(
  combineReducers(
    {
      characters: characterReducer
    }
  ),
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
)

export default store;
