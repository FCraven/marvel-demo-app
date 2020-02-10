import React from 'react'
import { connect } from 'react-redux'
import './ComicsById.css'


const ComicsById =(props)=> {
  return (
    <div>
      helloWorld from the Comic BY ID component
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


export default connect(mapState, mapDispatch)(ComicsById)
