import type { Character } from "../../types"
import { PersonajeCarta } from "../characterCard/characterCard"





export const Lista = ({personajes}: {personajes: Character[]})=>{
    return (
        <div className="characterListContainer">
           {personajes.map((e)=> <PersonajeCarta key={e.name} character={e}/>)} 
        </div>
    )
}