import React, { useState } from 'react'
import './contacttemplate.scss'

const ContactTemplate = ({title, avail, otheravail}) => {

    const [ enteredDate, setEnteredDate ] = useState('');

    const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enterDate: event.target.value
		// });
	};


  return (
    <div className='contactTemplate__container'>
        <div className='ct__inner'>
        {/* <button className='formClose'>
        <svg width="23" height="23" veiwBox="0 0 23 23">
                    <path d="M 3 16.5 L 17 2.5" stroke="hsl(268, 100%, 37.6%)" />
                    <path d="M 3 2.5 L 17 16.346" stroke="hsl(268, 100%, 37.6%)" />
        </svg>
        </button> */}
            <h2>{title}</h2>


            <div className='ct__formWrap'>
                <form>
                <p>Tell us how to reach you and we'll get back in touch.</p>
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
                            <div>
                                <label>{avail}</label>
                                <input
						           type="date"
						           min="2019-01-01"
						           max="2022-12-31"
						           value={enteredDate}
						           onChange={dateChangeHandler}
					            />
                            </div>
                            <div>
                                <label>{otheravail}</label>
                                <input
						           type="date"
						           min="2019-01-01"
						           max="2022-12-31"
						           value={enteredDate}
						           onChange={dateChangeHandler}
					            />
                            </div>


                        
                          

                        </div>

                        <div className='ctForm__inputItems'>
                        <textarea name="message" cols="40" rows="10"  aria-invalid="false" placeholder="Your Message" />
                      
                        
                        </div>

                        
                    </div>
                    <input type="submit" />
                </form>
            </div>


        </div>



    </div>
  )
}

export default ContactTemplate