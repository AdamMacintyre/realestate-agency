import React from 'react'

import './bgcarousel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hpbg1 from '../../assets/hp-bg1.jpg'
import hpbg2 from '../../assets/hp-bg2.jpg'

const BackgroundCarousel = () => {

    const slidesData = [
        {
          id: 1,
          title: 'The Jason Barry Team',
          image:hpbg1,
        }, 
        {
          id: 2,
          title: 'excepturi consequatur est',
          label: 'Officia non provident dolor esse et neque.',
          image:hpbg2,
        },
      ]

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 600,
        dots: false,
        swipeToSlide: false,
        focusOnSelect: false,
        arrows: false,
        lazyLoad: true,
        swipe: false,
        slickPlay: true,
      };


  return (

        <Slider {...settings}>
          {slidesData.map((slide) =>
             <div className="heroSlider" key={slide.id} >
              {/* <h1 className="heroSlide__title">{slide.title}</h1> */}
              <img className="heroSlide__image" src={slide.image} /> 
              {/* <label className="slick-slide-label">{slide.label}</label> */}
            </div>
          )}
        </Slider>

  )
}

export default BackgroundCarousel