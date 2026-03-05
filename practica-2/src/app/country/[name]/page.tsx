"use client"

import { getCountriesByName } from "@/lib/api/getCountriesByName";
import { Country } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./page.css"

const PaisSolo = () => {

  const [pais, setPais] = useState<Country | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [miError, setError] = useState<string>("");

  const { name } = useParams();
  const router = useRouter();
  useEffect(() => {

    getCountriesByName(String(name))
      .then(res => {
        const aux = res.data[0]
        setPais(res.data[0]);
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
  <div className="container">

    {loading && <h1 className="loading">Loading...</h1>}
    {miError && <h2 className="error">{miError}</h2>}

    {pais && (
      <div className="card">

        <h1 className="title">
          {pais.name.official ? pais.name.official : pais.name.common}
        </h1>

        <p>Capital: {pais.capital}</p>
        <p>Subregion:{pais.subregion}</p>
        <p>Languages: {" ," + Object.values(pais.languages) }</p>
        <p>Currencies: {Object.values(pais.currencies).map(c => c.name).join(", ")}</p>

        <button className="btn" onClick={()=>router.back()}>HOME</button>

      </div>
    )}

  </div>
);
};

export default PaisSolo;