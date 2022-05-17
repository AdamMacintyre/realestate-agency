import React from 'react'
import BackgroundCarousel from '../components/backgroundCarousel/BackgroundCarousel'

import {FeaturedPropertys, MeetTheTeam, ProvenPerformance, OptionBox } from '../helpers/importerPage'

const Home = () => {
 
  return (
    <div className=''>
      <section>
        <BackgroundCarousel />
      </section>

        <FeaturedPropertys />
        <ProvenPerformance />
        <OptionBox />
        <MeetTheTeam />
       
     


    </div>
  )
}

export default Home