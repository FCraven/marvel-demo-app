import React from 'react'
import { connect } from 'react-redux'
import './SeriesById.css'

const SeriesById = (props) => {
  return (
    <div>
      helloWorld from sEries By ID!!!
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

export default connect(mapState, mapDispatch)(SeriesById)
