import {CartWidget} from './CartWidget'

export const Navbar = () => {
  return (
    <header className='navbar'>
      <img src="./src/assets/images/logo.svg" alt="NUCLEO Technology" className='logoIcon'/>
      <div className="linksContainer">
        <a href="#">Inicio</a>
        <a href="#">Catálogo</a>
        <a href="#">Servicios</a>
        <a href="#">Nosotros</a>
        <a href="#">Contacto</a>
        <a href="#">Opiniones</a>
      </div>
      <CartWidget />
    </header>
  )
}
