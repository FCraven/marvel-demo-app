import React, { Component } from 'react'
import { connect } from 'react-redux'
import './EventById.css'
import { fetchEventInfo } from '../../../redux/ducks/selectedEventReducer'

class EventById extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchEventInfo(id)
  }

  render() {
    const { title, description } = this.props
    console.log(`EVTBYIDPROPS--->`, this.props)
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
     
      </div>
    )
  }
}

const mapState =(state)=> {
  return {
    ...state.selectedEvent
  }
}

const mapDispatch = {
  fetchEventInfo
}

export default connect(mapState, mapDispatch)(EventById)
