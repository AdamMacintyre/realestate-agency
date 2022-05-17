import React from 'react'

import BannerCommunity from '../BannerCommunity'
import topimg from '../../../assets/communities/lajolla.jpg'

import ComponentCommunityLocation from '../ComponentCommunityLocation'
import mainimg from '../../../assets/communities/lajolla.jpg'
import lajolla2 from '../../../assets/communities/lajolla2.jpg'
import lajolla3 from '../../../assets/communities/lajolla3.jpg'


function LaJolla() {
  return (
    <div>
      <BannerCommunity 
      backgroundImage={topimg}
      />

    <ComponentCommunityLocation
      loctitle='La Jolla'
      mainimg={mainimg}
      descimg1={lajolla2}
      descimg2={lajolla3}
      avgsqftprice="961"
      avgprice='1,763,333'
      highsale='21,800,000'
      salestodate='160'
      maintopdes='Known as “The Jewel” of San Diego, La Jolla is the hub of San Diego’s finest beaches, decadent dining, and upscale boutiques. Ideally situated on a seven-mile stretch along the coast, La Jolla is consistently voted one of the top beach destinations in the world, with multiple scenic locations such as La Jolla Shores, La Jolla Cove, and Windansea. Here, locals and visitors can enjoy a number of recreational activities such as swimming, surfing, snorkeling, kayaking, and even seal and whale watching!'
      mainmiddledes='Another popular attraction is Downtown La Jolla, which includes upscale shopping and dining districts such as Prospect Street and Girard Avenue. The pedestrian-friendly area also boasts several art galleries and luxury hotels.'
      mainbotdes='Residents and visitors alike can enjoy the famous Torrey Pines Golf Course, as well as The Lodge at Torrey Pines, where the scenic cliff area offers well-groomed hiking trails with spectacular views and world-class golf. At Torrey Pines Gliderport, you can soar out over the beach cliffs on a hang glider or just relax and watch the action above.'
      
      
      />
      
      
      
      
    </div>
  )
}

export default LaJolla