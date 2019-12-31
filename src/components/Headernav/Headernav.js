import React from 'react'
import './Headernav.css'
import HeadernavLink from './HeadernavLink'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Headernav =(props)=> {
  const navs = [
    {
      path: '/characters',
      name: 'Characters'
    },
    {
      path: '/comics',
      name: 'Comics'
    },
    {
      path: '/events',
      name: 'Events'
    },
    {
      path: '/stories',
      name: 'Stories'
    },
    {
      path: '/series',
      name: 'Series'
    },
    {
      path: '/creators',
      name: 'Creators'
    },
  ]
  return (
    <nav id='headernav'>
      <ul id='headernav-navlist'>
        <Link to='/'>
          <FontAwesomeIcon id='home-icon' icon={faHome} size='lg' style={{color: '#EA2328'}}/>
        </Link>
        {navs.map((el,idx) => <HeadernavLink key={idx} path={el.path} name={el.name} />)}
      </ul>
    </nav>
  )
}

export default Headernav;
