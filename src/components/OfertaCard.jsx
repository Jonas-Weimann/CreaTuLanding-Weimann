import React from 'react'
import { Button } from './Button'

export const OfertaCard = ({name, oldPrice, price, src}) => {
  return (
    <div className='card oferta'>
      <img src='src/assets/images/addToCart.svg' className='add-to-cart-button'/>
        <div className="img-container">
            <img src={src} alt={name} />
        </div>
        <span className="product-name">{name}</span>
        <div className='prices-container'>
          <span className="old-price"><s>{oldPrice}</s></span>
          <span className="price">{price}</span>
        </div>
        <Button>Ver más</Button>
    </div>
  )
}
