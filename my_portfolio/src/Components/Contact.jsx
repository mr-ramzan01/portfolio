import React from 'react'
import '../css/Contact.modules.css'

export const Contact = () => {
  return (
    <div className='contactDiv'>
      <div className='contactHeading'>
        <h1>Contact Me</h1>
      </div>
        <div>
            <form action="" className='contactForm'>
                <label htmlFor="">Name</label><br />
                <input type="text" required /><br />
                <label htmlFor="">Email</label><br />
                <input type="email" required /><br />
                <label htmlFor="">Phone No.</label><br />
                <input type="number" /><br />
                <label htmlFor="">Message</label><br />
                <textarea name="" id="" cols="15" rows="10"></textarea><br />
                <input type="submit" />
            </form>
        </div>
    </div>
  )
}
