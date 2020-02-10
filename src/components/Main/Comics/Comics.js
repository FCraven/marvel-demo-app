import React from 'react'
import { connect } from 'react-redux'
import './Comics.css'


const Comics =(props)=> {
  return (
    <div>
      helloWorld from the Comics component
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


export default connect(mapState, mapDispatch)(Comics)
