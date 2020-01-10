import React from 'react'
import './Main.css'
import Home from './Home'
import Characters from './Characters'
import { Switch, Route } from 'react-router-dom'



const Main =(props)=> {
  return (
    <section id='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/characters' component={Characters} />
        </Switch>
    </section>
  )
}


export default Main;
