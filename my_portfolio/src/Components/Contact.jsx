import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../css/Contact.modules.css'
import emailjs from '@emailjs/browser'
console.log(emailjs,"@emailjs/browser")

export const Contact = () => {
  const {theme} = useContext(ThemeContext);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_bgqmuf2', 'template_ovsuet7', form.current, 'I1ARv7okO2t6BnGBr')
      .then((result) => {
        alert('Successfully Sent');
          form.current.from_name.value=null;
          form.current.email_id.value=null;
          form.current.mobile_no.value=null;
          form.current.message.value=null;
          console.log(result.text);
      }, (error) => {
        alert('Something went wrong');
          console.log(error.text);
      });
  };
  return (
    <div id='contact'>
    <div className='contactDiv' style={theme?{backgroundColor: "#292929", color: '#fff'}: {backgroundColor: "#eee"}}>
      <div className='contactHeading'>
        <h1><span className='capitalC'>C</span>ontact Me</h1>
      </div>
        <div>
            <form action="" ref={form} onSubmit={sendEmail} className='contactForm' style={theme?{backgroundColor: 'black'}:{}}>
                <label  htmlFor="">Name<span className='redStar'>*</span></label><br />
                <input style={theme?{backgroundColor: 'black', color: '#fff'}: {}}type="text" required name="from_name"/><br />
                <label  htmlFor="">Email<span className='redStar'>*</span></label><br />
                <input style={theme?{backgroundColor: 'black', color: '#fff'}: {}}type="email" required name="email_id"/><br />
                <label  htmlFor="">Phone No.<span className='redStar'>*</span></label><br />
                <input style={theme?{backgroundColor: 'black', color: '#fff'}: {}}type="number" required name='mobile_no'/><br />
                <label  htmlFor="">Message<span className='redStar'>*</span></label><br />
                <textarea style={theme?{backgroundColor: 'black', color: '#fff'}: {}} name="message" id="" cols="15" rows="10" required ></textarea><br />
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
