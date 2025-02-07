import { formatear } from "../utilities/formateo";
import { Button } from "@mui/material";
import { useCart } from "../contexts/CartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { capitalize } from "../utilities/capitalize";

export const SearchResultItem = ({ object }) => {
  const { nombre, imagen, precio, stock, id, categoria } = object;
  const { addToCart } = useCart();
  return (
    <div className="search-result-item">
      <div className="search-item-detail">
        <img src={imagen} alt={nombre} />
        <p>{object.nombre}</p>
        <span className="precio">{formatear(precio)}</span>
      </div>
      {stock ? (
        <div className="search-item-actions">
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
          <Button
            disabled={!stock}
            component={Link}
            to={`/NucleoTechnology/${capitalize(categoria)}/${id}`}
            variant="contained"
            color="secondary"
            size="medium"
            className="mas-info-btn search-detail-btn"
          >
            {stock ? "Ver más" : "Sin stock"}
          </Button>
        </div>
      ) : (
        <Button
          disabled={!stock}
          variant="contained"
          onClick={() => addToCart(object)}
          color="accent"
          size="medium"
          className="agregar-carrito-btn search-detail-btn"
          startIcon={<AddShoppingCartIcon />}
        >
          {stock ? "Agregar al carrito" : "Sin stock"}
        </Button>
      )}
    </div>
  );
};
