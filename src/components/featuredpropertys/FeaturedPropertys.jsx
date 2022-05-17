import React from 'react'
import { Link } from 'react-router-dom';

import CardFeaturedPropertys from './CardFeaturedPropertys'
import './fp.scss'

import {houseData} from '../../helpers/index'



const FeaturedPropertys = () => {

  

  return (
    <div className='fp__container'>
      <div className='fp__inner'>
      
        <div className='fpTitleWrap'>
        <h1><span>featured</span>properties</h1>
        <Link to="/listings"><button>view all</button></Link>
        </div>

        <div className='fp__cardContainer'>
          <div className='fp__cardWrap'>

          {houseData.filter((itemzzz, id) => id < 4 ).map((item) => {
            return(
           <CardFeaturedPropertys
           bgimage={item.bgimage}
           title={item.title}
           price={item.price}
           addresstop={item.addresstop}
           addrssbot={item.addressbot}
           bedrooms={item.bedrooms}
           bath={item.bath}
           sqft={item.sqft}
           garage={item.garage}
           details={item.details}
           neighborhood={item.neighborhood}
           listing={item.listing}
           link={item.to}
            />
            );
          })} 


        
           
    
    
    
    
    
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPropertys