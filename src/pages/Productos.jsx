import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProducto from "../components/CardProducto/Index";

const bgColor = "#222"; 
const textColor = "#fff"; 
const accentColor = "#fbbf24";
const cardBg = "#333";
const cardHover = "#444";

const styles = {
  section: {
    background: bgColor,
    color: textColor,
    padding: "2rem 1rem",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Arial, sans-serif",
  },
  heading: {
    color: accentColor,
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
  },
};

const Productos = () => {
  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "https://dummyjson.com/products";
    if (idCategoria) {
      url = `https://dummyjson.com/products/category/${idCategoria}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProductos(data.products || data);
        setLoading(false);
      });
  }, [idCategoria]);

  if (loading) return <p style={{ color: accentColor, textAlign: "center" }}>Cargando productos...</p>;

  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>
        Productos {idCategoria ? `- ${idCategoria}` : ""}
      </h1>
      <div style={styles.container}>
        {productos.map(producto => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>
      <style>
        {`
        .card-producto {
          background: ${cardBg};
          color: ${textColor};
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          width: 220px;
          padding: 1.1rem 1rem 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: box-shadow 0.2s, background 0.2s;
          border: 1px solid #292929;
        }
        .card-producto:hover {
          background: ${cardHover};
          box-shadow: 0 4px 16px ${accentColor}33;
        }
        .card-producto img {
          width: 180px;
          height: 160px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1rem;
          background: #fff;
        }
        .card-producto-title {
          font-size: 1.1rem;
          font-weight: bold;
          margin: 0.4rem 0 0.2rem 0;
          color: ${accentColor};
          text-align: center;
        }
        .card-producto-price {
          color: ${accentColor};
          font-weight: bold;
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }
        .card-producto-category {
          color: #ccc;
          font-size: 0.95rem;
        }
        `}
      </style>
    </section>
  );
};

export default Productos;