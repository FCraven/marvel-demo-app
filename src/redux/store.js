import {combineReducers, createStore, applyMiddleware,} from 'redux'
import { characterReducer, selectedCharacterReducer, settingsReducer } from './ducks'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

const store = createStore(
  combineReducers(
    {
      characters: characterReducer,
      selectedCharacter: selectedCharacterReducer,
      settings: settingsReducer
    }
  ),
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
)

export default store;
