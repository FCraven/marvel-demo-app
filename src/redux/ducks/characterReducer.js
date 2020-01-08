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
// export const LOAD_CHARACTERS_BY_LETTER = 'LOAD_CHARACTERS_BY_LETTER'
// export const LOAD_CHARACTER_BY_SEARCH = 'LOAD_CHARACTER_BY_SEARCH'


//Action creators
export const gotInitialCharactersByLetter =(characters)=> {
  return {
    type: FETCH_INITIAL_CHARACTERS_BY_LETTER,
    characters
  }
}

// export const loadCharacterBySearch =(val)=> {
//   return { type: LOAD_CHARACTER_BY_SEARCH, characters}
// }

// export const gotCharactersByLetter =(characters)=> {
//   return {type: LOAD_CHARACTERS_BY_LETTER, characters}
// }


//Thunks

//Use fetchByLetter

export const fetchInitialCharactersByLetter =()=> {
  return async(dispatch, getState) => {
    const state = getState()
    const {selectedLetter } = state.characters
    try{
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${selectedLetter}&apikey=${MARVEL_API_PUBLIC_KEY}`)
      const characters = data.data.results
      dispatch(gotInitialCharactersByLetter(characters))
    } catch (err) {
      console.log(err)
    }
  }
}

// export const getCharactersByLetter =()=> {
  //   return async (dispatch, getState) => {
    //     try {
      //     const { selectedLetter } = getState()
      //     const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${selectedLetter}`)
      //     const characters = data.data.results
      //     dispatch(gotCharactersByLetter(characters))
      //     } catch (err) {
        //       console.log(error)
        //     }
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
    case FETCH_INITIAL_CHARACTERS_BY_LETTER:
      return Object.assign({}, state, {
        characters: action.characters
      } )
    default:
      return state;
  }
}

export default characterReducer
