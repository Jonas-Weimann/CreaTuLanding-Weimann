import { SideFilter } from "../../components/SideFilter";
import { SearchSection } from "../../components/SearchSection";
import { useState } from "react";
import { LoadingPage } from "../Loading/LoadingPage";
import { FetchError } from "../Error/FetchError";
import useFetch from "../../hooks/usefetch";

export const Cargadores = () => {
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
      "Cargador de pared",
      "Cargador inalámbrico",
      "Power bank",
      "Cargador de auto",
    ],
    conector: ["USB-C", "Micro USB", "Conector universal"],
    compatibilidad: ["Apple", "Android", "Universal", "Notebook"],
    potencia: ["5W", "10W", "30W", "45W"],
    puertos: [1, 2, 3, 4],
  };
  const { data, loading, error } = useFetch("Cargadores");

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <FetchError />
      ) : (
        <main className="product-page main">
          <h1>Energía al instante para tus dispositivos</h1>
          <div className="product-sections-container">
            <SideFilter
              data={data}
              filtrosActivos={filtrosActivos}
              page="Cargadores"
              onFilterChange={handleFilterChange}
              onRemoveFilter={handleRemoveFilter}
              options={dropdowns}
            ></SideFilter>
            <SearchSection
              data={data}
              filtrosActivos={filtrosActivos}
              page="Cargadores"
              onFilterChange={handleFilterChange}
              onRemoveFilter={handleRemoveFilter}
            />
          </div>
        </main>
      )}
    </>
  );
};
