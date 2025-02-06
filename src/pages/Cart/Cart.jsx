import { useCart } from "../../contexts/CartContext";
import { useUser } from "../../contexts/UserContext";
import { CartItem } from "../../components/CartItem";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { desformatear, formatear } from "../../utilities/formateo";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import Swal from "sweetalert2";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../../config/firebaseConfig";
import { fecha } from "../../utilities/fecha";
import { v4 as uuidv4 } from "uuid";

export const Cart = () => {
  const {
    productList,
    productCount,
    setProductList,
    setProductCount,
    cleanCart,
    getTotal,
    reduceStock,
    productsInStock,
  } = useCart();
  const { username, email, loggedIn, setCompras, compras } = useUser();
  const navigate = useNavigate();

  const subtotalValue = getTotal();
  const subtotal = formatear(subtotalValue);

  const envioValue = 999;
  const envio = formatear(envioValue);

  const ivaValue = subtotalValue * 0.21;
  const iva = formatear(ivaValue);

  const totalValue = subtotalValue + envioValue + ivaValue;
  const total = formatear(totalValue);

  const confirmarCompra = async () => {
    if (loggedIn && productsInStock()) {
      try {
        const id = uuidv4().slice(0, 8);
        const db = getFirestore(app);
        const compraRef = doc(db, "Compras", id);
        const compraData = {
          id: id,
          fecha: fecha(),
          comprador: {
            nombre: username,
            email: email,
          },
          productos: productList.map((prod) => ({
            id: prod.id,
            img: prod.imagen,
            nombre: prod.nombre,
            quantity: prod.quantity,
          })),
          total: desformatear(total),
          status: "Pendiente",
        };
        await setDoc(compraRef, compraData);
        setCompras([...compras, compraData]);
        reduceStock();
        setProductList([]);
        setProductCount(0);
        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "La orden se ha puesto exitosamente",
        }).then(
          navigate("/NucleoTechnology/MisCompras", {
            replace: true,
          })
        );
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `${err.message}`,
          text: "No se ha podido realizar la orden",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: `Error`,
        text: "Debes tener una cuenta para continuar con la compra",
      });
    }
  };

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
                  cancelButtonText: "Cancelar",
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
            <button className="btn" onClick={confirmarCompra}>
              CheckOut
            </button>
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
