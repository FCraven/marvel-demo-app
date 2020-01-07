import axios from 'axios'
import { MARVEL_API_PUBLIC_KEY } from '../../secrets'

export const initialState = {
  data: []
}

//Actions
export const LOAD_CHARACTER_BY_SEARCH = 'LOAD_CHARACTER_BY_SEARCH'
export const LOAD_CHARACTERS_BY_LETTER = 'LOAD_CHARACTERS_BY_LETTER'


//Action creators
// export const loadCharacterBySearch =(val)=> {
//   return { type: LOAD_CHARACTER_BY_SEARCH, characters}
// }

export const gotCharactersByLetter =(characters)=> {
  return {type: LOAD_CHARACTERS_BY_LETTER, characters}
}


//Thunks
// export const getCharacterBySearch =(val)=> {
//   return async (dispatch) => {
//     const {data} = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${val}&apikey=${MARVEL_API_PUBLIC_KEY}`)
//     const characters = data.data.results
//     dispatch(loadCharacterBySearch(characters))
//   }
// }

// export const getCharactersByLetter =(letter)=> {
//   return async (dispatch) => {
//     const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${letter}`)
//   }
// }






export const characterReducer =(state = initialState, action)=> {
  switch(action.type){
    case LOAD_CHARACTER_BY_SEARCH:
      return initialState
    default:
      return state;
  }
}

export default characterReducer;
