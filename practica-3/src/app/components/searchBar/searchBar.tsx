"use client"
import "./searchBar.css";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

const SearchBar = ({ search, setSearch }: Props) => {

  const borrarFiltros = () => {
    setSearch("");
  };

  return (
    <div className="searchBarWrapper">

      <div className="searchBarContainer">

        

        <label className="searchLabel" htmlFor="searchInput">
          Nombre:
        </label>

       
        <input
          id="searchInput"
          className="searchInput"
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        
        {search && (
          <button
            type="button"
            className="botonBorrarFiltros"
            onClick={borrarFiltros}
            aria-label="Borrar búsqueda"
          >
            ✕ Borrar filtros
          </button>
        )}

      </div>

    </div>
  );
};

export default SearchBar;