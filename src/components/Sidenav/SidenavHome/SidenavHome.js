import React from 'react'
import './SidenavHome.css'

const SidenavHome =(props)=> {
  return (
    <section id='sidenav-home' className='flex-container-center column-nowrap auto'>
      <div id='sidenav-home-text-container' className='flex-container-center column-nowrap'>
        <p className='sidenav-text'>The</p>
        <p className='sidenav-text'>Marvel</p>
        <p className='sidenav-text'>Desk</p>
        <p className='sidenav-text'>Reference</p>
      </div>
    </section>
  )
}

export default SidenavHome;
