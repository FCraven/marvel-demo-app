import React from 'react'
import './Characters.css'
import { connect } from 'react-redux'
import { CaptainAmericaLoading, IronManLoading } from './../../Loading'
import CharacterTile from './CharacterTile'

const Characters =(props)=> {
  const charArr= ['CaptainAmerica', 'IronMan']
  const loadingCharacter = charArr[Math.floor(Math.random()*charArr.length)]
  const loading =(char)=> {
    switch(char){
      case 'CaptainAmerica':
        return <CaptainAmericaLoading />
        case 'IronMan':
          return <IronManLoading />
        }
      }
  const { characters, isLoading } = props

    return (
      <section id='characters'>
          <section id='character-tile-container'>
            {!isLoading && characters.length > 0 ?
              characters.map(el => <CharacterTile key={el.id}
                                                  id={el.id}
                                                  name={el.name}
                                                  imgPath={el.thumbnail.path}
                                                  imgExt={el.thumbnail.extension}/>)

            : loading(loadingCharacter)
            }
          </section>
      </section>
    )
  }

const mapStateToProps =(state)=> {
  return {
    ...state.characters
  }
}

export default connect(mapStateToProps,null)(Characters)
