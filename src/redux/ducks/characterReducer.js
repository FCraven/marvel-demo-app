import axios from 'axios'
import { MARVEL_API_PUBLIC_KEY } from '../../secrets'

export const initialState = {
  selectedLetter: 'a',
  characterSearch: '',
  characters: [],
  isLoading: false
}

//Actions
export const FETCH_INITIAL_CHARACTERS_BY_LETTER = 'FETCH_INITIAL_CHARACTERS_BY_LETTER'

export const GOT_CHARACTERS_BY_LETTER = 'GOT_CHARACTERS_BY_LETTER'

export const GOT_CHARACTERS_BY_SEARCH = 'GOT_CHARACTERS_BY_SEARCH'

export const TOGGLE_LOADING = 'TOGGLE_LOADING'


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

export const toggleLoading =()=> {
  return {
    type: TOGGLE_LOADING
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
    const {selectedLetter } = state.characters
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
      const { data } =  await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${searchVal}&apikey=${MARVEL_API_PUBLIC_KEY}`)
      const characters = data.data.results
      dispatch(gotCharactersBySearch(characters))
      dispatch(toggleLoading())
    } catch(err) {
        console.log(err)
    }
  }
}

export const characterReducer =(state = initialState,action) => {
  switch(action.type){

    case TOGGLE_LOADING:
      return Object.assign({}, state, {
        isLoading: !state.isLoading
      })
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
