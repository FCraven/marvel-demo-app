import React from 'react'
import './Characters.css'
import AllCharacters from './AllCharacters';


const Characters =(props)=> {
  return (
    <section id='characters'>
      <h3>Characters</h3>
        <AllCharacters />
      {/* Insert Router for Character click throughs in here somewhere */}
    </section>
  )
}

export default Characters;
