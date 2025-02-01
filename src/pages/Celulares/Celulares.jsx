import { SideFilter } from "../../components/SideFilter";
import { SearchSection } from "../../components/SearchSection";
import { useState } from "react";
import useFetch from "../../hooks/usefetch";
import { LoadingPage } from "../Loading/LoadingPage";
import { FetchError } from "../Error/FetchError";

export const Celulares = () => {
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
    tipo: ["Funda", "Soporte", "Protector"],
    marca: ["Samsung", "iPhone", "Motorola", "Xiaomi", "Huawei"],
    modelo: [
      "Edge 30 Fusion",
      "Galaxy A12",
      "Galaxy A32",
      "Galaxy A53",
      "Galaxy M12",
      "Galaxy M32",
      "Galaxy S21",
      "Galaxy S22",
      "Galaxy S23",
      "Galaxy Z Flip 3",
      "Galaxy Z Fold 4",
      "Mate 40",
      "Moto G60",
      "Moto G71",
      "Moto E8",
      "Moto E9",
      "Nova 10",
      "Nova 9",
      "P40",
      "P50",
      "Poco X5",
      "ROG Phone 5",
      "ROG Phone 6",
      "Redmi Note 10",
      "Redmi Note 11",
      "Redmi Note 12",
      "iPhone 11",
      "iPhone 12",
      "iPhone 13",
      "iPhone 14",
    ],
    material: [
      "Silicona",
      "Aluminio",
      "Metal",
      "Plástico",
      "Cuero",
      "Vidrio Templado",
    ],
    colores: [
      "azul",
      "negro",
      "Negro",
      "Transparente",
      "blanco",
      "gris",
      "dorado",
      "rojo",
      "verde",
      "amarillo",
      "marrón",
      "plateado",
    ],
  };

  const { data, loading, error } = useFetch("Celulares");

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <FetchError />
      ) : (
        <main className="product-page main">
          <h1>Todo lo que tu smartphone necesita, en un solo lugar</h1>
          <div className="product-sections-container">
            <SideFilter
              data={data}
              filtrosActivos={filtrosActivos}
              page="Celulares"
              onFilterChange={handleFilterChange}
              onRemoveFilter={handleRemoveFilter}
              options={dropdowns}
            ></SideFilter>
            <SearchSection
              data={data}
              filtrosActivos={filtrosActivos}
              page="Celulares"
              onFilterChange={handleFilterChange}
              onRemoveFilter={handleRemoveFilter}
            />
          </div>
        </main>
      )}
    </>
  );
};
