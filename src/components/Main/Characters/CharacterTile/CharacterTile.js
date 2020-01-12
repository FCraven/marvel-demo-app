import React from 'react'
import './CharacterTile.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCharacterInfo } from '../../../../redux/ducks/selectedCharacterReducer'

const CharacterTile =(props)=> {
  const {id,imgPath,imgExt,name, fetchCharacterInfo} = props
  const imgVariant = 'standard_medium'
  const imgCall = `${imgPath}/${imgVariant}.${imgExt}`

  return (
    <Link to={`/characters/${id}`}
          {/* onClick={fetchCharacterInfo(id)} <---This is the big test */}
          >
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
  fetchCharacterInfo
}

export default connect(null,mapDispatch)(CharacterTile)
