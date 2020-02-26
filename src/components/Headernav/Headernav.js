import React from 'react'
import './Headernav.css'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import { toggleSearch } from '../../redux/ducks/settingsReducer'
import { connect } from 'react-redux'


const Headernav = (props) => {

  const activeStyle = {
    transform: 'scale(1.1)',
    background: 'rgba(234, 35, 42, 0.5)',
    color: 'white',
    boxShadow: '0px 5px 10px black',
    border: '1px solid cyan'
  }


  const navs = [
    {
      path: '/characters',
      name: 'Characters',
    },
    {
      path: '/comics',
      name: 'Comics',
    },
    {
      path: '/events',
      name: 'Events',

    },
    {
      path: '/stories',
      name: 'Stories',

    },
    {
      path: '/series',
      name: 'Series',
    },
    {
      path: '/creators',
      name: 'Creators',
    },
  ]
  return (
    <nav id='headernav'>
      <ul id='headernav-navlist'>
        <Link to='/'>
          <FontAwesomeIcon id='home-icon' icon={faHome} size='lg' style={{ color: '#EA2328' }}
            className='headernav-icon' />
        </Link>
        {/* Home Link */}
        {/* NavLinks */}
        {navs.map((el, idx) =>
          <NavLink
            key={idx}
            to={el.path}
            className='headernav-link'
            activeClassName='transform: scale(1.1),background: rgba(234, 35, 42, 0.5),color: white,boxShadow: 0px 5px 10px black,border: 1px solid cyan'
            activeStyle={activeStyle}>{el.name}</NavLink>
        )}
          <FontAwesomeIcon id='search-icon' icon={faSearch} size='lg'
            className='headernav-icon' style={{ color: '#EA2328' }}
            onClick={props.toggleSearch} />
      </ul>
    </nav>
  )
}

const mapDispatch = {
  toggleSearch
}

export default connect(null, mapDispatch)(Headernav);
