import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { MARVEL_API_PUBLIC_KEY } from './../../../../secrets'

const ComicTile =(props)=> {


   //remove to a thunk

  const { comicName, resourceURI, comicId } = props

  // const getComicInfo = async (id)=> {
  //   try{
  //   const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${MARVEL_API_PUBLIC_KEY}`)
  //   const {results} = data.data
  //   const { images } = results[0] || null
  //   return images
  //   } catch(err) {
  //       console.log(err)
  //   }
  // }
  // const comicInfoObj = getComicInfo(comicId)
  // console.log(`comicInfoObj--->`, comicInfoObj)



  return (
    //in this tile I need the img to fetch the img for the comic by name

    <div id='by-id-comics-content' style={{color: 'white'}}>
      <img src='' />
      HelloWorld
    </div>
  )
}

const mapState =(state)=> {
  return {
    ...state.selecedCharacter
  }
}

export default connect(mapState,null)(ComicTile)
