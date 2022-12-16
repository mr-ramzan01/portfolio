import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../styles/GithubStats.modules.css'

export const GithubStats = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <>
    <div  id='stats'></div>
    <div className='githubStats' style={theme?{background: 'rgb(30,39,46)', background: 'linear-gradient(0deg, rgba(30,39,46,1) 20%, rgba(0,153,255,1) 100%)', color: "#fff"}:{background: 'rgb(255,255,255)', background: 'linear-gradient(0deg, rgba(238,238,238,1) 0%, rgba(0,153,255,1) 100%)'}}>
      <div className='wrapper'>
        {theme && <div className='snow'></div>}
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
        <div className='graph'>
          <div style={theme?{border: '1px solid #fff'}:{}} data-aos="zoom-in-up" data-aos-delay='800' data-aos-duration='1000'>{theme?<img src="https://github-readme-activity-graph.cyclic.app/graph?username=mr-ramzan01&bg_color=0c0b17&color=8bcecc&line=8bcecc&point=fd428d&hide_border=true" alt="" />:<img src="https://github-readme-activity-graph.cyclic.app/graph?username=mr-ramzan01&bg_color=fff&color=0099ff&line=ffa41c&point=403d3d&area_color=6a6a6a&hide_border=true" alt="" />} </div>
        </div>
      </div>
    </div>
    </>
  )
}
