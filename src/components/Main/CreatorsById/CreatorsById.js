import React from 'react'
import { connect } from 'react-redux'

const CreatorsById =(props)=> {
    return (
      <div>
        HelloWorld from creators by ID
      </div>
    )
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatch = {

}

export default connect(mapState, mapDispatch)(CreatorsById)
