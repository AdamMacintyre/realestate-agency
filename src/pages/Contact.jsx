import React from 'react'
import './contact.scss'
import topimg from '../assets/team.jpg'

const Contact = () => {
  return (
    <div className='contact__container'>
      <img src={topimg} />
        
        <div className='contactTemplate__container'>
         
        <div className='ct__inner'>
       
            <h2>HAVE A QUESTION</h2>


            <div className='ct__formWrap'>
                <form>
                <p>Get in Touch.</p>
                    <div className='ctForm__input'>
                        <div className='ctForm__inputItems'>
                            <input type="text" name="first-name" size="40" aria-required="true" aria-invalid="false" placeholder='First Name*'></input>
                            <input type="text" name="last-name" size="40" aria-required="true" aria-invalid="false" placeholder='Last Name*'></input>
                        
                        </div>

                        <div className='ctForm__inputItems'>
                            <input type="email" name="email" value="" placeholder="Email Address*" size="40" aria-required="true" aria-invalid="false" />
                            <input type="tel" name="phone" value="" placeholder="Phone Number*" size="40" aria-required="true" aria-invalid="false" />
                        </div>

                 

                        <div className='ctForm__inputItems'>
                        <textarea name="message" cols="40" rows="10"  aria-invalid="false" placeholder="Your Message" />
                      
                        
                        </div>

                        
                    </div>
                    <input type="submit"></input>
                </form>
            </div>


        </div>



    </div>


    </div>
  )
}

export default Contact