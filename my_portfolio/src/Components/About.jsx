import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../styles/About.modules.css'
import Typewriter from 'typewriter-effect'

export const About = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div id='about' className='about' style={theme? {color: '#fff', background: 'rgb(30,39,46)', background: 'linear-gradient(0deg, rgba(30,39,46,1) 0%, rgba(44,58,71,1) 100%)'}: {color: '#000000', background: 'rgb(255,255,255)', background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%)'}}>
      <div className='wrapper'>
        {theme && <div className='snow'></div>}
        <div className='about_div'>
          <div data-aos="fade-right"  data-aos-duration="2000" data-aos-delay='500' className='about_firstChild'>
            <h1>Hi, <span><img src="/Images/hi_robot.gif" alt="" /></span> I'm Ramzan</h1>
            <div className="animate_type">
              <div>I'm a</div>
              <div style={theme?{color: '#0099ff'}:{color: 'blue'}}>
              <Typewriter options={{
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
                strings: ["Developer", "Designer"]
              }}/>
              </div>
            </div>
            <p>Strong in design with intuitive problem-solving skills. A passionate Full Stack Developer , skilled in MERN technologies and always eager to learn new skills.  Always looking to collaborate in projects to grow and show skills.</p>
            <div className='download'>
              <div>
                <a href="https://www.linkedin.com/in/ramzan01/" target={"_blank"}><i style={theme?{color: '#0173c0'}:{color: '#6a6a6a'}} className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/mr-ramzan01" target={"_blank"}><i style={theme?{color: '#0173c0'}:{color: '#6a6a6a'}} className="fa-brands fa-github" ></i></a>
                <a href="mailto: ramzanformasai03@gmail.com"><i style={theme?{color: '#0173c0'}:{color: '#6a6a6a'}} className="fa-solid fa-envelope"></i></a>
                <a href="tel: 9958949641"><i style={theme?{color: '#0173c0'}:{color: '#6a6a6a'}} className="fa-solid fa-phone"></i></a>
              </div>
              <div className='resume'>
                <a href="https://drive.google.com/file/d/1TLn9o7L3Lt-CHDUcaPUpIA6K6cosBXhE/view?usp=share_link" target={"_blank"}><button style={theme?{backgroundColor: '#0173c0'}:{backgroundColor: '#6a6a6a'}}>Resume <i className="fa-solid fa-eye"></i></button></a>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay='500' className='profile'>
            <div>
              {theme?<img style={{background: 'rgb(30,39,46)', background: 'linear-gradient(0deg, rgba(30,39,46,1) 0%, rgba(0,153,255,1) 100%)'}} src={process.env.PUBLIC_URL+`/Images/profileTransparent.png`} alt="profile" />:<img src={process.env.PUBLIC_URL+`/Images/portfolioProfile.png`} alt="profile" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
