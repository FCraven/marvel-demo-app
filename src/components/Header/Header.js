import React from 'react'
import './Header.css'

const Header =(props)=> {
  return (
    <header id='header'>
      <img src='http://cbldf.org/wp-content/uploads/2013/01/code_seal_mar1955.gif'
            alt='approved by comics authority seal'
            style={{float: 'left'}}></img>
      <img src='http://comic-cons.xyz/wp-content/uploads/marvel-logo.png'
          alt={`Marvel's Logo`}></img>
    </header>
  )
}

export default Header;
