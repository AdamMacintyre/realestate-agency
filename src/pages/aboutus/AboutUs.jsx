import React from 'react'
import TopBanner from '../../components/header/TopBanner'
import './aboutus.scss'
import AgentCard from './AgentCard'

import topimg from '../../assets/team.jpg'

const AboutUs = () => {


  return (
    <div className='aboutus__container'>
      <TopBanner
      backgroundImage={topimg}
      />
     
      <div><h1>Ranked #1 Team </h1></div>
      <h2><span>SALES</span>VOLUME</h2>

     

      <div className='agent__container'>
        <h2><span>OUR</span>TEAM</h2>
        <AgentCard />





      </div>

      
    </div>
  )
}

export default AboutUs