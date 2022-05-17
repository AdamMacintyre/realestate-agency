import React from 'react'
import './optionbox.scss'

import optionBuy from '../../assets/optionBuy.png'
import optionSell from '../../assets/optionSell.png'
import optionRent from '../../assets/optionRent.png'


const OptionBox = () => {
  return (
    <div className='optionBox__container'>

        <div className='optionBoxWrap'>
        <ul className='optionBoxList'>
   
   
        <li class="optionBoxListItem">
        <div className='optionBoxCard'>
            <div className='optionBoxCardInner'>

            <div className='optionCardImg'>
                 <img src={optionBuy} alt="buy a home"/>

            </div>

            <div className='optionCardInfo'>
                <h4>Buy a Home</h4>
                <p>Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.</p>
                <button>Search Homes</button>


            </div>
            </div>
        </div>
        </li>

        <li class="optionBoxListItem">
        <div className='optionBoxCard'>
            <div className='optionBoxCardInner'>

                <div className='optionCardImg'>
                     <img src={optionSell} alt="buy a home"/>

                </div>

                <div className='optionCardInfo'>
                    <h4>Sell a Home</h4>
                    <p>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                    <button>See Your Options</button>

                </div>
            </div>
        </div>
        </li>

        <li class="optionBoxListItem">
        <div className='optionBoxCard r'>
            <div className='optionBoxCardInner'>

                <div className='optionCardImg'>
                     <img src={optionRent} alt="buy a home"/>

                </div>

                <div className='optionCardInfo'>
                    <h4>Rent a Home</h4>
                    <p>We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.</p>
                    <button>Find Rentals</button>

                </div>
            </div>
        </div>
        </li>
   

        
        </ul>
        </div>
    </div>
  )
}

export default OptionBox