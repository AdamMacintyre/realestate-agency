import React from 'react'

import ComponentCommunityLocation from '../ComponentCommunityLocation'
import BannerCommunity from '../BannerCommunity'
import topimg from '../../../assets/communities/rancho.jpg'

import mainimg from '../../../assets/communities/rancho.jpg'
import rancho2 from '../../../assets/communities/rancho2.jpg'
import rancho3 from '../../../assets/communities/rancho3.jpg'


function RanchoSantaFe() {
  return (
    <div>
      <BannerCommunity 
      backgroundImage={topimg}
      />

      <ComponentCommunityLocation
      loctitle='RANCHO SANTA FE'
      mainimg={mainimg}
      descimg1={rancho2}
      descimg2={rancho3}
      avgsqftprice="705"
      avgprice='3,501,333'
      highsale='17,000,00'
      salestodate='65'
      maintopdes='Extending over 6,200 acres of rolling hills, citrus orchards, and eucalyptus trees, the historic city of Rancho Santa Fe offers a variety of extravagant luxury homes and private estates, along with a host of exclusive gated communities that offer resort-like amenities and private events for its members and residents.'
      mainbotdes='At the heart of the community is the historic Inn at Rancho Santa Fe and the acclaimed Rancho Santa Fe Golf Club featuring the Max Behr-designed 6,700-yard par-72 private course exclusive to residents of the Covenant. The Covenant refers to the original planned community of Rancho Santa Fe. Residents and visitors can also enjoy the Village of Rancho Santa Fe that offers a host of upscale shopping, fine dining, galleries and town offices or hiking, running, and horseback riding with an extensive network of nearly 60 miles of equestrian and pedestrian trails that run throughout the community.'
      
      
      />
    </div>
  )
}

export default RanchoSantaFe