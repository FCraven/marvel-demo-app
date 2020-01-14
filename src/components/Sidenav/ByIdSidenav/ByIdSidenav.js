import React from 'react'
import './ByIdSidenav.css'
import { connect } from 'react-redux'

const ByIdSidenav =(props)=> {
  console.log(`BYIDSIDENAV PROPS---->`, props)

  const {path, extension} = props.thumbnail
  const imgVariant = 'standard_xlarge'
  const imgCall = `${path}/${imgVariant}.${extension}`
  return (
    <section id='sidenav-by-id-container'>
        <img src={imgCall}></img>
        <h1>{props.name}</h1>
        <div>
          <p>{props.description}</p>
        </div>
    </section>
  )
}

const mapState =(state)=> {
  return {
    ...state.selectedCharacter
  }
}

export default connect(mapState, null)(ByIdSidenav);
