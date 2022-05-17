import React from 'react'
import agent1 from '../../assets/agent1.jpg'
import './agentcard.scss'


const AgentCard = () => {
  return (
    
    <div className='agentBox'>
    <div className='agentImg'>
      <img src={agent1} />
    </div>

    <div className='agentInfo'>
      <h1>JASON BARRY</h1>
      <p>PARTNER</p>
      <div className='agentContact'>
        <div><span>Phone:</span>858.243.0710</div>
        <div><span>Email:</span>jason@barryestates.com</div>
        <div><span>CA DRE:</span> #01147550 </div>
        
      </div>


    </div>



  </div>



  )
}

export default AgentCard