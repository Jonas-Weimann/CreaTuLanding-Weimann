import { SideFilter } from "../../components/SideFilter";
import { SearchSection } from "../../components/SearchSection";
import { useState } from "react";
import { LoadingPage } from "../Loading/LoadingPage";
import { FetchError } from "../Error/FetchError";
import useFetch from "../../hooks/usefetch";

export const Iluminacion = () => {
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
      "Lámpara de escritorio",
      "Lámpara de pie",
      "Lámpara colgante",
      "Luces LED",
      "Foco",
      "Tiras LED",
    ],
    colores: ["Blanco", "Amarillo", "RGB", "Cálido", "Frío"],
    uso: ["Interior", "Exterior", "Decorativo", "Funcional", "Ambiente"],
    potencia: ["5W", "10W", "30W", "45W"],
    marca: ["Philips", "Xiaomi", "Samsung", "Aukey"],
  };
  const { data, loading, error } = useFetch("Iluminacion");

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <FetchError />
      ) : (
        <main className="product-page main">
          <h1>Transforma tu ambiente con un simple toque de luz</h1>
          <div className="product-sections-container">
            <SideFilter
              data={data}
              filtrosActivos={filtrosActivos}
              onFilterChange={handleFilterChange}
              onRemoveFilter={handleRemoveFilter}
              page="Iluminacion"
              options={dropdowns}
            ></SideFilter>
            <SearchSection
              data={data}
              filtrosActivos={filtrosActivos}
              page="Iluminacion"
              onFilterChange={handleFilterChange}
              onRemoveFilter={handleRemoveFilter}
            />
          </div>
        </main>
      )}
    </>
  );
};
