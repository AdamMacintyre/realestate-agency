import React, { useState } from 'react'
import HeroProperty from '../../components/heroproperty/HeroProperty'

import { houseData, prop3SliderData } from '../../helpers/index.js'


const Property2 = () => {

  const [data, setData] = useState(houseData[2])

  return (
    <div>
        <HeroProperty 
        topimg={data.bgimage}
        sliderimages={prop3SliderData}
    
    
        addresstop={data.addresstop}
        addressbot={data.addressbot}
       
        price={data.price}
        bed={data.bed}
        bath={data.bath}
        sqft={data.sqft}
    
        propdesc={data.propdesc}
        propDescHidden={data.propDescHidden}
        listing={data.listing}
        />

    </div>
  )
}

export default Property2