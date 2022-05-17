import React, { useState, useEffect } from 'react';

import './listings.scss'

import ListingsCardMap from './ListingsCardMap';
import {houseData} from '../../helpers/index'
import { marks } from '../../helpers/index';



import hpbg1 from '../../assets/hp-bg1.jpg'


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';







import { Pagination } from "@material-ui/lab";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import SearchBarListing from './SearchBarListing';
import PriceSlider from './PriceSlider';




const Listings = ({bgimage, title, price, addresstop, addressbot, bedrooms, bath, sqft, garage, details, neighborhood, listing}) => {


  const itemsPerPage = 4;
 
  const [noOfPages] = useState(
    Math.ceil(houseData.length / itemsPerPage)
  );


  const [ sliderMarks, setSliderMarks ] = useState(marks)
  

  const [ cardData, setCardData] = useState(houseData)

  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const [ selectedPrice, setSelectedPrice ] = useState([500000, 3500000])

  
  const [beds, setBeds] = useState('');

  const [baths, setBaths] = useState('');

  const [neighborhoods, setNeighborhoods] = useState('');


  const [searchIconActive, setSearchIconActive] = useState(null)

  const [page, setMyPage] = useState(1); 


  const handleChangePrice = (event) => {
    setSelectedPrice(event.target.value);
  };

  const bedHandleChange = (event) => {
    setBeds(event.target.value);
  };

  const bathHandleChange = (event) => {
    setBaths(event.target.value);
  };

  const neiHandleChange = (event) => {
    setNeighborhoods(event.target.value);
  };



  const handlePaginate = (event, p) => {
    setMyPage(p);
  }

 


  const applyFilters= () => {
    let updatedList = houseData;


    // Search Filter
     if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.address.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Bed Filter
    if (beds) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.bedrooms) >= parseInt(beds)
      );
    }

    // Bath Filter
    if (baths) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.bedrooms) >= parseInt(baths)
      );
    }

      // Neighborhood Filter
      if (neighborhoods) {
        updatedList = updatedList.filter(
          (item) => item.neighborhood === neighborhoods
        );
      }

     
      



    // Price Filter
    const minPrice=selectedPrice[0]
    const maxPrice=selectedPrice[1]

    updatedList=updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    )

    setCardData(updatedList)

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);

    }

  useEffect(() => {
    applyFilters();
  }, [selectedPrice, beds, baths, neighborhoods, searchInput]);






 
 





  function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
  }
  

 
  




  


  return (

   <div>
     <div className='listingsMainImg'>
     <img  src={hpbg1} alt="" />
     </div>
     
    <div className='filter__container'>
      <div className='filterTitle'>
      <h1><span>Our</span>
        Exclusive<br/> Properties
      </h1>
      </div>
      
      <div className='filter__inner'>

      <div className='filterTop'>
       
          <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
          <InputLabel id="demo-simple-select-standard-label">NEIGHBORHOODS</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={neighborhoods}
            onChange={neiHandleChange}
            label="neighborhoods"
          >
            <MenuItem value="">
              <em>All NEIGHBORHOODS</em>
            </MenuItem>
            <MenuItem value='oceanside'>Oceanside</MenuItem>
            <MenuItem value='rancho santa fe'>Rancho Santa Fe</MenuItem>
            <MenuItem value='del mar'>Del Mar</MenuItem>
            <MenuItem value='la jolla'>La Jolla</MenuItem>
            <MenuItem value='solana beach'>Solana Beach</MenuItem>
            <MenuItem value='cardiff'>Cardiff-by-the-sea</MenuItem>
            <MenuItem value='encinitas'>Encinitas</MenuItem>
            <MenuItem value='carlsbad'>Carlsbad</MenuItem>
            <MenuItem value='carmel valley'>Carmel Valley</MenuItem>
            <MenuItem value='point loma'>Point Loma</MenuItem>
            <MenuItem value='down town san diego'>Down Town San Diego</MenuItem>
            <MenuItem value='san diego'>San Diego</MenuItem>
          </Select>
          </FormControl>


          <PriceSlider 
            onChange={handleChangePrice}
            value={selectedPrice}
            marks={sliderMarks}
            valueLabelFormat={value =><div>{numFormatter(value)}</div>}

          />
      </div>


      <div className='filterBot'>
          <div className='bedBathWrap'>
            <Box sx={{ minWidth: 80 }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-standard-label">Rooms</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={beds}
              onChange={bedHandleChange}
              label="Beds"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1+</MenuItem>
              <MenuItem value={2}>2+</MenuItem>
              <MenuItem value={3}>3+</MenuItem>
              <MenuItem value={4}>4+</MenuItem>
              <MenuItem value={5}>5+</MenuItem>
              <MenuItem value={6}>6+</MenuItem>
              <MenuItem value={7}>7+</MenuItem>
              <MenuItem value={8}>8+</MenuItem>
              <MenuItem value={9}>9+</MenuItem>
              <MenuItem value={10}>10+</MenuItem>
            </Select>
            </FormControl>
            </Box>


            <Box sx={{ minWidth: 80 }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-standard-label">Baths</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={baths}
              onChange={bathHandleChange}
              label="Baths"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1+</MenuItem>
              <MenuItem value={2}>2+</MenuItem>
              <MenuItem value={3}>3+</MenuItem>
              <MenuItem value={4}>4+</MenuItem>
              <MenuItem value={5}>5+</MenuItem>
              <MenuItem value={6}>6+</MenuItem>
              <MenuItem value={7}>7+</MenuItem>
              <MenuItem value={8}>8+</MenuItem>
              <MenuItem value={9}>9+</MenuItem>
              <MenuItem value={10}>10+</MenuItem>
            </Select>
            </FormControl>
            </Box>
          </div>

          
           <SearchBarListing 
           value={searchInput}
           changeInput={(e) => setSearchInput(e.target.value)}
           onClicker={()=> setTimeout(()=>{ (setSearchIconActive(!searchIconActive))},0)}
           iconprop={searchIconActive}
           iconfalse={setSearchIconActive}
           />
        </div>









         
       
          </div>
    </div>
    {/* <button><FontAwesomeIcon icon={faGripHorizontal} /> </button> */}





   


    <div className='listings__container'>
      <ListingsCardMap
      data={cardData}
      page={page}
      itemsPerPage={itemsPerPage}

      bgimage={bgimage}
      title={title}
      price={price}
      addresstop={addresstop}
      addrssbot={addressbot}
      bedrooms={bedrooms}
      bath={bath}
      sqft={sqft}
      garage={garage}
      details={details}
      neighborhood={neighborhood}
      listing={listing}
      />
    </div>



    <Pagination 
    count={noOfPages}
    page={page} 
    
    onChange={handlePaginate}
    variant="outlined"
    shape="rounded"
    />
    </div>

  )
}

export default Listings