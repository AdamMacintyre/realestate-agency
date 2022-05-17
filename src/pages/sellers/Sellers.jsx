import React from 'react'

import './seller.scss'

import si1 from '../../assets/si1.jpg'
import si3 from '../../assets/si3.jpg'
import team from '../../assets/team.jpg'

import TopBanner from '../../components/header/TopBanner'
import topimg from '../../assets/sellersbg.jpg'

const Sellers = () => {
  return (
    <div className='sellers__container'>
    <TopBanner 
    backgroundImage={topimg} alt="topimg"
   />
    <div className='sellers__inner'>
        
      
        <div className='sellersTitle__wrap'>
            <h1><span>sellers</span></h1>
            <p>
            Our unified goal is clear:
            to achieve the highest possible price in the shortest duration of time 
            </p>
            <span className='spanline'></span>
        </div>

        <h2 className='sellersContentTitle'>Your Advantage</h2>
        
        <div className='sellersContent__wrap'>
            
            <div className='sellersItem'> 
                <div className='sellersItem__img'><img src={si1} alt="global connections"/></div>

                <div className='sellersItem__info'>
                    <h2>We are locals with global connections</h2>
                    <p>We pride ourselves on our first hand knowledge of San Diego real estate, which dates back over 30 years. Our extensive understanding of homes both currently for sale and previously sold allows us to have healthy discussions with agents and buyers to identify and promote our clients’ interests. Being in sync with the market is key in our ability to put the most advantageous sales approach to work, which includes accessing our vast global network for maximum exposure. We have gone to great lengths to develop meaningful partnerships with top producers and brands in the luxury space domestically and internationally and collaborate to the benefit of our clients, which ultimately yields superior results.</p>
                  
                </div>
            </div>

            <span className='spanline'></span>

            <div className='sellersItem reverse'> 
                
            <div className='sellersItem__info'>
                    <h2>Strategic Exposure</h2>
                    <p>In addition to our own book of business, we know where every buyer comes from. This allows us to tailor our marketing to the most precise locations to cast a wide net to capture all buyers. We spend more marketing dollars than any other agent or team because we are committed to maximum exposure, which results in a greater probability of higher and faster sales.  </p>
                </div>
                <div className='sellersItem__img'><img src={si3} alt="strategic exposure"/></div>
            </div>

            <span className='spanline'></span>

            <div className='sellersItem'> 
                <div className='sellersItem__img'><img src={team} alt="buyer network" /></div>
                <div className='sellersItem__info'>
                    <h2>Buyer Network</h2>
                    <p>Because we sell more than any other agent or team in San Diego county, with nearly $5 Billion in sales, we have unparalleled access to a qualified and engaged buyer network. This gives our clients a distinct advantage and is a key reason we are consistently sought out by our city’s most discerning families and titans of industry.</p>
                </div>
            </div>
            
        </div>



    </div>
    </div>
  )
}

export default Sellers