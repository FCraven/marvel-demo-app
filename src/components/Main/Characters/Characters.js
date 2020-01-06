import React, { Component } from 'react'
import './Characters.css'
import APITest from '../../APITest'
import LetterTile from './LetterTile'
import { render } from '@testing-library/react'


// TODO Change presentational component into a class component
export default class Characters extends Component {
  constructor(props) {
    super(props)

    this.state = {
       letterSelect: 'a',
       characterSearch: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // async componentDidMount() {
  //   this.props.loadCharacters(this.state.letterSelect)
  // }

  async handleChange(evt) {
    await this.setState({
      [evt.target.name]: evt.target.value
    })
    console.log(`STATE----->`,this.state)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    
  }

  render() {
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    return (
      <section id='characters'>
        <section id='search-bar'>
          <APITest />
          <h3>Characters</h3>
          <div id='character-search'>




            <form onSubmit={this.handleSubmit}>
              <label htmlFor='letter-select'>Letter Select </label>
                <select type='select'
                        name='letterSelect'
                        onChange={this.handleChange}>
                  {letters.map(el => <option key={el} name='letterSelect' value={el}>{el.toUpperCase()}</option>)}
                </select>

              <br/>
              <label htmlFor='characterSearch'>Character Search</label>
                <input  type='text'
                        name='characterSearch'
                        value={this.state.characterSearch}
                        onChange={this.handleChange}/>

            </form>
          </div>
        </section>
        <section id='letters'>

        {/* USE CSS GRID */}

          <h3>Browse Characters</h3>
          <div id='letter-tile-container' className='flex-container row-wrap'>
            {letters.map(el => <LetterTile key={el} letter={el} />)}
          </div>
        </section>
      </section>
    )
  }
}

