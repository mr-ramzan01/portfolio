import React from 'react'
import '../css/Navbar.modules.css'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div><h2>Ramzan</h2></div>
        <div className='navbox'>
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Skills</h4>
          <h4>Projects</h4>
          <h4>Contact</h4>
          <span className="material-symbols-outlined">light_mode</span>
          {/* <span className="material-symbols-outlined">dark_mode</span> */}
        </div>
    </div>
  )
}
