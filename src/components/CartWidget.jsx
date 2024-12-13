import { CartLogo } from './CartLogo'

export const CartWidget = () => {
  return (
    <div className="cart-widget">
      <CartLogo color="currentColor"/>
      <p className='cart-counter'>0</p>
    </div>
  )
}
