import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductoDetalle = () => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${idProducto}`)
      .then(res => res.json())
      .then(data => setProducto(data));
  }, [idProducto]);

  if (!producto) return <p>Cargando detalle...</p>;

  return (
    <section>
      <h1>{producto.title}</h1>
      <img src={producto.thumbnail} alt={producto.title} style={{width: "200px"}} />
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <p>Categoría: {producto.category}</p>
    </section>
  );
};

export default ProductoDetalle;