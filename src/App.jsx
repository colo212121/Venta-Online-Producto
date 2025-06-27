import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="productos">
            <Route index element={<Productos />} />
            <Route path="categoria/:idCategoria" element={<Productos />} />
            <Route path=":idProducto" element={<ProductoDetalle />} />
          </Route>
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;