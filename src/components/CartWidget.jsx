import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export const CartWidget = ({count= 0}) => {
  return (
    <div className="cart-widget">
      <ShoppingCartOutlinedIcon color='accent' sx={{width: '2rem', height:'2rem'}}/>
      <div className='cart-counter'>{count}</div>
    </div>
  )
}
