
export const CartWidget = ({count= 0}) => {
  return (
    <div className="cart-widget">
      <img src="src/assets/images/cart-icon.svg" alt="dropdown" className='dropdown-icon'/>  
      <div className='cart-counter'>{count}</div>
    </div>
  )
}
