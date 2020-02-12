import axios from 'axios'
import MD5 from 'crypto-js/md5'

export const MARVEL_API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY
export const MARVEL_API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY
export const ts = Date.now()
export const hash = MD5(ts + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY).toString()

//initial state
export const initialState = {
  comics: []
}

//action types
export const GET_ALL_COMICS = 'GET_ALL_COMICS'

//action_creators
export const gotAllComics = (comics) => {
  return {
    type: GET_ALL_COMICS,
    comics
  }
}

//thunks
export const fetchComics = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}&limit=100`)
      const comics = data.data.results;
      console.log(`DATA~~~~~~~~~>`, data)
      dispatch(gotAllComics(comics))
    } catch (err) {
      console.log(err)
    }
  }
}

//reducer
const comicsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_COMICS:
      return Object.assign({}, state, {
        comics: action.comics
      })

    default:
      return state;
  }
}


export default comicsReducer
