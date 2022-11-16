import React from 'react'
import '../css/GithubStats.modules.css'

export const GithubStats = () => {
  return (
    <div className='githubStats'>
        <img src="https://activity-graph.herokuapp.com/graph?username=mr-ramzan01" alt="" />
        <img src="https://activity-graph.herokuapp.com/graph?username=mr-ramzan01&theme=github" alt="" />
        <img src="https://github-readme-stats.vercel.app/api?username=mr-ramzan01&show_icons=true&locale=en&border_radius=10&theme=radical" alt="" />
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=mr-ramzan01&border_radius=10&theme=radical" alt="" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mr-ramzan01&layout=compact&border_radius=10&theme=radical" alt="" />
    </div>
  )
}
