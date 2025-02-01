import ProductCard from "./ProductCard";
import OrderSelector from "./OrderSelector";
import { useState, useEffect } from "react";
import { Chip } from "@mui/material";
import { Stack } from "@mui/material";

export default function ItemListContainer({
  filtrosActivos,
  onRemoveFilter,
  data,
  page,
}) {
  const [order, setOrder] = useState("Novedades");
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  function precioEntre(numero, minimo, maximo) {
    return numero >= minimo && numero <= maximo;
  }

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
  };

  const sortProducts = (products, order) => {
    return products.sort((a, b) => {
      if (order === "Mayor precio") {
        return b.precio - a.precio;
      } else if (order === "Menor precio") {
        return a.precio - b.precio;
      } else if (order === "Novedades") {
        const idA = parseInt(a.id.slice(-2), 10);
        const idB = parseInt(b.id.slice(-2), 10);
        return idB - idA;
      } else if (order === "Más valorados") {
        return b.calificacion - a.calificacion;
      }
    });
  };

  const sortedProducts = sortProducts([...productosFiltrados], order);
  useEffect(() => {
    const cumpleFiltros = (producto, filtros) => {
      return Object.keys(filtros).every((key) => {
        const filtro = filtros[key];
        const valueProducto = producto[key];
        if (filtro.length === 0) {
          return true;
        }

        if (key == "search") {
          return filtro.some((palabra) =>
            producto.nombre.toLowerCase().includes(palabra.toLowerCase())
          );
        }

        if (key == "precio") {
          return precioEntre(valueProducto, filtro[0], filtro[1]);
        }

        return Array.isArray(valueProducto)
          ? valueProducto.some((val) => filtro.includes(val))
          : filtro.includes(valueProducto || "Todos");
      });
    };

    const fetchFilteredProducts = async () => {
      const resultadosFiltrados = await data.filter((producto) =>
        cumpleFiltros(producto, filtrosActivos)
      );
      setProductosFiltrados(resultadosFiltrados);
    };

    fetchFilteredProducts();
  }, [filtrosActivos, data]);

  return (
    <Stack
      className="item-list-container"
      direction="row"
      flexWrap="wrap"
      gap="2rem"
      justifyContent="center"
    >
      <Stack
        marginY="2rem"
        direction="row"
        gap="1rem"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
        width="100%"
      >
        <Stack
          flexWrap="wrap"
          gap="1rem"
          justifyContent="center"
          alignItems="center"
          direction="row"
          className="applied-filters-container"
        >
          {Object.keys(filtrosActivos).map((key) =>
            filtrosActivos[key].map((filtro) => (
              <Chip
                key={"chip-" + filtro}
                label={filtro}
                sx={{
                  color: "pink.light",
                  fontFamily: "alata",
                  height: "2.5rem",
                  fontSize: "1rem",
                  borderRadius: "2rem",
                  bgcolor: " #ff20e1",
                }}
                onDelete={() => onRemoveFilter(key, filtro)}
              />
            ))
          )}
        </Stack>
        <OrderSelector
          order={order}
          onOrderChange={handleOrderChange}
          sx={{ display: "flex", alignItems: "center" }}
        />
      </Stack>
      {sortedProducts.map((producto) => (
        <ProductCard
          object={producto}
          key={producto.id}
          page={page}
        ></ProductCard>
      ))}
    </Stack>
  );
}
