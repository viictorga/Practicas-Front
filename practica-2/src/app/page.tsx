"use client"
import "./page.css";
import { useEffect, useState } from "react";
import { Country } from "@/types";
import { getAllCountries } from "@/lib/api/getAllCountries";
import CountryCard from "@/components/CountryCard";

const Home = () => {

  const [search,setSearch] = useState<string>("");
  const [inputName,setInputName] = useState<string>("")
  const [countries,setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [miError, setError] = useState<string>("");

  const borrarFiltros = () => {
    setInputName("");
    setSearch("");

  };

  useEffect(() => {

    getAllCountries()
      .then(res => {
        setCountries(res.data)
        setError("")
      })
      .catch((e) => {
        setError(`Error cargando los datos: ${e.message ? e.message: e}`)
      })
      .finally(()=>{
        setLoading(false);
      })

  }, [])

  return (
    <div className='mainContainer'>

      <h1 className="tituloPrincipal">
        Pagina de Paises
      </h1>

      <form className='buscador' onSubmit={(e)=>{
        e.preventDefault();
        setSearch(inputName);
      }}>

        <label>Nombre:</label>

        <input
          type="text"
          value={inputName}
          onChange={(e)=> setInputName(e.target.value)}
        />

        {search && (
          <button
            type="button"
            className="botonBorrarFiltros"
            onClick={borrarFiltros}
          >
            Borrar filtros
          </button>
        )}

      </form>

      <div className="botones">
        <button onClick={() => setSearch(inputName)}>
          Buscar
        </button>
      </div>

      {loading && <h1>Loading...</h1>}
      {miError && <h2>{miError}</h2>}

      <div className="characterContainer">

        {countries
          .filter((x) =>
            x.name.common.toLowerCase().includes(search.toLowerCase())
          )
          .map((e) => (
            <CountryCard key={e.name.common} countrie={e}/>
          ))
        }

      </div>

    </div>
  )
}

export default Home;