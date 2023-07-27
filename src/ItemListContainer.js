import React from 'react';
import { Link } from 'react-router-dom';
import yatch1 from './yate1.jpg';
import apto1 from './apto2.jpg';
import rapel from './rapel.jpg'


const ItemListContainer = ({ category }) => {
  // Sample product data for each category
  const productsByCategory = {
    botes: [
      {
        id: 1,
        name: 'Yate de lujo 1',
        image: yatch1,
        price: 500000,
        description: 'Yate de lujo para unas vacaciones inolvidables.',
      },
      {
        id: 2,
        name: 'Yate de lujo 2',
        image: yatch1,
        price: 500000,
        description: 'Yate de lujo para unas vacaciones inolvidables.',
      },
      {
        id: 3,
        name: 'Yate de lujo 3',
        image: yatch1,
        price: 500000,
        description: 'Yate de lujo para unas vacaciones inolvidables.',
      },
      // ... Other yates ...
    ],
    apartamentos: [
      {
        id: 1,
        name: 'Apartamento en la playa 1',
        image: apto1,
        price: 250000,
        description: 'Apartamento frente al mar con hermosas vistas.',
      },

      {
        id: 2,
        name: 'Apartamento en la playa 2',
        image: apto1,
        price: 250000,
        description: 'Apartamento frente al mar con hermosas vistas.',
      },

      {
        id: 3,
        name: 'Apartamento en la playa 3',
        image: apto1,
        price: 250000,
        description: 'Apartamento frente al mar con hermosas vistas.',
      },
      // ... Other apartamentos ...
    ],
    experiencias: [
      {
        id: 1,
        name: 'Experiencia de aventura 1',
        image: rapel,
        price: 150,
        description: 'Emocionante experiencia de aventura en la naturaleza.',
      },

      {
        id: 2,
        name: 'Experiencia de aventura 2',
        image: rapel,
        price: 150,
        description: 'Emocionante experiencia de aventura en la naturaleza.',
      },

      {
        id: 3,
        name: 'Experiencia de aventura 3',
        image: rapel,
        price: 150,
        description: 'Emocionante experiencia de aventura en la naturaleza.',
      },
      // ... Other experiencias ...
    ],
  };

  const products = productsByCategory[category.toLowerCase()];
  
  if (!products) {
    return <div>No products available for the selected category.</div>;
  }
  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          {/* Update the button with the Link component */}
          <Link to={`/item/${product.id}`} className="btn btn-primary">
            Ver Detalles
          </Link>
        </div>
      </div>
    ));
  };
  return (
    <div>
      <h2>{`Productos en la categoría "${category}"`}</h2>
      <div className="product-list">{renderProducts()}</div>
    </div>
  );
};

export default ItemListContainer;