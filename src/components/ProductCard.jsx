import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { formatear } from "../utilities/formateo";

export default function ProductCard({ object, page }) {
  const { addToCart } = useCart();
  const { nombre, id, calificacion, imagen, precio } = object;
  const starCount = Math.ceil(calificacion);

  return (
    <div className="card producto">
      <Link to={`/NucleoTechnology/${page}/${id}`}>
        <img src={imagen} alt={nombre} />
      </Link>
      <div className="review-fav-container">
        <span className={`star star${starCount}`}></span>
        <FavoriteBorderIcon
          color="pink"
          sx={{ width: "2rem", height: "2rem" }}
        />
      </div>
      <span className="product-name">
        <Link to={`/NucleoTechnology/${page}/${id}`}>{nombre}</Link>
      </span>
      <div className="prices-container">
        <span className="price">{formatear(precio)}</span>
      </div>
      <Button
        variant="contained"
        onClick={() => addToCart(object)}
        color="accent"
        size="medium"
        className="agregar-carrito-btn"
        startIcon={<AddShoppingCartIcon />}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}
