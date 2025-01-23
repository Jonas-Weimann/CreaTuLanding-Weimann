import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/usefetch';
import AccordionDropdown from './AccordionDropdown'

export const SideFilter = ({filtrosActivos, url, options, onFilterChange, onRemoveFilter}) => {
  const keys = Object.keys(options)
  const [precioMinimo, setPrecioMinimo]= useState(0)
  const [precioMaximo, setPrecioMaximo]= useState(100000)
  const [value, setValue] = useState([0, precioMaximo])



  let {data, loading, error} = useFetch(url)

  useEffect(()=>{
    if(data){
      const listaDePrecios = data.map(producto =>((producto.precioValue)))
      setPrecioMaximo(Math.max(...listaDePrecios))
      setPrecioMinimo(Math.min(...listaDePrecios))
    }
    if(error){
      setPrecioMaximo(299999)
    }
  },[data, error])



  const handleDropdownFilterChange = (dropdownKey, selectedFilters) => {
    onFilterChange({ ...filtrosActivos, [dropdownKey]: selectedFilters })
    }
  


  const handleChange = (event, newValue) => {
    setValue(newValue)
    onFilterChange({...filtrosActivos, precioValue: newValue})
    }
  
  function valuetext(value) {
    return `$${value}`
  }


  return (
    <aside className='side-filters-container'>
        <h2>Filtros de búsqueda</h2>
        <h3>Precio</h3>
        <div className="price-slider">
        <Slider
        min={precioMinimo}
        max={precioMaximo}
        step={100}
        color="secondary"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        disabled={loading || precioMaximo === 0}
        />
        </div>
        <div className="accordions-container">
        {keys.map(key=>(
          <AccordionDropdown
            key={ "accordion-" + key} 
            title={key.toUpperCase()} 
            options={options[key]} 
            selected={filtrosActivos[key] || []}
            onFilterChange={(selectedFilters) =>
              handleDropdownFilterChange(key, selectedFilters)
            }
            onRemoveFilter={onRemoveFilter}
            ></AccordionDropdown>
        ))}
        </div>
    </aside>
  )
}
