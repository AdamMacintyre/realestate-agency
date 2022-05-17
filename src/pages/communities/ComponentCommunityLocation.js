import React from 'react'
import './componentcomm.scss'

function ComponentCommunityLocation({loctitle, mainimg,avgsqftprice, avgprice, highsale, salestodate, 
  mainbotdes, mainmiddledes, maintopdes, descimg1, descimg2}) {
  return (
    <div ClassName='ComponentComm__container'>
        <h1 className='compCommTitle'>{loctitle}</h1>

        <div className='mainImg'>
        <img src={mainimg} />
        </div>

      <div className='compCommListWrap'>
        <h3>2022 Q1</h3>
      <ul className='compCommList'>
        <li className='compCommListItem'>
            <strong>$ {avgsqftprice}</strong>
            <span>Avg Price Per Sq Ft</span>
        </li>

        <li className='compCommListItem'>
            <strong>$ {avgprice}</strong>
            <span>Median Price</span>
        </li>

        <li className='compCommListItem'>
            <strong>$ {highsale}</strong>
            <span>Highest Priced Sale</span>
        </li>

        <li className='compCommListItem'>
            <strong>{salestodate}</strong>
            <span>Sales Year to Date</span>
        </li>
        </ul>
        </div>

        <div className='compCommContents'>
          <div className='compContentsImg one'>
            <img src={descimg1} />


          </div>
          <div className='compMainDes'>
          <p>{maintopdes}</p>
          <p>{mainmiddledes}</p>
          <p>{mainbotdes}</p>
          </div>

          <div className='compContentsImg two'>
          <img src={descimg2} />


          </div>

        </div>
                                                            
                                                        



    </div>
  )
}

export default ComponentCommunityLocation