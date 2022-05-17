import React from 'react'

import BannerCommunity from '../BannerCommunity'
import topimg from '../../../assets/communities/delmar.jpg'

import ComponentCommunityLocation from '../ComponentCommunityLocation'
import mainimg from '../../../assets/communities/delmar.jpg'
import delmar2 from '../../../assets/communities/delmar2.jpg'
import delmar3 from '../../../assets/communities/delmar3.jpg'




function DelMar() {
  return (
    <div>DelMar
      <BannerCommunity 
      backgroundImage={topimg}
      />

<ComponentCommunityLocation
      loctitle='Del Mar'
      mainimg={mainimg}
      descimg1={delmar2}
      descimg2={delmar3}
      avgsqftprice="1,175"
      avgprice='2,239,000'
      highsale='18,900,000'
      salestodate='43'
      maintopdes='Home to the Del Mar Races and the San Diego County Fair, the beach city of Del Mar offers beautiful seafronts, luxury resorts, unique shops and renowned restaurants. Located just 20 miles north of San Diego on the Southern California coastline, Del Mar features more than 2 miles of beaches, including the notorious “Dog Beach” - perfect for your four-legged companions!'
      mainmiddledes='Additionally, residents and visitors can explore the delightful and quaint Del Mar Village without ever needing a car. The collection of unique, independent shops and services, upscale and casual restaurants and boutique hotels is accessible on foot or bicycle throughout the heart of the Village.'
      mainbotdes='Del Mar is also a popular spot for events throughout the year including concerts, tasting events, weekly Farmers Markets, and more! Families can enjoy food and fun with the yearly San Diego County Fair, while thousands of attendees flock to the Del Mar Racetrack to enjoy thoroughbred horse racing during the summer and fall seasons.'
      
      
      />


    </div>
  )
}

export default DelMar