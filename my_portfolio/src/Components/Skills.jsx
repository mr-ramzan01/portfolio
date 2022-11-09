import React from 'react'
import '../css/Skills.modules.css'

export const Skills = () => {
  let images = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU'
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU'
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU'
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU'
    },
    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU'
    },
    {
      id: 6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU'
    },
    {
      id: 7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU'
    },
    {
      id: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU'
    },
    {
      id: 9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU'
    },
    {
      id: 10,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU'
    },
    {
      id: 11,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU'
    },
    {
      id: 12,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwIVdKNKpXf59pfwtVoAS2KGkDoY7PVXbKg&usqp=CAU'
    }
  ]
  return (
    <div className='skills'>
      <div>
        {
          images.map(el => (
            <div>
              <img src={el.image} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}
