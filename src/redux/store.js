import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import { characterReducer, selectedCharacterReducer, settingsReducer } from './ducks'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'


const createRootReducer =(history)=> combineReducers({
  router: connectRouter(history),
  characters: characterReducer,
  selectedCharacter: selectedCharacterReducer,
  settings: settingsReducer
})

export const history = createBrowserHistory()

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      createLogger()
    )
  )
)

export default store;

//fallback
// const store = createStore(
//   combineReducers(
//     {
//       characters: characterReducer,
//       selectedCharacter: selectedCharacterReducer,
//       settings: settingsReducer
//     }
//   ),
//   applyMiddleware(
//     thunkMiddleware,
//     createLogger()
//   )
// )
