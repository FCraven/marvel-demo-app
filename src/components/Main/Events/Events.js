import React from 'react'
import { connect } from 'react-redux'
import './Events.css'

const Events=(props)=> {
  return (
    <div>
      helloworld from the Events component
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


export default connect(mapState, mapDispatch)(Events)
