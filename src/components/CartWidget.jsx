import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCart } from '../contexts/CartContext';


export const CartWidget = () => {
  const {productCount} = useCart()

  return (
    <div className="cart-widget">
      <ShoppingCartOutlinedIcon color='accent' sx={{width: '2rem', height:'2rem'}}/>
      <div className='cart-counter'>{productCount}</div>
    </div>
  )
}
