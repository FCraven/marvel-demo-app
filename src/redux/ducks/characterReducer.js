import axios from 'axios'
// import { MARVEL_API_PUBLIC_KEY } from '../../secrets'
import { toggleLoading } from './settingsReducer'
export const initialState = {
  selectedLetter: 'a',
  characterSearch: '',
  characters: [],
}

const { MARVEL_API_PUBLIC_KEY } = process.env

//Actions
export const FETCH_INITIAL_CHARACTERS_BY_LETTER = 'FETCH_INITIAL_CHARACTERS_BY_LETTER'

export const GOT_CHARACTERS_BY_LETTER = 'GOT_CHARACTERS_BY_LETTER'

export const GOT_CHARACTERS_BY_SEARCH = 'GOT_CHARACTERS_BY_SEARCH'

//Action creators
export const gotInitialCharactersByLetter =(characters)=> {
  return {
    type: FETCH_INITIAL_CHARACTERS_BY_LETTER,
    characters
  }
}

export const gotCharactersByLetter =(characters)=> {
  return {
    type: GOT_CHARACTERS_BY_LETTER,
    characters
  }
}

export const gotCharactersBySearch =(characters)=> {
  return {
    type: GOT_CHARACTERS_BY_SEARCH,
    characters
  }
}

//Thunks

export const fetchInitialCharactersByLetter =()=> {
  return async(dispatch, getState) => {
    const state = getState()
    const { selectedLetter } = state.characters
    try{
      dispatch(toggleLoading())
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${selectedLetter}&apikey=${MARVEL_API_PUBLIC_KEY}`)
      const characters = data.data.results
      dispatch(gotInitialCharactersByLetter(characters))
      dispatch(toggleLoading())
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchCharactersByLetter =(selectedLetter)=> {
  return async(dispatch) => {
    try{
      dispatch(toggleLoading())
      const { data } =  await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${selectedLetter}&apikey=${MARVEL_API_PUBLIC_KEY}`)
      const characters = data.data.results
      dispatch(gotCharactersByLetter(characters))
      dispatch(toggleLoading())
    } catch (err) {
        console.log(err)
    }
  }
}

export const fetchCharactersBySearch =(searchVal)=> {
  return async(dispatch) => {
    try {
      dispatch(toggleLoading())
      const { data } =  await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${searchVal}&apikey=${MARVEL_API_PUBLIC_KEY }`)
      const characters = data.data.results
      dispatch(gotCharactersBySearch(characters))
      dispatch(toggleLoading())
    } catch(err) {
        console.log(err)
    }
  }
}

const characterReducer =(state = initialState, action) => {
  switch(action.type){

    case FETCH_INITIAL_CHARACTERS_BY_LETTER:
      return Object.assign({}, state, {
        characters: action.characters
      })
    case GOT_CHARACTERS_BY_LETTER:
      return Object.assign({}, state, {
        characters: action.characters
      })
    case GOT_CHARACTERS_BY_SEARCH:
      return Object.assign({}, state, {
        characters: action.characters
      })
    default:
      return state;
  }
}

export default characterReducer
