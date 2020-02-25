import React, { Component } from 'react'
import { connect } from 'react-redux'
import './EventById.css'
import { fetchEventInfo } from '../../../redux/ducks/selectedEventReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'


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
      // height: '100%',
      // width: '100%',
      // display: 'flex',
      // alignItems: 'flex-end',
      // justifyContent: 'flex-end',
      backgroundColor: 'black',
      background: 'radial-gradient(circle, rgba(0,0,0,0.4192051820728291) 0%, rgba(0,0,0,0.7525385154061625) 43%, rgba(0,0,0,0.9037990196078431) 90%, rgba(0,0,0,0.9430147058823529) 100%)',
      // overflowX: 'auto',
      // overflowY: 'auto'
    }

    console.log(`EVTBYIDPROPS--->`, this.props)
    return (
      <article id='event-by-id-container' style={opacityLayer}>
        <img id='event-by-id-image'
          src={`${thumbnail.path}/landscape_incredible.${thumbnail.extension}`}
          alt="Event thumbnail" />
        <h3 id='event-by-id-title'>{title}</h3>
        <p id='event-by-id-text'>{description}</p>
        <div id='event-by-id-buttons'>
          <button style={{ height: '20px', width: '50px', backgroundColor: 'hotpink' }}>Characters</button>
          <button style={{  height: '20px', width: '50px', backgroundColor: 'hotpink' }}>Comics</button>
        </div>
        <div>
          <FontAwesomeIcon id='home-icon' icon={faCaretLeft} size='3x' style={{ color: '#EA2328', padding: '0 5px' }} />
          <FontAwesomeIcon id='home-icon' icon={faCaretRight} size='3x' style={{ color: '#EA2328', padding: '0 5px' }} />
        </div>
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
