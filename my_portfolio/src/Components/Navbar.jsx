import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../styles/Navbar.modules.css'
export const Navbar = () => {

  const {theme, handleTheme} = useContext(ThemeContext);

  const styles = {
    default: {
      color: "black",
      backgroundColor: "white",
    },
    dark: {
      color: "white",
      backgroundColor: "#1e272e"
    }
  }
  return (
    <div className='navbar' style={theme? styles.dark: styles.default} >
      <div>
        <div><div className='logo'><h2>Ramzan Khan</h2><h2 style={theme?{color: 'rgb(100, 100, 100)'}: {color: '#0033ff'}}>Ramzan Khan</h2></div></div>
          <div className='navbox'>
            <h4><a className='link' href="#about" style={theme? styles.dark: styles.default}>About</a></h4>
            <h4><a className='link' href="#skills" style={theme? styles.dark: styles.default}>Skills</a></h4>
            <h4><a className='link' href="#projects" style={theme? styles.dark: styles.default}>Projects</a></h4>
            <h4><a className='link' href="#stats" style={theme? styles.dark: styles.default}>Github</a></h4>
            <h4><a className='link' href="#contact" style={theme? styles.dark: styles.default}>Contact</a></h4>
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
