import axios from 'axios'
import MD5 from 'crypto-js/md5'

export const MARVEL_API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY
export const MARVEL_API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY
export const ts = Date.now()
export const hash = MD5(ts + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY).toString()

//initial state
export const initialState = {
  series: []
}

//action types
export const GET_ALL_SERIES = 'GET_ALL_SERIES'

//action_creators
export const gotAllSeries = (series) => {
  return {
    type: GET_ALL_SERIES,
    series
  }
}

//thunks
export const fetchSeries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/series?ts=${ts}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}&limit=100`)
      const series = data.data.results;
      dispatch(gotAllSeries(series))
    } catch (err) {
      console.log(err)
    }
  }
}

//reducer
const seriesReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_SERIES:
      return Object.assign({}, state, {
        series: action.series
      })

    default:
      return state;
  }
}


export default seriesReducer
