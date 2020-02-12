import axios from 'axios'
import MD5 from 'crypto-js/md5'

export const MARVEL_API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY
export const MARVEL_API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY
export const ts = Date.now()
export const hash = MD5(ts + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY).toString()

//initial state
export const initialState = {
  creators: []
}

//action types
export const GET_ALL_CREATORS = 'GET_ALL_CREATORS'

//action_creators
export const gotAllCreators = (creators) => {
  return {
    type: GET_ALL_CREATORS,
    creators
  }
}

//thunks
export const fetchCreators = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/creators?ts=${ts}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}&limit=100`)
      const creators = data.data.results;
      dispatch(gotAllCreators(creators))
    } catch (err) {
      console.log(err)
    }
  }
}

//reducer
const creatorsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_CREATORS:
      return Object.assign({}, state, {
        creators: action.creators
      })

    default:
      return state;
  }
}


export default creatorsReducer
