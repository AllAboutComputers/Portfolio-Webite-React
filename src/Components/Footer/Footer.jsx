import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/LogoFinalPortfolio-removebg-preview.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footertop">
        
        <div className="footer-top-left">
          <p>Developer from Mumbai | B.Tech CSE Student | Building clean, functional code with purpose.</p>
        </div>

        <div className="footer-top-center">
          <img src={footer_logo} alt="Footer Logo" />
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your Email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          &copy;2025 Kunaal Solanki. All rights reserved
        </div>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
