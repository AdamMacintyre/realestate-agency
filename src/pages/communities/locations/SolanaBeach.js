import React from 'react'


import BannerCommunity from '../BannerCommunity'
import topimg from '../../../assets/communities/solana.jpg'

import ComponentCommunityLocation from '../ComponentCommunityLocation'
import mainimg from '../../../assets/communities/solana.jpg'
import solana2 from '../../../assets/communities/solana2.jpg'
import solana3 from '../../../assets/communities/solana3.jpg'

function SolanaBeach() {
  return (
    <div>
    <BannerCommunity 
      backgroundImage={topimg}
      />

    <ComponentCommunityLocation
      loctitle='Solana Beach'
      mainimg={mainimg}
      descimg1={solana2}
      descimg2={solana3}
      avgsqftprice="1,028"
      avgprice='1,645,000'
      highsale='9,425,000'
      salestodate='36'
      maintopdes='With just 12,000 residents, the charming, seaside community of Solana Beach is the ideal destination  for those looking to enjoy beach-front living, eclectic shopping, and exceptional dining and nightlife.'
      mainmiddledes='Nestled along the northern coast of San Diego County, Solana Beach offers 1.7 miles of coastline where residents and visitors can surf, swim, and explore the wondrous caves. Popular beach destinations include Seaside, Tide Beach, and Fletcher Cove.'
      mainbotdes='The Cedros Design District is also a popular attraction consisting of more than 85 art galleries, antique stores, boutiques, and cafes. The Design District is also home to the Solana Beach Farmers Market and the prominent live music venue, Belly Up, operating since 1974.'

      />
    </div>
  )
}

export default SolanaBeach