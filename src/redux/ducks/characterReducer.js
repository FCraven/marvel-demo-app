import axios from 'axios'
import { MARVEL_API_PUBLIC_KEY } from '../../secrets'

export const initialState = {
  letterSelect: 'a',
  characterSearch: '',
  characters: [],
  isLoading: false
}

//Actions
export const LOAD_CHARACTERS_BY_LETTER = 'LOAD_CHARACTERS_BY_LETTER'
// export const FETCH_INITIAL_LETTER = 'FETCH_INITIAL_CHARACTER_BY_LETTER'
// export const LOAD_CHARACTER_BY_SEARCH = 'LOAD_CHARACTER_BY_SEARCH'


//Action creators
// export const loadCharacterBySearch =(val)=> {
//   return { type: LOAD_CHARACTER_BY_SEARCH, characters}
// }

export const gotCharactersByLetter =(characters)=> {
  return {type: LOAD_CHARACTERS_BY_LETTER, characters}
}


//Thunks
// export const getCharactersByLetter =(letter)=> {
//   return async (dispatch) => {
//     const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${letter}`)
//   }
// }


// export const getCharacterBySearch =(val)=> {
//   return async (dispatch) => {
//     const {data} = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${val}&apikey=${MARVEL_API_PUBLIC_KEY}`)
//     const characters = data.data.results
//     dispatch(loadCharacterBySearch(characters))
//   }
// }







export const characterReducer =(state = initialState, action)=> {
  switch(action.type){
    case LOAD_CHARACTERS_BY_LETTER:
      return initialState
    default:
      return state;
  }
}

export default characterReducer;
