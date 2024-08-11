import React from 'react'
import "./Footer.css"
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content page-padding">
          <div className="foot-left">
<h3>About</h3>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Tempora quos illo cupiditate itaque! Expedita dolori</p>

<div className="left-p">
<p ><span><b>Email:</b></span> info@gmail.com</p>
<p ><span><b>Phone:</b></span> 0123456789</p>
</div>

          </div>
          <div className="foot-center">

<div className="center-lists">
  <h3>Quick Link</h3>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Archived</li>
    <li>Author</li>
    <li>Blog</li>
    <li>Contact</li>
  </ul>
</div>
<div className="center-lists">
  <h3>Category</h3>
  <ul>
    <li>Lifestyle</li>
    <li>Technology</li>
    <li>Travel</li>
    <li>Business</li>
    <li>Economy</li>
    <li>Sports</li>
  </ul>
</div>

          </div>
          <div className="foot-card">
<h3>Weekly Newsletter</h3>
<p>Get blog articles and offers via email</p>
<div className="card-inp">
  <input type="Email" placeholder='Email'  />
  <MdOutlineEmail size={25} />
</div>
<button className='subs'>Subscribe </button>
          </div>
         
        </div>
        <div className="foot-end page-padding ">
          <div className="foot-end-con">
            <img src="./src/assets/Copyright Info.png" alt="logo-footer-page-1" />
            <div className="e-p">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            </div>
            </div>

          </div>
      </div>
    </>
  )
}

export default Footer
