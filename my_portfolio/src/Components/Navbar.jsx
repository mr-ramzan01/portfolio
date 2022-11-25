import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../css/Navbar.modules.css'
export const Navbar = () => {

  const {theme, handleTheme} = useContext(ThemeContext);

  const styles = {
    default: {
      color: "black",
      backgroundColor: "white"
    },
    dark: {
      color: "white",
      backgroundColor: "black"
    }
  }
  return (
    <div className='navbar' style={theme? styles.dark: styles.default} >
      <div>
        <div><div className='logo'><h2>Ramzan Khan</h2><h2>Ramzan Khan</h2></div></div>
          <div className='navbox'>
            <h4><a href="#about" style={theme? styles.dark: styles.default}>About</a></h4>
            <h4><a href="#skills" style={theme? styles.dark: styles.default}>Skills</a></h4>
            <h4><a href="#projects" style={theme? styles.dark: styles.default}>Projects</a></h4>
            <h4><a href="#stats" style={theme? styles.dark: styles.default}>Stats</a></h4>
            <h4><a href="#contact" style={theme? styles.dark: styles.default}>Contact</a></h4>
            <div onClick={handleTheme}>
              {
                theme ? <span className="material-symbols-outlined" style={{color: "#fff"}}>light_mode</span> : <span className="material-symbols-outlined">dark_mode</span>
              }
            </div>
          </div>
      </div>
    </div>
    
  )
}
