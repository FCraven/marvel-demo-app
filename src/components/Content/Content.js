import React from 'react'
import './Content.css'
import { Sidenav, Main } from '../../components'
import { connect } from 'react-redux'

const Content = ({ isSearchOpen }) => {


  return (
    <section id='content'>
      <Main />
      {isSearchOpen ? <Sidenav /> : null}
    </section>
  )
}

const mapState = (state) => {
  return {
    ...state.settings
  }
}


export default connect(mapState, null)(Content);
