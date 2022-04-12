import "./App.css";
import Counter from "./Counter";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Shop from "./views/Shop";
import About from "./views/About";
import Product from "./views/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
