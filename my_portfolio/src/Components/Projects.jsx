import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../styles/Projects.modules.css'

export const Projects = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div id='projects' className='projects' style={theme?{backgroundColor: "#292929", color: "#fff"}: {backgroundColor: "#eee"}}>
      <div>
        <h1><span className='capitalP'>P</span>rojects</h1>
      </div>
      <div>
        <div className='project'>
          <div>
            <div>
              <img src={process.env.PUBLIC_URL+"/Images/netmedsClone.png"} alt="" />
            </div>
            <div className='details'>
              <div>
                <h1>Netmeds Clone</h1>
                <h2>NetMeds is an online pharmacy based in Chennai, India, Netmeds provides online ordering and mail delivery of prescription and non-prescription medications.</h2>
                <h3>A collaborative project built by a team of 4 members in 8 days</h3>
              </div>
              <div className='links'>
                <a href="https://teamnetlifyclone.netlify.app/" target="_blank"><button>View</button></a>
                <a href="https://github.com/nidhishpareek/NetMeds-Clone" target="_blank"><i className="fa-brands fa-github" ></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className='project'>
          <div>
            <div>
              <img src={process.env.PUBLIC_URL+"/Images/unbounceClone.png"} alt="" />
            </div>
            <div className='details'>
              <div>
                <h1>Unbounce Clone</h1>
                <h2>Unbounce is a Canadian software company which produces landing pages for websites, and is the host of the annual Call to Action Conference.</h2>
                <h3>A collaborative project built by a team of 5 members in 5 days</h3>
              </div>
              <div className='links'>
                <a href="https://clinquant-dolphin-aebed7.netlify.app" target="_blank"><button>View</button></a>
                <a href="https://github.com/mr-ramzan01/UnbounceProject" target="_blank"><i className="fa-brands fa-github" ></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className='project'>
          <div>
            <div>
              <img src={process.env.PUBLIC_URL+"/Images/pluralsightClone.png"} alt="" />
            </div>
            <div className='details'>
              <div>
                <h1>Pluralsight Clone</h1>
                <h2>Pluralsight is a education company that offers a variety of video training courses for software developers, IT administrators, and creative professionals.</h2>
                <h3>A collaborative project built by a team of 5 members in 6 days</h3>
              </div>
              <div className='links'>
                <a href="https://pluralsightclonee.netlify.app" target="_blank"><button>View</button></a>
                <a href="https://github.com/Akshaypareek01/pluralsight" target="_blank"><i className="fa-brands fa-github" ></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
