import React from 'react';

const ItemListContainer = ({ category }) => {
  // Sample product data for each category
  const products = [
    {
      id: 1,
      name: 'YATE ARECA',
      image: './yate1.jpg',
      price: 100,
      description: 'Descripción del producto 1',
    },
    {
      id: 2,
      name: 'YATE PALMAR',
      image: 'path_to_image_2.jpg',
      price: 200,
      description: 'Descripción del producto 2',
    },
    {
      id: 3,
      name: 'YATE OCEAN',
      image: 'path_to_image_3.jpg',
      price: 300,
      description: 'Descripción del producto 3',
    },
  ];

  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Precio: ${product.price}</p>
        <p>{product.description}</p>
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