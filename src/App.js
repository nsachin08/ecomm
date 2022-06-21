import "./App.css";
import { useState } from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import { Routes, Route } from "react-router-dom";
import Laptop from "./Laptop.js";
import Headphones from "./Headphones.js";
import Search from "./Search.js";
import "./Product.css";

function App() {
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <div className="App">
      <Header setsearchTerm={setsearchTerm} />
      <Routes>
        <Route path="/categories/Laptops" element={<Laptop />} />
        <Route path="/categories/Headphones" element={<Headphones />} />
        <Route path="/search/:q" element={<Search searchTerm={searchTerm} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
