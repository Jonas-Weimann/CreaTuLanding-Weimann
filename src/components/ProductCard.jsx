import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";
import { formatear } from "../utilities/formateo";

export default function ProductCard({ object, page }) {
  const { addToCart } = useCart();
  const { addToFavs, removeFromFavs, loggedIn, favs } = useUser();
  const { nombre, id, calificacion, imagen, precio, stock } = object;
  const starCount = Math.ceil(calificacion);

  return (
    <div className="card producto">
      {stock ? (
        <Link to={`/NucleoTechnology/${page}/${id}`}>
          <img src={imagen} alt={nombre} />
        </Link>
      ) : (
        <img src={imagen} alt={nombre} className="sin-stock" />
      )}
      <div className="review-fav-container">
        <span className={`star star${starCount}`}></span>
        {loggedIn &&
          (favs.some((fav) => fav.id === object.id) ? (
            <FavoriteIcon
              cursor="pointer"
              onClick={() => removeFromFavs(object)}
              color="pink"
              sx={{ width: "2rem", height: "2rem" }}
            />
          ) : (
            <FavoriteBorderIcon
              cursor="pointer"
              onClick={() => addToFavs(object)}
              color="pink"
              sx={{ width: "2rem", height: "2rem" }}
            />
          ))}
      </div>
      <span className="product-name">
        {stock ? (
          <Link to={`/NucleoTechnology/${page}/${id}`}>{nombre}</Link>
        ) : (
          nombre
        )}
      </span>
      <div className="prices-container">
        <span className="price">{formatear(precio)}</span>
      </div>
      <Button
        disabled={!stock}
        variant="contained"
        onClick={() => addToCart(object)}
        color="accent"
        size="medium"
        className="agregar-carrito-btn"
        startIcon={<AddShoppingCartIcon />}
      >
        {stock ? "Agregar al carrito" : "Sin stock"}
      </Button>
    </div>
  );
}
