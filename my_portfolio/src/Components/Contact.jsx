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
      <div className='contactDiv' style={theme?{background: 'rgb(44,58,71)', background: 'linear-gradient(0deg, rgba(44,58,71,1) 0%, rgba(30,39,46,1) 100%)', color: '#fff'}: {backgroundColor: "#eee"}}>
        <div className='wrapper'>
          {theme && <div className='snow'></div>}
          <div className='contactHeading'>
            <h1><span className='capitalC'>C</span>ontact Me</h1>
          </div>
          <div style={theme? {boxShadow: '#fff 0px 2px 8px 0px'}: {boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} className='formDiv'>
            <div>
              <div className='contact_details'>
                <div className='my_details'>
                  <div data-aos="fade-right" data-aos-delay='2000' data-aos-duration='1000'>
                    <h2 style={{color: "#000000"}}>Get in touch</h2>
                  </div>
                  <div>
                    <div data-aos="fade-right" data-aos-delay='500' data-aos-duration='1000' className='contact_icon_div'>
                      <i style={theme?{color: '#2f4356'}:{color: '#6a6a6a'}} className="fa-solid fa-phone"></i>
                    </div>
                    <div data-aos="fade-left" data-aos-delay='500' data-aos-duration='1000' className='contact_text_div'>
                      <h6 style={{color: '#000000'}}>Mobile No</h6>
                      <a href="tel: 9958949641"><p>9958949641</p></a>
                    </div>
                  </div>
                  <div>
                    <div data-aos="fade-right" data-aos-delay='500' data-aos-duration='1000' className='contact_icon_div'>
                      <i style={theme?{color: '#2f4356'}:{color: '#6a6a6a'}} className="fa-solid fa-location-dot"></i>
                    </div>
                    <div data-aos="fade-left" data-aos-delay='500' data-aos-duration='1000' className='contact_text_div'>
                      <h6 style={{color: '#000000'}}>Address</h6>
                      <a href="https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5273522,77.2089851,11z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139391!4d77.2090212" target={'_blank'}><p>New Delhi, Delhi</p></a>
                    </div>
                  </div>
                  <div>
                    <div data-aos="fade-right" data-aos-delay='500' data-aos-duration='1000' className='contact_icon_div'>
                      <i style={theme?{color: '#2f4356'}:{color: '#6a6a6a'}} className="fa-solid fa-envelope"></i>
                    </div>
                    <div data-aos="fade-left" data-aos-delay='500' data-aos-duration='1000' className='contact_text_div'>
                      <h6 style={{color: '#000000'}}>Email</h6>
                      <a href="mailto: ramzanformasai03@gmail.com"><p>ramzanformasai03@gmail.com</p></a>
                    </div>
                  </div>
                  <div>
                    <div data-aos="fade-right" data-aos-delay='500' data-aos-duration='1000' className='contact_icon_div'>
                      <i style={theme?{color: '#2f4356'}:{color: '#6a6a6a'}} className="fa-brands fa-github"></i>
                    </div>
                    <div data-aos="fade-left" data-aos-delay='500' data-aos-duration='1000' className='contact_text_div'>
                      <h6 style={{color: '#000000'}}>Github</h6>
                      <a href="https://github.com/mr-ramzan01" target={'_blank'}><p>mr-ramzan01</p></a>
                    </div>
                  </div>
                  <div>
                    <div data-aos="fade-right" data-aos-delay='500' data-aos-duration='1000' className='contact_icon_div'>
                      <i style={theme?{color: '#2f4356'}:{color: '#6a6a6a'}} className="fa-brands fa-linkedin"></i>
                    </div>
                    <div data-aos="fade-left" data-aos-delay='500' data-aos-duration='1000' className='contact_text_div'>
                      <h6 style={{color: '#000000'}}>LinkedIn</h6>
                      <a href="https://www.linkedin.com/in/ramzan01/" target={'_blank'}><p>ramzan01</p></a>
                    </div>
                  </div>
                </div>
              </div>
              <form  action="" ref={form} onSubmit={sendEmail} className='contactForm' style={theme?{backgroundColor: '#1e272e'}:{}}>
                <label data-aos="zoom-in" data-aos-delay='500' data-aos-duration='1000' htmlFor="">Name<span className='redStar'>*</span></label><br />
                <input data-aos="fade-left" data-aos-delay='500' data-aos-duration='1000' style={theme?{backgroundColor: '#1e272e', color: '#fff', border: '1px solid #fff', borderRadius: '3px'}: {}}type="text" required name="from_name"/><br />
                <label data-aos="zoom-in" data-aos-delay='500' data-aos-duration='1000' htmlFor="">Email<span className='redStar'>*</span></label><br />
                <input data-aos="fade-left" data-aos-delay='500' data-aos-duration='1000' style={theme?{backgroundColor: '#1e272e', color: '#fff', border: '1px solid #fff', borderRadius: '3px'}: {}}type="email" required name="email_id"/><br />
                <label data-aos="zoom-in" data-aos-delay='500' data-aos-duration='1000' htmlFor="">Mobile No.<span className='redStar'>*</span></label><br />
                <input data-aos="fade-left" data-aos-delay='500' data-aos-duration='1000' style={theme?{backgroundColor: '#1e272e', color: '#fff', border: '1px solid #fff', borderRadius: '3px'}: {}}type="number" required name='mobile_no' minLength={10} maxLength={10}/><br />
                <label data-aos="zoom-in" data-aos-delay='500' data-aos-duration='1000' htmlFor="">Message<span className='redStar'>*</span></label><br />
                <textarea data-aos="fade-left" data-aos-delay='500' data-aos-duration='1000' style={theme?{backgroundColor: '#1e272e', color: '#fff', border: '1px solid #fff', borderRadius: '3px'}: {}} name="message" id="" cols="15" rows="10" required ></textarea><br />
                <button style={theme?{background: '#2c3a47'}:{background: '#6a6a6a'}} data-aos="fade-left" data-aos-delay='500' data-aos-duration='1000' className="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='footer' style={theme?{backgroundColor: '#1e272e'}: {}}>
        Designed and build from Scratch with ❤️ by Ramzan Khan | © 2022 All rights reserved
      </div>
    </div>
  )
}
