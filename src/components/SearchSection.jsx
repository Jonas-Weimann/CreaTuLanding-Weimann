import { SearchBar } from "./SearchBar";
import ItemListContainer from "./ItemListContainer";

export const SearchSection = ({
  data,
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
        data={data}
        page={page}
        filtrosActivos={filtrosActivos}
        onRemoveFilter={onRemoveFilter}
      />
    </section>
  );
};
