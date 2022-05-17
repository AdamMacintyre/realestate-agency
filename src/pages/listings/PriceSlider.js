import React from 'react'


import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';




const PriceSlider = ({value, onChange, valueLabelFormat, marks}) => {


 
  return (
    <div className='slider__container'>
    <Box sx={{ minWidth: 300, width: 300 }}>
      <Slider
        onChange={onChange}
        value={value}
        valueLabelDisplay="on"     
        getArialLabel="Custom marks"
        valueLabelFormat={valueLabelFormat}     
        min={0}
        max={5000000}
        marks={marks}
      />
      </Box>
    </div>
  )
}

export default PriceSlider