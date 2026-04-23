import { api } from "./api"




export const LoginGuapo = async( email:string, password: string) =>{
    const toke = document.cookie
    const respuesta = await api.post("/api/auth/login", {
        email,
        password
    }, {
        headers:{
            "x-nombre": "vICTOR",
            "Authorization": ""
        }
    })
    return respuesta.data.token;
}