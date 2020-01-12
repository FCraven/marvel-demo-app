import React, { Component } from 'react'
import './CharacterSearchBar.css'
import { connect } from 'react-redux'
import {
  fetchInitialCharactersByLetter,
  fetchCharactersByLetter,
  fetchCharactersBySearch
   } from '../../../redux/ducks/characterReducer'

import { toggleLoading } from '../../../redux/ducks/settingsReducer'

class CharacterSearchBar extends Component {
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
    return (
      //search bar
      <section id='search-bar'>
          <form id='character-search-form'
                onSubmit={this.handleSubmit}>
            <section id='search-by-input'>
              <label  htmlFor='characterSearch'
                      className='form-label'>
                      Search</label>
              <div id='character-search-container'>
                <input  className='character-search-input'
                        placeholder='Search...'
                        type='text'
                        name='characterSearch'
                        value={this.state.characterSearch}
                        onChange={this.handleChange} />
                <button type='submit'
                        className='form-submit-btn'
                        >Submit</button>
              </div>
            </section>

              <section id='search-by-letter'>
                <label htmlFor='letter-select'
                        className='form-label'>
                        Browse</label>
                <div>
                  <select className='letter-select-css'
                          type='select'
                          name='selectedLetter'
                          onChange={this.handleChange}>
                    {letters.map(el => <option  key={el} value={el}>{el.toUpperCase()}</option>)}
                  </select>
                </div>
              </section>

            </form>
          </section>
    )}
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

export default connect(mapStateToProps,mapDispatchToProps)(CharacterSearchBar)
