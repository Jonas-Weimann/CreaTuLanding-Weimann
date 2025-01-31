import { useCart } from "../contexts/CartContext";
// import { useUser } from "../contexts/UserContext";
import { CartItem } from "./CartItem";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { formatear } from "../utilities/formateo";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import Swal from "sweetalert2";

export const Cart = () => {
  const { productList, productCount, cleanCart, getTotal } = useCart();

  const subtotalValue = getTotal();
  const subtotal = formatear(subtotalValue);

  const envioValue = 999;
  const envio = formatear(envioValue);

  const ivaValue = subtotalValue * 0.21;
  const iva = formatear(ivaValue);

  const totalValue = subtotalValue + envioValue + ivaValue;
  const total = formatear(totalValue);
  // const { username } = useUser();
  // const confirmarCompra = async ()=>{
  //   try{
  //     const comprasRef = collection(db, "Compras")
  //     const docRef = await addDoc(comprasRef, {
  //       comprador:{
  //         nombre: username
  //       }
  //     })
  //   }
  // }
  return (
    <div className="cart-page main">
      {productCount !== 0 ? (
        <>
          <div className="cart-item-container">
            <h1>CHECKOUT</h1>
            {productList.map((item) => (
              <CartItem object={item} key={item.nombre} />
            ))}
            <Button
              variant="contained"
              color="error"
              className="cart-delete-btn"
              onClick={() => {
                Swal.fire({
                  title: "Atención",
                  text: "Todos los items del carrito serán borrados",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#d33",
                  cancelButtonColor: "#656766",
                  confirmButtonText: "Continuar",
                }).then((result) => {
                  if (result.isConfirmed) {
                    cleanCart();
                  }
                });
              }}
            >
              Vaciar carrito
            </Button>
          </div>
          <div className="checkout-container">
            <h2>Resumen de orden</h2>
            <span>
              Subtotal <b>{subtotal}</b>
            </span>
            <span>
              IVA <b>{iva}</b>
            </span>
            <span>
              Envío <b>{envio}</b>
            </span>
            <hr />
            <span>
              Total <b>{total}</b>
            </span>
            <button className="btn">CheckOut</button>
            <button className="mp btn"></button>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h2>¡El carrito está vacío!</h2>
          <ProductionQuantityLimitsIcon className="empty-cart--icon" />
          <span>
            <Link to="/NucleoTechnology/Ofertas">Agregar productos</Link>
          </span>
        </div>
      )}
    </div>
  );
};
