import React, {Component} from 'react'
import axios from 'axios'
import { MARVEL_API_PUBLIC_KEY } from '../secrets'

export default class APITest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
  }

  async componentDidMount() {

    try{
      const data =  await axios.get(`https://gateway.marvel.com:443/v1/public/characters/1009718?apikey=${MARVEL_API_PUBLIC_KEY}`)
      console.log(`APITest ------>`,data)
      this.setState({data})

    } catch (error) {
        console.log(error)
    }
  }

  render() {
    return (
      <div>
        APITest
      </div>
    )
  }
}

