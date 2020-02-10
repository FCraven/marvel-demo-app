import React from 'react'
import { connect } from 'react-redux'
import './StoriesById.css'

const StoriesById =(props)=> {
  return (
    <div>
      Hello World from the Stories by id dvi
    </div>
  )
}


const mapState =(state)=> {
  return {
    ...state
  }
}

const mapDispatch = {

}

export default connect(mapState,mapDispatch)(StoriesById)
