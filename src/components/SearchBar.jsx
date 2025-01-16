import { useState } from "react"
import SearchIcon from "../assets/images/search-icon.svg"

export const SearchBar = ({page, filtrosActivos, onFilterChange}) => {
  const [inputText, setInputText] = useState("")

  const handleInputText = (event) =>{
    const value = event.target.value
    setInputText(value)
  }

  const handleSubmit = ()=>{
    onFilterChange({ ...filtrosActivos, search: [inputText] });
  }

  const handleKeyDown = (event)=>{
    if(event.key ==="Enter"){
      onFilterChange({ ...filtrosActivos, search: [inputText] });
    }
  }

  return (
    <div className='searchbar'>
    <input className='searchbar-input' type="text" placeholder={`Buscar en ${page}...`} value={inputText} onChange={handleInputText} onKeyDown={handleKeyDown}/>
    <button className='searchbar-button' onClick={handleSubmit} >
        <img src={SearchIcon} alt="Search" />
    </button>
    </div>
  )
}