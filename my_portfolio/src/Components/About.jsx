import React from 'react'
import '../css/About.modules.css'

export const About = () => {
  return (
    <div className='about'>
      <div>
        <div>
          <h1>Hi, I am Ramzan</h1>
          <h2>Full Stack Developer</h2>
          <p>Strong in design and integration with intuitive problem-solving skills. A perfervid Full Stack Developer , eager to learn new skills.  Looking to start the career as an entry-level software engineer with a reputed firm to grow and show skills.</p>
        </div>
        <div className='profile'>
          <img src={process.env.PUBLIC_URL+`/Images/portfolioProfile.png`} alt="" />
        </div>
      </div>
      <div>
        <div className='download'>
          <div>
            <a href="https://www.linkedin.com/in/ramzan-khan-263b87230/" target={"_blank"}><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/mr-ramzan01" target={"_blank"}><i class="fa-brands fa-github" ></i></a>
            <a href="mailto: ramzanformasai03@gmail.com"><i class="fa-solid fa-envelope"></i></a>
            <a href="tel: 9958949641"><i class="fa-solid fa-phone"></i></a>
          </div>
          <div className='resume'>
            <a href="https://drive.google.com/file/d/1MZMmZb8P9R3ou2WOHKiNV6r8BU2dHub6/view?usp=share_link" target={"_blank"}><button>Resume <i class="fa-solid fa-eye"></i></button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
