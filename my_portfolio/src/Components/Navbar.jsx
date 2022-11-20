import React from 'react'
import { useRef } from 'react'
import '../css/Navbar.modules.css'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <div><h2>Ramzan</h2></div>
          <div className='navbox'>
            <h4><a href="#about">About</a></h4>
            <h4><a href="#skills">Skills</a></h4>
            <h4><a href="#projects">Projects</a></h4>
            <h4><a href="#stats">Stats</a></h4>
            <h4><a href="#contact">Contact</a></h4>
            <span className="material-symbols-outlined">light_mode</span>
            {/* <span className="material-symbols-outlined">dark_mode</span> */}
          </div>
      </div>
    </div>
    
  )
}
