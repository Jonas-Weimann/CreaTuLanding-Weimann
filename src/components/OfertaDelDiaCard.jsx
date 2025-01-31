import Button from "@mui/material/Button";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { formatear } from "../utilities/formateo";

export const OfertaDelDiaCard = ({ object }) => {
  const { id, nombre, precioOriginal, precio, calificacion, descripcion } =
    object;
  const starCount = Math.ceil(calificacion);
  const { addToCart } = useCart();
  return (
    <div className="info-container">
      <h4>{nombre}</h4>
      <span className={`star star${starCount}`}></span>
      <p className="description">{descripcion}</p>
      <span className="old-price">
        <s>{formatear(precioOriginal)}</s>
      </span>
      <span className="price">{formatear(precio)}</span>
      <div className="button-container">
        <Button
          onClick={() => addToCart(object)}
          variant="contained"
          color="accent"
        >
          Agregar al carrito
        </Button>
        <Button
          component={Link}
          to={`/NucleoTechnology/Ofertas/${id}`}
          variant="outlined"
          color="accent"
        >
          Más información
        </Button>
      </div>
    </div>
  );
};
