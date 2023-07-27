import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<ItemListContainer category="Inicio" />} />

        {/* Botes Route */}
        <Route path="/category/botes" element={<ItemListContainer category="Botes" />} />

        {/* Apartamentos Route */}
        <Route path="/category/apartamentos" element={<ItemListContainer category="Apartamentos" />} />

        {/* Experiencias Route */}
        <Route path="/category/experiencias" element={<ItemListContainer category="Experiencias" />} />

        {/* Product Detail Route */}
        <Route path="/item/:itemId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;