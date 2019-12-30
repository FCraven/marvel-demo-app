import React from 'react'
import './Main.css'
import Characters from '../Characters'

const Main =(props)=> {
  return (
    <section id='main'>
      <h1>MAIN</h1>
      <div>
        {/* Insert Router for /character/* routing */}
        <h2>Characters </h2>
        <Characters />
      </div>
    </section>
  )
}


export default Main;
