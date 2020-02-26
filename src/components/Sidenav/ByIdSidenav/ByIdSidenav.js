import React from 'react'
import './ByIdSidenav.css'
import { connect } from 'react-redux'

const ByIdSidenav = (props) => {
  const { path, extension } = props.thumbnail
  const imgVariant = 'standard_xlarge'
  const imgCall = `${path}/${imgVariant}.${extension}`

  return (
    <section id='by-id-sidenav-container'>
      <img id='by-id-sidenav-img'
        alt='character profile'
        src={imgCall}
        className='responsive-image' />
      <div id='by-id-sidenav-text-container'>
        <h3 id='by-id-sidenav-title'>{props.name}</h3>
        <p id='by-id-sidenav-text'>{props.description}</p>
      </div>
    </section>
  )
}

const mapState = (state) => {
  return {
    ...state.selectedCharacter
  }
}

export default connect(mapState, null)(ByIdSidenav);
