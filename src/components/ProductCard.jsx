import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function ProductCard({ src, reviews, precio, nombre }) {
    const starCount = Math.ceil(reviews)
  
    return (
        <div className="card producto">
            <img src={src} alt={nombre} />
            <div className="review-fav-container">
            <span className={`star star${starCount}`}></span>
            <FavoriteBorderIcon color="pink" sx={{width: '2rem', height:'2rem'}}/>
            </div>
            <span className="product-name">{nombre}</span>
            <div className='prices-container'>
                <span className="price">{precio}</span>
            </div>
            <Button variant="contained" color="accent" size="medium" className='añadir-carrito-btn' startIcon={<AddShoppingCartIcon />}>Agregar al carrito</Button>
        </div>
    )
}