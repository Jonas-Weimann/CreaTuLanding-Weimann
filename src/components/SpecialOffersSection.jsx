
import {OfertasSlider} from './OfertasSlider'
import BannerOferta from "../assets/images/BANNER.png"

export const SpecialOffersSection = () => {

  return (
    <div className='special-offers-section'>
      <img src={BannerOferta} alt="10% off en sonido" className='banner-oferta'/>
      <h2>Renueva tus dispositivos y ahorra con nuestras ofertas</h2>
      <OfertasSlider/>
    </div>
    )
}
