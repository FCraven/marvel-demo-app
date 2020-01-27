import React from 'react'
import './CharacterById.css'
import { connect } from 'react-redux'

const CharacterById =(props)=> {
  const comics = props.selectedComics || [];
  const events = props.selectedEvents || [];
  console.log(`comics--->  `, comics)
  const { path, extension } = props.thumbnail
  const backgroundImgVariant = 'landscape_incredible'
  const imgCall = `${path}/${backgroundImgVariant}.${extension}`
  const style = {
    backgroundImage: `url('${imgCall}')`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  const comicsMap = comics.map((el,idx) => {
    return (
      <div className='comic-tile'>
          <img src={`${el.thumbnail.path}/portrait_medium.${el.thumbnail.extension}`}/>
          <h3>{el.title}</h3>
      </div>
    )
  })

  const eventsMap = events.map((el,idx) => {
    console.log(`EVENTS---> `, events)
    return (
      <div>Oy</div>
    )
  })

  return (
      <section id="character-by-id-container" style={style}>
       <div id='by-id-opacity-layer'>
          <h3 style={{color: 'white', }}>Comics</h3>
          <section id='by-id-comics'>
            {comicsMap}
          </section>
          <hr/>
          <h3 style={{color: 'white'}}>Events</h3>
          <section id='by-id-events'>
          {comicsMap}

          </section>




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


