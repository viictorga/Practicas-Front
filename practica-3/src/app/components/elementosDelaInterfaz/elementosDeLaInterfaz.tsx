"use client"

import { Product } from "@/types"
import { useRouter } from "next/navigation"
import { useState } from "react"

type Props = {
    producto: Product
}
const ElementosDeLaInterfaz = ({producto}: Props) =>{
    const router = useRouter();
    const [numero, setNumero] = useState<number>(0)
    return(
        <div>
            <div className="imagenes">
               <>{
                    <img src={producto.images[numero]} alt={producto.title}></img>
                }
                <button onClick={(()=>setNumero(numero+ 1))}>→ </button> 
                <button onClick={(()=>setNumero(numero- 1))}>←</button> 
                </>
            </div>
            <div className="compra/info">
                <p>La disponibilidad es: {producto.stock}</p>
                <p>El precio es: {producto.price}</p>
            </div>
            <div>
                <button onClick={(()=> router.back())}>Volver Atras</button>
            </div>
            



        </div>
    )
}
export default ElementosDeLaInterfaz;