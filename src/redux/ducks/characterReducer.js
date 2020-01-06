export const initialState = {
  data:'dummyData'
}

//Actions
export const LOAD_ALL_CHARACTERS = 'LOAD_ALL_CHARACTERS'
export const LOAD_CHARACTERS_BY_LETTER = 'LOAD_CHARACTERS_BY_LETTER'


//Action creators
export const loadAllCharacters =()=>{
  return { type: LOAD_ALL_CHARACTERS}
}




//Thunks


export const characterReducer =(state={}, action)=> {
  switch(action.type){
    case LOAD_ALL_CHARACTERS:
      return initialState;
    default:
      return state;
  }
}

export default characterReducer;
