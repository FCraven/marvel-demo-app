import React from 'react'
import './Characters.css'

// TODO Change presentational component into a class component

const Characters =(props)=> {
  return (
    <section id='characters'>
      <h3>Characters</h3>
        <form>
          <input
                  type='search'
                  name='character-search' />
        </form>

      <h3>Search for Characters</h3>
      

      {/* Insert Router for Character click throughs in here somewhere */}
    </section>
  )
}

export default Characters;
