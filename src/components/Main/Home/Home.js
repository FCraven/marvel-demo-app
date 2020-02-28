import React from 'react'
import './Home.css'

const Home = (props) => {

  return (
    <section id='home-component' className='flex-container-center'>
      <div id='home-title' className='flex-container-center'>
        <div id='home-opacity-screen'>

          <h1>{`Welcome!
            Please feel free to browse
            around while the page is app
            is under construction!`}</h1>
        </div>

      </div>
    </section>
  )
}

export default Home


