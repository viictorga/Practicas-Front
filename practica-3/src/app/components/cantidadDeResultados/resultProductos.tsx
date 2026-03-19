"use client"

import { Product } from "@/types"

type Props = {
    arrayProductos : Product[];
}
const ResultProductos = ({arrayProductos}: Props) =>{

    return(
        <>
            <p>La cantidad de productos es: {arrayProductos.length}</p>
        </>
    )

}
export default ResultProductos;