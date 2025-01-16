import {SearchBar} from "./SearchBar"
import ItemListContainer from "./ItemListContainer"

export const SearchSection = ({page, filtrosActivos, onFilterChange,  onRemoveFilter}) => {
  return (
    <section className="search-section">
      <SearchBar filtrosActivos={filtrosActivos} page="nucleo" onFilterChange={onFilterChange}></SearchBar>
      <ItemListContainer filtrosActivos={filtrosActivos} onRemoveFilter={onRemoveFilter} page={page}/>
    </section>

)
}
