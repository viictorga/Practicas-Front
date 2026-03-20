"use client"
import "./page.css";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import { getAllProducts } from "@/lib/api/getAllProducts";
import ProductCard from "./components/productCard/productCard";
import ResultProductos from "./components/cantidadDeResultados/resultProductos";
import SearchBar from "./components/searchBar/searchBar";

const Home = () => {

  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [miError, setError] = useState<string>("");

  const productosFiltrados = products.filter((x) =>
    x.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getAllProducts()
      .then(res => {
        setProducts(res.data.products);
        setError("");
      })
      .catch((e) => {
        setError(`Error cargando los datos: ${e.message ? e.message : e}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className='mainContainer'>

      <h1 className="tituloPrincipal">
        Pagina de Productos
      </h1>

   
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ResultProductos arrayProductos={productosFiltrados} />

      {loading && <h1>Loading...</h1>}
      {miError && <h2>{miError}</h2>}

      <div className="characterContainer">
        {productosFiltrados.map((e) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>

    </div>
  );
};

export default Home;