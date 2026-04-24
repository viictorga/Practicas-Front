import { api } from "./api"




export const HomeGuapo = async() =>{
    const respuesta = await api.get("/api/home")
    return respuesta.data.posts;
}