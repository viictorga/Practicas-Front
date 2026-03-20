"use client"
import "./page.css";
import { Product } from "@/types";

type Props = {
  producto: Product
}

const DatosAdicionales = ({ producto }: Props) => {
  return (
    <div className="datosAdicionales">
      <h3>Información del producto</h3>

      <div className="datoFila">
        <span className="datoLabel">Descripción</span>
        <span className="datoValor">{producto.description}</span>
      </div>

      <div className="datoFila">
        <span className="datoLabel">Marca</span>
        <span className="datoValor">{producto.brand}</span>
      </div>

      <div className="datoFila rating">
        <span className="datoLabel">Valoración</span>
        <span className="datoValor">{producto.rating} / 5</span>
      </div>

      <div className="datoFila stock">
        <span className="datoLabel">Stock</span>
        <span className="datoValor">{producto.stock} unidades</span>
      </div>

      <div className="datoFila">
        <span className="datoLabel">Dimensiones</span>
        <span className="datoValor">
          {producto.dimensions.width}cm ancho ·{" "}
          {producto.dimensions.height}cm alto ·{" "}
          {producto.dimensions.depth}cm fondo
        </span>
      </div>

      <div className="datoFila">
        <span className="datoLabel">Peso</span>
        <span className="datoValor">{producto.weight} g</span>
      </div>
    </div>
  )
}

export default DatosAdicionales;