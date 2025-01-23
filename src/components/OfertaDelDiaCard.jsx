import Button from '@mui/material/Button';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export const OfertaDelDiaCard = ({id, name, oldPrice, price, reviews, description}) => {
    const starCount = Math.ceil(reviews)
    const {addToCart} = useCart()
  return (
    <div className='info-container'>
        <h4>{name}</h4>
        <span className={`star star${starCount}`}></span>
        <p className='description'>{description}</p>
        <span className="old-price"><s>{oldPrice}</s></span>
        <span className="price">{price}</span>
        <div className='button-container'>
        <Button onClick={addToCart} variant='contained' color="accent"> Agregar al carrito </Button>
        <Button component={Link} to={`/NucleoTechnology/Ofertas/${id}`} variant='outlined' color="accent">Más información</Button>
        </div>
    </div>
  )
}
