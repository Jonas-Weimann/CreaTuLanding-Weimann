import { useCart } from "../../contexts/CartContext";
import { useUser } from "../../contexts/UserContext";
import { CartItem } from "../../components/CartItem";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { desformatear, formatear } from "../../utilities/formateo";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import Swal from "sweetalert2";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../../config/firebaseConfig";
import { fecha } from "../../utilities/fecha";
import { v4 as uuidv4 } from "uuid";
import { sendEmailVerification } from "firebase/auth";

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
  const { user, username, email, loggedIn, setCompras, compras, verified } =
    useUser();
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
    if (!loggedIn) {
      Swal.fire({
        icon: "error",
        title: `Error`,
        text: "Debes tener una cuenta para continuar con la compra",
      });
      return;
    }

    if (!productsInStock()) {
      Swal.fire({
        icon: "error",
        title: `Error`,
        text: "No hay suficientes productos en stock",
      });
      return;
    }

    if (!verified) {
      Swal.fire({
        icon: "error",
        title: `Error`,
        html: "<span>Tu cuenta aún no ha sido verificada. <br> Por favor, revisa tu casilla de correo.</span>",
        confirmButtonText: "Reenviar correo",
        confirmButtonColor: "#232323",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await sendEmailVerification(user);
            Swal.fire({
              icon: "success",
              title: "Correo enviado con éxito",
              text: "Vuelve a iniciar sesión una vez confirmada la verificación.",
              confirmButtonColor: "#232323",
            });
          } catch (error) {
            if (error === "auth/too-many-requests") {
              Swal.fire({
                icon: "error",
                title: `Error`,
                text: "Ya se ha enviado un correo recientemente. Por favor, revisa tu casilla de correo.",
              });
            }
          }
        }
      });
      return;
    }

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
      }).then(() => {
        navigate("/NucleoTechnology/MisCompras", {
          replace: true,
        });
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: `${err.message}`,
        text: "No se ha podido realizar la orden",
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
