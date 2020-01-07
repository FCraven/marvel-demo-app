import React from 'react'
import './CharacterTile.css'

const CharacterTile =({id,imgPath,imgExt,name})=> {
  const imgVariant = 'standard_large'
  const imgCall = `${imgPath}/${imgVariant}.${imgExt}`


  return (
      <div className="character-tile">
        <img src={imgCall} alt="Avatar" />
        <div className="">
          <h4><b>{name}</b></h4>
        </div>
      </div>
  )
}

export default CharacterTile
