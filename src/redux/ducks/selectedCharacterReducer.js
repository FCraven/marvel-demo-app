import axios from 'axios'
import { toggleLoading } from './settingsReducer'
import MD5 from 'crypto-js/md5'

export const MARVEL_API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY
export const MARVEL_API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY
export const ts = Date.now()
export const hash = MD5(ts+MARVEL_API_PRIVATE_KEY+MARVEL_API_PUBLIC_KEY).toString()

//initalState
export const initialState = {
  id: 0,
  name: '',
  description: '',
  modified: '',
  thumbnail: {},
  resourceURI: '',
  comics: {},
  series: {},
  stories: {},
  events: {},
  urls: [],
  selectedComics: [],
  selectedSeries: [],
  selectedStories: [],
  selectedEvents: []
}

//ActionTypes
export const ADD_CHARACTER_ID = 'ADD_CHARACTER_ID'

export const GOT_CHARACTER_INFO = 'GOT_CHARACTER_INFO'

export const GOT_CHARACTER_COMICS = 'GOT_CHARACTER_COMICS'

export const GOT_CHARACTER_SERIES = 'GOT_CHARACTER_SERIES'

export const GOT_CHARACTER_STORIES = 'GOT_CHARACTER_STORIES'

export const GOT_CHARACTER_EVENTS = 'GOT_CHARACTER_EVENTS'


//ActionCreators

export const addCharacterId =(id)=> {
  return {
    type: ADD_CHARACTER_ID,
    id
  }
}

export const gotCharacterInfo =(info)=> {
  return {
    type: GOT_CHARACTER_INFO,
    info
  }
}

export const gotCharacterComics =(comics)=> {
  return {
    type: GOT_CHARACTER_COMICS,
    comics
  }
}

export const gotCharacterSeries =(series)=> {
  return {
    type: GOT_CHARACTER_SERIES,
    series
  }
}

export const gotCharacterStories =(stories)=> {
  return {
    type: GOT_CHARACTER_STORIES,
    stories
  }
}

export const gotCharacterEvents =(events)=> {
  return {
    type: GOT_CHARACTER_EVENTS,
    events
  }
}

//thunks
export const fetchCharacterInfo =(id)=> {
  return async(dispatch) => {
    try {
      dispatch(toggleLoading())
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}`)
      const info = data.data.results[0];
      dispatch(gotCharacterInfo(info))
      dispatch(toggleLoading())
    } catch(err) {
        console.log(err)
    }
  }
}

export const fetchCharacterComics =(id)=>{
  return async(dispatch)=> {
    try {
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${ts}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}`)
      const results = data.data
      const comicsArr = results.results;
      dispatch(gotCharacterComics(comicsArr))
    } catch (err) {
        console.log(err)
    }
  }
}

export const fetchCharacterSeries =(id)=> {
  return async(dispatch)=> {
    try {
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/series?ts=${ts}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}`)
      const results = data.data
      const seriesArr = results.results;
      dispatch(gotCharacterSeries(seriesArr))
    } catch (err) {
        console.log(err)
    }
  }
}

export const fetchCharacterStories =(id)=> {
  return async(dispatch)=> {
    try {
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/stories?ts=${ts}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}`)
      const results = data.data
      const storiesArr = results.results;
      dispatch(gotCharacterStories(storiesArr))
    } catch (err) {
        console.log(err)
    }
  }
}

export const fetchCharacterEvents =(id)=> {
  return async(dispatch)=> {
    try {
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/events?ts=${ts}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}`)
      const results = data.data
      const eventsArr = results.results;
      dispatch(gotCharacterEvents(eventsArr))
    } catch (err) {
        console.log(err)
    }
  }
}

// stories events

//reducer
const selectedCharacterReducer =(state = initialState, action) => {
  switch(action.type) {

    case ADD_CHARACTER_ID:
      return Object.assign({}, state, {
        id: action.id
      })

    case GOT_CHARACTER_INFO:
      return Object.assign({}, state, {
        ...action.info
      })

    case GOT_CHARACTER_COMICS:
      return Object.assign({},state, {
        selectedComics: action.comics
      })

    case GOT_CHARACTER_SERIES:
      return Object.assign({}, state, {
        selectedSeries: action.series
      })

    case GOT_CHARACTER_STORIES:
      return Object.assign({}, state, {
        selectedStories: action.stories
      })

    case GOT_CHARACTER_EVENTS:
      return Object.assign({}, state, {
        selectedEvents: action.events
      })

    default:
      return state;
  }
}

export default selectedCharacterReducer



