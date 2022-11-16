import React from 'react'
import '../css/Contact.modules.css'

export const Contact = () => {
  return (
    <>
    <div className='contactDiv'>
      <div className='contactHeading'>
        <h1><span className='capitalC'>C</span>ontact Me</h1>
      </div>
        <div>
            <form action="" className='contactForm'>
                <label htmlFor="">Name<span className='redStar'>*</span></label><br />
                <input type="text" required /><br />
                <label htmlFor="">Email<span className='redStar'>*</span></label><br />
                <input type="email" required /><br />
                <label htmlFor="">Phone No.<span className='redStar'>*</span></label><br />
                <input type="number" required /><br />
                <label htmlFor="">Message<span className='redStar'>*</span></label><br />
                <textarea name="" id="" cols="15" rows="10" required></textarea><br />
                <button className="submit">Submit</button>
            </form>
        </div>
    </div>
    <div className='footer'>
      Designed and build from Scratch with ❤️ by Ramzan Khan
    </div>
    </>
  )
}
