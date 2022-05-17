import React, { useState, useEffect } from 'react'

import './heropropslide.scss'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroPropSlider = ({sliderimages}) => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
      
        setNav1(slider1);
        setNav2(slider2);
    
      });

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav',
        lazyLoad: true,
       




        
        
    };

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px',
        arrows: false,
        dots: false,
    };


   

  return (

<div className="slider-wrapper">
    <Slider {...settingsMain}
    asNavFor={nav2}
    ref={slider => (setSlider1(slider))}
    >

    {sliderimages.map((slide) =>
      <div className="slick-slide" key={slide.id}>
        <h2 className="slick-slide-title">{slide.title}</h2>
        <img className="slick-slide-image" src={slide.image}/>
        <label className="slick-slide-label">{slide.label}</label>
      </div>
      )}

    </Slider>
    <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {sliderimages.map((slide) =>

              <div className="slick-slide" key={slide.id}>
                <img className="slick-slide-image" src={slide.image} />
              </div>

            )}

          </Slider>
        </div>
    </div>



  )
}

export default HeroPropSlider