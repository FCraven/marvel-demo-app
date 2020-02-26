import React from 'react'
import './CharacterById.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const CharacterById =(props)=> {
  const comics = props.selectedComics || [];
  const events = props.selectedEvents || [];
  const series = props.selectedSeries || [];
  const{ id } = props
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
      <Link to={`/comics/${el.id}`}
            className='comic-tile text-decoration-none row-wrap'>
          <img  src={`${el.thumbnail.path}/portrait_medium.${el.thumbnail.extension}`}
                alt='issue cover'
                className='responsive-image'/>
          <h3 className='row-wrap'>{el.title}</h3>
      </Link>
    )
  })

  const eventsMap = events.map((el,idx) => {
        //create Navlink to  /events/:id
    return (
      <Link to={`/events/${el.id}`}
            className='comic-tile text-decoration-none row-wrap'>
          <img src={`${el.thumbnail.path}/portrait_medium.${el.thumbnail.extension}`}
              alt='event profile'
              className='responsive-image'/>
          <h3>{el.title}</h3>
      </Link>
    )
  })

  const seriesMap = series.map((el,idx) => {
    //create Navlink to series /series/:id
    return (
       <Link to={`/series/${el.id}`}
            className='comic-tile text-decoration-none row-wrap'>
          <img src={`${el.thumbnail.path}/portrait_medium.${el.thumbnail.extension}`}
              className='responsive-image'
              alt='series profile' />
          <h3>{el.title}</h3>
      </Link>
    )
  })

  return (
      <section id="character-by-id-container" style={style}>
       <div id='by-id-opacity-layer'>
          {events.length > 0  && <h4>Events</h4>}
          <section id='by-id-events' className='flex justify-start align-start row-nowrap overflow-auto half-em'>
          {eventsMap}
          </section>
          {events.length > 0 && <Link to={`/characters/${id}/events`}>See All...</Link>}
          {events.length > 0 && <hr/>}
          {series.length > 0 && <h4>Series</h4>}
          <section id='by-id-series' className='flex justify-start align-start row-nowrap overflow-auto half-em'>
          {seriesMap}
          </section>
          {series.length > 0 && <Link to={`/characters/${id}/series`}>See All...</Link>}
          {series.length > 0 && <hr/>}
          {comics.length > 0 && <h4>Comics</h4>}
          <section id='by-id-comics' className='flex justify-start align-start row-nowrap overflow-auto half-em'>
            {comicsMap}
          </section>
          {comics.length > 0 && <Link to={`/characters/${id}/comics`}>See All...</Link>}
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


