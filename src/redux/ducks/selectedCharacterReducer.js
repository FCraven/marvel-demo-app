//imports
import axios from 'axios'
import { MARVEL_API_PUBLIC_KEY } from '../../secrets'
import { toggleLoading } from './settingsReducer'



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
  selectedComics: []
}

//ActionTypes
export const ADD_CHARACTER_ID = 'ADD_CHARACTER_ID'

export const GOT_CHARACTER_INFO = 'GOT_CHARACTER_INFO'

export const GOT_CHARACTER_COMICS = 'GOT_CHARACTER_COMICS'

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

//thunks
export const fetchCharacterInfo =(id)=> {
  return async(dispatch) => {
    try {
      dispatch(toggleLoading())
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${MARVEL_API_PUBLIC_KEY}`)
      const info = data.data.results[0];
      dispatch(gotCharacterInfo(info))
      dispatch(toggleLoading())
    } catch(err) {
        console.log(err)
    }
  }
}

export const fetchCharacterComics =(id)=> {
  return async(dispatch) => {
    try {
      dispatch(toggleLoading())
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=${MARVEL_API_PUBLIC_KEY}`)
      const results = data.data
      const comicsArr = results.results;
      dispatch(gotCharacterComics(comicsArr))
      dispatch(toggleLoading())
    } catch (err) {
        console.log(err)
    }
  }
}

//reducer
const selectedCharacterReducer =(state = initialState, action) => {
  switch(action.type){
    case ADD_CHARACTER_ID:
      return Object.assign({}, state, {
        id: action.id
      })
    case GOT_CHARACTER_INFO:
      return Object.assign({}, state, {
        ...action.info
      })
    case GOT_CHARACTER_COMICS:
      const comics = action.comics
      console.log(`COMICS===>`, comics)
      return Object.assign({},state, {
        selectedComics: [...action.comics]
      })
    default:
      return state;
  }
}

export default selectedCharacterReducer



