import React from 'react'
import { connect } from 'react-redux'
import './EventsById.css'

const EventsById =(props)=> {
  return (
    <div>
      helloWorld from the Events bYID component
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

export default connect(mapState, mapDispatch)(EventsById)
