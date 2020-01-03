import React from 'react'
import './Characters.css'
import CharactersByLetter from './CharactersByLetter'
import LetterTile from './LetterTile'

// TODO Change presentational component into a class component

const Characters =(props)=> {

  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  return (
    <section id='characters'>
      <section id='search-bar'>
        <h3 className>Characters</h3>
        <div id='character-search'>
          <form>
            <input  type='search'
                    name='character-search' />
          </form>
        </div>
      </section>
      <section id='letters'>
        <h3>Browse Characters</h3>
        <div id='letter-tile-container' className='flex-container row-wrap'>
          {letters.map(el => <LetterTile letter={el} />)}
        </div>
      </section>
    </section>
  )
}

export default Characters;
