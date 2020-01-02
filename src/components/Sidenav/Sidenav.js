import React from 'react'
import './Sidenav.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SidenavHome from './SidenavHome'

const Sidenav =(props)=> {
  return (
    <aside id='sidenav' className='flex-container-center'>
      <Router>
        <Switch>
          <Route exact path='/' component={SidenavHome} />
        </Switch>
      </Router>
    </aside>
  )
}

export default Sidenav
