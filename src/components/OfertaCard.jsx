import Button from "@mui/material/Button";
import { Fab } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { formatear } from "../utilities/formateo";

export const OfertaCard = ({ object }) => {
  const { addToCart } = useCart();
  const { id, nombre, precioOriginal, precio, imagen, tipo, stock } = object;
  return (
    <div className="card oferta">
      {tipo == "10% off" && (
        <span
          className="offer-tag"
          style={{ backgroundColor: "#770cb4", color: "white" }}
        >
          10% OFF
        </span>
      )}
      {tipo == "Hot sale" && (
        <span
          className="offer-tag"
          style={{ backgroundColor: "#eb33f1", color: "white" }}
        >
          HOT SALE
        </span>
      )}
      {tipo == "Best pick" && (
        <span
          className="offer-tag"
          style={{ backgroundColor: "#b43152", color: "white" }}
        >
          BEST PICK
        </span>
      )}
      <Fab
        disabled={!stock}
        onClick={() => addToCart(object)}
        color="accent"
        aria-label="add-to-cart"
        className="add-to-cart-btn"
      >
        <AddShoppingCartIcon sx={{ width: "1.5rem", height: "1.5rem" }} />
      </Fab>
      <div className={stock ? "img-container" : "img-container sin-stock"}>
        {stock ? (
          <Link to={`/NucleoTechnology/Ofertas/${id}`}>
            <img src={imagen} alt={nombre} />
          </Link>
        ) : (
          <img src={imagen} alt={nombre} />
        )}
      </div>
      <span className="product-name">
        {stock ? (
          <Link to={`/NucleoTechnology/Ofertas/${id}`}>{nombre}</Link>
        ) : (
          nombre
        )}
      </span>
      <div className="prices-container">
        <span className="old-price">
          <s>{formatear(precioOriginal)}</s>
        </span>
        <span className="price">{formatear(precio)}</span>
      </div>
      <Button
        disabled={!stock}
        component={Link}
        to={`/NucleoTechnology/Ofertas/${id}`}
        variant="contained"
        color="secondary"
        size="medium"
        className="mas-info-btn"
      >
        {stock ? "Ver más" : "Sin stock"}
      </Button>
    </div>
  );
};
