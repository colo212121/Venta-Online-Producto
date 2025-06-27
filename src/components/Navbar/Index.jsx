import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.avif"; 

export default function Navbar() {
  const [categorias, setCategorias] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then(res => res.json())
      .then(data => setCategorias(data));
  }, []);

  return (
    <nav>
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/quienes-somos">Quienes Somos</NavLink>
      <div
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
        tabIndex={0}
      >
        <span>Productos</span>
        <ul style={{ display: menuOpen ? "block" : "none" }}>
          <li>
            <NavLink to="/productos">Ver todos</NavLink>
          </li>
          {categorias.map(cat => (
            <li key={cat.slug}>
              <NavLink to={`/productos/categoria/${cat.slug}`}>{cat.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  );
}

