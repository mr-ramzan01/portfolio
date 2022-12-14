import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import '../styles/Contact.modules.css'
import emailjs from '@emailjs/browser'

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
        <div className='formDiv'>
          <div>
            <div className='contact_details'>
              <div className='my_details'>
                <div>
                  <h2 style={{color: "#000000"}}>Get in touch</h2>
                </div>
                <div>
                  <div className='contact_icon_div'>
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div className='contact_text_div'>
                    <h6>Mobile No</h6>
                    <a href="tel: 9958949641"><p>9958949641</p></a>
                  </div>
                </div>
                <div>
                  <div className='contact_icon_div'>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className='contact_text_div'>
                    <h6>Address</h6>
                    <a href="https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5273522,77.2089851,11z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139391!4d77.2090212" target={'_blank'}><p>New Delhi, Delhi</p></a>
                  </div>
                </div>
                <div>
                  <div className='contact_icon_div'>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className='contact_text_div'>
                    <h6>Email</h6>
                    <a href="mailto: ramzanformasai03@gmail.com"><p>ramzanformasai03@gmail.com</p></a>
                  </div>
                </div>
                <div>
                  <div className='contact_icon_div'>
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div className='contact_text_div'>
                    <h6>Github</h6>
                    <a href="https://github.com/mr-ramzan01" target={'_blank'}><p>mr-ramzan01</p></a>
                  </div>
                </div>
                <div>
                  <div className='contact_icon_div'>
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                  <div className='contact_text_div'>
                    <h6>LinkedIn</h6>
                    <a href="https://www.linkedin.com/in/ramzan01/" target={'_blank'}><p>ramzan01</p></a>
                  </div>
                </div>
              </div>
            </div>
            <form action="" ref={form} onSubmit={sendEmail} className='contactForm' style={theme?{backgroundColor: 'black'}:{}}>
              <label  htmlFor="">Name<span className='redStar'>*</span></label><br />
              <input style={theme?{backgroundColor: 'black', color: '#fff'}: {}}type="text" required name="from_name"/><br />
              <label  htmlFor="">Email<span className='redStar'>*</span></label><br />
              <input style={theme?{backgroundColor: 'black', color: '#fff'}: {}}type="email" required name="email_id"/><br />
              <label  htmlFor="">Mobile No.<span className='redStar'>*</span></label><br />
              <input style={theme?{backgroundColor: 'black', color: '#fff'}: {}}type="number" required name='mobile_no' minLength={10} maxLength={10}/><br />
              <label  htmlFor="">Message<span className='redStar'>*</span></label><br />
              <textarea style={theme?{backgroundColor: 'black', color: '#fff'}: {}} name="message" id="" cols="15" rows="10" required ></textarea><br />
              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className='footer' style={theme?{backgroundColor: 'black'}: {}}>
        Designed and build from Scratch with ❤️ by Ramzan Khan
      </div>
    </div>
  )
}
