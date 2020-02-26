import axios from 'axios'
import MD5 from 'crypto-js/md5'

export const MARVEL_API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY
export const MARVEL_API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY
export const ts = Date.now()
export const hash = MD5(ts + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY).toString()

export const initialState = {
  id: 0,
  title: '',
  description: '',
  resourceURI: '',
  // The canonical URL identifier for this resource
  urls: [],
  // A set of public web site URLs for the event.
  modified: '',
  // The date the resource was most recently modified.
  start: '',
  //  The date of publication of the first issue in this event
  end: '',
  //  The date of publication of the last issue in this event.,
  thumbnail: {},
  //  The representative image for this event.
  comics: {},
  // A resource list containing the comics in this event.
  stories: {},
  //  A resource list containing the stories in this event.,
  series: {},
  //  A resource list containing the series in this event.,
  characters: {},
  //  A resource list containing the characters which appear in this event.,
  creators: {},
  // A resource list containing creators whose work appears in this event.,
  next: {},
  // A summary representation of the event which follows this event.,
  previous: {}
  //  A summary representation of the event which preceded this event.
}

export const GOT_EVENT_INFO = 'GOT_EVENT_INFO'

export const gotEventInfo = (eventInfo) => {
  return {
    type: GOT_EVENT_INFO,
    eventInfo
  }
}

export const fetchEventInfo = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/events/${id}?ts=${ts}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}`)
      console.log(`DATA GOTEVENTINFO THUNK`, data)
      const eventInfo = data.data.results[0]
      dispatch(gotEventInfo(eventInfo))
    } catch (err) {
      console.log(err)
    }
  }
}

const selectedEventReducer = (state = initialState, action) => {
  switch (action.type) {

    case GOT_EVENT_INFO:
      return Object.assign({}, state, {
        ...action.eventInfo
      })

    default:
      return state;
  }
}



export default selectedEventReducer
