import React from 'react'
import './Home.css'

const Home =(props)=> {
console.log(`PROCESS.ENV.KEY-->`, process.env.MARVEL_API_PUBLIC_KEY)
  return (
    <section id='home-component' className='flex-container-center'>
      <div id='home-title' className='flex-container-center'>
          <div id='home-opacity-screen'></div>
      </div>
    </section>
  )
}

export default Home


