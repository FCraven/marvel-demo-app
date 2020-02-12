import React from 'react'
import { connect } from 'react-redux'
import './Creators.css'

const Creators =(props)=> {
    return (
      <div>
        HelloWorld from Creators
      </div>
    )
}

const mapState = (state) => ({
  ...state
})

const mapDispatch = {

}

export default connect(mapState, mapDispatch)(Creators)

