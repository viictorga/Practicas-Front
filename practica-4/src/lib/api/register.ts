import { api } from "./api"




export const RegisterGuapo = async(username: string, email:string, password: string) =>{
    const respuesta = await api.post("/api/auth/register", {
        username,
        email,
        password
    })
    return respuesta.data.token;
}