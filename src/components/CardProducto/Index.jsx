import React from "react";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      width: "220px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      textAlign: "center",
      background: "#fff"
    }}>
      <Link to={`/productos/${producto.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={producto.thumbnail}
          alt={producto.title}
          style={{ width: "180px", height: "160px", objectFit: "cover", borderRadius: "4px" }}
        />
        <h2 style={{ fontSize: "1rem", margin: "0.5rem 0", color: "#000" }}>{producto.title}</h2>
        <p style={{ color: "#555", fontWeight: "bold" }}>${producto.price}</p>
        <p style={{ fontSize: "0.9rem", color: "#888" }}>{producto.category}</p>
      </Link>
    </div>
  );
};

export default CardProducto;