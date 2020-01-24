import React from 'react'
import './CharacterById.css'
import { connect } from 'react-redux'

import CharacterByIdSlider from './CharacterByIdSlider'
// import ComicTile from './ComicTile'



const CharacterById =(props)=> {
  const comics = props.selectedComics || []
  const { path, extension } = props.thumbnail
  const backgroundImgVariant = 'landscape_incredible'
  const imgCall = `${path}/${backgroundImgVariant}.${extension}`
  const style = {
    backgroundImage: `url('${imgCall}')`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
console.log(`PROPS FROM CHARBYID----->`, props)
  return (
      <section id="character-by-id-container" style={style}>
       <div id='by-id-opacity-layer'>
          <div id='by-id-info'>
          <section id='by-id-comics'>
            <h3 id='by-id-comics-title' className='by-id-info-section'>Comics</h3>
            <div id='by-id-comics-content'>
              <CharacterByIdSlider />
            </div>
          </section>
          <div className='by-id-info-section'>Series</div>
          <section id='by-id-series'>
            <h3 id='by-id-series-title' className='by-id-info-section'>Series</h3>
            <div id='by-id-series-content'>
              <CharacterByIdSlider />
            </div>
          </section>
          <div className='by-id-info-section'>Stories</div>
          <div className='by-id-info-section'>Events</div>
        </div>
       </div>
      </section>
  )
}

const mapState =(state)=> {
  return {
    ...state.selectedCharacter,
    ...state.settings
  }
}



export default connect(mapState,null)(CharacterById)


