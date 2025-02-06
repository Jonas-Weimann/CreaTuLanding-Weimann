import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { useUser } from "../../contexts/UserContext";
import { Error } from "../Error/Error";
export const Favoritos = () => {
  const { favs, loggedIn } = useUser();
  return loggedIn ? (
    <main className="favoritos-page main">
      {favs.length !== 0 ? (
        <>
          <h1>Mis Favoritos</h1>
          <div className="fav-container">
            {favs.map((fav) => {
              return (
                <ProductCard
                  key={fav.id}
                  object={fav}
                  page={fav.categoria}
                ></ProductCard>
              );
            })}
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h2>Aún no tienes favoritos...</h2>
          <HeartBrokenIcon className="empty-cart--icon" />
          <span>
            <Link to="/NucleoTechnology/Celulares">Agregar productos</Link>
          </span>
        </div>
      )}
    </main>
  ) : (
    <Error />
  );
};
