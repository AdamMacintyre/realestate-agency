import React, { useState } from 'react'
import HeroProperty from '../../components/heroproperty/HeroProperty'

import { houseData, prop4SliderData } from '../../helpers/index.js'

function Property4() {
  const [data, setData] = useState(houseData[4])
  return (
    <div>
        <HeroProperty 
        topimg={data.bgimage}
        sliderimages={prop4SliderData}
    
    
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

export default Property4