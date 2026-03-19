"use client"
import { useRouter } from "next/navigation";
import "./productCard.css"
import { Product } from "@/types";


type Props= {
    product: Product
};


const ProductCard = ({product}:Props) =>{
    const countrieOficial = product;
    const router = useRouter();
    return (
    <div className="countryCard">

      <img
        className="flag"
        src={product.images[0]}
        alt={product.title}
      />

      <h2 className="countryName">
        {product.title.toUpperCase()}
      </h2>

      <p className="population">
        Categoria: {product.category}
      </p>
       <p className="price">
        Precio: {product.price}€
      </p>


      <button
        className="verMas"
        onClick={() => router.push(`/product/${product.id}`)}
      >
        Ver detalles
      </button>

    </div>
  );
}
export default ProductCard;