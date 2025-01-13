import SearchIcon from "../assets/images/search-icon.svg"

export const SearchBar = () => {
  return (
    <div className='searchbar'>
    <input className='searchbar-input' type="text" placeholder='Buscar en Núcleo...'/>
    <button className='searchbar-button'>
        <img src={SearchIcon} alt="Search" />
    </button>
    </div>
  )
}
