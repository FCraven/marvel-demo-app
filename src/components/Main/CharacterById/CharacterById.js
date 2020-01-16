import React from 'react'
import './CharacterById.css'
import { connect } from 'react-redux'
import { fetchCharacterComics } from './../../../redux/ducks/selectedCharacterReducer'
import ComicTile from './ComicTile'



const CharacterById =(props)=> {
  // const { id, name, description, thumbnail, resourceURI, comics, series, stories, events, urls, isLoading } = props
  const comics = props.comics.items || [];
  const {path, extension} = props.thumbnail
  const backgroundImgVariant = 'landscape_incredible'
  const imgCall = `${path}/${backgroundImgVariant}.${extension}`
  const style = {
    backgroundImage: `url('${imgCall}')`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
  const comicIdsArray = comics.map(function(el){
    const splitURI = el.resourceURI.split('/')
    return parseInt(splitURI[splitURI.length-1])
  })

  props.fetchCharacterComics()

  return (
      <section id="character-by-id-container" style={style}>
       <div id='by-id-opacity-layer'>
          <div id='by-id-info'>
          <section id='by-id-comics'>
          <h3 id='by-id-comics-title' className='by-id-info-section'>Comics</h3>
            <div id='by-id-comics-content'>
              {comics &&
              comics.map((el, idx)=>
              <ComicTile  comicId={comicIdsArray[idx]}
                          comicName={el.name}
                          key={idx}
                          />)}
            </div>
          </section>
          <div className='by-id-info-section'>Series</div>
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

const mapDispatch = {
  fetchCharacterComics
}

export default connect(mapState,mapDispatch)(CharacterById)


