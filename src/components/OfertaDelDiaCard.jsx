import React from 'react'
import { Button } from './Button'

export const OfertaDelDiaCard = ({name, oldPrice, price, reviews, description}) => {
    const starCount = Math.ceil(reviews)
    const filled = {backgroundColor:'#00ffff', border: '#00ffff 2px solid', color: 'none'}
    const empty = {backgroundColor:'transparent', border: '#00ffff 2px solid', color:'#00ffff'}
  
  return (
    <div className='info-container'>
        <h4>{name}</h4>
        <span className={`star star${starCount}`}></span>
        <p className='description'>{description}</p>
        <span className="old-price"><s>{oldPrice}</s></span>
        <span className="price">{price}</span>
        <div className='button-container'>
        <Button style={filled} className="filled"> Agregar al carrito </Button>
        <Button style={empty} className="empty">Más información</Button>
        </div>
    </div>
  )
}
