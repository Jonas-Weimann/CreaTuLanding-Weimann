
import {OfertasSlider} from './OfertasSlider'
import BannerOferta from "../assets/images/BANNER.png"

export const SpecialOffersSection = () => {

  return (
    <div className='special-offers-section'>
      <h1>Renueva tus dispositivos y ahorra con nuestras ofertas</h1>
      <img src={BannerOferta} alt="10% off en sonido" className='banner-oferta'/>
      <OfertasSlider/>
    </div>
    )
}
