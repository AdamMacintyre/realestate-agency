import React from 'react'

import BannerCommunity from '../BannerCommunity'
import topimg from '../../../assets/communities/encinitas.jpg'

import ComponentCommunityLocation from '../ComponentCommunityLocation'
import mainimg from '../../../assets/communities/encinitas.jpg'
import encinitas2 from '../../../assets/communities/encinitas2.jpg'
import encinitas3 from '../../../assets/communities/encinitas3.jpg'

function Encinitas() {
  return (
    <div>
    <BannerCommunity 
      backgroundImage={topimg}
      />

    <ComponentCommunityLocation
      loctitle='Encinitas'
      mainimg={mainimg}
      descimg1={encinitas2}
      descimg2={encinitas3}
      avgsqftprice="845"
      avgprice='1,560,067'
      highsale='10,300,000'
      salestodate='136'
      maintopdes='Located 25 miles north of downtown San Diego, this oceanfront town is known for its amenities of both land and sea. Not only is Encinitas acclaimed for its surfing conditions, it also boasts 2 serene lagoons on its north and south sides, altogether making for quite the nature-lovers’ haven.'
      mainmiddledes=''
      mainbotdes='Encinitas is made up of 5 sub-communities: Leucadia, Cardiff-by-the-Sea, Olivenhain, Old Encinitas, and New Encinitas, each with their own distinct character. In all, Encinitas has preserved its historic coastal charm, while remaining economically and socially vibrant. Beyond the beach, don’t miss its local art galleries, boutiques and eateries, and the landmark La Paloma Theater nearing 100 years in operation.'

      />
    </div>
  )
}

export default Encinitas