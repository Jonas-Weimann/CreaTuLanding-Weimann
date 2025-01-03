import React from 'react'
import Slider from 'react-slick'
import useFetch from '../hooks/usefetch'
import { OfertaCard } from './OfertaCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const OfertasSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll:1,
        responsive: [
            {
            breakpoint:1450,
            settings: {
                slidesToShow:4,
                slidesToScroll:1
            }
            },
            {
            breakpoint:1224,
            settings: {
                slidesToShow:3,
                slidesToScroll:1
            }
            },
            {
            breakpoint:868,
            settings: {
                slidesToShow:2,
                slidesToScroll:1
            }
            }
        ]
      }
    
    const {data, loading, error} = useFetch('src/db/Ofertas.json')
    
    if(loading) return <p>Cargando</p>
    if(error) return <p>Error: {error.message}</p>

  return (
    <div className='slider-container'>
    <Slider {...settings}>
      {
        data
        .filter(oferta => !oferta.dailyOffer && oferta.category=='sonido')
        .map(oferta=>(
          <OfertaCard 
            key={oferta.id}
            name={oferta.name}
            src={oferta.img}
            oldPrice={oferta.originalPrice}
            price={oferta.discountedPrice}
          />
        ))
      }
    </Slider>
    </div>
)
}
