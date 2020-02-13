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

    const imgTileStyle = {
      position: 'relative',
      display: 'flex',
      backgroundImage: `url(${thumbnail.path}/landscape_incredible.${thumbnail.extension})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      width: '100%',
      maxWidth: '100%',
      height: '100%'
      }

      const opacityLayer = {
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor: 'black',
        background: 'radial-gradient(circle, rgba(0,0,0,0.4192051820728291) 0%, rgba(0,0,0,0.7525385154061625) 43%, rgba(0,0,0,0.9037990196078431) 90%, rgba(0,0,0,0.9430147058823529) 100%)',
        overflowX: 'auto',
        overflowY: 'auto'
      }

    console.log(`EVTBYIDPROPS--->`, this.props)
    return (

      <article id='event-by-id-container'>
        <div style={imgTileStyle}>
          <div style={opacityLayer}>
           <h3>{title}</h3>

          </div>
        </div>
        <div>Map out Character Tiles here</div>
        <div>Map out Comics Tile here</div>

      </article>

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
