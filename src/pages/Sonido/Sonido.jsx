import { SideFilter } from "../../components/SideFilter";
import { SearchSection } from "../../components/SearchSection";
import { useState } from "react";

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

  return (
    <main className="product-page main">
      <h1>Sonido claro y potente para cada momento</h1>
      <div className="product-sections-container">
        <SideFilter
          filtrosActivos={filtrosActivos}
          onFilterChange={handleFilterChange}
          onRemoveFilter={handleRemoveFilter}
          options={dropdowns}
          page="Sonido"
        ></SideFilter>
        <SearchSection
          filtrosActivos={filtrosActivos}
          page="Sonido"
          onFilterChange={handleFilterChange}
          onRemoveFilter={handleRemoveFilter}
        />
      </div>
    </main>
  );
};
