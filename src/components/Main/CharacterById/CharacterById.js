import React from 'react'
import './CharacterById.css'
import { connect } from 'react-redux'


const CharacterById =(props)=> {

  const { id, name, description, thumbnail, resourceURI, comics, series, stories, events, urls, isLoading } = props

  const {path, extension} = thumbnail
  const backgroundImgVariant = 'landscape_incredible'
  const imgCall = `${path}/${backgroundImgVariant}.${extension}`
  const style = {
    backgroundImage: `url('${imgCall}')`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',

  }

  console.log(`characterById Props--->`, props)
  return (

      <section id="character-by-id-container" style={style}>
       <div id='by-id-opacity-layer'>
        
       </div>
      </section>
  )
}

const mapState =(state)=> {
  console.log(`sTATE TO MAP TO PROPS ___>`,state)
  return {
    ...state.selectedCharacter,
    ...state.settings
  }
}



export default connect(mapState,null)(CharacterById)


