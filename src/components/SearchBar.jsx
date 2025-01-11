import React from 'react'

export const SearchBar = () => {
  return (
    <div className='searchbar'>
    <input className='searchbar-input' type="text" placeholder='Buscar en Núcleo...'/>
    <button className='searchbar-button'>
        <img src="./src/assets/images/search-icon.svg" alt="Search" />
    </button>
    </div>
  )
}
