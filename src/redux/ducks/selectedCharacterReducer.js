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

export const fetchCharacterComics =()=> {
  return async(dispatch, getState) => {
    try {
    const state = getState()
    const comics = state.selectedCharacter.comics.items || []
    const comicIds = comics.map((el,idx) => {
      const splitURI = el.resourceURI.split('/')
      const id = parseInt(splitURI[splitURI.length-1])
      return id
    });
    //START HERE AND ATTEMPT A FOR EACH TO FIGURE THIS OUT
    const results = comicIds.map(async(el) => {
      const {data} =  await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${el}?apikey=${MARVEL_API_PUBLIC_KEY}`)
      const { results } = data.data
      return [...results]
    })

    const resolvedResults =async()=> {
      return Promise.all(results)
    }

    console.log(`resolved promise results? --->`, resolvedResults())
    //HERE IS THE BROKEN CODE ^^^ and use promis.all above to reolve the array of promises and return usable values
    //https://flaviocopes.com/javascript-async-await-array-map/
    // dispatch(gotCharacterComics(results))
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
      console.log(`COMICS===D`, comics)
      return Object.assign({},state, {
        selectedComics: [...action.comics]
      })
    default:
      return state;
  }
}

export default selectedCharacterReducer



