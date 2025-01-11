import {CartWidget} from './CartWidget'
import { SearchBar } from './SearchBar'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const Header = () => {
  return (
      <header className='header'>
        <div className='search-container'>
        <Link to='/ofertas'>
          <img src="src/assets/images/logo.svg" alt="NUCLEO Technology" className='logo-icon'/>
        </Link>
        <SearchBar/>
        <div className="widgets">
        <Link>
          <img src="src/assets/images/login-register.svg" alt="Iniciar Sesión / Registrarse" className='login-icon'/>
        </Link>
        <Link >
        <FavoriteBorderIcon color="pink" sx={{width: '2rem', height:'2rem'}}/>
        </Link>
        <Link>
          <CartWidget />
        </Link>        
        </div>
        </div>
        <nav className="links-container">
          <Link to="/ofertas" >Ofertas</Link>
          <Link to="/celulares">Celulares</Link>
          <Link to="/cargadores">Cargadores</Link>
          <Link to="/sonido" >Sonido</Link>
          <Link to="/iluminacion" >Iluminación</Link>
          <Link to="/servicios">Servicios</Link>
          <Link>Todos<img src="src/assets/images/dropdown-icon.svg" alt="dropdown" className='dropdown-icon'/></Link>
        </nav>
      </header>
  )
}
