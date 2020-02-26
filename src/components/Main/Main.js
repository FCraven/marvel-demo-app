import React, { Component } from 'react'
import './Main.css'
import Home from './Home'
import Characters from './Characters'
import CharacterById from './CharacterById'
import Comics from './Comics'
import ComicsById from './ComicsById'
import CreatorsById from './CreatorsById'
import Creators from './Creators'
import Events from './Events'
import EventsById from './EventById'
import Series from './Series'
import SeriesById from './SeriesById'
import Stories from './Stories'
import StoriesById from './StoriesById'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchEvents } from '../../redux/ducks/eventsReducer'
import { fetchSeries } from '../../redux/ducks/seriesReducer'
import { fetchCreators } from '../../redux/ducks/creatorsReducer'
import { fetchStories } from '../../redux/ducks/storiesReducer'
import { fetchComics } from '../../redux/ducks/comicsReducer'
import { toggleLoading } from '../../redux/ducks/settingsReducer'

class Main extends Component {

  componentDidMount() {
    //dispatches in here
    this.props.toggleLoading()
    this.props.fetchEvents()
    this.props.fetchSeries()
    this.props.fetchCreators()
    this.props.fetchStories()
    this.props.fetchComics()
    this.props.toggleLoading()
  }

  render() {
    return (
      <section id='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/characters/:id' component={CharacterById} />
          <Route path='/characters' component={Characters} />
          <Route path='/series/:id' component={SeriesById} />
          <Route path='/series' component={Series} />
          <Route path='/comics/:id' component={ComicsById} />
          <Route path='/comics' component={Comics} />
          <Route path='/events/:id' component={EventsById} />
          <Route path='/events' component={Events} />
          <Route path='/stories/:id' component={StoriesById} />
          <Route path='/stories' component={Stories} />
          <Route path='/creators/:id' component={CreatorsById} />
          <Route path='/creators' component={Creators} />
        </Switch>
      </section>
    )
  }
}

const mapState = (state) => {
  return {
    ...state
  }
}

const mapDispatch = {
  fetchEvents,
  fetchSeries,
  fetchCreators,
  fetchStories,
  fetchComics,
  toggleLoading
}

export default connect(mapState, mapDispatch)(Main);


