import useFetch from "../hooks/usefetch"
import ProductCard from "./ProductCard"
import OrderSelector from "./OrderSelector"
import { useState, useEffect } from "react"
import { Chip } from "@mui/material"
import {Stack} from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';


export default function ItemListContainer ({filtrosActivos, onRemoveFilter, url, page}){
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const {data, loading, error} = useFetch(url)

  function precioEntre(numero, minimo, maximo) {
    return numero >= minimo && numero <= maximo;
  }

  useEffect(()=>{
    const cumpleFiltros = (producto, filtros)=>{
      return Object.keys(filtros).every(key=>{
        const filtro = filtros[key]
        const valueProducto = producto[key]
        if (filtro.length === 0) {
          return true
        }

        if(key == "search"){
          return filtro.some(palabra => producto.nombre.toLowerCase().includes(palabra.toLowerCase()))
        }

        if(key == "precioValue") {
          return precioEntre(valueProducto, filtro[0], filtro[1])
        }

        return Array.isArray(valueProducto)
        ? valueProducto.some(val => filtro.includes(val))
        : filtro.includes(valueProducto || "Todos")
      })
    }

    if(data){
      const resultadosFiltrados = data.filter(producto => cumpleFiltros(producto, filtrosActivos))
      setProductosFiltrados(resultadosFiltrados)
    }
  },[filtrosActivos, data])

  if(loading) return <CircularProgress color="secondary"/>
  if(error) return <p>Error: {error.message}</p>

  return (
    <Stack className="item-list-container" direction="row" flexWrap="wrap" gap="2rem" justifyContent="center">
        <Stack marginY="2rem" direction="row" gap="1rem" alignItems="center" justifyContent="space-between" spacing={1} width="100%">
          <Stack  flexWrap="wrap" gap="1rem" justifyContent="center" alignItems="center" direction="row" className="applied-filters-container">
          {Object.keys(filtrosActivos).map(key =>
            filtrosActivos[key].map((filtro)=>(
            <Chip 
              key={"chip-"+filtro} 
              label={filtro}
              sx={{ color: "pink.light", fontFamily:"alata", height:"2.5rem", fontSize:"1rem", borderRadius: "2rem",  bgcolor: " #ff20e1" }}
              onDelete={() => onRemoveFilter(key, filtro)}
              />
          )))}
          </Stack>
          <OrderSelector sx={{display: "flex", alignItems: "center"}}/>
        </Stack>
        {productosFiltrados.map((producto)=>(
          <ProductCard key={producto.id} page={page} id={producto.id} src={producto.imagen} reviews={producto.calificacion} precio={producto.precio} nombre={producto.nombre}>
          </ProductCard>
        ))}
    </Stack>
  )
}
