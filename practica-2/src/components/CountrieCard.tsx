"use client"
import { useRouter } from "next/navigation";
import "./page.css"
import { Country } from "@/types";


type Props= {
    countrie: Country
};


const CountrieCard = ({countrie}:Props) =>{
    const countrieOficial = countrie;
    const router = useRouter();
    return (
    <div className="countryCard">

      <img
        className="flag"
        src={countrie.flags.png}
        alt={countrie.name.common}
      />

      <h2 className="countryName">
        {countrie.name.common.toUpperCase()}
      </h2>

      <p className="population">
        Poblacion: {countrie.population}
      </p>

      <button
        className="verMas"
        onClick={() => router.push(`/country/${countrie.name.official}`)}
      >
        Ver mas
      </button>

    </div>
  );
}
export default CountrieCard;