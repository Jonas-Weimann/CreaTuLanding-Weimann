import { OfertaCard } from "./OfertaCard";
import Blob3 from "../assets/images/BLOB3.png";
import Blob4 from "../assets/images/BLOB4.png";

export const AllOffersSection = ({ data }) => {
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
