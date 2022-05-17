import React, { useState } from 'react'
import HeroProperty from '../../components/heroproperty/HeroProperty'

import { houseData, prop2SliderData } from '../../helpers/index.js'

const Property1 = () => {

  const [data, setData] = useState(houseData[1])

  return (
    <div>
      
      
      Property2

      <HeroProperty 
      topimg={data.bgimage}
      sliderimages={prop2SliderData}
  
  
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

export default Property1