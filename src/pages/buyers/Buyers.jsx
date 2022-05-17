import React from 'react'
import './buyers.scss'
import bi1 from '../../assets/bi1.jpg'
import bi2 from '../../assets/bi2.jpg'
import team from '../../assets/team.jpg'


import TopBanner from '../../components/header/TopBanner'
import topimg from '../../assets/buyersbg.jpg'


const Buyers = () => {
  return (
    <div className='buyers__container'>
    <TopBanner 
    backgroundImage={topimg}
   />
    <div className='buyers__inner'>
        
      
        <div className='buyersTitle__wrap'>
            <h1><span>buyers</span></h1>
            <p>
                First and foremost, we protect our clients and help them make the best investment decisions for their specific needs
            </p>
            <span className='spanline'></span>
        </div>

        <h2 className='buyersContentTitle'>Your Advantage</h2>
        
        <div className='buyersContent__wrap'>
            
            <div className='buyersItem'> 
                <div className='buyersItem__img'><img src={bi1} /></div>

                <div className='buyersItem__info'>
                    <h2>We Are Locals</h2>
                    <p>Information is critical to successfully negotiate multi-million dollar estates. With over 30 years of experience in San Diego, our collective knowledge is vast. We know the history of our town’s premier luxury estates and have decades of successful transaction history in the most sought after custom communities. Our buyers benefit from this collection of insight coupled with our acute understanding of the influences behind local market conditions. Not only have we worked here, we have grown up and gone on to raise our families in the local communities of Rancho Santa Fe, Del Mar, and La Jolla, which gives our clients a tremendous advantage. </p>
                  
                </div>
            </div>

            <span className='spanline'></span>

            <div className='buyersItem reverse'> 
                
            <div className='buyersItem__info'>
                    <h2>Our Advantage is Your Advantage</h2>
                    <p>We have access to more off-market opportunities, pocket listings, and inside information than any other agent or team. Our background allows us to offer invaluable data as to why certain communities sell for premiums and why locals prefer other areas, and ultimately align our buyers with the best possible scenario. Our advantage saves you time and protects your interests. </p>
                </div>
                <div className='buyersItem__img'><img src={bi2} /></div>
            </div>

            <span className='spanline'></span>

            <div className='buyersItem'> 
                <div className='buyersItem__img'><img src={team} /></div>
                <div className='buyersItem__info'>
                    <h2>#1 For A Reason</h2>
                    <p>Having sold more than any other agent or team in all of San Diego, we have access to the most comprehensive intel that we leverage to directly benefit our clients. The result is our buyers finding the most ideal home for the best value. </p>
                </div>
            </div>
            
        </div>



    </div>
    </div>
  )
}

export default Buyers