import React from 'react'
import { connect } from 'react-redux'
import './Stories.css'

const Stories =(props)=> {
  return (
    <div>
      Hello from the Stories World
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

export default connect(mapState, mapDispatch)(Stories)
