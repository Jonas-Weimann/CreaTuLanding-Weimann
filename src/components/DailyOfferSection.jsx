import { OfertaDelDiaCard } from "./OfertaDelDiaCard";
import PopUpOffer from "../assets/images/popUpOffer.png";

export const DailyOfferSection = ({ data }) => {
  const ofertaSeleccionada = data.find((oferta) => oferta.ofertaDiaria);

  return (
    <section className="daily-offer-section">
      <img src={PopUpOffer} />
      <div className="oferta-container">
        <h3>OFERTA DEL DIA</h3>
        <OfertaDelDiaCard object={ofertaSeleccionada} />
      </div>
    </section>
  );
};
