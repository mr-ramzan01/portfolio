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
    <div id='skills' className='skills' style={theme?{backgroundColor: "black", color: "#fff"}: {backgroundColor: "#fff"}}>
      <div className='wrapper'>
        <div className='snow'></div>
        <div>
          <h1><span className='capitalS'>S</span>kills</h1>
        </div>
        <div className='images_div'>
          {
            images.map(el => (
              <div className='imageDiv' key={el.id}>
                {el.image.map((e) => (
                  <div key={e.name} className='flip_card'>
                    <div className='flip_card_inner'>
                      <div className='front_face'><img className={`bounce${count++}`} src={process.env.PUBLIC_URL+`${e.src}`} alt="" /></div>
                      <div className='back_face'><p>{e.name}</p></div>
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
