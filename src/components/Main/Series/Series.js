import React from 'react'
import { connect } from 'react-redux'
import './Series.css'


const Series =(props)=> {
  console.log(`SERIES PROPS --->`, props)
  return (
    <div id='series-container'>
      hello World form the Series component
    </div>
  )
}

const mapState =(state)=> {
  return {
    ...state
  }
};

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Series)
