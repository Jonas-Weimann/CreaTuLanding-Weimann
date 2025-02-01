import Slider from "react-slick";
import { OfertaCard } from "./OfertaCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const OfertasSlider = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data
          .filter((oferta) => !oferta.ofertaDiaria)
          .map((oferta) => (
            <OfertaCard object={oferta} key={oferta.id} />
          ))}
      </Slider>
    </div>
  );
};
