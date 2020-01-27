import React from 'react'
import { connect } from 'react-redux'

const ComicTile =(props)=> {
  return (
    <div id='by-id-comics-content' style={{color: 'white'}}>
      <img src='' />
      HelloWorld
    </div>
  )
}

const mapState =(state)=> {
  return {
    ...state.selecedCharacter
  }
}

export default connect(mapState,null)(ComicTile)
