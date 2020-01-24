import React from 'react'
import './CharacterTile.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCharacterInfo,
        fetchCharacterComics,
        fetchCharacterSeries,
        fetchCharacterStories,
        fetchCharacterEvents }
        from './../../../../redux/ducks/selectedCharacterReducer'


const CharacterTile =(props)=> {
  const {id,imgPath,imgExt,name} = props
  const imgVariant = 'portrait_fantastic'
  const imgCall = `${imgPath}/${imgVariant}.${imgExt}`
  return (
    <Link to={`/characters/${id}`}
          onClick={ ()=> {
            props.fetchCharacterInfo(id);
            props.fetchCharacterComics(id);
            props.fetchCharacterSeries(id);
            props.fetchCharacterStories(id);
            props.fetchCharacterEvents(id)
            }}
          className='character-tile-container'>
      <div className="character-tile">
          <img  src={imgCall}
                alt="Avatar"
                className='character-tile-img'/>
          <div className="character-tile-text">
            <h4><b>{name}</b></h4>
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
  fetchCharacterEvents
}


export default connect(null,mapDispatch)(CharacterTile)
