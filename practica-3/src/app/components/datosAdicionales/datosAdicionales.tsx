"use client"

import { Product } from "@/types";

type Props = {
    producto: Product
}
const DatosAdicionales = ({producto} : Props) =>{
    return(
        <div>
            <p>Descripcion: {producto.description}</p>
            <p>Marca: {producto.brand}</p>
            <p>Valoracion: {producto.rating}</p>
            <p>Stock: {producto.stock}</p>
            <p>Dimensiones/Peso: {producto.dimensions.depth} hondo - {producto.dimensions.height} alto - {producto.dimensions.width} largo -------- {producto.weight}</p>
        </div>
    )
}

export default DatosAdicionales;