import React from 'react'

import BannerCommunity from '../BannerCommunity'
import topimg from '../../../assets/communities/cardiff.jpg'

import ComponentCommunityLocation from '../ComponentCommunityLocation'
import mainimg from '../../../assets/communities/cardiff.jpg'
import cardiff2 from '../../../assets/communities/cardiff2.jpg'
import cardiff3 from '../../../assets/communities/cardiff3.jpg'

function CardiffSea() {
  return (
    <div>
    <BannerCommunity 
      backgroundImage={topimg}
    />

    <ComponentCommunityLocation
      loctitle='Cardiff-by-the-sea'
      mainimg={mainimg}
      descimg1={cardiff2}
      descimg2={cardiff3}
      avgsqftprice="976"
      avgprice='1,751,500'
      highsale='5,025,000'
      salestodate='20'
      maintopdes='A beach community incorporated into the city of Encinitas, Cardiff is the home of laid-back sand and surf. This strip of coast is best identified through its various picturesque beaches. Cardiff State Beach, with its reefs and kelp beds, makes for excellent surfing and diving, while San Elijo State Beach offers oceanfront campground for an un-plugged getaway, and Pipes Beach hosts swimmers, sunbathers, and surfers alike.'
      mainmiddledes=''
      mainbotdes='Following a day in the San Diego sunshine, head to Cardiff’s “Restaurant Row,” located above the beach along Coast Highway 101, for refreshments at one of the local Italian trattorias or casual seafood joints.'

    />

    </div>
  )
}

export default CardiffSea