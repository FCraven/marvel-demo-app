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
    const { title, description, thumbnail } = this.props

    console.log(`EVTBYIDPROPS--->`, this.props)
    return (
      <div style={{display: 'inline-flex'}}>
        <img src={`${thumbnail.path}/landscape_incredible.${thumbnail.extension}`} />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>Map out Character Tiles here</div>
        <div>Map out Comics Tile here</div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    ...state.selectedEvent
  }
}

const mapDispatch = {
  fetchEventInfo
}

export default connect(mapState, mapDispatch)(EventById)
