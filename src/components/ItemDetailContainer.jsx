import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../hooks/usefetch";
import CircularProgress from "@mui/material/CircularProgress";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Button } from "@mui/material";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";
import { formatear } from "../utilities/formateo";
import { Error } from "../pages/Error/Error";

export const ItemDetailContainer = ({ page }) => {
  const { addToCart } = useCart();
  const { addToFavs, favs, removeFromFavs, loggedIn } = useUser();
  const { idProducto } = useParams();
  const { data, loading, error } = useFetch(page);
  if (loading) return <CircularProgress color="secondary" />;
  if (error) return <Error />;
  const producto = data.find((producto) => producto.id == idProducto);
  const { imagen, nombre, calificacion, descripcion, precio } = producto;
  return (
    <main className="main detail-page">
      <div className="producto-detail-container">
        <img src={imagen} alt={nombre} />
        <div className="producto-details">
          <div className="review-fav-container">
            <h1>{nombre}</h1>
            {loggedIn &&
              (favs.some((fav) => fav.id === producto.id) ? (
                <FavoriteIcon
                  cursor="pointer"
                  onClick={() => removeFromFavs(producto)}
                  color="pink"
                  sx={{ width: "2rem", height: "2rem" }}
                />
              ) : (
                <FavoriteBorderIcon
                  cursor="pointer"
                  onClick={() => addToFavs(producto)}
                  color="pink"
                  sx={{ width: "2rem", height: "2rem" }}
                />
              ))}
          </div>
          <span className={`star star${Math.ceil(calificacion)}`}></span>
          <p>{descripcion}</p>
          <span className="detail-precio">{formatear(precio)}</span>
          <div className="btn-container">
            <Button
              onClick={() => addToCart(producto)}
              variant="contained"
              color="accent"
              startIcon={<AddShoppingCartIcon />}
              sx={{
                borderRadius: "4rem",
                fontFamily: "deca",
                textAlign: "center",
                color: "dark",
                fontSize: "1.3rem",
                width: "20rem",
              }}
            >
              Agregar al carrito
            </Button>
            <Link to={`/NucleoTechnology/${page}`} className="volver-btn">
              Volver
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
