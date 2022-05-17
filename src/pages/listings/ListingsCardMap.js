import React from 'react'

import CardFeaturedPropertys from '../../components/featuredpropertys/CardFeaturedPropertys';



const ListingsCardMap = ({data, itemsPerPage, page, bgimage, title, price, addresstop, addressbot, bedrooms, bath, sqft, garage, details, neighborhood, listing }) => {
  
  
    

    return (
    <div>
         {data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item) => {
            return(


                <CardFeaturedPropertys
         
                bgimage={item.bgimage}
                title={item.title}
                price={item.price}
                addresstop={item.addresstop}
                addrssbot={item.addressbot}
                bedrooms={item.bedrooms}
                bath={item.bath}
                sqft={item.sqft}
                garage={item.garage}
                details={item.details}
                neighborhood={item.neighborhood}
                listing={item.listing}
                link={item.to}
                


                
                
                
                />




              // <Link to={item.to}>
              //   <div className='card__fpContainer' key={item.id}>
              //     <img src={item.bgimage} alt={item.title} />

              //       <div className='card__fpWrap'>
              //         <p>$ {item.price}</p>
              //         <p>{item.address}</p>
              //         <p>{item.addressbot}</p>
              //         <span> 
              //           <FontAwesomeIcon icon={faHome} className="bedrooms" />
              //           <p>{item.bedrooms}</p>
              //         </span>
              //         <span> 
              //           <FontAwesomeIcon icon={faBath} className="bath" />
              //           <p>{item.bath}</p>
              //         </span>
              //         <span> 
              //           <FontAwesomeIcon icon={faExpand} className="sqft" />
              //           <p>{item.sqft}</p>
              //         </span>
              //         <span> 
              //           <FontAwesomeIcon icon={faWarehouse} className="garage" />
              //           <p>{item.garage}</p>
              //         </span>
              //       </div>


              //     <div className='card__fpHoverWrap'>
              //       <p>$ {item.price}</p>
              //       <p>{item.address}</p>
              //       <p>{item.addressbot}</p>
              //         <span> 
              //             <FontAwesomeIcon icon={faHome} className="bedrooms" />
              //             <p>{item.bedrooms}</p>
              //         </span>
              //         <span> 
              //             <FontAwesomeIcon icon={faBath} className="bath" />
              //             <p>{item.bath}</p>
              //         </span>
              //         <span> 
              //             <FontAwesomeIcon icon={faExpand} className="sqft" />
              //             <p>{item.sqft}</p>
              //         </span>
              //         <span> 
              //             <FontAwesomeIcon icon={faWarehouse} className="garage" />
              //             <p>{item.garage}</p>
              //         </span>
              //         <h3>{item.details}</h3>

              //         <h2><span></span>View Details</h2> 
              //     </div>


              //   </div>
              //   </Link>
              );
            })} 


    </div>
  )
}

export default ListingsCardMap