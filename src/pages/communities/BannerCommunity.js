import React from 'react'
import './bannercom.scss'

function BannerCommunity(props) {
  return (
    <div className='comm__banner' style={{ backgroundImage: `url(${props.backgroundImage})` }}>

    </div>
  )
}

export default BannerCommunity