import { DailyOfferSection } from "../../components/DailyOfferSection";
import { SpecialOffersSection } from "../../components/SpecialOffersSection";
import { AllOffersSection } from "../../components/AllOffersSection";
import Blob1 from "../../assets/images/BLOB1.png";
import Blob2 from "../../assets/images/BLOB2.png";
import useFetch from "../../hooks/usefetch";
import { LoadingPage } from "../Loading/LoadingPage";
import { FetchError } from "../Error/FetchError";
export const Ofertas = () => {
  const { data, loading, error } = useFetch("Ofertas");
  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <FetchError />
      ) : (
        <main className="ofertas-page main">
          <img src={Blob1} alt="blob" className="blob1" />
          <SpecialOffersSection data={data} />
          <img src={Blob2} alt="blob" className="blob2" />
          <DailyOfferSection data={data} />
          <AllOffersSection data={data} />
        </main>
      )}
    </>
  );
};
