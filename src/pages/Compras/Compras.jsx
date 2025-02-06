import { Link } from "react-router-dom";
import { CompraItem } from "../../components/CompraItem";
import { useUser } from "../../contexts/UserContext";
import { Error } from "../Error/Error";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export const Compras = () => {
  const { compras, loggedIn } = useUser();
  console.log(compras);

  return loggedIn ? (
    <main className="compras-page main">
      {compras.length !== 0 ? (
        <>
          <h1>Mis compras</h1>
          <div className="compras-container">
            <div className="compras-headers">
              <span className="span">ID</span>
              <span className="span">Fecha</span>
              <span className="span">Hora</span>
              <span className="span">Detalle</span>
              <span className="span">Total</span>
              <span className="span">Estado</span>
            </div>
            <div className="compras-item-container">
              {compras.map((compra) => (
                <CompraItem key={compra.id} object={compra} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h2>Aún no tienes compras...</h2>
          <SentimentVeryDissatisfiedIcon className="empty-cart--icon"></SentimentVeryDissatisfiedIcon>
          <span>
            <Link to="/NucleoTechnology/Ofertas">Agregar productos</Link>
          </span>
        </div>
      )}
    </main>
  ) : (
    <Error />
  );
};
