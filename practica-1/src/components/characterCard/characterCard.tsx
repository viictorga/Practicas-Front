import type { Character } from "../../types"
import "./characterCard.css"



export const PersonajeCarta = (params: { name?:string, character?: Character}) =>{

    return(
        <div className="characterContainer">
            <h1 className="nombre">{params.character!.name}</h1>
            <p>Genero: {params.character!.gender} </p>
            <p>Año de nacimiento: {params.character!.birth_year} </p>

        </div>
    )
}