import { SideFilter } from "../../components/SideFilter";
import { SearchSection } from "../../components/SearchSection";
import { useState } from "react";

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
      "Adaptador",
      "Power bank",
      "Cable de carga",
      "Cargador para auto",
    ],
    conector: ["USB-C", "Micro USB", "Conector universal"],
    compatibilidad: [
      "Apple",
      "Android",
      "Universal",
      "Laptop/Notebook",
      "Tabletas",
    ],
    potencia: ["5W", "10W", "30W", "45W"],
    puertos: [1, 2, 3, 4],
  };

  return (
    <main className="product-page main">
      <h1>Energía al instante para tus dispositivos</h1>
      <div className="product-sections-container">
        <SideFilter
          filtrosActivos={filtrosActivos}
          page="Cargadores"
          onFilterChange={handleFilterChange}
          onRemoveFilter={handleRemoveFilter}
          options={dropdowns}
        ></SideFilter>
        <SearchSection
          filtrosActivos={filtrosActivos}
          page="Cargadores"
          onFilterChange={handleFilterChange}
          onRemoveFilter={handleRemoveFilter}
        />
      </div>
    </main>
  );
};
