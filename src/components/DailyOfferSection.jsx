import { OfertaDelDiaCard } from "./OfertaDelDiaCard";
import useFetch from "../hooks/usefetch";
import PopUpOffer from "../assets/images/popUpOffer.png";
import CircularProgress from "@mui/material/CircularProgress";

export const DailyOfferSection = () => {
  const { data, loading, error } = useFetch("Ofertas");

  if (loading) return <CircularProgress color="secondary"></CircularProgress>;
  if (error) return <p>Error: {error.message}</p>;

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
