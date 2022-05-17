import React from 'react'
import './meetteam.scss'

import team from '../../assets/team.jpg'

console.log(team)

const MeetTheTeam = () => {

  
  return (
    <div className='meetTeam__container'> 

      <div className='meetTeamInner'>
      
        <div className='teamImg__container'>
          <img src={team} alt="team" />
          </div>
    
          <div className='teamAbout__container'>
            <div className='teamAboutInner'>
            <div>
              <h1><span>MEET</span>THE TEAM</h1>
              <p className='teamAboutShownText'>With nearly $5 billion in sales, the Real Estate Team has developed a global reputation as the top luxury real estate agents for San Diego’s luxury marketplace. Due to their expertise in the luxury real estate market and their integrity, loyalty and professionalism, the team has been sought out by the most successful business leaders. The Real Estate Team has facilitated some of the most expensive homes to have sold in San Diego's luxury communities. To achieve this requires unyielding tenacity for creativity and thoughtful consideration in all matters that results in successful sales transactions and happy clients whom become friends. The Real Estate Team is known for always being so proud to push San Diego as a city they are blessed to call home. “Here we have the best weather, cleanest air, great schools, safe communities, wonderful food, shopping and entertainment in a relaxed setting that makes life truly enjoyable."
              </p>
              <p className='teamAboutHiddenText'>
              With nearly $5 billion in sales, the Real Estate Team has developed a global reputation as the top luxury real estate agents for San Diego’s luxury marketplace.
              </p>
            </div>
    
          </div>
        </div>
    
      </div>
    </div>
  )
}

export default MeetTheTeam