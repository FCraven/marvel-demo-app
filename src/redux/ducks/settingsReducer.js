export const initialState= {
  isLoading: false
}

export const TOGGLE_LOADING = 'TOGGLE_LOADING'

export const toggleLoading =()=> {
  return {
    type: TOGGLE_LOADING
  }
}

const settingsReducer =(state = initialState, action)=> {
  switch(action.type) {
    case TOGGLE_LOADING:
      return Object.assign({}, state, {
        isLoading: !state.isLoading
      })
    default:
      return state;
  }
}

export default settingsReducer
