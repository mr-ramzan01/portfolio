import React from 'react'
import '../css/Skills.modules.css'

export const Skills = () => {
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
      image: 'Images/chakra.png'
    },
    {
      id: 11,
      image: 'Images/npm.svg'
    },
    {
      id: 12,
      image: 'Images/git.svg'
    },
    {
      id: 13,
      image: 'Images/postman.png'
    }
  ]
  return (
    <div className='skills'>
      <div>
        <h1>Skills</h1>
      </div>
      <div>
        {
          images.map(el => (
            <div key={el.id}>
              <img src={process.env.PUBLIC_URL+`${el.image}`} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}
