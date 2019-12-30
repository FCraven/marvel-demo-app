import React from 'react'
import './Content.css'
import { Sidenav, Main } from '../../components'

const Content =(props)=> {
  return (
    <section id='content'>
      <Sidenav />
      <Main />
    </section>
  )
}

export default Content;
