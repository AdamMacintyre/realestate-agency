import React from 'react'

import { Link } from 'react-router-dom';
import './communities.scss'

import rancho from '../../assets/communities/rancho.jpg'
import delmar from '../../assets/communities/delmar.jpg'
import lajolla from '../../assets/communities/lajolla.jpg'
import solana from '../../assets/communities/solana.jpg'
import cardiff from '../../assets/communities/cardiff.jpg'
import encinitas from '../../assets/communities/encinitas.jpg'
import carlsbad from '../../assets/communities/carlsbad.jpg'
import carmel from '../../assets/communities/carmel.jpg'
import loma from '../../assets/communities/loma.jpg'
import topimg from '../../assets/communities/comm-banner.jpg'



const Communities = () => {
  return (
    <div className='communities__container'>
      <div className='commTopImg'>
        <img src={topimg}  alt=""/>
      </div>
      <div className=''>


        
      </div>


      <div className='locationBoxWrap'>
        <div className='locationBox'>
        <Link to='/ranchosantafe'>
        <div className="commImgBox">
          <img  src={rancho} alt=""/>
        </div>
        <div className='commContent'>
          <h1>Rancho Santa Fe</h1>
          <p> Extending over 6,200 acres of rolling hills, citrus orchards, and eucalyptus trees, the historic city of Rancho Santa Fe offers a variety of extravagant luxury homes and private estates, a... 
          </p>
         </div>
        </Link> 
        </div>
    
        <div className='locationBox'>
        <Link to='/delmar'>
        <div className="commImgBox">
          <img src={delmar} alt=""/>
        </div>
        <div className='commContent'>
          <h1>Del Mar</h1>
          <p>Home to the Del Mar Races and the San Diego County Fair, the beach city of Del Mar offers beautiful seafronts, luxury resorts, unique shops and renowned restaurants. Located just 20 miles ...</p>
        </div>
        </Link>
        </div>
    
        <div className='locationBox'>
        <Link to='/lajolla'>
        <div className="commImgBox">
          <img src={lajolla} alt=""/>
         </div>
         <div className='commContent'>
          <h1>La Jolla</h1>
          <p>Known as “The Jewel” of San Diego, La Jolla is the hub of San Diego’s finest beaches, decadent dining, and upscale boutiques. Ideally situated on a seven-mile stretch along the coast... </p>
        </div>
        </Link> 
        </div>
    
        <div className='locationBox'>
        <Link to='/solanabeach'>
        <div className="commImgBox">
          <img src={solana} alt=""/>
         </div>
         <div className='commContent'>
          <h1>Solana Beach</h1>
          <p>With just 12,000 residents, the charming, seaside community of Solana Beach is the ideal destination  for those looking to enjoy beach-front living, eclectic shopping, and exceptional din...</p>
        </div>
        </Link> 
        </div>
    
        <div className='locationBox'>
        <Link to='/cardiffsea'>
        <div className="commImgBox">
          <img src={cardiff} alt=""/>
        </div>
         <div className='commContent'>
          <h1>Cardiff-by-the-sea</h1>
          <p>A beach community incorporated into the city of Encinitas, Cardiff is the home of laid-back sand and surf. This strip of coast is best identified through its various picturesque beaches.... </p>
        </div>
        </Link> 
        </div>
    
        <div className='locationBox'>
        <Link to='/encinitas'>
        <div className="commImgBox">
          <img src={encinitas} alt=""/>
        </div>
        <div className='commContent'>
          <h1>Encinitas</h1>
          <p>Located 25 miles north of downtown San Diego, this oceanfront town is known for its amenities of both land and sea. Not only is Encinitas acclaimed for its surfing conditions, it also bo...</p>
        </div>
        </Link> 
        </div>
    
        <div className='locationBox'>
        <Link to='/carlsbad'>
        <div className="commImgBox">
          <img src={carlsbad} alt=""/>
        </div>

        <div className='commContent'>
          <h1>Carlsbad</h1>
          <p>Carlsbad is an affluent seaside city occupying a 7-mile stretch of the Pacific coastline in northern San Diego County. Referred to as “The Village by the Sea” by locals, Carlsbad is a ... </p>
        </div>
        </Link> 
        </div>
    
        <div className='locationBox'>
        <Link to='/carmelvalley'>
        <div className="commImgBox">
          <img src={carmel} alt=""/>
        </div>
        <div className='commContent'>
          <h1>Carmel Valley</h1>
          <p>Centrally located in the heart of San Diego County, Carmel Valley offers valuable convenience for wherever you are heading - minutes to the coast, shopping centers, professional offices, a...</p>
        </div>
        </Link> 
        </div>
    
        <div className='locationBox'>
        <Link to='/pointloma'>
        <div className="commImgBox">
          <img src={loma} alt=""/>
          </div>
          <div className='commContent'>
          <h1>Point loma</h1>
          <p>Feel the ocean breeze and take in the rich history from “where California began.” The hilly peninsula of Point Loma offers panoramic views of downtown San Diego, the bay, the pacific...</p>
        </div>
        </Link> 
        </div>
       </div>
    
    
    </div>
  )
}

export default Communities