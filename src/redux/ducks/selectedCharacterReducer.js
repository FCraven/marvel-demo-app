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
  urls: []
}

//ActionTypes
export const ADD_CHARACTER_ID = 'ADD_CHARACTER_ID'

export const GOT_CHARACTER_INFO = 'GOT_CHARACTER_INFO'

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


//reducer
const selectedCharacterReducer =(state = initialState, action) => {
  switch(action.type){
    case ADD_CHARACTER_ID:
      return Object.assign({}, state, {
        id: action.id
      })
    case GOT_CHARACTER_INFO:
      console.log(`GOT_CHARACTER_INFO_ACTION==>`,action)
      return Object.assign({}, state, {
        ...action.info
      })
    default:
      return state;
  }
}

export default selectedCharacterReducer



