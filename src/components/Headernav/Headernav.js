import React from 'react'
import './Headernav.css'

const Headernav =(props)=> {
  return (

    <nav id='headernav'>
      <ul id='headernav-navlist'>
        <li className='headernav-link'>Characters</li>
        <li className='headernav-link'>Comics</li>
        <li className='headernav-link'>Events</li>
        <li className='headernav-link'>Stories</li>
        <li className='headernav-link'>Series</li>
        <li className='headernav-link'>Creators</li>
      </ul>
    </nav>

  )
}

export default Headernav;
