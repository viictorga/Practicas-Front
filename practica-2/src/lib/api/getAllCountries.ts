
import { api } from "./api";
import { Country } from "@/types";

export const getAllCountries = async() =>{
    const respuesta = await api.get(`/all?fields=name,flags,population`);
    return respuesta;
}