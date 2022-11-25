import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../css/Contact.modules.css'

export const Contact = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div id='contact'>
    <div className='contactDiv' style={theme?{backgroundColor: "#292929", color: '#fff'}: {backgroundColor: "#eee"}}>
      <div className='contactHeading'>
        <h1><span className='capitalC'>C</span>ontact Me</h1>
      </div>
        <div>
            <form action="" className='contactForm' style={theme?{backgroundColor: 'black'}:{}}>
                <label  htmlFor="">Name<span className='redStar'>*</span></label><br />
                <input style={theme?{backgroundColor: 'black', color: '#fff'}: {}}type="text" required /><br />
                <label  htmlFor="">Email<span className='redStar'>*</span></label><br />
                <input style={theme?{backgroundColor: 'black', color: '#fff'}: {}}type="email" required /><br />
                <label  htmlFor="">Phone No.<span className='redStar'>*</span></label><br />
                <input style={theme?{backgroundColor: 'black', color: '#fff'}: {}}type="number" required/><br />
                <label  htmlFor="">Message<span className='redStar'>*</span></label><br />
                <textarea style={theme?{backgroundColor: 'black', color: '#fff'}: {}} name="" id="" cols="15" rows="10" required></textarea><br />
                <button className="submit">Submit</button>
            </form>
        </div>
    </div>
    <div className='footer' style={theme?{backgroundColor: 'black'}: {}}>
      Designed and build from Scratch with ❤️ by Ramzan Khan
    </div>
    </div>
  )
}
