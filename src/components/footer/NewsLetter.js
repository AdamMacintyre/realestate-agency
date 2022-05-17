import React from 'react'
import './newsletter.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt,  } from "@fortawesome/free-solid-svg-icons"


function NewsLetter() {
  return (
    <div className='newsletter__container'>
      <div className='newsletter__inner'>
        <h1>Get Real Time Inside Information</h1>
        <div className='newsletterForm__wrap'>
            <form>
                <input type="text"  placeholder='NAME' name='subject' />
                <input name="email" placeholder="EMAIL" type="email" />
            </form>
            <button type="submit">SUBMIT</button>
            <div className='contactWrap'>
                <a href="tel:+1.555.555.5555"><FontAwesomeIcon icon={faEnvelope} /><p> info@barryestates.com</p></a>
                <a href="tel:+1.555.555.5555"><FontAwesomeIcon icon={faPhone} /> <p>  858.756.4024</p></a>
                <a href="tel:+1.555.555.5555"><FontAwesomeIcon icon={faMapMarkerAlt} /><p>   6024 Paseo Delicias, Suite A, PO Box 2813<br/>  Rancho Santa Fe, CA 92067</p></a>

            </div>

        </div>
      </div>
    </div>
  )
}

export default NewsLetter