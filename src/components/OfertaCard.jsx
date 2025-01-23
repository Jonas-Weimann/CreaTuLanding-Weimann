import Button from '@mui/material/Button';
import {Fab} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export const OfertaCard = ({id, name, oldPrice, price, src, offerType}) => {
  const {addToCart} = useCart()

  return (
    <div className='card oferta'>
      {offerType=='10% off' && <span className='offer-tag' style={{backgroundColor:'#770cb4', color:'white'}}>10% OFF</span>}      
      {offerType=='Hot sale' && <span className='offer-tag' style={{backgroundColor:'#eb33f1', color:'white'}}>HOT SALE</span>}      
      {offerType=='Best pick' && <span className='offer-tag' style={{backgroundColor:'#b43152', color:'white'}}>BEST PICK</span>}      
      <Fab onClick={addToCart} color="accent" aria-label="add-to-cart" className='add-to-cart-btn' >
        <AddShoppingCartIcon sx={{width: '1.5rem', height:'1.5rem'}}/>
      </Fab>
      <div className="img-container">
        <img src={src} alt={name} />
      </div>
      <span className="product-name">{name}</span>
      <div className='prices-container'>
        <span className="old-price"><s>{oldPrice}</s></span>
        <span className="price">{price}</span>
      </div>
      <Button component={Link} to={`/NucleoTechnology/Ofertas/${id}`} variant="contained" color="secondary" size="medium" className='mas-info-btn'>Ver más</Button>
    </div>
  )
}
