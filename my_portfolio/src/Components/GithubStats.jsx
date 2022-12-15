import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../styles/GithubStats.modules.css'

export const GithubStats = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <>
    <div  id='stats'></div>
    <div className='githubStats' style={theme?{backgroundColor:"black", color: "#fff"}:{backgroundColor:"#fff"}}>
      <div className='wrapper'>
        <div className='snow'></div>
        <div>
          <h1><span className='capitalG'>G</span>ithub Stats</h1>
        </div>
        <div className='streak'>
          <div data-aos="fade-right" data-aos-delay='800' data-aos-duration='1000'>{theme?<img  src="https://github-readme-stats.vercel.app/api?username=mr-ramzan01&show_icons=true&locale=en&theme=radical&border_radius=10" alt="" />:<img src="https://github-readme-stats.vercel.app/api?username=mr-ramzan01&show_icons=true&locale=en&border_radius=10" alt="" />}</div>
          <div data-aos="fade-left" data-aos-delay='800' data-aos-duration='1000'>{theme?<img src="https://github-readme-streak-stats.herokuapp.com/?user=mr-ramzan01&theme=radical&border_radius=10" alt="" />:<img src="https://github-readme-streak-stats.herokuapp.com/?user=mr-ramzan01&border_radius=10" alt="" />}</div>
        </div>
        <div className='language'>
          <div data-aos="zoom-in-up" data-aos-delay='800' data-aos-duration='1000'>{theme?<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mr-ramzan01&layout=compact&theme=radical&border_radius=10" alt="" />:<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mr-ramzan01&layout=compact&border_radius=10" alt="" />}</div>
        </div>
      </div>
    </div>
    </>
  )
}
