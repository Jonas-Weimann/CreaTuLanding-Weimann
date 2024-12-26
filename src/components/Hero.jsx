
import {OfertasSlider} from './OfertasSlider'


export const Hero = () => {

  return (
    <div className='hero'>
      <img src="src/assets/images/BANNER.png" alt="10% off en sonido" className='bannerOferta'/>
      <h2>Renueva tus dispositivos y ahorra con nuestras ofertas</h2>
      <OfertasSlider/>
    </div>
    )
}
