import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../css/GithubStats.modules.css'

export const GithubStats = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <>
    <div  id='stats'></div>
    <div className='githubStats' style={theme?{backgroundColor:"black", color: "#fff"}:{backgroundColor:"#fff"}}>
      <div>
        <h1><span className='capitalG'>G</span>ithub Stats</h1>
      </div>
        <div className='streak'>
          {theme?<img src="https://github-readme-stats.vercel.app/api?username=mr-ramzan01&show_icons=true&locale=en&theme=radical&border_radius=10" alt="" />:<img src="https://github-readme-stats.vercel.app/api?username=mr-ramzan01&show_icons=true&locale=en&border_radius=10" alt="" />}
          {theme?<img src="https://github-readme-streak-stats.herokuapp.com/?user=mr-ramzan01&theme=radical&border_radius=10" alt="" />:<img src="https://github-readme-streak-stats.herokuapp.com/?user=mr-ramzan01&border_radius=10" alt="" />}
        </div>
        <div className='language'>
          {theme?<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mr-ramzan01&layout=compact&theme=radical&border_radius=10" alt="" />:<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mr-ramzan01&layout=compact&border_radius=10" alt="" />}
        </div>
        <div className='graph'>
          {theme?<img src="https://activity-graph.herokuapp.com/graph?username=mr-ramzan01&theme=react-dark" alt="" />:<img src="https://activity-graph.herokuapp.com/graph?username=mr-ramzan01" alt="" />}
        </div>
    </div>
    </>
  )
}
