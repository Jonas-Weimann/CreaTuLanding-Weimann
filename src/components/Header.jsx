import {CartWidget} from './CartWidget'
import { SearchBar } from './SearchBar'
import { LogInOrRegisterWidget } from './LogInOrRegisterWidget'
import { WishlistWidget } from './WishlistWidget'
import { MenuDesplegable } from './MenuDesplegable'
import { Link } from 'react-router-dom'


export const Header = ({currentMode}) => {
  return (
      <header className='header'>
        <div className='searchContainer'>
        <Link to='/ofertas'>
          <img src="src/assets/images/logo.svg" alt="NUCLEO Technology" className='logoIcon'/>
        </Link>
        <SearchBar/>
        <div className="widgets">
        <LogInOrRegisterWidget/>
        <WishlistWidget/>
        <CartWidget />
        </div>
        </div>
        <nav className="linksContainer">
          <Link to="/ofertas" >Ofertas</Link>
          <Link to="/celulares">Celulares</Link>
          <Link to="/cargadores">Cargadores</Link>
          <Link to="/sonido" >Sonido</Link>
          <Link to="/iluminacion" >Iluminación</Link>
          <Link to="/servicios">Servicios</Link>
          <MenuDesplegable currentMode={currentMode}>Todos</MenuDesplegable>
        </nav>
      </header>
  )
}
