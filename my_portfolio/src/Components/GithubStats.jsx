import React from 'react'
import '../css/GithubStats.modules.css'

export const GithubStats = () => {
  return (
    <>
    <div  id='stats' style={{ height: "50px"}}></div>
    <div className='githubStats'>
      <div>
        <h1><span className='capitalG'>G</span>ithub Stats</h1>
      </div>
        <div className='streak'>
          <img src="https://github-readme-stats.vercel.app/api?username=mr-ramzan01&show_icons=true&locale=en&border_radius=10" alt="" />
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=mr-ramzan01&border_radius=10" alt="" />
        </div>
        <div className='language'>
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mr-ramzan01&layout=compact&border_radius=10" alt="" />
        </div>
        <div className='graph'>
          <img src="https://activity-graph.herokuapp.com/graph?username=mr-ramzan01" alt="" />
        </div>
    </div>
    </>
  )
}
