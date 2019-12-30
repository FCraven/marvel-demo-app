import React from 'react'
import './AllCharacters.css'
import CharactersByLetter from '../CharactersByLetter'

const AllCharacters =(props)=> {
  return (
    <section id='all-characters'>

      <h1>All Characters</h1>
      <div className="characters-by-letter">
        <CharactersByLetter />
      </div>

    </section>
  )
}


export default AllCharacters;
