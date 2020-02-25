import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import {  characterReducer,
          comicsReducer,
          creatorsReducer,
          eventsReducer,
          seriesReducer,
          storiesReducer,
          selectedCharacterReducer,
          selectedComicReducer,
          selectedCreatorReducer,
          selectedEventReducer,
          selectedSeriesReducer,
          selectedStoryReducer,
          settingsReducer } from './ducks'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'


const createRootReducer = (history) => combineReducers({
  characters: characterReducer,
  comics: comicsReducer,
  creators: creatorsReducer,
  events: eventsReducer,
  series: seriesReducer,
  stories: storiesReducer,
  router: connectRouter(history),
  selectedCharacter: selectedCharacterReducer,
  selectedComic: selectedComicReducer,
  selectedCreator: selectedCreatorReducer,
  selectedEvent: selectedEventReducer,
  selectedSeries: selectedSeriesReducer,
  selectedStory: selectedStoryReducer,
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
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;
