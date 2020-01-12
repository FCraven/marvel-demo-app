import React from 'react'
import './CharacterById.css'
import { connect } from 'react-redux'
import { fetchCharacterInfo } from '../../../redux/ducks/selectedCharacterReducer'


const CharacterById =(props)=> {
  const characterId = props.match.params.id
  // props.fetchCharacterInfo(characterId)
  console.log(`Prrrrrrropppppppps-->`, props)

  return (
      <h1>HelloWorld from Character By Id</h1>
  )
}

const mapStateToProps =(state)=> {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  fetchCharacterInfo
}

export default connect(mapStateToProps,mapDispatchToProps)(CharacterById)


