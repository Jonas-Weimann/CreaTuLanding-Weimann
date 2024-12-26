import { CartIcon } from './CartIcon'

export const CartWidget = ({count= 0}) => {
  return (
    <div className="cart-widget">
      <CartIcon color="#00FFFF"/>
      <div className='cart-counter'>{count}</div>
    </div>
  )
}
