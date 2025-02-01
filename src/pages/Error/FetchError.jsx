import { Link } from "react-router-dom";
import NotFound from "../../assets/images/not-found.png";

export const FetchError = ({ errorCode }) => {
  return (
    <main className="error-main">
      <img src={NotFound} />
      <div className="error-container">
        <h1>Error {errorCode}</h1>
        <p>La página no ha podido cargarse.</p>
        <Link to="/NucleoTechnology/">Volver al inicio</Link>
      </div>
    </main>
  );
};
