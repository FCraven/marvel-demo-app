import React from 'react'
import './Main.css'
import Home from './Home'
import Characters from './Characters'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Main =(props)=> {
  return (
    <section id='main'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/characters' component={Characters} />
        </Switch>
      </Router>
    </section>
  )
}


export default Main;
