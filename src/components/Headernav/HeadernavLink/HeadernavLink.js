import React from 'react'
import './HeadernavLink.css'
import { NavLink } from 'react-router-dom'

const HeadernavLink =(props)=> {
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

  return (
    <NavLink  to={props.path}
              className='headernav-link'
              activeClassName={activeClass}
              activeStyle={activeStyle}>{props.name}</NavLink>
  )
}

export default HeadernavLink;
