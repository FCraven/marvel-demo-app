import React from 'react'
import './CharacterTile.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  fetchCharacterInfo,
  fetchCharacterComics,
  fetchCharacterSeries,
  fetchCharacterStories,
  fetchCharacterEvents,
}
  from './../../../../redux/ducks/selectedCharacterReducer'
import { toggleLoading } from './../../../../redux/ducks/settingsReducer'


const CharacterTile = (props) => {
  console.log(`cHARACTERBYID  PROPS`, props)
  const { id, imgPath, imgExt, name, description } = props
  const imgVariant = 'landscape_medium'
  const imgCall = `${imgPath}/${imgVariant}.${imgExt}`
  return (
    <Link to={`/characters/${id}`}
      onClick={() => {
        props.toggleLoading()
        props.fetchCharacterInfo(id);
        props.fetchCharacterComics(id);
        props.fetchCharacterSeries(id);
        props.fetchCharacterStories(id);
        props.fetchCharacterEvents(id)
        props.toggleLoading()
      }}
      className='character-tile-container'>
      <div className="character-tile">
        <img src={imgCall}
          alt="Avatar"
          className='character-tile-img' />
        <div className="character-tile-text">
          <h4><b>{name}</b></h4>
          <div>{description}</div>
        </div>
      </div>
    </Link>
  )
}

const mapDispatch = {
  fetchCharacterInfo,
  fetchCharacterComics,
  fetchCharacterSeries,
  fetchCharacterStories,
  fetchCharacterEvents,
  toggleLoading
}


export default connect(null, mapDispatch)(CharacterTile)
