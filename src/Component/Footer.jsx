import React from 'react'
import './Footer.css'
import {FaInstagram, FaGoogle, FaTwitter, FaTelegram, FaGithub, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div >
      <div className='footer'>
        <div className='footer-icons' >
          <ul>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaGoogle/></li>
            <li><FaTwitter/></li>
            <li><FaTelegram/></li>
            <li><FaGithub/></li>
          </ul>
        </div>
        <div className='footer-list' >
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-copyright'>
          <p>Copyright <span>&copy;</span> 2023 | durgamrakesh11@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer