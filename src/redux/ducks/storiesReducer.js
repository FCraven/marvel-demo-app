import axios from 'axios'
import MD5 from 'crypto-js/md5'

export const MARVEL_API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY
export const MARVEL_API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY
export const ts = Date.now()
export const hash = MD5(ts + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY).toString()

//initial state
export const initialState = {
  stories: []
}

//action types
export const GET_ALL_STORIES = 'GET_ALL_STORIES'

//action_creators
export const gotAllStories = (stories) => {
  return {
    type: GET_ALL_STORIES,
    stories
  }
}

//thunks
export const fetchStories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/stories?ts=${ts}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}&limit=100`)
      const stories = data.data.results;
      dispatch(gotAllStories(stories))
    } catch (err) {
      console.log(err)
    }
  }
}

//reducer
const storiesReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_STORIES:
      return Object.assign({}, state, {
        stories: action.stories
      })

    default:
      return state;
  }
}


export default storiesReducer
