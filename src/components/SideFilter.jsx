import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/usefetch';

export const SideFilter = ({url}) => {
  const [precioMaximo, setPrecioMaximo]= useState(100)
  const [value, setValue] = useState([0, 100])
  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9]/g, ''));
  };

  let {data, loading, error} = useFetch(url)

  useEffect(()=>{
    if(data){
      const listaDePrecios = data.map(producto =>(parsePrice(producto.precio)))
      setPrecioMaximo(Math.max(...listaDePrecios))
    }
    if(error){
      setPrecioMaximo(299999)
    }
  },[data, error])


  function valuetext(value) {
    return `$${value}`
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }


  return (
    <aside>
        <h2>Filtros de búsqueda</h2>
        <h3>Precio</h3>
        <Slider
        min={0}
        max={precioMaximo}
        step={250}
        color="secondary"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        disabled={loading || precioMaximo === 0}
      />
    </aside>
  )
}
