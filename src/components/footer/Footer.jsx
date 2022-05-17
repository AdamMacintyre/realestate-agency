import React from 'react'

import './footer.scss'
import NewsLetter from './NewsLetter'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo5713a0.png'

const Footer = () => {
  return (
    <div className='footer__container'>
        <NewsLetter />

        <div className='footer__main'>
            <img src={logo} alt="real estate logo" />
            <h1>The Real Estate Team</h1>

            <ul className='footer__links'>
            <li><Link to='/listings'>properties</Link></li>
            <li><Link to='/buyers'>buyers</Link></li>
            <li><Link to='/sellers'>sellers</Link></li>
           
            <li><Link to='/aboutus'>about us</Link></li>
            <li><Link to='/contact'>contact</Link></li>
            </ul>


        </div>
        <div className='certWrap'>
          <h3> Copyright © 2022. Real Estate Team. All Rights Reserved. <Link to='/sitemap'>Site Map</Link>. Real Estate Website Design by<a href='https://adammacintyre.com'> <span>Adam Macintyre</span></a></h3>


        </div>

    </div>
  )
}

export default Footer