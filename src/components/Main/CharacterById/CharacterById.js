import React from 'react'
import './CharacterById.css'
import { connect } from 'react-redux'

const CharacterById =(props)=> {
  const comics = props.selectedComics || [];
  const events = props.selectedEvents || [];
  const series = props.selectedSeries || [];
  const { path, extension } = props.thumbnail
  const backgroundImgVariant = 'landscape_incredible'
  const imgCall = `${path}/${backgroundImgVariant}.${extension}`
  const style = {
    backgroundImage: `url('${imgCall}')`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  //create a ahigher order componenent that takes in word and returns
  // a slider that maps out the data from each pass of the array of sections
  //title
  // mapState to selected{pART}
  //tile => require js var

  {/* <Slider type={el} /> */}


  const comicsMap = comics.map((el,idx) => {
    return (
      <div className='comic-tile'>
          <img  src={`${el.thumbnail.path}/portrait_medium.${el.thumbnail.extension}`}/>
          <h3>{el.title}</h3>
      </div>
    )
  })

  const eventsMap = events.map((el,idx) => {
    return (
      <div className='comic-tile'>
          <img src={`${el.thumbnail.path}/portrait_medium.${el.thumbnail.extension}`}/>
          <h3>{el.title}</h3>
      </div>
    )
  })

  const seriesMap = series.map((el,idx) => {
    return (
      <div className='comic-tile'>
          <img src={`${el.thumbnail.path}/portrait_medium.${el.thumbnail.extension}`}/>
          <h3>{el.title}</h3>
      </div>
    )
  })



  return (
      <section id="character-by-id-container" style={style}>
       <div id='by-id-opacity-layer'>
          <h3>Events</h3>
          <section id='by-id-events' className='flex justify-start align-start row scroll half-em'>
          {eventsMap || 'No events for this character'}
          </section>
          <hr/>
          <h3>Series</h3>
          <section id='by-id-series' className='flex justify-start align-start row-nowrap scroll half-em'>
          {seriesMap || 'No series available for this character'}
          </section>
          <hr/>
          <h3>Comics</h3>
          <section id='by-id-comics' className='flex justify-start align-start row-nowrap scroll half-em'>
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


