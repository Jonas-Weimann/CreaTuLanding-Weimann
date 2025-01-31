import { SearchBar } from "./SearchBar";
import ItemListContainer from "./ItemListContainer";

export const SearchSection = ({
  page,
  filtrosActivos,
  onFilterChange,
  onRemoveFilter,
}) => {
  return (
    <section className="search-section">
      <SearchBar
        page={page}
        filtrosActivos={filtrosActivos}
        onFilterChange={onFilterChange}
      ></SearchBar>
      <ItemListContainer
        page={page}
        filtrosActivos={filtrosActivos}
        onRemoveFilter={onRemoveFilter}
      />
    </section>
  );
};
