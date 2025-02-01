import { SideFilter } from "../../components/SideFilter";
import { SearchSection } from "../../components/SearchSection";
import { useState } from "react";
import useFetch from "../../hooks/usefetch";
import { LoadingPage } from "../Loading/LoadingPage";
import { FetchError } from "../Error/FetchError";

export const Sonido = () => {
  const [filtrosActivos, setFiltrosActivos] = useState({});

  const handleFilterChange = (nuevosFiltros) => {
    setFiltrosActivos(nuevosFiltros);
  };

  const handleRemoveFilter = (key, filtro) => {
    setFiltrosActivos((prev) => {
      const nuevosFiltros = { ...prev };
      nuevosFiltros[key] = nuevosFiltros[key].filter((item) => item !== filtro);
      if (nuevosFiltros[key].length === 0) {
        delete nuevosFiltros[key];
      }
      return nuevosFiltros;
    });
  };
  const dropdowns = {
    tipo: [
      "Auriculares",
      "Auriculares inalámbricos",
      "Parlante portátil",
      "Soundbar",
      "Micrófono",
    ],
    conectividad: ["Bluetooth", "USB-C", "RCA"],
    uso: [
      "Gaming",
      "Trabajo",
      "Casual",
      "Eventos y fiestas",
      "Producción de audio",
    ],
    marca: ["JBL", "Sony", "Logitech", "Samsung"],
    caracteristicas: [
      "Resistente al agua",
      "Portátil",
      "Iluminación LED",
      "Control de volumen",
      "Manos libres",
    ],
  };

  const { data, loading, error } = useFetch("Sonido");

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <FetchError />
      ) : (
        <main className="product-page main">
          <h1>Sonido claro y potente para cada momento</h1>
          <div className="product-sections-container">
            <SideFilter
              data={data}
              filtrosActivos={filtrosActivos}
              onFilterChange={handleFilterChange}
              onRemoveFilter={handleRemoveFilter}
              options={dropdowns}
              page="Sonido"
            ></SideFilter>
            <SearchSection
              data={data}
              filtrosActivos={filtrosActivos}
              page="Sonido"
              onFilterChange={handleFilterChange}
              onRemoveFilter={handleRemoveFilter}
            />
          </div>
        </main>
      )}
    </>
  );
};
