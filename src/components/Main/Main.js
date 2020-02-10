import React from 'react'
import './Main.css'
import Home from './Home'
import Characters from './Characters'
import CharacterById from './CharacterById'
import Comics from './Comics'
import ComicsById from './ComicsById'
import CreatorsById from './CreatorsById'
import Creators from './Creators'
import Events from './Events'
import EventsById from './EventsById'
import Series from './Series'
import SeriesById from './SeriesById'
import Stories from './Stories'
import StoriesById from './StoriesById'
import { Switch, Route } from 'react-router-dom'

const Main = (props) => {
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

export default Main;
