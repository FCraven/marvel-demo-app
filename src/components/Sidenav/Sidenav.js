import React from 'react'
import './Sidenav.css'
import { Switch, Route} from 'react-router-dom'
import SidenavHome from './SidenavHome'

const Sidenav =(props)=> {
  return (
    <aside id='sidenav' className='flex-container-center'>
        <Switch>
          <Route exact path='/' component={SidenavHome}/>
          <Route path='/characters' render={()=> <div>HelloWorld</div>} />
        </Switch>
    </aside>
  )
}

export default Sidenav
