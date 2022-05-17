import React from 'react'

import BannerCommunity from '../BannerCommunity'
import topimg from '../../../assets/communities/carlsbad.jpg'

import ComponentCommunityLocation from '../ComponentCommunityLocation'
import mainimg from '../../../assets/communities/carlsbad.jpg'
import carlsbad2 from '../../../assets/communities/carlsbad2.jpg'
import carlsbad3 from '../../../assets/communities/carlsbad3.jpg'

function Carlsbad() {
  return (
    <div>
    <BannerCommunity 
      backgroundImage={topimg}
      />

    <ComponentCommunityLocation
      loctitle='Carlsbad'
      mainimg={mainimg}
      descimg1={carlsbad2}
      descimg2={carlsbad3}
      avgsqftprice="578"
      avgprice='1,184,167'
      highsale='4,200,000'
      salestodate='292'
      maintopdes='Carlsbad is an affluent seaside city occupying a 7-mile stretch of the Pacific coastline in northern San Diego County. Referred to as “The Village by the Sea” by locals, Carlsbad is a popular destination for hiking, biking, diving, surfing, birdwatching, rock hunting and more. Located right along the coast is the Carlsbad Village, where locals and visitors can enjoy unique shops, sidewalk cafes, and a variety of casual and fine dining.'
      mainmiddledes='Carlsbad is host to the best breweries and craft beer in the San Diego area with nine distinctive breweries located throughout. With an unrivaled selection of craft beers and relaxing ocean views, Carlsbad provides the perfect atmosphere for beer-lovers alike.'
      mainbotdes='Golf enthusiasts will be glad to know that Carlsbad is also the golf manufacturing capital of the world and is known as the “Titanium Valley,” with Callaway Golf Company, TaylorMade-Adidas Golf Company, Cobra Golf, Titleist, and Odyssey Golf all located in the area.'

      />
    </div>
  )
}

export default Carlsbad