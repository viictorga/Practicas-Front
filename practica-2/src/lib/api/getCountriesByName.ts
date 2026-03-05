
import { api } from "./api";
import { Country } from "@/types";

export const getCountriesByName = async(name: string) =>{
    const respuesta = await api.get<Country[]>(`/name/${name}`);
    console.log(respuesta)
    return respuesta;
}