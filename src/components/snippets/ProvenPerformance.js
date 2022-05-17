import React from 'react'
import './performance.scss'


const ProvenPerformance = () => {
  return (
    <div className='performance__container'>
      <div className='performance__inner'>
        <h1>PROVEN PERFORMANCE</h1>

        <div className='performance__icons'>

            <div className='performanceBox'><h2>#1</h2> <span>Team In San Diego<br/> Per WSJ</span> 
            </div>

            <div className='performanceBox'><h2>4.5+B</h2> <span>In Career Sales</span>
            </div>

            <div className='performanceBox'><h2>$500+M</h2> <span>Total Sales <br/> In 2021</span>
            </div>

            <div className='performanceBox'><h2>30+</h2> <span>Closed<br/>Transactions<br/>In 2021</span> 
            </div>

        </div>
        </div>
    </div>
  )
}

export default ProvenPerformance