import axios from 'axios'
import MD5 from 'crypto-js/md5'

export const MARVEL_API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY
export const MARVEL_API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY
export const ts = Date.now()
export const hash = MD5(ts + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY).toString()

//initial state
export const initialState = {
  events: []
}


//action types
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS'

//action_creators
export const gotAllEvents = (events) => {
  return {
    type: GET_ALL_EVENTS,
    events
  }
}

//thunks
export const fetchEvents = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/events?ts=${ts}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}&limit=100`)
      const events = data.data.results;
      dispatch(gotAllEvents(events))
      console.log(`STATE---->`, getState())
    } catch (err) {
      console.log(err)
    }
  }
}


//reducer
const eventsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_EVENTS:
      return Object.assign({}, state, {
        events: action.events
      })


    default:
      return state;
  }
}


export default eventsReducer
