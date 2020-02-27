export const initialState = {
  isLoading: false,
  isSearchOpen: true
}

export const TOGGLE_LOADING = 'TOGGLE_LOADING'
export const TOGGLE_SEARCH = 'TOGGLE_SEARCH'

export const toggleLoading = () => {
  return {
    type: TOGGLE_LOADING
  }
}

export const toggleSearch = () => {
  return {
    type: TOGGLE_SEARCH
  }
}

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return Object.assign({}, state, {
        isLoading: !state.isLoading
      })

    case TOGGLE_SEARCH:
      return Object.assign({}, state, {
        isSearchOpen: !state.isSearchOpen
      })

    default:
      return state;
  }
}

export default settingsReducer
