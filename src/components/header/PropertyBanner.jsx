import React from 'react'
import './propertybanner.scss'


const PropertyBanner = (props) => {
  return (
    <div className='property__banner' style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <div className='property__bannerInner'>

            
        </div>

    </div>
  )
}

export default PropertyBanner