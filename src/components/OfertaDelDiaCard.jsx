import Button from '@mui/material/Button';

export const OfertaDelDiaCard = ({name, oldPrice, price, reviews, description}) => {
    const starCount = Math.ceil(reviews)
  
  return (
    <div className='info-container'>
        <h4>{name}</h4>
        <span className={`star star${starCount}`}></span>
        <p className='description'>{description}</p>
        <span className="old-price"><s>{oldPrice}</s></span>
        <span className="price">{price}</span>
        <div className='button-container'>
        <Button variant='contained' color="secondary"> Agregar al carrito </Button>
        <Button variant='outlined' color="secondary">Más información</Button>
        </div>
    </div>
  )
}
