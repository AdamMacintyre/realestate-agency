import React from 'react'

import BannerCommunity from '../BannerCommunity'
import topimg from '../../../assets/communities/carmel.jpg'

import ComponentCommunityLocation from '../ComponentCommunityLocation'
import mainimg from '../../../assets/communities/carmel.jpg'
import carmel2 from '../../../assets/communities/carmel2.jpg'
import carmel3 from '../../../assets/communities/carmel3.jpg'

function CarmelValley() {
  return (
    <div>
    <BannerCommunity 
      backgroundImage={topimg}
      />

    <ComponentCommunityLocation
      loctitle='Carmel Valley'
      mainimg={mainimg}
      descimg1={carmel2}
      descimg2={carmel3}
      avgsqftprice="670"
      avgprice='1,623,500'
      highsale='6,400,000'
      salestodate='120'
      maintopdes='Centrally located in the heart of San Diego County, Carmel Valley offers valuable convenience for wherever you are heading - minutes to the coast, shopping centers, professional offices, and access to San Diego’s major highways. '
      mainmiddledes='The community is well-known for its fantastic public schools, and boasts landmarks such as the resort-style Bay Club activity center, the famed Fairmont Grand Hotel & Golf Course, and the Los Peñasquitos Canyon Preserve, one of the largest urban parks in the U.S.'
      mainbotdes='Carmel Valley offers a range of housing options, from condos and townhomes, to varied single family residences, and the elite guarded community of Rancho Pacifica.'

      />
    </div>
  )
}

export default CarmelValley