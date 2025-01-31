import { OfertaCard } from "./OfertaCard";
import Blob3 from "../assets/images/blob3.png";
import Blob4 from "../assets/images/blob4.png";
import useFetch from "../hooks/usefetch";
import CircularProgress from "@mui/material/CircularProgress";

export const AllOffersSection = () => {
  const { data, loading, error } = useFetch("Ofertas");
  if (loading) return <CircularProgress color="secondary"></CircularProgress>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <section className="all-offers-section">
      <img src={Blob3} alt="blob" className="blob3" />
      <img src={Blob4} alt="blob" className="blob4" />
      <h5>Descubre oportunidades únicas</h5>
      <div className="all-offers-container">
        {data.map((oferta) => (
          <OfertaCard key={oferta.id} object={oferta} />
        ))}
      </div>
    </section>
  );
};
