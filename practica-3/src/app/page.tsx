"use client"
import "./page.css";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import { getAllProducts } from "@/lib/api/getAllProducts";
import ProductCard from "./components/productCard/productCard";
import ResultProductos from "./components/cantidadDeResultados/resultProductos";



const Home = () => {

  const [search,setSearch] = useState<string>("");
  const [inputName,setInputName] = useState<string>("")
  const [products,setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [miError, setError] = useState<string>("");

  const borrarFiltros = () => {
    setInputName("");
    setSearch("");

  };

  useEffect(() => {

    getAllProducts()
      .then(res => {
        setProducts(res.data.products)
        setError("")
      })
      .catch((e) => {
        setError(`Error cargando los datos: ${e.message ? e.message: e}`)
      })
      .finally(()=>{
        setLoading(false);
      })

  }, [search])

  return (
    <div className='mainContainer'>

      <h1 className="tituloPrincipal">
        Pagina de Productos
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
        {<ResultProductos arrayProductos={products.filter((x) =>
            x.title.toLowerCase().includes(search.toLowerCase())
          )}/>}

      </form>

      <div className="botones">
        <button onClick={() => setSearch(inputName)}>
          Buscar
        </button>
      </div>

      {loading && <h1>Loading...</h1>}
      {miError && <h2>{miError}</h2>}

      <div className="characterContainer">

        {products.filter((x) =>
            x.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((e) => (
            <ProductCard key={e.title} product={e}/>
          ))
        }

      </div>

    </div>
  )
}

export default Home;