import React from 'react'
import './CharacterTile.css'

import { Link } from 'react-router-dom'

const CharacterTile =(props)=> {
  const {id,imgPath,imgExt,name} = props
  const imgVariant = 'standard_medium'
  const imgCall = `${imgPath}/${imgVariant}.${imgExt}`

  return (
    <Link to={`/characters/${id}`}>
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

export default CharacterTile
