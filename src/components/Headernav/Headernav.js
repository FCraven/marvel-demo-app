import React from 'react'
import './Headernav.css'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'


const Headernav = (props) => {

  const activeStyle = {
    transform: 'scale(1.1)',
    background: 'rgba(234, 35, 42, 0.5)',
    color: 'white',
    boxShadow: '0px 5px 10px black',
    border: '1px solid cyan'
  }

  const activeClass =  {
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
        {/* Home Link */}
        <Link to='/'>
          <FontAwesomeIcon id='home-icon' icon={faHome} size='lg' style={{ color: '#EA2328' }} />
        </Link>
        {/* NavLinks */}
        {navs.map((el, idx) =>
          <NavLink
              key={idx}
              to={el.path}
              className='headernav-link'
              activeClassName={activeClass}
              activeStyle={activeStyle}>{el.name}</NavLink>
        )}
      </ul>
    </nav>
  )
}

export default Headernav;
