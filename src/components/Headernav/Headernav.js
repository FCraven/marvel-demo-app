import React from 'react'
import './Headernav.css'
import HeadernavLink from './HeadernavLink'

const Headernav =(props)=> {
  const navs = [
    {
      to: '/characters',
      name: 'Characters'
    },
    {
      to: '/comics',
      name: 'Comics'
    },
    {
      to: '/events',
      name: 'Events'
    },
    {
      to: '/stories',
      name: 'Stories'
    },
    {
      to: '/series',
      name: 'Series'
    },
    {
      to: '/creators',
      name: 'Creators'
    },
  ]
  return (
    <nav id='headernav'>
      <ul id='headernav-navlist'>
        {navs.map(el => <HeadernavLink to={el.to} name={el.name} />)}
      </ul>
    </nav>
  )
}

export default Headernav;

        {/* <li className='headernav-link'>Characters</li>
        <li className='headernav-link'>Comics</li>
        <li className='headernav-link'>Events</li>
        <li className='headernav-link'>Stories</li>
        <li className='headernav-link'>Series</li>
        <li className='headernav-link'>Creators</li> */}
