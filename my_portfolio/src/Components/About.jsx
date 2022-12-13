import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../styles/About.modules.css'

export const About = () => {
  const {theme} = useContext(ThemeContext);
  const styles = {
    default: {
      color: "black",
      backgroundColor: "#eee"
    },
    dark: {
      color: "white",
      backgroundColor: "#292929"
    }
  }

  return (
    <div id='about' className='about' style={theme? styles.dark: styles.default}>
      <div>
        <div className='about_firstChild'>
          <h1>Hi, <span><img src="/Images/hi_robot.gif" alt="" /></span> Myself Ramzan</h1>
          <div className='animate_txt'>
            <div className='wrapper'>
              <div className="static_txt">I'm a</div>
              <ul className='dynamic_txt'>
                <li><span>Developer</span></li>
                <li><span>Designer</span></li>
              </ul>
            </div>
          </div>
          {/* <h2>I'm a Full Stack Developer</h2> */}
          <p>Strong in design with intuitive problem-solving skills. A passionate Full Stack Developer , skilled in MERN technologies and always eager to learn new skills.  Looking to start the career as an entry-level software engineer with a reputed firm to grow and show skills.</p>
          <div className='download'>
            <div>
              <a href="https://www.linkedin.com/in/ramzan01/" target={"_blank"}><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/mr-ramzan01" target={"_blank"}><i className="fa-brands fa-github" ></i></a>
              <a href="mailto: ramzanformasai03@gmail.com"><i className="fa-solid fa-envelope"></i></a>
              <a href="tel: 9958949641"><i className="fa-solid fa-phone"></i></a>
            </div>
            <div className='resume'>
              <a href="https://drive.google.com/file/d/1TLn9o7L3Lt-CHDUcaPUpIA6K6cosBXhE/view?usp=share_link" target={"_blank"}><button>Resume <i className="fa-solid fa-eye"></i></button></a>
            </div>
          </div>
        </div>
        <div className='profile'>
          <div><img src={process.env.PUBLIC_URL+`/Images/portfolioProfile.png`} alt="profile" /></div>
        </div>
      </div>
    </div>
  )
}
