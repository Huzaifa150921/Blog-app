import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <div className="contact-page">
        <div className="contant-of-page">
          <div className="form-card">
          <h1>Contact Us</h1>
            <div className="cards">
           
            <div className="form-card-right">

              <h3>Leave Us a Message</h3>
              
<input type="text" placeholder='Name' id='Name' />
<input type="email" placeholder='Email'  />
<textarea name="txt" id="text" placeholder='Your Message'></textarea>

           <button>Send</button>
              </div>
            
            <div className="form-card-lft">
              <div className="lft-top">
                <p>Weekend UX
                B 37/3 Ground Floor Double StoryRamesh Nagar , Near Raja Garden Chowk.Delhi: 110015</p>
                <p>+91 9599272754
                </p>
                <p>hello@info.com.ng</p>

              </div>
              <div className="icons">
                <img src="./src/assets/Facebook.png" alt="" />
                <img src="./src/assets/Instagram.png" alt="" />
                <img src="./src/assets/Twitter.png" alt="" />
                <img src="./src/assets/Youtube.png" alt="" />
              </div>
              <div className="b-map">
                <img src="./src/assets/Rectangle 19.png" alt="" />
              </div>
            </div>

          </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
