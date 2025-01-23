import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext';



export default function ProductCard({ src, reviews, precio, nombre, page, id }) {
    const {addToCart} = useCart()
    const starCount = Math.ceil(reviews)  


    return (
        <div className="card producto">
            <Link to={`/NucleoTechnology/${page}/${id}`}>
            <img src={src} alt={nombre} />
            </Link>
            <div className="review-fav-container">
            <span className={`star star${starCount}`}></span>
            <FavoriteBorderIcon color="pink" sx={{width: '2rem', height:'2rem'}}/>
            </div>
            <Link to={`/NucleoTechnology/${page}/${id}`}>
            <span className="product-name">{nombre}</span>
            </Link>
            <div className='prices-container'>
                <span className="price">{precio}</span>
            </div>
            <Button variant="contained" onClick={addToCart} color="accent" size="medium" className='agregar-carrito-btn' startIcon={<AddShoppingCartIcon />}>Agregar al carrito</Button>
        </div>
    )
}