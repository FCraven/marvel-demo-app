import React from 'react'
import './Sidenav.css'
import { Switch, Route } from 'react-router-dom'
import SidenavHome from './SidenavHome'
import CharacterSearchBar from './CharacterSearchBar'
import ByIdSidenav from './ByIdSidenav'
import { toggleSearch } from '../../redux/ducks/settingsReducer'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const Sidenav = (props) => {

  return (
    <aside id='sidenav' className='flex-container-center'>
      <Switch>
        <Route exact path='/' component={SidenavHome} />
        <Route path='/characters/:id' component={ByIdSidenav} />
        <Route path='/characters' component={CharacterSearchBar} />
      </Switch>
      <FontAwesomeIcon icon={faWindowClose}
        id='close-icon'
        style={{
          color: '#EA2328',
          backgroundColor: 'midnightblue',
          padding: '3px',
          border: '1px solid teal',
          borderLeft: 'none',
          boxShadow: '0px 1px 3px 1px grey',
          margin: '1px'
        }}
        size='2x'
        onClick={props.toggleSearch}>
      </FontAwesomeIcon>
    </aside>
  )
}

const mapDispatch = {
  toggleSearch
}

export default connect(null, mapDispatch)(Sidenav)
