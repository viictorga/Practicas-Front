
import { api } from "./api";
import {  Product } from "@/types";

export const getProductById = async(id: number) =>{
    console.log(id)
    const respuesta = await api.get(`https://dummyjson.com/products/${id}`);
    
    return respuesta;
}