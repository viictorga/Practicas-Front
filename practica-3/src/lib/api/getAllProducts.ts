
import { api } from "./api";
import {  Product } from "@/types";

export const getAllProducts = async() =>{
    const respuesta = await api.get(`/products`);
    return respuesta;
}