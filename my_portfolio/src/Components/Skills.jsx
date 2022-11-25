import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../css/Skills.modules.css'

export const Skills = () => {
  const {theme} = useContext(ThemeContext);
  let images = [
    {
      id: 1,
      image: '/Images/html.svg'
    },
    {
      id: 2,
      image: 'Images/css.svg'
    },
    {
      id: 3,
      image: 'Images/javaScript.svg'
    },
    {
      id: 4,
      image: 'Images/java.png'
    },
    {
      id: 5,
      image: 'Images/react.svg'
    },
    {
      id: 6,
      image: 'Images/redux.svg'
    },
    {
      id: 7,
      image: 'Images/nodeJs.svg'
    },
    {
      id: 8,
      image: 'Images/express.svg'
    },
    {
      id: 9,
      image: 'Images/mongoDB.svg'
    },
    {
      id: 10,
      image: "Images/mongoose.png"
    },
    {
      id: 11,
      image: 'Images/chakra.png'
    },
    {
      id: 12,
      image: 'Images/npm.svg'
    },
    {
      id: 13,
      image: 'Images/git.svg'
    },
    {
      id: 14,
      image: 'Images/postman.png'
    },
    {
      id: 15,
      image: 'Images/heroku.png'
    },
    {
      id: 16,
      image: 'Images/netlify.png'
    }
  ]
  return (
    <div id='skills' className='skills' style={theme?{backgroundColor: "black", color: "#fff"}: {backgroundColor: "#fff"}}>
      <div>
        <h1><span className='capitalS'>S</span>kills</h1>
      </div>
      <div>
        {
          images.map(el => (
            <div className='imageDiv' key={el.id}>
              <img src={process.env.PUBLIC_URL+`${el.image}`} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}
