import { OfertaCard } from './OfertaCard';
import Blob3 from "../assets/images/blob3.png";
import Blob4 from "../assets/images/blob4.png";
import useFetch from "../hooks/usefetch";
import CircularProgress from '@mui/material/CircularProgress';



export const AllOffersSection = () => {
  // Usamos la ruta correcta para acceder al archivo JSON en public
  const { data, loading, error } = useFetch("https://jonas-weimann.github.io/CreaTuLanding-Weimann/db/ofertas.json");

  if (loading) return <CircularProgress color="secondary"></CircularProgress>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data)
  return (
    <section className="all-offers-section">
      <img src={Blob3} alt="blob" className="blob3" />
      <img src={Blob4} alt="blob" className="blob4" />
      <h5>Descubre oportunidades únicas</h5>
      <div className="all-offers-container">
        {data.map((oferta) => (
          <OfertaCard
            key={oferta.id}
            name={oferta.nombre}
            src={oferta.imagen}
            oldPrice={oferta.precioOriginal}
            price={oferta.precio}
            offerType={oferta.tipo}
          />
        ))}
      </div>
    </section>
  );
};