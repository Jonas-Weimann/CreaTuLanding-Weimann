import { Chip } from "@mui/material";
import { formatear } from "../utilities/formateo";

const ProductListItem = ({ object }) => {
  return (
    <div className="product-list-item">
      <img src={object.img} alt={object.nombre} />
      <p>{object.nombre}</p>
      <p>({object.quantity})</p>
    </div>
  );
};

export const CompraItem = ({ object }) => {
  const { fecha, productos, status, total, id } = object;

  return (
    <div className="compra-item">
      <span className="span">{id}</span>
      <span className="span">{fecha.slice(0, 10)}</span>
      <span className="span">{fecha.slice(11, 16)}</span>
      <div className="product-list-container">
        {productos.map((prod) => (
          <ProductListItem key={prod.id} object={prod} />
        ))}
      </div>
      <span className="span">{formatear(total)}</span>
      <Chip
        label={status}
        sx={{
          color: "#000",
          height: "",
          fontFamily: "alata",
          fontSize: "1rem",
          borderRadius: "2rem",
          bgcolor: "rgb(233, 255, 32)",
          width: "12%",
          padding: "1rem 0",
        }}
      />
    </div>
  );
};
