"use client"
import "./page.css";
import { Product } from "@/types"
import { useRouter } from "next/navigation"
import { useState } from "react"

type Props = {
  producto: Product
}

const ElementosDeLaInterfaz = ({ producto }: Props) => {
  const router = useRouter();
  const [numero, setNumero] = useState<number>(0)

  return (
    <div>

      {/* Galería */}
      <div className="imagenes">
        <img src={producto.images[numero]} alt={producto.title} />
        <div className="imagenesNav">
          <button
            onClick={() => { if (numero - 1 >= 0) setNumero(numero - 1) }}
            disabled={numero === 0}
          >
            ←
          </button>
          <button
            onClick={() => { if (numero + 1 < producto.images.length) setNumero(numero + 1) }}
            disabled={numero === producto.images.length - 1}
          >
            →
          </button>
        </div>
      </div>

    
      <div className="compraInfo" >
        <p className="precio">
          <span>Precio</span>
          <span>{producto.price}€</span>
        </p>
        <p>
          <span>Disponibilidad</span>
          <span>{producto.stock} unidades</span>
        </p>
      </div>

     
      

    </div>
  )
}

export default ElementosDeLaInterfaz;