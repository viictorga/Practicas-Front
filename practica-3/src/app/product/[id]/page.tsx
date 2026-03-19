"use client"

import DatosAdicionales from "@/app/components/datosAdicionales/datosAdicionales";
import ElementosDeLaInterfaz from "@/app/components/elementosDelaInterfaz/elementosDeLaInterfaz";
import { getProductById } from "@/lib/api/getProductById";
import { Product } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



const UnProducto = () =>{
    const { id } = useParams();
    const [producto, setProducto] = useState<Product | null>(null)
        const [error, setError] = useState<string>("")
    useEffect(()=>{
        getProductById(Number(id)).then((res)=>{
            setProducto(res.data)
            
        }).catch((err)=>{
            setError(err.message)
        })
    }, [])
    return(
        <div>
            {error && <p>{error}</p>}
            <div>
                {producto &&producto.title}
                {producto &&<ElementosDeLaInterfaz producto={producto!}/>}
            </div>
            <div>
                {producto &&<DatosAdicionales producto={producto!}/>}
            </div>
        </div>
    )
}
export default UnProducto;