import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { characterReducer, comicsReducer, creatorsReducer, eventsReducer, selectedCharacterReducer, settingsReducer, seriesReducer, storiesReducer } from './ducks'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'


const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  characters: characterReducer,
  comics: comicsReducer,
  creators: creatorsReducer,
  events: eventsReducer,
  selectedCharacter: selectedCharacterReducer,
  series: seriesReducer,
  stories: storiesReducer,
  settings: settingsReducer,
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
