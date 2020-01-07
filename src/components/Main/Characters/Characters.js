import React, { Component } from 'react'
import './Characters.css'
import CharacterTile from './CharacterTile'
import axios from 'axios'
import { MARVEL_API_PUBLIC_KEY } from '../../../secrets'

export default class Characters extends Component {
  constructor(props) {
    super(props)

    this.state = {
       letterSelect: 'a',
       characterSearch: '',
       characters: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchByLetter = this.fetchByLetter.bind(this)
  }

  async componentDidMount() {
    try {
      const letter = this.state.letterSelect
      const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${letter}&apikey=${MARVEL_API_PUBLIC_KEY}`)
      console.log(data.data.results)
      this.setState({
        characters: data.data.results
      })

    } catch(err) {
      console.log(err)
    }
  }

  async handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    const searchVal = this.state.characterSearch
    await this.setState({[name]: value})
    if(name ==='letterSelect') {
      await this.fetchByLetter(this.state.letterSelect)
    }
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    const searchVal = this.state.characterSearch
    try{
      const { data } =  await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${searchVal}&apikey=${MARVEL_API_PUBLIC_KEY}`)
      this.setState({
        characters: data.data.results
      })
      console.log(`SEARCHED ---->`, this.state.characters)
    } catch(err) {
      console.log(err)
    }

  }

  async fetchByLetter(letter) {
    try{
      const { data } =  await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${letter}&apikey=${MARVEL_API_PUBLIC_KEY}`)
      const { results } = data.data
      this.setState({
        characters: results
      })
    } catch (err) {
        console.log(err)
    }
  }

  async characterSearch(searchVal) {
    try{
      const { data } =  await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${searchVal}&apikey=${MARVEL_API_PUBLIC_KEY}`)
      this.setState({
        characters: data.data.results
      })

    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    const characters = this.state.characters

    return (
      <section id='characters'>
        <section id='search-bar'>

          <div id='character-search'>
            <form onSubmit={this.handleSubmit}>

              <label  htmlFor='characterSearch'
                      className='form-label'></label>
                <span id='search-submit-container'>
                <input  className='character-search-css'
                        placeholder='Starts with...'
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
                        name='letterSelect'
                        onChange={this.handleChange}>
                  {letters.map(el => <option key={el} name='letterSelect' value={el}>{el.toUpperCase()}</option>)}
                </select>
            </form>
          </div>
        </section>

          <section id='character-tile-container'>
            {characters ?
              characters.map(el => <CharacterTile key={el.id} id={el.id} name={el.name} imgPath={el.thumbnail.path} imgExt={el.thumbnail.extension}/>)

            : <div>Loading...</div>}
          </section>
      </section>
    )
  }
}
