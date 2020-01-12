import React from 'react'
import './ByIdSidenav.css'
import { connect } from 'react-redux'

const ByIdSidenav =(props)=> {
  console.log(props)
  return (
    <div>
    <h1>Picture</h1>
    <p>Description</p>
    </div>
  )
}

const mapStateToProps =(state)=> {
  return {
    ...state
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ByIdSidenav);
