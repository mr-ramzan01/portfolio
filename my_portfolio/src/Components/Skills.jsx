import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../styles/Skills.modules.css'

export const Skills = () => {
  let count = 1;
  const {theme} = useContext(ThemeContext);
  let images = [
    {
      id: 1,
      image: [{name: 'HTML', src:'/Images/html.svg'}]
    },
    {
      id: 2,
      image: [{ name: 'CSS', src: 'Images/css.svg'},{ name: 'JAVASCRIPT', src: 'Images/javaScript.svg'}]

    },
    {
      id: 3,
      image: [{ name: 'JAVA', src: 'Images/java.png'}, { name: 'REACT', src: 'Images/react.svg'}, { name: 'REDUX', src: 'Images/redux.svg'}]
    },
    {
      id: 4,
      image: [{ name: 'NODEJS', src: 'Images/nodeJs.svg'}, { name: 'EXPRESS', src: 'Images/express.svg'}, { name: 'MONGODB', src: 'Images/mongoDB.svg'}, { name: 'MONGOOSE', src: 'Images/mongoose.png'}]
    },
    {
      id: 5,
      image: [{ name: 'CHAKRA UI', src: 'Images/chakra.png'}, { name: 'NPM', src: 'Images/npm.svg'}, { name: 'GIT', src: 'Images/git.svg'}, { name: 'HEROKU', src: 'Images/heroku.png'}, { name: 'NETLIFY', src: 'Images/netlify.png'}]
    }
  ]
  return (
    <div id='skills' className='skills' style={theme?{background: 'rgb(44,58,71)', background: 'linear-gradient(0deg, rgba(44,58,71,1) 0%, rgba(30,39,46,1) 40%)', color: "#fff"}: {backgroundColor: "#fff"}}>
      <div className='wrapper'>
        {theme?<div className='snow'></div>:<div className='snow_dark'></div>}
        <div>
          <h1><span className='capitalS'>S</span>kills</h1>
        </div>
        <div  className='images_div'>
          {
            images.map(el => (
              <div className='imageDiv' key={el.id}>
                {el.image.map((e) => (
                  <div key={e.name} data-aos="fade-up" data-aos-delay='200' data-aos-duration='1000' className='flip_card'>
                    <div className='flip_card_inner'>
                      <div style={theme?{background: '#2c3a47', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}:{backgroundColor: '#eee'}} className='front_face'><img className={`bounce${count++}`} src={process.env.PUBLIC_URL+`${e.src}`} alt="" /></div>
                      <div style={theme?{background: '#2c3a47'}:{backgroundColor: '#eee'}} className='back_face'><p style={theme?{color: '#fff'}:{color: '#000000'}}>{e.name}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
