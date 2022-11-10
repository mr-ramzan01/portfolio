import React from 'react'
import '../css/Projects.modules.css'

export const Projects = () => {
  return (
    <div className='projects'>
      <div>
        <div className='project'>
          <div>
            <img src={process.env.PUBLIC_URL+"/Images/netmedsClone.png"} alt="" />
          </div>
          <div>
            <h1>Netmeds Clone</h1>
            <h2>Netmeds is a pharmaceutical company that offers medicines at a reasonable price.</h2>
            <h1>Features</h1>
            <ul>
              <li>Login & logout features</li>
              <li>Debounce search bar</li>
              <li>Sorting, filtering and add to cart on products</li>
              <li>Easy payment methods</li>
            </ul>
            <h2>Area of Responsibility</h2>
            <ul>
              <li>Developed homePage with functionalities</li>
              <li>Created add to Cart and Save for later page</li>
              <li>Build search functionality</li>
            </ul>
            <h3>A collaborative project built by a team of 4 members in 8 days</h3>
            <div>
              <a href="https://teamnetlifyclone.netlify.app/" target="_blank">live</a>
              <a href="https://github.com/nidhishpareek/NetMeds-Clone" target="_blank">github</a>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className='project'>
          <div>
            <img src={process.env.PUBLIC_URL+"/Images/unbounceClone.png"} alt="" />
          </div>
          <div>
            <h1>Unbounce Clone</h1>
            <h2>Unbounce is a Canadian software company which produces landing pages for websites, and is the host of the annual Call to Action Conference.</h2>
            <h1>Features</h1>
            <ul>
              <li>Login and Signup for two different users</li>
              <li>Plan based purchasing</li>
              <li>Paginated Blog page</li>
              <li>Debit Card payment feature</li>
            </ul>
            <h2>Area of Responsibility</h2>
            <ul>
              <li>Build homepage with functionalities </li>
              <li>Created payment page</li>
              <li>Blog page created with pagination</li>
            </ul>
            <h3>A collaborative project built by a team of 5 members in 5 days</h3>
            <div>
              <a href="https://clinquant-dolphin-aebed7.netlify.app" target="_blank">live</a>
              <a href="https://github.com/mr-ramzan01/UnbounceProject" target="_blank">github</a>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className='project'>
          <div>
            <img src={process.env.PUBLIC_URL+"/Images/pluralsightClone.png"} alt="" />
          </div>
          <div>
            <h1>Pluralsight Clone</h1>
            <h2>Pluralsight is a education company that offers a variety of video training courses for software developers, IT administrators, and creative professionals.</h2>
            <h1>Features</h1>
            <ul>
              <li>Two kinds of login and signup</li>
              <li>Try for free and faq</li>
              <li>Sorting, filtering and search functionalities</li>
              <li>East payment through card</li>
            </ul>
            <h2>Area of Responsibility</h2>
            <ul>
              <li>Homepage with navbar and footer </li>
              <li>Courses page till payment </li>
              <li>Developed whole functionalities</li>
            </ul>
            <h3>A collaborative project built by a team of 5 members in 6 days</h3>
            <div>
              <a href="https://pluralsightclonee.netlify.app" target="_blank">live</a>
              <a href="https://github.com/Akshaypareek01/pluralsight" target="_blank">github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
