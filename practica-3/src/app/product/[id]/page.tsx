"use client"
import "./page.css";
import DatosAdicionales from "@/app/components/datosAdicionales/datosAdicionales";
import ElementosDeLaInterfaz from "@/app/components/elementosDelaInterfaz/elementosDeLaInterfaz";
import { getProductById } from "@/lib/api/getProductById";
import { Product } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UnProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState<Product | null>(null)
  const [error, setError] = useState<string>("")
    const router = useRouter();
  useEffect(() => {
    getProductById(Number(id)).then((res) => {
      setProducto(res.data)
    }).catch((err) => {
      setError(err.message)
    })
  }, [])

  return (
    <div className="paginaProducto">

      {error && <p className="errorMsg">{error}</p>}

      {producto && (
        <div className="layoutProducto">
            <h1>{producto.title}</h1>

          {/* Columna izquierda: galería + volver */}
          <ElementosDeLaInterfaz producto={producto} />

          {/* Columna derecha: datos adicionales */}
          <DatosAdicionales producto={producto} />
            <div>
                <button className="botonVolver" onClick={() => router.back()}>
                ← Volver atrás
                </button>
            </div>
        </div>
      )}

    </div>
  )
}

export default UnProducto;