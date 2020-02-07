import React from 'react'
import './Home.css'

const Home =(props)=> {
console.log(`PROCESS.ENV-->`, process.env)
  return (
    <section id='home-component' className='flex-container-center'>
      <div id='home-title' className='flex-container-center'>
          <div id='home-opacity-screen'></div>
      </div>
    </section>
  )
}

export default Home


