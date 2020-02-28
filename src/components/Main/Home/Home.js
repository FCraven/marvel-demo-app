import React from 'react'
import './Home.css'

const Home = (props) => {

  return (
    <section id='home-component' className='flex-container-center'>
      <div id='home-title' className='flex-container-center'>
        <div id='home-opacity-screen'>
          <div id="home-text-container">
            <h1>Welcome!</h1>
            <h1>The app is currently under construction,</h1>
            <h1>but please feel free to take a look around!</h1>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home


