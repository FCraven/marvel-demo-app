import React from 'react'
import './Main.css'
import Home from './Home'
import Characters from './Characters'
import CharacterById from './CharacterById'
import Comics from './Comics'
import ComicsById from './ComicsById'
import Series from './Series'
import SeriesById from './SeriesById'
import { Switch, Route } from 'react-router-dom'

const Main =(props)=> {
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
        </Switch>
    </section>
  )
}

export default Main;
