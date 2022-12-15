import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../styles/Projects.modules.css'

export const Projects = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div id='projects' className='projects' style={theme?{backgroundColor: "#292929", color: "#fff"}: {backgroundColor: "#eee"}}>
      <div>
        <h1 className='project_heading'><span className='capitalP'>P</span>rojects</h1>
      </div>
      <div className='projects_div'>
        <div data-aos="zoom-in" data-aos-delay='200' data-aos-duration='1000' className='project project1'>
          <div>
            <div className='projects_image_div'>
              <img src={process.env.PUBLIC_URL+"/Images/flipkartBackendClone.jpg"} alt="" />
            </div>
            <div className='details'>
              <div>
                <h1>Flipkart Clone</h1>
                <h2>Flipkart Private Limited is an Indian e-commerce company, headquartered in Bengaluru, and incorporated in Singapore as a private limited company.</h2>
                 <h3>Tech Stacks: <span>React | Redux | JavaScript | Chakra UI | NodeJs | MongoDb | Express | Mongoose</span></h3>
                <p>A collaborative project built by a team of 5 members in 5 days</p>
              </div>
              <div className='projects_links'>
                <div>
                  <a href="https://flipkartclone04.netlify.app/" target="_blank"><button>Live</button></a>
                  <a href="https://github.com/mr-ramzan01/filpkart-clone-backend" target="_blank"><i className="fa-brands fa-github" ></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay='200' data-aos-duration='1000' className='project project2'>
          <div>
            <div className='projects_image_div'>
              <img src={process.env.PUBLIC_URL+"/Images/netmedsClone.png"} alt="" />
            </div>
            <div className='details'>
              <div>
                <h1>Netmeds Clone</h1>
                <h2>NetMeds is an online pharmacy based in Chennai, India, Netmeds provides online ordering and mail delivery of prescription and non-prescription medications.</h2>
                 <h3>Tech Stacks: <span>React | Redux | JavaScript | Chakra UI | Json-server</span></h3>
                <p>A collaborative project built by a team of 4 members in 8 days</p>
              </div>
              <div className='projects_links'>
                <div>
                  <a href="https://teamnetlifyclone.netlify.app/" target="_blank"><button>Live</button></a>
                  <a href="https://github.com/nidhishpareek/NetMeds-Clone" target="_blank"><i className="fa-brands fa-github" ></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay='200' data-aos-duration='1000' className='project project3'>
          <div>
            <div className='projects_image_div'>
              <img src={process.env.PUBLIC_URL+"/Images/unbounceClone.png"} alt="" />
            </div>
            <div className='details'>
              <div>
                <h1>Unbounce Clone</h1>
                <h2>Unbounce is a Canadian software company which produces landing pages for websites, and is the host of the annual Call to Action Conference.</h2>
                <h3>Tech Stacks : <span>HTML | CSS | Advanced JavaScript</span></h3>
                <p>A collaborative project built by a team of 5 members in 5 days</p>
              </div>
              <div className='projects_links'>
                <div>
                  <a href="https://clinquant-dolphin-aebed7.netlify.app" target="_blank"><button>Live</button></a>
                  <a href="https://github.com/mr-ramzan01/UnbounceProject" target="_blank"><i className="fa-brands fa-github" ></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay='200' data-aos-duration='1000' className='project project4'>
          <div>
            <div className='projects_image_div'>
              <img src={process.env.PUBLIC_URL+"/Images/pluralsightClone.png"} alt="" />
            </div>
            <div className='details'>
              <div>
                <h1>Pluralsight Clone</h1>
                <h2>Pluralsight is a education company that offers a variety of video training courses for software developers, IT administrators, and creative professionals.</h2>
                <h3>Tech Stacks : <span>HTML | CSS | JavaScript</span></h3>
                <p>A collaborative project built by a team of 5 members in 6 days</p>
              </div>
              <div className='projects_links'>
                <div>
                  <a href="https://pluralsightclonee.netlify.app" target="_blank"><button>Live</button></a>
                  <a href="https://github.com/Akshaypareek01/pluralsight" target="_blank"><i className="fa-brands fa-github" ></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg className='wave_1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L24,202.7C48,213,96,235,144,245.3C192,256,240,256,288,256C336,256,384,256,432,261.3C480,267,528,277,576,272C624,267,672,245,720,224C768,203,816,181,864,186.7C912,192,960,224,1008,240C1056,256,1104,256,1152,245.3C1200,235,1248,213,1296,202.7C1344,192,1392,192,1416,192L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
      {/* <svg className='wave_2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,320L26.7,282.7C53.3,245,107,171,160,149.3C213.3,128,267,160,320,165.3C373.3,171,427,149,480,165.3C533.3,181,587,235,640,229.3C693.3,224,747,160,800,138.7C853.3,117,907,139,960,165.3C1013.3,192,1067,224,1120,229.3C1173.3,235,1227,213,1280,213.3C1333.3,213,1387,235,1413,245.3L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg> */}
        
    </div>
  )
}
