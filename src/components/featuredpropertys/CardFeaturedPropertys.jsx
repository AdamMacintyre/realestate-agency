import React from 'react'
import { Link } from 'react-router-dom';
import './cardfp.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faExpand, faBath, faWarehouse } from "@fortawesome/free-solid-svg-icons"


const CardFeaturedPropertys = ({bgimage, title, price, addresstop, addressbot, bedrooms, 
  bath, sqft, garage, details, link}) => {


  return (


    <div className='card__fpContainer'>
      <Link className="card__fpContainerLink" to={link}>
          <img src={bgimage} alt={title} />

            <div className='card__fpWrap'>
              <p>$ {price}</p>
              <p>{addresstop}</p>
              <p>{addressbot}</p>
              <span> 
                <FontAwesomeIcon icon={faHome} className="bedrooms" />
                <p>{bedrooms}</p>
              </span>
              <span> 
                <FontAwesomeIcon icon={faBath} className="bath" />
                <p>{bath}</p>
              </span>
              <span> 
                <FontAwesomeIcon icon={faExpand} className="sqft" />
                <p>{sqft}</p>
              </span>
              <span> 
                <FontAwesomeIcon icon={faWarehouse} className="garage" />
                <p>{garage}</p>
              </span>
              <h2><span></span>View Details</h2> 
            </div>


          <div className='card__fpHoverWrap'>
            <p>$ {price}</p>
            <p>{addresstop}</p>
            <p>{addressbot}</p>
              <span> 
                  <FontAwesomeIcon icon={faHome} className="bedrooms" />
                  <p>{bedrooms}</p>
              </span>
              <span> 
                  <FontAwesomeIcon icon={faBath} className="bath" />
                  <p>{bath}</p>
              </span>
              <span> 
                  <FontAwesomeIcon icon={faExpand} className="sqft" />
                  <p>{sqft}</p>
              </span>
              <span> 
                  <FontAwesomeIcon icon={faWarehouse} className="garage" />
                  <p>{garage}</p>
              </span>
              <h3>{details}</h3>

              <h2><span></span>View Details</h2> 
          </div>

          </Link>
    </div>



 
  )
}

export default CardFeaturedPropertys 