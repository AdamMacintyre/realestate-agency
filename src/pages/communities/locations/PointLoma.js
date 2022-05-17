import React from 'react'

import BannerCommunity from '../BannerCommunity'
import topimg from '../../../assets/communities/loma.jpg'

import ComponentCommunityLocation from '../ComponentCommunityLocation'
import mainimg from '../../../assets/communities/loma.jpg'
import loma2 from '../../../assets/communities/loma2.jpg'
import loma3 from '../../../assets/communities/loma3.jpg'

function PointLoma() {
  return (
    <div>
    <BannerCommunity 
      backgroundImage={topimg}
      />

    <ComponentCommunityLocation
      loctitle='Point Loma'
      mainimg={mainimg}
      descimg1={loma2}
      descimg2={loma3}
      avgsqftprice="846"
      avgprice='1,575,000'
      highsale='3,595,000'
      salestodate='3'
      maintopdes='Feel the ocean breeze and take in the rich history from “where California began.” The hilly peninsula of Point Loma offers panoramic views of downtown San Diego, the bay, the pacific coastline, and even some whales too!'
      mainmiddledes=''
      mainbotdes='Famed locations include the Old Point Loma Lighthouse, built in 1854, and Sunset Cliffs Park, a seaside stretch of stunning golden rock formations. Inland, the cultural hub of Point Loma resides at Liberty Station: a former Naval Training Center turned arts district with shops, restaurants, and community events. Living in Point Loma offers easy access to nearby downtown San Diego and the San Diego International Airport.'

      />
    </div>
  )
}

export default PointLoma