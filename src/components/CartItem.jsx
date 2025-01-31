import { useCart } from "../contexts/CartContext";
import { formatear } from "../utilities/formateo";

export const CartItem = ({ object }) => {
  const { addToCart, removeFromCart } = useCart();
  const { imagen, nombre, precio, quantity } = object;
  const subtotal = formatear(precio * quantity);
  return (
    <div className="cart-item">
      <img src={imagen} alt={nombre} />
      <div className="cart-item--info">
        <span>{nombre}</span>
        <span>{formatear(precio)} x item</span>
      </div>
      <div className="cart-item--counter-container">
        <div className="cart-item--counter">
          <button onClick={() => removeFromCart(object)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => addToCart(object)}>+</button>
        </div>
        <span className="cart-item--subtotal">{subtotal}</span>
      </div>
    </div>
  );
};
