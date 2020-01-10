import React from 'react'
import './Sidenav.css'
import { Switch, Route} from 'react-router-dom'
import SidenavHome from './SidenavHome'
import CharacterSearchBar from './CharacterSearchBar'

const Sidenav =(props)=> {
  return (
    <aside id='sidenav' className='flex-container-center'>
        <Switch>
          <Route exact path='/' component={SidenavHome}/>
          <Route path='/characters' component={CharacterSearchBar} />
        </Switch>
    </aside>
  )
}

export default Sidenav
