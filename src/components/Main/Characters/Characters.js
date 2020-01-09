import React, { Component } from 'react'
import './Characters.css'
import { connect } from 'react-redux'
import Loading from '../../Loading'
import CharacterTile from './CharacterTile'
import axios from 'axios'
import { MARVEL_API_PUBLIC_KEY } from '../../../secrets'
import {
        fetchInitialCharactersByLetter,
        fetchCharactersByLetter,
        fetchCharactersBySearch,
        toggleLoading
         } from './../../../redux/ducks/characterReducer'


class Characters extends Component {
  constructor(props) {
    super(props)

    this.state = {
       selectedLetter: 'a',
       characterSearch: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    try {
      this.props.fetchInitialCharactersByLetter()
    } catch(err) {
      console.log(err)
    }
  }

  async handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    await this.setState({[name]: value})
    if(name ==='selectedLetter') {
      await this.props.fetchCharactersByLetter(this.state.selectedLetter)
    }
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    const searchVal = this.state.characterSearch
    try{
      await this.props.fetchCharactersBySearch(searchVal)
    } catch(err) {
      console.log(err)
    }

  }

  render() {
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    console.log(`PRROPPPPPPPPPPS--->`,this.props)
    const { characters, isLoading } = this.props

    return (
      <section id='characters'>
        <section id='search-bar'>

          <div id='character-search'>
            <form onSubmit={this.handleSubmit}>

              <label  htmlFor='characterSearch'
                      className='form-label'></label>
                <span id='search-submit-container'>
                <input  className='character-search-css'
                        placeholder='Search...'
                        type='text'
                        name='characterSearch'
                        value={this.state.characterSearch}
                        onChange={this.handleChange} />
                <button type='submit'
                        className='form-submit-btn'
                        >Submit</button>
                </span>


               <label htmlFor='letter-select'
                      className='form-label'></label>
                <select className='letter-select-css'
                        type='select'
                        name='selectedLetter'
                        onChange={this.handleChange}>
                  {letters.map(el => <option key={el} value={el}>{el.toUpperCase()}</option>)}
                </select>
            </form>
          </div>
        </section>

          <section id='character-tile-container'>
            {!isLoading && characters.length > 0 ?
              characters.map(el => <CharacterTile key={el.id}
                                                  id={el.id}
                                                  name={el.name}
                                                  imgPath={el.thumbnail.path}
                                                  imgExt={el.thumbnail.extension}/>)

            : <Loading />}
          </section>
      </section>
    )
  }
}

const mapStateToProps =(state)=> {
  return {
    ...state.characters
  }
}

const mapDispatchToProps = {
  fetchInitialCharactersByLetter,
  fetchCharactersByLetter,
  fetchCharactersBySearch,
  toggleLoading
}

export default connect(mapStateToProps,mapDispatchToProps)(Characters)
